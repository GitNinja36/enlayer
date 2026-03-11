import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { Container } from '../ui/Container';
const logoUrl = new URL('../../assets/image3.png', import.meta.url).href;

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-white via-gray-50/30 to-white pt-16 pb-8 overflow-hidden">
      {/* Gradient top border — thicker and richer */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ">
          {/* Brand */}
          <div className="space-y-1">
            <Link
              to="/"
              className="flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-90 group"
            >
              <img
                src={logoUrl}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://res.cloudinary.com/davtv5r1c/image/upload/v1773224431/image_360-removebg-preview-3_yg2row.png';
                }}
                alt="Enlayer"
                className="h-18 md:h-16 w-auto object-contain drop-shadow-sm block"
                loading="lazy"
              />
            </Link>
            <p className="text-slate text-sm leading-relaxed max-w-xs">
              The decision and growth layer for modern B2B SaaS teams.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-slate hover:text-primary transition-all duration-300 hover:scale-115 hover:shadow-glow-soft rounded-full p-1"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-slate hover:text-primary transition-all duration-300 hover:scale-115 hover:shadow-glow-soft rounded-full p-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-slate hover:text-primary transition-all duration-300 hover:scale-115 hover:shadow-glow-soft rounded-full p-1"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-graphite mb-4 font-display">Product</h4>
            <ul className="space-y-3 text-sm text-slate">
              <li>
                <Link to="/product" className="hover:text-primary transition-colors duration-200 nav-link-animated">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/#modules" className="hover:text-primary transition-colors duration-200 nav-link-animated">
                  Modules
                </Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-primary transition-colors duration-200 nav-link-animated">
                  Integrations
                </Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-primary transition-colors duration-200 nav-link-animated">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/#pricing" className="hover:text-primary transition-colors duration-200 nav-link-animated">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Modules */}
          <div>
            <h4 className="font-semibold text-graphite mb-4 font-display">Modules</h4>
            <ul className="space-y-3 text-sm text-slate">
              <li>
                <Link to="/modules" className="hover:text-primary transition-colors duration-200 nav-link-animated">
                  Validate
                </Link>
              </li>
              <li>
                <Link to="/modules" className="hover:text-primary transition-colors duration-200 nav-link-animated">
                  Intel
                </Link>
              </li>
              <li>
                <Link to="/modules" className="hover:text-primary transition-colors duration-200 nav-link-animated">
                  Attack
                </Link>
              </li>
              <li>
                <Link to="/modules" className="hover:text-primary transition-colors duration-200 nav-link-animated">
                  Connect
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-graphite mb-4 font-display">Company</h4>
            <ul className="space-y-3 text-sm text-slate">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors duration-200 nav-link-animated">
                  About
                </Link>
              </li>
              <li>
                <Link to="/trust" className="hover:text-primary transition-colors duration-200 nav-link-animated">
                  Trust Center
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-primary transition-colors duration-200 nav-link-animated">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors duration-200 nav-link-animated">
                  Contact
                </Link>
              </li>
              <li>
                <a href="mailto:hello@enlayer.ai" className="hover:text-primary transition-colors duration-200 nav-link-animated">
                  hello@enlayer.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate">
          <p>© 2024 Enlayer Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-graphite transition-colors duration-200 nav-link-animated">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-graphite transition-colors duration-200 nav-link-animated">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
