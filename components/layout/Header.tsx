import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

const logoUrl = new URL('../../assets/image3.png', import.meta.url).href;

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
    { name: 'Problem', path: '/', sectionId: 'problem', type: 'section' as const },
    { name: 'Use Cases', path: '/', sectionId: 'use-cases', type: 'section' as const },
    { name: 'Modules', path: '/', sectionId: 'modules', type: 'section' as const },
    { name: 'Works', path: '/', sectionId: 'how-it-works', type: 'section' as const },
    { name: 'Outcomes', path: '/', sectionId: 'outcomes', type: 'section' as const },
    { name: 'Pricing', path: '/', sectionId: 'pricing', type: 'section' as const },
  ];

  const handleNavClick = (link: (typeof navLinks)[number]) => {
    setIsMobileMenuOpen(false);
    if (link.type === 'section' && link.sectionId) {
      setTimeout(() => {
        document.getElementById(link.sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled
          ? 'glass-header shadow-glass py-1'
          : 'bg-transparent py-6'
        }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 z-50 group">
            <img
              src={logoUrl}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://res.cloudinary.com/davtv5r1c/image/upload/v1773224431/image_360-removebg-preview-3_yg2row.png';
              }}
              alt="Enlayer"
              className="h-18 md:h-16 w-auto object-contain drop-shadow-sm block"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.type === 'section' ? { pathname: '/', state: { scrollTo: link.sectionId } } : link.path}
                onClick={() => handleNavClick(link)}
                className="text-sm font-medium text-slate hover:text-primary transition-all duration-200 nav-link-animated"
              >
                {link.name}
              </Link>
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
            <Link
              key={link.name}
              to={link.type === 'section' ? { pathname: '/', state: { scrollTo: link.sectionId } } : link.path}
              onClick={() => handleNavClick(link)}
              className="text-lg font-semibold text-graphite border-b border-gray-50 pb-4 hover:text-primary transition-colors duration-200 nav-link-animated"
            >
              {link.name}
            </Link>
          ))}
          <Button onClick={() => { onOpenDemo(); setIsMobileMenuOpen(false); }} fullWidth>
            Get a Demo
          </Button>
        </Container>
      </div>
    </header>
  );
};
