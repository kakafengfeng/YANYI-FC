import React, { useState, useEffect } from 'react';
import { Menu, X, Search, User, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', href: '#home' },
    { name: '新闻', href: '#news' },
    { name: '关于', href: '#about' },
    { name: '球队', href: '#team' },
    { name: '票务', href: '#tickets' },
    { name: '商店', href: '#shop' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-club-navy shadow-lg py-2' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-club-red rounded-full flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform">
             <span className="text-white font-bold text-lg">Y</span>
          </div>
          <span className="text-white text-2xl font-black tracking-tighter uppercase hidden sm:block">
            岩意 <span className="text-club-red">FC</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white text-sm font-bold uppercase tracking-widest hover:text-club-red transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-0.5 after:bg-club-red after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4 text-white">
          <button className="hover:text-club-red transition-colors" aria-label="搜索"><Search size={20} /></button>
          <button className="hover:text-club-red transition-colors" aria-label="用户"><User size={20} /></button>
          <button className="relative hover:text-club-red transition-colors" aria-label="购物车">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-club-red text-xs w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="菜单">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-club-navy border-t border-gray-800 shadow-xl flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white text-lg font-bold uppercase tracking-widest hover:text-club-red"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-6 pt-4 border-t border-gray-700">
             <button className="text-white hover:text-club-red flex items-center gap-2"><User size={20}/> 登录</button>
             <button className="text-white hover:text-club-red flex items-center gap-2"><ShoppingBag size={20}/> 购物车</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;