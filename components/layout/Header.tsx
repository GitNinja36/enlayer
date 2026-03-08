import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Layers } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

interface HeaderProps {
  onOpenDemo: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Product', path: '/product' },
    { name: 'Use Cases', path: '/#use-cases' },
    { name: 'Modules', path: '/#modules' },
    { name: 'Pricing', path: '/#pricing' },
    { name: 'Trust', path: '/#trust' },
    { name: 'Resources', path: '/resources' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled
          ? 'glass-header shadow-glass py-3'
          : 'bg-transparent py-6'
        }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 z-50 group">
            <div className="w-9 h-9 bg-gradient-cta rounded-xl flex items-center justify-center text-white shadow-md shadow-orange-500/20 transition-all duration-300 group-hover:shadow-glow-primary group-hover:scale-105">
              <Layers size={20} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold tracking-tight text-graphite font-display">Enlayer</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path.startsWith('/#') ? link.path.substring(1) : `#${link.path}`}
                className="text-sm font-medium text-slate hover:text-primary transition-all duration-200 nav-link-animated"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button onClick={onOpenDemo} className="!py-2.5 !px-5 !text-sm !rounded-lg">
              Get a Demo
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden z-50 text-graphite hover:text-primary transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Nav Panel */}
      <div
        className={`fixed inset-0 glass-panel z-40 transform transition-all duration-400 ease-out lg:hidden pt-24 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
      >
        <Container className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path.startsWith('/#') ? link.path.substring(1) : `#${link.path}`}
              className="text-lg font-semibold text-graphite border-b border-gray-50 pb-4 hover:text-primary transition-colors duration-200 nav-link-animated"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button onClick={() => { onOpenDemo(); setIsMobileMenuOpen(false); }} fullWidth>
            Get a Demo
          </Button>
        </Container>
      </div>
    </header>
  );
};
