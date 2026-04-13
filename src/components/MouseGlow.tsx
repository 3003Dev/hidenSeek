import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
  twinklePhase: number;
  drift: number;
  driftPhase: number;
}

const MouseGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: -1000, y: -1000 });
  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const count = Math.floor((canvas.width * canvas.height) / 4000);
      starsRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.2 + 0.5,
        opacity: Math.random() * 0.5 + 0.5,
        speed: Math.random() * 0.05 + 0.01,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        drift: Math.random() * 0.15 + 0.02,
        driftPhase: Math.random() * Math.PI * 2,
      }));
    };

    resize();
    window.addEventListener('resize', resize);

    let frame = 0;
    let animationId: number;

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mousePos.current.x;
      const my = mousePos.current.y;

      starsRef.current.forEach((star) => {
        // Twinkle
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = 0.5 + 0.5 * Math.sin(star.twinklePhase);
        const baseOpacity = star.opacity * (0.7 + 0.3 * twinkle);

        // Slow upward drift
        star.y -= star.speed;
        star.driftPhase += 0.005;
        star.x += Math.sin(star.driftPhase) * star.drift;

        // Wrap around
        if (star.y < -2) {
          star.y = canvas.height + 2;
          star.x = Math.random() * canvas.width;
        }
        if (star.x < -2) star.x = canvas.width + 2;
        if (star.x > canvas.width + 2) star.x = -2;

        // Mouse proximity glow
        const dx = star.x - mx;
        const dy = star.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const mouseInfluence = dist < 200 ? (1 - dist / 200) * 1.5 : 0;
        const finalOpacity = Math.min(1, baseOpacity + mouseInfluence * 0.6);
        const finalSize = star.size + mouseInfluence * 1.2;

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, finalSize, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity})`;
        ctx.fill();

        // Sparkle cross for bigger stars
        if (star.size > 1.5 && twinkle > 0.8) {
          const len = star.size * 3;
          ctx.strokeStyle = `rgba(255, 255, 255, ${finalOpacity * 0.4})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(star.x - len, star.y);
          ctx.lineTo(star.x + len, star.y);
          ctx.moveTo(star.x, star.y - len);
          ctx.lineTo(star.x, star.y + len);
          ctx.stroke();
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
        glowRef.current.style.opacity = '1';
      }
    };

    const onMouseLeave = () => {
      mousePos.current = { x: -1000, y: -1000 };
      if (glowRef.current) glowRef.current.style.opacity = '0';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <>
      <div id="mouse-glow" ref={glowRef}></div>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 1,
        }}      />
    </>
  );
};

export default MouseGlow;