'use client';

import { useEffect, useRef } from 'react';

export default function CyberGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let offset = 0;

    function drawGrid() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Perspective grid
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.15)';
      ctx.lineWidth = 1;

      const gridSize = 50;
      const perspective = 300;

      // Horizontal lines
      for (let y = 0; y < 20; y++) {
        const yPos = canvas.height * 0.6 + (y * gridSize) + offset;
        const scale = perspective / (perspective + y * 20);
        
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2 - (canvas.width * scale) / 2, yPos);
        ctx.lineTo(canvas.width / 2 + (canvas.width * scale) / 2, yPos);
        ctx.stroke();
      }

      // Vertical lines
      for (let x = -10; x <= 10; x++) {
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2 + x * gridSize, canvas.height * 0.6);
        
        const endX = canvas.width / 2 + (x * gridSize * 3);
        ctx.lineTo(endX, canvas.height);
        ctx.stroke();
      }

      // Neon glow effect
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(0, 255, 255, 0.5)';

      offset += 2;
      if (offset > gridSize) offset = 0;

      requestAnimationFrame(drawGrid);
    }

    drawGrid();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed bottom-0 left-0 w-full pointer-events-none opacity-30"
      style={{ zIndex: 0 }}
    />
  );
}
