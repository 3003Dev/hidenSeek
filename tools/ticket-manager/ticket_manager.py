"""
Dbs Ticket Manager
Application de gestion des tickets avec interface moderne sombre
"""

import os
import sys
from datetime import datetime
from typing import Optional, List, Dict, Any
import threading
import customtkinter as ctk
from tkinter import messagebox
from dotenv import load_dotenv
from supabase import create_client, Client

# Charger les variables d'environnement
load_dotenv()

# Configuration Supabase
SUPABASE_URL = os.getenv("SUPABASE_URL", "")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_KEY", "")
ADMIN_USER_ID = os.getenv("ADMIN_USER_ID", "")

# Theme Dbs
COLORS = {
    "bg_dark": "#0a0a0a",
    "bg_card": "#111111",
    "bg_input": "#1a1a1a",
    "accent": "#10b981",  # Vert Dbs
    "accent_hover": "#059669",
    "accent_dark": "#064e3b",
    "text_primary": "#ffffff",
    "text_secondary": "#9ca3af",
    "text_muted": "#6b7280",
    "border": "#2d2d2d",
    "error": "#ef4444",
    "warning": "#f59e0b",
    "success": "#10b981",
    "info": "#3b82f6",
    # Priorities
    "priority_low": "#6b7280",
    "priority_normal": "#3b82f6",
    "priority_high": "#f59e0b",
    "priority_urgent": "#ef4444",
    # Status
    "status_open": "#10b981",
    "status_pending": "#f59e0b",
    "status_in_progress": "#3b82f6",
    "status_resolved": "#8b5cf6",
    "status_closed": "#6b7280",
}


