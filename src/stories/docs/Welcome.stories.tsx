import React, { useEffect, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const TOKEN = {
  nebula300: '#b39dff',
  nebula400: '#8b6aff',
  nebula500: '#6c3fff',
  nebula600: '#5a1ef5',
  aurora400:  '#1ae3f6',
  aurora500:  '#00c8e0',
  stardust1000: '#060810',
} as const;

interface Star {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  hue: number;
}

interface ShootingStar {
  x: number;
  y: number;
  nx: number;
  ny: number;
  speed: number;
  tailLength: number;
  life: number;
  maxLife: number;
}

function useStarfield(canvasRef: React.RefObject<HTMLCanvasElement>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    let frame = 0;
    const shooting: ShootingStar[] = [];

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const stars: Star[] = Array.from({ length: 320 }, () => {
      const r = Math.random();
      return {
        x:             Math.random(),
        y:             Math.random(),
        size:          Math.pow(Math.random(), 2.5) * 2.2 + 0.2,
        baseOpacity:   Math.random() * 0.6 + 0.2,
        twinkleSpeed:  Math.random() * 0.025 + 0.004,
        twinkleOffset: Math.random() * Math.PI * 2,
        hue:           r < 0.08 ? 1 : r < 0.14 ? 2 : 0,
      };
    });

    const spawnShooting = () => {
      const angle = (Math.random() * 40 + 10) * (Math.PI / 180);
      const speed = Math.random() * 14 + 8;
      shooting.push({
        x:          Math.random() * canvas.width,
        y:          Math.random() * canvas.height * 0.45,
        nx:         Math.cos(angle),
        ny:         Math.sin(angle),
        speed,
        tailLength: Math.random() * 120 + 60,
        life:       0,
        maxLife:    Math.random() * 55 + 30,
      });
    };

    const draw = () => {
      frame++;
      const W = canvas.width;
      const H = canvas.height;

      ctx.fillStyle = TOKEN.stardust1000;
      ctx.fillRect(0, 0, W, H);

      stars.forEach(star => {
        const twinkle = Math.sin(frame * star.twinkleSpeed + star.twinkleOffset);
        const alpha   = Math.max(0.05, star.baseOpacity * (0.55 + twinkle * 0.45));
        const sx = star.x * W;
        const sy = star.y * H;

        let color: string;
        if      (star.hue === 1) color = `rgba(139,106,255,${alpha})`;
        else if (star.hue === 2) color = `rgba(26,227,246,${alpha})`;
        else                     color = `rgba(255,255,255,${alpha})`;

        ctx.beginPath();
        ctx.arc(sx, sy, star.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        if (star.size > 1.3) {
          const r = star.size * 5;
          const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, r);
          const glowColor = star.hue === 2 ? '26,227,246' : '167,139,250';
          glow.addColorStop(0, `rgba(${glowColor},${alpha * 0.35})`);
          glow.addColorStop(1, 'rgba(150, 98, 98, 0)');
          ctx.beginPath();
          ctx.arc(sx, sy, r, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }
      });

      if (frame % 130 === 0 && Math.random() < 0.75) spawnShooting();

      for (let i = shooting.length - 1; i >= 0; i--) {
        const s = shooting[i];
        s.life++;
        s.x += s.nx * s.speed;
        s.y += s.ny * s.speed;

        const t     = s.life / s.maxLife;
        const alpha = t < 0.25 ? t / 0.25 : 1 - (t - 0.25) / 0.75;
        const tail  = s.tailLength * (0.5 + t * 0.5);
        const tx    = s.x - s.nx * tail;
        const ty    = s.y - s.ny * tail;

        const grad = ctx.createLinearGradient(tx, ty, s.x, s.y);
        grad.addColorStop(0,   'rgba(255,255,255,0)');
        grad.addColorStop(0.5, `rgba(200,190,255,${alpha * 0.35})`);
        grad.addColorStop(1,   `rgba(255,255,255,${alpha})`);

        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth   = 1.5;
        ctx.stroke();

        if (s.life >= s.maxLife) shooting.splice(i, 1);
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);
}

const CosmosWelcome: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useStarfield(canvasRef);

  return (
    <div style={{
      position:   'relative',
      width:      '100%',
      height:     '100vh',
      overflow:   'hidden',
      background: TOKEN.stardust1000,
      fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
    }}>

      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />

      <div className="csm-nebula csm-nebula--1" />
      <div className="csm-nebula csm-nebula--2" />
      <div className="csm-nebula csm-nebula--3" />

      <div style={{
        position:       'absolute',
        inset:          0,
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
      }}>

        <div style={{ position: 'relative', width: 210, height: 210, marginBottom: 44 }}>

          <div style={{
            position: 'absolute', inset: 0,
            borderRadius: '50%',
            border: `1px solid rgba(108,63,255,0.45)`,
          }} />
          <div style={{
            position: 'absolute', inset: 32,
            borderRadius: '50%',
            border: `1px solid rgba(0,200,224,0.35)`,
          }} />
          <div style={{
            position: 'absolute', inset: 64,
            borderRadius: '50%',
            border: `1px solid rgba(179,157,255,0.25)`,
          }} />

          <div className="csm-orb csm-orb--1">
            <div style={{
              position:    'absolute',
              top:         -5,
              left:        '50%',
              transform:   'translateX(-50%)',
              width:       10,
              height:      10,
              borderRadius: '50%',
              background:  TOKEN.nebula400,
              boxShadow:   `0 0 16px ${TOKEN.nebula400}, 0 0 6px #fff`,
            }} />
          </div>

          <div className="csm-orb csm-orb--2">
            <div style={{
              position:    'absolute',
              top:         -4,
              left:        '50%',
              transform:   'translateX(-50%)',
              width:       8,
              height:      8,
              borderRadius: '50%',
              background:  TOKEN.aurora400,
              boxShadow:   `0 0 12px ${TOKEN.aurora400}, 0 0 4px #fff`,
            }} />
          </div>

          <div className="csm-orb csm-orb--3">
            <div style={{
              position:    'absolute',
              top:         -3,
              left:        '50%',
              transform:   'translateX(-50%)',
              width:       6,
              height:      6,
              borderRadius: '50%',
              background:  TOKEN.nebula300,
              boxShadow:   `0 0 8px ${TOKEN.nebula300}`,
            }} />
          </div>

          <div style={{
            position:    'absolute',
            top:         '50%',
            left:        '50%',
            transform:   'translate(-50%, -50%)',
            width:       20,
            height:      20,
            borderRadius: '50%',
            background:  `radial-gradient(circle, #fff 0%, ${TOKEN.nebula400} 55%, transparent 100%)`,
            boxShadow:   `0 0 24px ${TOKEN.nebula500}, 0 0 60px rgba(108,63,255,0.4)`,
          }} />
        </div>

        <h1 className="csm-title">COSMOS</h1>

        <p style={{
          margin:          '14px 0 0',
          fontSize:        13,
          letterSpacing:   '0.42em',
          textTransform:   'uppercase',
          color:           'rgba(179,157,255,0.65)',
        }}>
          Component UI · Design System
        </p>

        <div style={{
          width:      120,
          height:     1,
          background: `linear-gradient(90deg, transparent, ${TOKEN.nebula500}, transparent)`,
          margin:     '26px 0',
          opacity:    0.7,
        }} />

        <p style={{
          margin:      0,
          fontSize:    13,
          color:       'rgba(160,140,220,0.5)',
          maxWidth:    400,
          textAlign:   'center',
          lineHeight:  1.9,
          letterSpacing: '0.03em',
        }}>
          Explore the components, design tokens,<br />
          and patterns that shape the Cosmos universe.
        </p>
      </div>

      <style>{`
        .csm-nebula {
          position: absolute;
          pointer-events: none;
        }
        .csm-nebula--1 {
          top: -25%; left: -10%;
          width: 65%; height: 65%;
          background: radial-gradient(ellipse, rgba(108,63,255,0.22) 0%, transparent 70%);
          animation: csm-neb-a 24s ease-in-out infinite alternate;
        }
        .csm-nebula--2 {
          bottom: -20%; right: -8%;
          width: 60%; height: 60%;
          background: radial-gradient(ellipse, rgba(0,200,224,0.14) 0%, transparent 70%);
          animation: csm-neb-b 30s ease-in-out infinite alternate;
        }
        .csm-nebula--3 {
          top: 20%; left: 38%;
          width: 50%; height: 50%;
          background: radial-gradient(ellipse, rgba(139,106,255,0.12) 0%, transparent 70%);
          animation: csm-neb-c 20s ease-in-out infinite alternate;
        }

        /* Orbit wrappers */
        .csm-orb {
          position: absolute;
        }
        .csm-orb--1 {
          inset: 0;
          animation: csm-spin 10s linear infinite;
        }
        .csm-orb--2 {
          inset: 32px;
          animation: csm-spin 6s linear infinite reverse;
        }
        .csm-orb--3 {
          inset: 64px;
          animation: csm-spin 16s linear infinite;
        }

        /* Title */
        .csm-title {
          margin: 0;
          font-size: 80px;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          background: linear-gradient(
            135deg,
            #c4b5fd 0%,
            #8b6aff 30%,
            #1ae3f6 60%,
            #c4b5fd 100%
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 50px rgba(108,63,255,0.55));
          animation: csm-grad 9s ease infinite, csm-pulse 4s ease-in-out infinite;
        }

        /* Keyframes */
        @keyframes csm-neb-a {
          from { transform: translate(0,   0) scale(1); }
          to   { transform: translate(7%, 11%) scale(1.2); }
        }
        @keyframes csm-neb-b {
          from { transform: translate(0,  0) scale(1); }
          to   { transform: translate(-8%, -7%) scale(1.15); }
        }
        @keyframes csm-neb-c {
          from { transform: translate(0, 0)    scale(1); }
          to   { transform: translate(5%, -10%) scale(1.25); }
        }
        @keyframes csm-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes csm-grad {
          0%   { background-position: 0%   50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0%   50%; }
        }
        @keyframes csm-pulse {
          0%, 100% { filter: drop-shadow(0 0 50px rgba(108,63,255,0.55)); }
          50%       { filter: drop-shadow(0 0 80px rgba(108,63,255,0.85)); }
        }
      `}</style>
    </div>
  );
};

const meta: Meta = {
  title: 'Welcome',
  parameters: {
    layout:  'fullscreen',
    options: { showPanel: false },
    controls: { disable: true },
    actions:  { disable: true },
  },
};

export default meta;

export const Welcome: StoryObj = {
  name: 'Welcome to Cosmos',
  render: () => <CosmosWelcome />,
};
