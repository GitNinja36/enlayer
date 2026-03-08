import React, { useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Placeholder } from './pages/Placeholder';
import { Modal } from './components/ui/Modal';
import { Button } from './components/ui/Button';

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isExampleModalOpen, setIsExampleModalOpen] = useState(false);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-graphite bg-background">
        <Header onOpenDemo={() => setIsDemoModalOpen(true)} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <Home 
                onOpenDemo={() => setIsDemoModalOpen(true)} 
                onOpenExample={() => setIsExampleModalOpen(true)} 
              />
            } />
            <Route path="/product" element={<Placeholder title="Product Overview" />} />
            <Route path="/modules" element={<Placeholder title="Modules" />} />
            <Route path="/pricing" element={<Placeholder title="Pricing" />} />
            <Route path="/trust" element={<Placeholder title="Trust Center" />} />
            <Route path="/resources" element={<Placeholder title="Resources" />} />
            <Route path="/company" element={<Placeholder title="Company" />} />
            <Route path="/contact" element={<Placeholder title="Contact Us" />} />
            <Route path="*" element={<Placeholder title="Page Not Found" />} />
          </Routes>
        </main>

        <Footer />

        {/* Get a Demo Modal */}
        <Modal 
          isOpen={isDemoModalOpen} 
          onClose={() => setIsDemoModalOpen(false)}
          title="Get a Demo"
        >
          <div className="space-y-4">
             <p className="text-slate mb-4">See how Enlayer can help your team move faster. Fill out the form below and we'll be in touch.</p>
             <div className="space-y-3">
               <div>
                 <label className="block text-sm font-medium text-graphite mb-1">Name</label>
                 <input type="text" className="w-full px-4 py-2.5 border border-border rounded-xl bg-white transition-all duration-200 placeholder:text-slate/60 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Jane Doe" />
               </div>
               <div>
                 <label className="block text-sm font-medium text-graphite mb-1">Work Email</label>
                 <input type="email" className="w-full px-4 py-2.5 border border-border rounded-xl bg-white transition-all duration-200 placeholder:text-slate/60 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none" placeholder="jane@company.com" />
               </div>
               <div>
                 <label className="block text-sm font-medium text-graphite mb-1">Company</label>
                 <input type="text" className="w-full px-4 py-2.5 border border-border rounded-xl bg-white transition-all duration-200 placeholder:text-slate/60 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Acme Inc" />
               </div>
               <div>
                 <label className="block text-sm font-medium text-graphite mb-1">Message (Optional)</label>
                 <textarea className="w-full px-4 py-2.5 border border-border rounded-xl bg-white transition-all duration-200 placeholder:text-slate/60 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none h-24 resize-none" placeholder="Tell us about your team..."></textarea>
               </div>
             </div>
             <div className="pt-4">
               <Button fullWidth onClick={() => { alert('Thanks for your interest!'); setIsDemoModalOpen(false); }}>
                 Request Demo
               </Button>
             </div>
          </div>
        </Modal>

        {/* Example Report Modal */}
        <Modal 
          isOpen={isExampleModalOpen} 
          onClose={() => setIsExampleModalOpen(false)}
          title="Example Decision Report"
        >
          <div className="space-y-4 text-center py-8">
             <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto text-primary mb-4">
               <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
             </div>
             <h3 className="text-xl font-bold text-graphite">Full Report Preview</h3>
             <p className="text-slate">We're preparing a sample interactive report for you.</p>
             <div className="animate-pulse bg-gray-100 h-4 w-3/4 mx-auto rounded"></div>
             <div className="animate-pulse bg-gray-100 h-4 w-1/2 mx-auto rounded"></div>
          </div>
        </Modal>

      </div>
    </HashRouter>
  );
};

export default App;