class SupabaseClient:
    """Client Supabase pour la gestion des tickets"""

    def __init__(self):
        self.client: Optional[Client] = None
        self.connected = False

    def connect(self) -> bool:
        """Connecter a Supabase"""
        try:
            if not SUPABASE_URL or not SUPABASE_KEY:
                return False
            self.client = create_client(SUPABASE_URL, SUPABASE_KEY)
            self.connected = True
            return True
        except Exception as e:
            print(f"Erreur connexion Supabase: {e}")
            return False

    def get_tickets(self, status_filter: str = "all") -> List[Dict]:
        """Recuperer tous les tickets"""
        if not self.client:
            return []
        try:
            # Simple query sans join - on recupere les tickets directement
            query = self.client.table("tickets").select("*").order("created_at", desc=True)

            if status_filter != "all":
                query = query.eq("status", status_filter)

            response = query.execute()
            tickets = response.data if response.data else []

            # Enrichir avec les emails des users si possible
            for ticket in tickets:
                user_id = ticket.get("user_id")
                if user_id:
                    try:
                        profile = self.client.table("profiles").select("email, username").eq("id", user_id).single().execute()
                        if profile.data:
                            ticket["user_email"] = profile.data.get("email", "")
                            ticket["user_username"] = profile.data.get("username", "")
                    except:
                        ticket["user_email"] = user_id[:8] + "..."
                        ticket["user_username"] = ""

            return tickets
        except Exception as e:
            print(f"Erreur recuperation tickets: {e}")
            return []

    def get_ticket_messages(self, ticket_id: str) -> List[Dict]:
        """Recuperer les messages d'un ticket"""
        if not self.client:
            return []
        try:
            # Simple query sans join
            response = self.client.table("ticket_messages").select(
                "*"
            ).eq("ticket_id", ticket_id).order("created_at", desc=False).execute()

            messages = response.data if response.data else []

            # Enrichir avec les infos user
            for msg in messages:
                user_id = msg.get("user_id")
                if user_id:
                    try:
                        profile = self.client.table("profiles").select("email, username").eq("id", user_id).single().execute()
                        if profile.data:
                            msg["user_email"] = profile.data.get("email", "")
                    except:
                        msg["user_email"] = user_id[:8] + "..."

            return messages
        except Exception as e:
            print(f"Erreur recuperation messages: {e}")
            return []

    def reply_ticket(self, ticket_id: str, message: str) -> bool:
        """Repondre a un ticket"""
        if not self.client or not ADMIN_USER_ID:
            return False
        try:
            self.client.table("ticket_messages").insert({
                "ticket_id": ticket_id,
                "user_id": ADMIN_USER_ID,
                "message": message,
                "is_admin_reply": True
            }).execute()
            return True
        except Exception as e:
            print(f"Erreur envoi reponse: {e}")
            return False

    def update_ticket_status(self, ticket_id: str, status: str) -> bool:
        """Mettre a jour le statut d'un ticket"""
        if not self.client:
            return False
        try:
            data = {"status": status}
            if status == "closed":
                data["closed_at"] = datetime.now().isoformat()
                data["closed_by"] = ADMIN_USER_ID
            self.client.table("tickets").update(data).eq("id", ticket_id).execute()
            return True
        except Exception as e:
            print(f"Erreur mise a jour statut: {e}")
            return False

    def update_ticket_priority(self, ticket_id: str, priority: str) -> bool:
        """Mettre a jour la priorite d'un ticket"""
        if not self.client:
            return False
        try:
            self.client.table("tickets").update({
                "priority": priority
            }).eq("id", ticket_id).execute()
            return True
        except Exception as e:
            print(f"Erreur mise a jour priorite: {e}")
            return False

    def delete_ticket(self, ticket_id: str) -> bool:
        """Supprimer un ticket"""
        if not self.client:
            return False
        try:
            self.client.table("tickets").delete().eq("id", ticket_id).execute()
            return True
        except Exception as e:
            print(f"Erreur suppression ticket: {e}")
            return False

    def get_stats(self) -> Dict:
        """Recuperer les statistiques - sans fonction RPC"""
        if not self.client:
            return {}
        try:
            # Calculer les stats manuellement
            response = self.client.table("tickets").select("status, priority, created_at").execute()
            tickets = response.data if response.data else []

            today = datetime.now().date()
            stats = {
                "total_tickets": len(tickets),
                "open_tickets": 0,
                "pending_tickets": 0,
                "in_progress_tickets": 0,
                "resolved_tickets": 0,
                "closed_tickets": 0,
                "urgent_tickets": 0,
                "tickets_today": 0
            }

            for t in tickets:
                status = t.get("status", "")
                priority = t.get("priority", "")
                created = t.get("created_at", "")

                if status == "open":
                    stats["open_tickets"] += 1
                elif status == "pending":
                    stats["pending_tickets"] += 1
                elif status == "in_progress":
                    stats["in_progress_tickets"] += 1
                elif status == "resolved":
                    stats["resolved_tickets"] += 1
                elif status == "closed":
                    stats["closed_tickets"] += 1

                if priority == "urgent" and status not in ("resolved", "closed"):
                    stats["urgent_tickets"] += 1

                if created:
                    try:
                        dt = datetime.fromisoformat(created.replace("Z", "+00:00"))
                        if dt.date() == today:
                            stats["tickets_today"] += 1
                    except:
                        pass

            return stats
        except Exception as e:
            print(f"Erreur stats: {e}")
            return {}


