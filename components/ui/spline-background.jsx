'use client';

import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
  ),
});

export default function SplineBackground({ scenePath = '/animated_paper_boat.spline', interactive = true }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const splineRef = useRef(null);
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  function onLoad(spline) {
    splineRef.current = spline;
    setIsLoaded(true);
    setHasError(false);
    console.log('✓ Spline loaded - Spacebar ready');
    
    // Listen to Spline events
    if (spline.setVariable) {
      console.log('✓ Spline setVariable available');
    }
    
    // Find the canvas element
    setTimeout(() => {
      const canvas = document.querySelector('canvas');
      if (canvas) {
        canvasRef.current = canvas;
        console.log('✓ Canvas found');
      }
    }, 500);
  }

  function onError(error) {
    console.error('Spline loading error:', error);
    setHasError(true);
  }

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleSpacebar = (e) => {
      if (e.code === 'Space' || e.key === ' ') {
        // Don't prevent if user is typing
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
          return;
        }
        
        e.preventDefault();
        e.stopPropagation();
        
        // Find the canvas
        const canvas = document.querySelector('canvas');
        if (!canvas) return;
        
        // Use current mouse position
        const x = mousePos.current.x;
        const y = mousePos.current.y;
        
        // Fire all event types at mouse position
        const eventTypes = ['mousedown', 'mouseup', 'click', 'pointerdown', 'pointerup'];
        
        eventTypes.forEach((eventType, i) => {
          setTimeout(() => {
            let event;
            
            if (eventType.startsWith('pointer')) {
              event = new PointerEvent(eventType, {
                bubbles: true,
                cancelable: true,
                composed: true,
                clientX: x,
                clientY: y,
                screenX: x,
                screenY: y,
                pointerId: 1,
                pointerType: 'mouse',
                isPrimary: true,
                button: 0,
                buttons: eventType.includes('down') ? 1 : 0,
                view: window
              });
            } else {
              event = new MouseEvent(eventType, {
                bubbles: true,
                cancelable: true,
                composed: true,
                clientX: x,
                clientY: y,
                screenX: x,
                screenY: y,
                button: 0,
                buttons: eventType === 'mousedown' ? 1 : 0,
                view: window
              });
            }
            
            canvas.dispatchEvent(event);
          }, i * 10);
        });
        
        console.log(`✓ Spacebar -> Click at mouse position (${x}, ${y})`);
      }
    };

    document.addEventListener('keydown', handleSpacebar, { capture: true });
    return () => document.removeEventListener('keydown', handleSpacebar, { capture: true });
  }, []);

  if (hasError) {
    return (
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0),rgba(0,0,0,1))]" />
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 1.5s ease-in',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    >
      <Spline
        scene={scenePath}
        onLoad={onLoad}
        onError={onError}
        className="w-full h-full"
        style={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'auto',
        }}
      />
      
      {/* Dark overlay for better text contrast */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%)',
          mixBlendMode: 'multiply',
        }}
      />
      
      {isLoaded && (
        <div className="fixed bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm pointer-events-none z-50">
          Move mouse to interact with paper boat
        </div>
      )}
    </div>
  );
}
