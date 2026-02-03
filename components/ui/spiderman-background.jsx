'use client';

import { useEffect, useRef } from 'react';

export default function SpiderManBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Web nodes
    const nodes = [];
    const nodeCount = 80;

    class Node {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        // Mouse attraction (like Spider-Man's web)
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          const force = (200 - distance) / 200;
          this.vx += (dx / distance) * force * 0.05;
          this.vy += (dy / distance) * force * 0.05;
        }

        this.x += this.vx;
        this.y += this.vy;

        // Damping
        this.vx *= 0.99;
        this.vy *= 0.99;

        // Boundary wrap
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ff0000';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#ff0000';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node());
    }

    function drawWebConnections() {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(220, 20, 60, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw web to cursor
        const dx = nodes[i].x - mouseX;
        const dy = nodes[i].y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          const opacity = (1 - distance / 200) * 0.8;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouseX, mouseY);
          
          // Create gradient for web strand
          const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, mouseX, mouseY);
          gradient.addColorStop(0, `rgba(255, 0, 0, ${opacity})`);
          gradient.addColorStop(1, `rgba(220, 20, 60, ${opacity * 0.5})`);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.shadowBlur = 5;
          ctx.shadowColor = '#ff0000';
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      }
    }

    function drawSpiderWebPattern() {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.max(canvas.width, canvas.height);

      // Radial web lines
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(
          centerX + Math.cos(angle) * radius,
          centerY + Math.sin(angle) * radius
        );
        ctx.strokeStyle = 'rgba(139, 0, 0, 0.05)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Circular web rings
      for (let r = 100; r < radius; r += 100) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(139, 0, 0, 0.05)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    function animate() {
      // Dark Spider-Man background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      gradient.addColorStop(0, '#0a0a0a');
      gradient.addColorStop(0.5, '#1a0000');
      gradient.addColorStop(1, '#000000');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw static web pattern
      drawSpiderWebPattern();

      // Update and draw nodes
      nodes.forEach(node => {
        node.update();
        node.draw();
      });

      // Draw web connections
      drawWebConnections();

      // Draw cursor glow
      const cursorGradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 50);
      cursorGradient.addColorStop(0, 'rgba(255, 0, 0, 0.3)');
      cursorGradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
      ctx.fillStyle = cursorGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
}