class TicketCard(ctk.CTkFrame):
    """Widget carte pour afficher un ticket"""

    def __init__(self, master, ticket: Dict, on_click: callable, **kwargs):
        super().__init__(master, fg_color=COLORS["bg_card"], corner_radius=8, **kwargs)
        self.ticket = ticket
        self.on_click = on_click

        # Container principal
        self.grid_columnconfigure(0, weight=1)

        # Header avec sujet et priorite
        header = ctk.CTkFrame(self, fg_color="transparent")
        header.grid(row=0, column=0, sticky="ew", padx=12, pady=(12, 6))
        header.grid_columnconfigure(0, weight=1)

        # Sujet
        subject = ctk.CTkLabel(
            header,
            text=ticket.get("subject", "Sans sujet")[:50],
            font=ctk.CTkFont(size=14, weight="bold"),
            text_color=COLORS["text_primary"],
            anchor="w"
        )
        subject.grid(row=0, column=0, sticky="w")

        # Badge priorite
        priority = ticket.get("priority", "normal") or "normal"
        priority_colors = {
            "low": COLORS["priority_low"],
            "normal": COLORS["priority_normal"],
            "high": COLORS["priority_high"],
            "urgent": COLORS["priority_urgent"]
        }
        priority_badge = ctk.CTkLabel(
            header,
            text=priority.upper(),
            font=ctk.CTkFont(size=10, weight="bold"),
            text_color="#ffffff",
            fg_color=priority_colors.get(priority, COLORS["priority_normal"]),
            corner_radius=4,
            padx=8,
            pady=2
        )
        priority_badge.grid(row=0, column=1, sticky="e", padx=(8, 0))

        # Info utilisateur
        user_email = ticket.get("user_email", ticket.get("user_id", "Inconnu")[:12])
        user_label = ctk.CTkLabel(
            self,
            text=f"De: {user_email}",
            font=ctk.CTkFont(size=11),
            text_color=COLORS["text_secondary"],
            anchor="w"
        )
        user_label.grid(row=1, column=0, sticky="w", padx=12, pady=(0, 4))

        # Footer avec statut et date
        footer = ctk.CTkFrame(self, fg_color="transparent")
        footer.grid(row=2, column=0, sticky="ew", padx=12, pady=(6, 12))
        footer.grid_columnconfigure(1, weight=1)

        # Badge statut
        status = ticket.get("status", "open")
        status_colors = {
            "open": COLORS["status_open"],
            "pending": COLORS["status_pending"],
            "in_progress": COLORS["status_in_progress"],
            "resolved": COLORS["status_resolved"],
            "closed": COLORS["status_closed"]
        }
        status_badge = ctk.CTkLabel(
            footer,
            text=status.replace("_", " ").title(),
            font=ctk.CTkFont(size=10),
            text_color="#ffffff",
            fg_color=status_colors.get(status, COLORS["status_open"]),
            corner_radius=4,
            padx=8,
            pady=2
        )
        status_badge.grid(row=0, column=0, sticky="w")

        # Date
        created_at = ticket.get("created_at", "")
        if created_at:
            try:
                dt = datetime.fromisoformat(created_at.replace("Z", "+00:00"))
                date_str = dt.strftime("%d/%m/%Y %H:%M")
            except:
                date_str = created_at[:16]
        else:
            date_str = ""
        date_label = ctk.CTkLabel(
            footer,
            text=date_str,
            font=ctk.CTkFont(size=10),
            text_color=COLORS["text_muted"],
            anchor="e"
        )
        date_label.grid(row=0, column=1, sticky="e")

        # Bind click
        self.bind("<Button-1>", lambda e: self.on_click(self.ticket))
        for child in self.winfo_children():
            child.bind("<Button-1>", lambda e: self.on_click(self.ticket))
            for subchild in child.winfo_children():
                subchild.bind("<Button-1>", lambda e: self.on_click(self.ticket))

        # Hover effect
        self.bind("<Enter>", self._on_enter)
        self.bind("<Leave>", self._on_leave)

    def _on_enter(self, event):
        self.configure(fg_color=COLORS["bg_input"])

    def _on_leave(self, event):
        self.configure(fg_color=COLORS["bg_card"])


class MessageBubble(ctk.CTkFrame):
    """Widget bulle de message"""

    def __init__(self, master, message: Dict, **kwargs):
        is_admin = message.get("is_admin_reply", False)
        bg_color = COLORS["accent_dark"] if is_admin else COLORS["bg_input"]

        super().__init__(master, fg_color=bg_color, corner_radius=12, **kwargs)

        # Message
        msg_text = message.get("message", "")
        msg_label = ctk.CTkLabel(
            self,
            text=msg_text,
            font=ctk.CTkFont(size=12),
            text_color=COLORS["text_primary"],
            wraplength=400,
            justify="left",
            anchor="w"
        )
        msg_label.pack(padx=12, pady=(8, 4), anchor="w")

        # Footer
        sender = "Admin" if is_admin else message.get("user_email", "User")
        created_at = message.get("created_at", "")
        if created_at:
            try:
                dt = datetime.fromisoformat(created_at.replace("Z", "+00:00"))
                date_str = dt.strftime("%H:%M")
            except:
                date_str = ""
        else:
            date_str = ""

        footer = ctk.CTkLabel(
            self,
            text=f"{sender} - {date_str}",
            font=ctk.CTkFont(size=9),
            text_color=COLORS["text_muted"],
            anchor="e"
        )
        footer.pack(padx=12, pady=(0, 8), anchor="e")


