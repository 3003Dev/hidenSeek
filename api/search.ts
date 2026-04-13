const SUPABASE_SEARCH_URL =
  "https://mwkamemnxhwmxpkmjief.supabase.co/functions/v1/api-search";

export async function search(query: string) {
  const apiKey = localStorage.getItem("Dbs_api_key");

  if (!apiKey) {
    throw new Error("API key missing");
  }

  const response = await fetch(SUPABASE_SEARCH_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": apiKey,
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Search failed");
  }

  return data;
}