import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth);
        this.y = Math.random() * (canvas?.height || window.innerHeight);
        this.size = Math.random() * 2;
        this.speedX = (Math.random() - 0.5) * 0.2; // Slow drifting
        this.speedY = (Math.random() - 0.5) * 0.2;
        
        // Club colors mixed with white for elegance
        const colors = ['#ffffff', '#ffffff', '#FF0000', '#C5A059']; 
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.5 + 0.2;
      }

      update() {
        if (!canvas) return;
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges or wrap around? Let's wrap for continuous flow
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(window.innerWidth / 8, 120); // Responsive density
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw connections (Constellation effect)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) { // Connection threshold
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-club-navy">
      {/* Background Image with Animation */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat opacity-50 animate-subtle-zoom"></div>
      
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-club-navy via-club-navy/60 to-transparent z-0 mix-blend-multiply"></div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
        <h2 className="text-club-red font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">欢迎加入荣耀塘外</h2>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          咆哮 <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">致胜</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-lg mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          不仅仅是一家俱乐部。这是一段建立在激情、坚韧和荣耀之上的传奇。加入我们，就在塘外竞技场。
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a href="#team" className="bg-club-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-none uppercase tracking-widest transition-all flex items-center justify-center gap-2 group">
            探索球队
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#tickets" className="border-2 border-white text-white hover:bg-white hover:text-club-navy font-bold py-4 px-8 rounded-none uppercase tracking-widest transition-all flex items-center justify-center">
            购买门票
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-club-red rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