class TicketManagerApp(ctk.CTk):
    """Application principale de gestion des tickets"""

    def __init__(self):
        super().__init__()

        # Configuration fenetre
        self.title("Dbs Ticket Manager")
        self.geometry("1400x900")
        self.minsize(1200, 700)
        self.configure(fg_color=COLORS["bg_dark"])

        # Theme CustomTkinter
        ctk.set_appearance_mode("dark")
        ctk.set_default_color_theme("green")

        # Client Supabase
        self.db = SupabaseClient()
        self.tickets: List[Dict] = []
        self.current_ticket: Optional[Dict] = None
        self.current_filter = "all"

        # Setup UI
        self._setup_ui()

        # Connexion
        self.after(100, self._connect_and_load)

    def _setup_ui(self):
        """Configurer l'interface utilisateur"""
        # Layout principal
        self.grid_columnconfigure(1, weight=1)
        self.grid_rowconfigure(0, weight=1)

        # Sidebar gauche
        self._create_sidebar()

        # Zone principale
        self._create_main_area()

    def _create_sidebar(self):
        """Creer la sidebar gauche"""
        sidebar = ctk.CTkFrame(self, fg_color=COLORS["bg_card"], width=280, corner_radius=0)
        sidebar.grid(row=0, column=0, sticky="nsew")
        sidebar.grid_propagate(False)

        # Logo / Titre
        logo_frame = ctk.CTkFrame(sidebar, fg_color="transparent")
        logo_frame.pack(fill="x", padx=20, pady=20)

        title = ctk.CTkLabel(
            logo_frame,
            text="Dbs",
            font=ctk.CTkFont(size=28, weight="bold"),
            text_color=COLORS["accent"]
        )
        title.pack(anchor="w")

        subtitle = ctk.CTkLabel(
            logo_frame,
            text="Ticket Manager",
            font=ctk.CTkFont(size=14),
            text_color=COLORS["text_secondary"]
        )
        subtitle.pack(anchor="w")

        # Stats
        self.stats_frame = ctk.CTkFrame(sidebar, fg_color=COLORS["bg_input"], corner_radius=8)
        self.stats_frame.pack(fill="x", padx=15, pady=(10, 20))

        self.stats_labels = {}
        stats_config = [
            ("total", "Total", COLORS["text_primary"]),
            ("open", "Ouverts", COLORS["status_open"]),
            ("in_progress", "En cours", COLORS["status_in_progress"]),
            ("urgent", "Urgents", COLORS["priority_urgent"]),
        ]

        for key, label, color in stats_config:
            frame = ctk.CTkFrame(self.stats_frame, fg_color="transparent")
            frame.pack(fill="x", padx=12, pady=6)

            label_widget = ctk.CTkLabel(
                frame,
                text=label,
                font=ctk.CTkFont(size=12),
                text_color=COLORS["text_secondary"],
                anchor="w"
            )
            label_widget.pack(side="left")

            value = ctk.CTkLabel(
                frame,
                text="0",
                font=ctk.CTkFont(size=14, weight="bold"),
                text_color=color,
                anchor="e"
            )
            value.pack(side="right")
            self.stats_labels[key] = value

        # Filtres
        filter_label = ctk.CTkLabel(
            sidebar,
            text="FILTRER PAR STATUT",
            font=ctk.CTkFont(size=11, weight="bold"),
            text_color=COLORS["text_muted"]
        )
        filter_label.pack(anchor="w", padx=20, pady=(10, 5))

        filters = [
            ("all", "Tous les tickets"),
            ("open", "Ouverts"),
            ("pending", "En attente"),
            ("in_progress", "En cours"),
            ("resolved", "Resolus"),
            ("closed", "Fermes"),
        ]

        self.filter_buttons = {}
        for key, label in filters:
            btn = ctk.CTkButton(
                sidebar,
                text=label,
                font=ctk.CTkFont(size=12),
                fg_color="transparent" if key != "all" else COLORS["accent_dark"],
                hover_color=COLORS["accent_dark"],
                text_color=COLORS["text_primary"],
                anchor="w",
                height=36,
                corner_radius=6,
                command=lambda k=key: self._filter_tickets(k)
            )
            btn.pack(fill="x", padx=15, pady=2)
            self.filter_buttons[key] = btn

        # Bouton refresh
        refresh_btn = ctk.CTkButton(
            sidebar,
            text="Rafraichir",
            font=ctk.CTkFont(size=12),
            fg_color=COLORS["accent"],
            hover_color=COLORS["accent_hover"],
            text_color="#ffffff",
            height=40,
            corner_radius=8,
            command=self._refresh_tickets
        )
        refresh_btn.pack(fill="x", padx=15, pady=(20, 10))

        # Status connexion
        self.status_label = ctk.CTkLabel(
            sidebar,
            text="Connexion...",
            font=ctk.CTkFont(size=10),
            text_color=COLORS["text_muted"]
        )
        self.status_label.pack(side="bottom", pady=10)

    def _create_main_area(self):
        """Creer la zone principale"""
        main = ctk.CTkFrame(self, fg_color="transparent")
        main.grid(row=0, column=1, sticky="nsew", padx=20, pady=20)
        main.grid_columnconfigure(0, weight=1)
        main.grid_columnconfigure(1, weight=2)
        main.grid_rowconfigure(0, weight=1)

        # Liste des tickets
        self._create_ticket_list(main)

        # Detail du ticket
        self._create_ticket_detail(main)

    def _create_ticket_list(self, parent):
        """Creer la liste des tickets"""
        list_frame = ctk.CTkFrame(parent, fg_color=COLORS["bg_card"], corner_radius=12)
        list_frame.grid(row=0, column=0, sticky="nsew", padx=(0, 10))
        list_frame.grid_rowconfigure(1, weight=1)
        list_frame.grid_columnconfigure(0, weight=1)

        # Header
        header = ctk.CTkFrame(list_frame, fg_color="transparent")
        header.grid(row=0, column=0, sticky="ew", padx=15, pady=15)

        title = ctk.CTkLabel(
            header,
            text="Tickets",
            font=ctk.CTkFont(size=18, weight="bold"),
            text_color=COLORS["text_primary"]
        )
        title.pack(side="left")

        self.ticket_count_label = ctk.CTkLabel(
            header,
            text="(0)",
            font=ctk.CTkFont(size=14),
            text_color=COLORS["text_muted"]
        )
        self.ticket_count_label.pack(side="left", padx=(8, 0))

        # Scrollable list
        self.ticket_list = ctk.CTkScrollableFrame(
            list_frame,
            fg_color="transparent",
            scrollbar_fg_color=COLORS["bg_input"],
            scrollbar_button_color=COLORS["border"]
        )
        self.ticket_list.grid(row=1, column=0, sticky="nsew", padx=10, pady=(0, 10))
        self.ticket_list.grid_columnconfigure(0, weight=1)

    def _create_ticket_detail(self, parent):
        """Creer le panel de detail du ticket"""
        self.detail_frame = ctk.CTkFrame(parent, fg_color=COLORS["bg_card"], corner_radius=12)
        self.detail_frame.grid(row=0, column=1, sticky="nsew", padx=(10, 0))
        self.detail_frame.grid_rowconfigure(2, weight=1)
        self.detail_frame.grid_columnconfigure(0, weight=1)

        # Placeholder
        self.detail_placeholder = ctk.CTkLabel(
            self.detail_frame,
            text="Selectionnez un ticket",
            font=ctk.CTkFont(size=16),
            text_color=COLORS["text_muted"]
        )
        self.detail_placeholder.place(relx=0.5, rely=0.5, anchor="center")

    def _show_ticket_detail(self, ticket: Dict):
        """Afficher les details d'un ticket"""
        self.current_ticket = ticket

        # Cacher le placeholder
        self.detail_placeholder.place_forget()

        # Clear existing widgets
        for widget in self.detail_frame.winfo_children():
            if widget != self.detail_placeholder:
                widget.destroy()

        # Header avec infos ticket
        header = ctk.CTkFrame(self.detail_frame, fg_color="transparent")
        header.grid(row=0, column=0, sticky="ew", padx=20, pady=15)
        header.grid_columnconfigure(0, weight=1)

        # Sujet
        subject = ctk.CTkLabel(
            header,
            text=ticket.get("subject", "Sans sujet"),
            font=ctk.CTkFont(size=18, weight="bold"),
            text_color=COLORS["text_primary"],
            anchor="w"
        )
        subject.grid(row=0, column=0, sticky="w")

        # ID
        ticket_id = ctk.CTkLabel(
            header,
            text=f"ID: {ticket.get('id', '')[:8]}...",
            font=ctk.CTkFont(size=10),
            text_color=COLORS["text_muted"],
            anchor="w"
        )
        ticket_id.grid(row=1, column=0, sticky="w", pady=(4, 0))

        # User info
        user_email = ticket.get("user_email", ticket.get("user_id", "Inconnu")[:12])
        user_label = ctk.CTkLabel(
            header,
            text=f"De: {user_email}",
            font=ctk.CTkFont(size=12),
            text_color=COLORS["text_secondary"],
            anchor="w"
        )
        user_label.grid(row=2, column=0, sticky="w", pady=(2, 0))

        # Controls
        controls = ctk.CTkFrame(self.detail_frame, fg_color=COLORS["bg_input"], corner_radius=8)
        controls.grid(row=1, column=0, sticky="ew", padx=15, pady=(0, 10))

        # Statut dropdown
        status_label = ctk.CTkLabel(
            controls,
            text="Statut:",
            font=ctk.CTkFont(size=11),
            text_color=COLORS["text_secondary"]
        )
        status_label.pack(side="left", padx=(12, 5), pady=8)

        self.status_dropdown = ctk.CTkOptionMenu(
            controls,
            values=["open", "pending", "in_progress", "resolved", "closed"],
            font=ctk.CTkFont(size=11),
            fg_color=COLORS["bg_card"],
            button_color=COLORS["accent"],
            button_hover_color=COLORS["accent_hover"],
            dropdown_fg_color=COLORS["bg_card"],
            dropdown_hover_color=COLORS["accent_dark"],
            width=120,
            command=self._on_status_change
        )
        self.status_dropdown.set(ticket.get("status", "open"))
        self.status_dropdown.pack(side="left", padx=5, pady=8)

        # Priority dropdown
        priority_label = ctk.CTkLabel(
            controls,
            text="Priorite:",
            font=ctk.CTkFont(size=11),
            text_color=COLORS["text_secondary"]
        )
        priority_label.pack(side="left", padx=(20, 5), pady=8)

        self.priority_dropdown = ctk.CTkOptionMenu(
            controls,
            values=["low", "normal", "high", "urgent"],
            font=ctk.CTkFont(size=11),
            fg_color=COLORS["bg_card"],
            button_color=COLORS["accent"],
            button_hover_color=COLORS["accent_hover"],
            dropdown_fg_color=COLORS["bg_card"],
            dropdown_hover_color=COLORS["accent_dark"],
            width=100,
            command=self._on_priority_change
        )
        self.priority_dropdown.set(ticket.get("priority", "normal") or "normal")
        self.priority_dropdown.pack(side="left", padx=5, pady=8)

        # Delete button
        delete_btn = ctk.CTkButton(
            controls,
            text="Supprimer",
            font=ctk.CTkFont(size=11),
            fg_color=COLORS["error"],
            hover_color="#dc2626",
            text_color="#ffffff",
            width=80,
            height=28,
            corner_radius=6,
            command=self._delete_current_ticket
        )
        delete_btn.pack(side="right", padx=12, pady=8)

        # Messages
        messages_container = ctk.CTkFrame(self.detail_frame, fg_color="transparent")
        messages_container.grid(row=2, column=0, sticky="nsew", padx=15, pady=(0, 10))
        messages_container.grid_rowconfigure(0, weight=1)
        messages_container.grid_columnconfigure(0, weight=1)

        self.messages_scroll = ctk.CTkScrollableFrame(
            messages_container,
            fg_color="transparent",
            scrollbar_fg_color=COLORS["bg_input"],
            scrollbar_button_color=COLORS["border"]
        )
        self.messages_scroll.grid(row=0, column=0, sticky="nsew")

        # Reply area
        reply_frame = ctk.CTkFrame(self.detail_frame, fg_color=COLORS["bg_input"], corner_radius=8)
        reply_frame.grid(row=3, column=0, sticky="ew", padx=15, pady=(0, 15))
        reply_frame.grid_columnconfigure(0, weight=1)

        self.reply_textbox = ctk.CTkTextbox(
            reply_frame,
            height=80,
            font=ctk.CTkFont(size=12),
            fg_color=COLORS["bg_card"],
            text_color=COLORS["text_primary"],
            border_color=COLORS["border"],
            border_width=1,
            corner_radius=6
        )
        self.reply_textbox.grid(row=0, column=0, sticky="ew", padx=10, pady=10)

        send_btn = ctk.CTkButton(
            reply_frame,
            text="Envoyer la reponse",
            font=ctk.CTkFont(size=12, weight="bold"),
            fg_color=COLORS["accent"],
            hover_color=COLORS["accent_hover"],
            text_color="#ffffff",
            height=36,
            corner_radius=6,
            command=self._send_reply
        )
        send_btn.grid(row=1, column=0, sticky="e", padx=10, pady=(0, 10))

        # Charger les messages
        self._load_messages(ticket.get("id", ""))

    def _load_messages(self, ticket_id: str):
        """Charger les messages d'un ticket"""
        def load():
            messages = self.db.get_ticket_messages(ticket_id)
            self.after(0, lambda: self._display_messages(messages))

        threading.Thread(target=load, daemon=True).start()

    def _display_messages(self, messages: List[Dict]):
        """Afficher les messages"""
        # Clear
        for widget in self.messages_scroll.winfo_children():
            widget.destroy()

        if not messages:
            no_msg = ctk.CTkLabel(
                self.messages_scroll,
                text="Aucun message",
                font=ctk.CTkFont(size=12),
                text_color=COLORS["text_muted"]
            )
            no_msg.pack(pady=20)
            return

        for msg in messages:
            is_admin = msg.get("is_admin_reply", False)
            bubble = MessageBubble(self.messages_scroll, msg)
            bubble.pack(
                fill="x",
                padx=(50 if not is_admin else 10, 10 if not is_admin else 50),
                pady=5,
                anchor="e" if is_admin else "w"
            )

    def _on_status_change(self, new_status: str):
        """Callback changement de statut"""
        if self.current_ticket:
            success = self.db.update_ticket_status(self.current_ticket["id"], new_status)
            if success:
                self.current_ticket["status"] = new_status
                self._refresh_tickets()

    def _on_priority_change(self, new_priority: str):
        """Callback changement de priorite"""
        if self.current_ticket:
            success = self.db.update_ticket_priority(self.current_ticket["id"], new_priority)
            if success:
                self.current_ticket["priority"] = new_priority
                self._refresh_tickets()

    def _send_reply(self):
        """Envoyer une reponse"""
        if not self.current_ticket:
            return

        message = self.reply_textbox.get("1.0", "end-1c").strip()
        if not message:
            return

        success = self.db.reply_ticket(self.current_ticket["id"], message)
        if success:
            self.reply_textbox.delete("1.0", "end")
            self._load_messages(self.current_ticket["id"])
            messagebox.showinfo("Succes", "Reponse envoyee!")
        else:
            messagebox.showerror("Erreur", "Impossible d'envoyer la reponse")

    def _delete_current_ticket(self):
        """Supprimer le ticket actuel"""
        if not self.current_ticket:
            return

        if messagebox.askyesno("Confirmer", "Supprimer ce ticket?"):
            success = self.db.delete_ticket(self.current_ticket["id"])
            if success:
                self.current_ticket = None
                self._refresh_tickets()
                # Reset detail view
                for widget in self.detail_frame.winfo_children():
                    widget.destroy()
                self.detail_placeholder = ctk.CTkLabel(
                    self.detail_frame,
                    text="Selectionnez un ticket",
                    font=ctk.CTkFont(size=16),
                    text_color=COLORS["text_muted"]
                )
                self.detail_placeholder.place(relx=0.5, rely=0.5, anchor="center")

    def _filter_tickets(self, filter_key: str):
        """Filtrer les tickets"""
        self.current_filter = filter_key

        # Update button styles
        for key, btn in self.filter_buttons.items():
            if key == filter_key:
                btn.configure(fg_color=COLORS["accent_dark"])
            else:
                btn.configure(fg_color="transparent")

        self._refresh_tickets()

    def _refresh_tickets(self):
        """Rafraichir la liste des tickets"""
        def refresh():
            tickets = self.db.get_tickets(self.current_filter)
            stats = self.db.get_stats()
            self.after(0, lambda: self._update_ui(tickets, stats))

        threading.Thread(target=refresh, daemon=True).start()

    def _update_ui(self, tickets: List[Dict], stats: Dict):
        """Mettre a jour l'interface avec les donnees"""
        self.tickets = tickets

        # Update stats
        if stats:
            self.stats_labels["total"].configure(text=str(stats.get("total_tickets", 0)))
            self.stats_labels["open"].configure(text=str(stats.get("open_tickets", 0)))
            self.stats_labels["in_progress"].configure(text=str(stats.get("in_progress_tickets", 0)))
            self.stats_labels["urgent"].configure(text=str(stats.get("urgent_tickets", 0)))

        # Update count
        self.ticket_count_label.configure(text=f"({len(tickets)})")

        # Clear list
        for widget in self.ticket_list.winfo_children():
            widget.destroy()

        # Add tickets
        if not tickets:
            no_tickets = ctk.CTkLabel(
                self.ticket_list,
                text="Aucun ticket",
                font=ctk.CTkFont(size=14),
                text_color=COLORS["text_muted"]
            )
            no_tickets.pack(pady=40)
            return

        for ticket in tickets:
            card = TicketCard(
                self.ticket_list,
                ticket,
                on_click=self._show_ticket_detail
            )
            card.pack(fill="x", pady=5)

    def _connect_and_load(self):
        """Connecter a Supabase et charger les donnees"""
        def connect():
            success = self.db.connect()
            if success:
                self.after(0, lambda: self.status_label.configure(
                    text="Connecte",
                    text_color=COLORS["success"]
                ))
                self._refresh_tickets()
            else:
                self.after(0, lambda: self.status_label.configure(
                    text="Erreur connexion",
                    text_color=COLORS["error"]
                ))
                self.after(0, lambda: messagebox.showerror(
                    "Erreur",
                    "Impossible de se connecter a Supabase.\nVerifiez le fichier .env"
                ))

        threading.Thread(target=connect, daemon=True).start()


def main():
    """Point d'entree principal"""
    # Verifier la configuration
    if not SUPABASE_URL or not SUPABASE_KEY:
        print("ERREUR: Configuration manquante!")
        print("Copiez .env.example vers .env et remplissez les valeurs.")
        input("Appuyez sur Entree pour quitter...")
        sys.exit(1)

    if not ADMIN_USER_ID:
        print("ATTENTION: ADMIN_USER_ID non configure!")
        print("Les reponses ne pourront pas etre envoyees.")

    app = TicketManagerApp()
    app.mainloop()


if __name__ == "__main__":
    main()
