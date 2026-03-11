import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Zap,
  Search,
  Layers,
  Sparkles,
  Target,
  Share2,
  AlertTriangle,
  X,
  TrendingUp,
  BarChart3
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { AnimatedCard } from '../components/ui/AnimatedCard';
import { Chip } from '../components/ui/Chip';
import { MOTION_CONFIG, fadeInUp, staggerContainer } from '../utils/motion';

// --- VISUAL HELPERS ---

const GradientBlob = ({ className, delay = 0 }: { className: string, delay?: number }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={shouldReduceMotion ? {} : {
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.4, 0.3],
        rotate: [0, 10, 0]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
      className={`absolute rounded-full blur-3xl pointer-events-none mix-blend-multiply opacity-30 ${className}`}
    />
  );
};

// --- Module Visuals ---

const ModuleVisual = ({ type }: { type: 'validate' | 'intel' | 'attack' | 'connect' }) => {
  return (
    <div className="w-full h-48 bg-gradient-to-b from-gray-50/30 to-white/80 flex items-center justify-center relative overflow-hidden group-hover:bg-orange-50/20 transition-all duration-500">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(#fb923c 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      {type === 'validate' && (
        <div className="relative flex items-center justify-center w-full min-h-28">
          <motion.div
            className="absolute top-1/2 left-1/2 w-30 h-30 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-200"
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-300"
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="w-16 h-16 bg-white rounded-2xl shadow-lg shadow-orange-100/50 flex items-center justify-center relative z-10 border border-orange-50">
            <CheckCircle2 size={32} className="text-primary" />
          </div>
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-sm flex items-center justify-center text-green-500"
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                x: Math.cos(i * 2) * 30,
                y: Math.sin(i * 2) * 30,
                opacity: [0, 1, 0],
                scale: [0.8, 1, 0.8]
              }}
              transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity }}
            >
              <CheckCircle2 size={12} />
            </motion.div>
          ))}
        </div>
      )}

      {type === 'intel' && (
        <div className="relative flex items-center justify-center">
          {/* Centered radial gradient behind icon */}
          <div
            className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80"
            style={{
              background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0.04) 50%, transparent 70%)',
            }}
          />
          {/* Rotating gradient sweep – centered (origin-center) so it stays symmetric */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-36 h-36 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg at 50% 50%, rgba(59, 130, 246, 0.08) 0deg, transparent 90deg, rgba(59, 130, 246, 0.04) 180deg, transparent 270deg)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute inset-[-40px] rounded-full border border-blue-100 opacity-50 pointer-events-none" />
          <div className="absolute inset-[-80px] rounded-full border border-blue-50 opacity-30 pointer-events-none" />
          <div className="w-16 h-16 bg-white rounded-2xl shadow-lg shadow-blue-100/50 flex items-center justify-center relative z-10 border border-blue-50 group-hover:scale-105 transition-transform duration-300">
            <Search size={32} className="text-blue-500" />
          </div>
        </div>
      )}

      {type === 'attack' && (
        <div className="relative">
          <motion.div
            className="absolute inset-[-30px] border border-dashed border-red-200 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          <div className="w-16 h-16 bg-white rounded-2xl shadow-lg shadow-red-100/50 flex items-center justify-center relative z-10 border border-red-50 group-hover:rotate-12 transition-transform duration-300">
            <Target size={32} className="text-red-500" />
          </div>
          <motion.div
            className="absolute -right-6 -top-6 bg-red-50 text-red-500 text-[9px] font-bold px-1.5 py-0.5 rounded border border-red-100"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            LOCKED
          </motion.div>
        </div>
      )}

      {type === 'connect' && (
        <div className="relative w-50 h-40 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {[1, 2, 3].map((i) => (
              <motion.line
                key={i}
                x1="50%" y1="50%"
                x2={i === 1 ? "20%" : i === 2 ? "80%" : "50%"}
                y2={i === 1 ? "20%" : i === 2 ? "30%" : "80%"}
                stroke="#e9d5ff" strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 3, delay: (i - 1) * 0.5, repeat: Infinity }}
              />
            ))}
          </svg>
          <motion.div className="absolute top-[20%] left-[20%] w-2 h-2 bg-purple-300 rounded-full" />
          <motion.div className="absolute top-[30%] right-[20%] w-2 h-2 bg-purple-300 rounded-full" />
          <motion.div className="absolute bottom-[20%] left-[50%] w-2 h-2 bg-purple-300 rounded-full" />

          <div className="w-16 h-16 bg-white rounded-2xl shadow-lg shadow-purple-100/50 flex items-center justify-center relative z-10 border border-purple-50 group-hover:-translate-y-1 transition-transform duration-300">
            <Share2 size={32} className="text-purple-500" />
          </div>
        </div>
      )}
    </div>
  );
}

const ValidateVisual = () => <ModuleVisual type="validate" />;
const IntelVisual = () => <ModuleVisual type="intel" />;
const AttackVisual = () => <ModuleVisual type="attack" />;
const ConnectVisual = () => <ModuleVisual type="connect" />;

const ConnectorRails = ({ hoveredIndex }: { hoveredIndex: number | null }) => {
  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block overflow-hidden z-0">
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent -translate-x-1/2" />
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-y-1/2" />

      {/* Central Junction Hub */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-8 h-8 bg-white rounded-full border border-gray-100 shadow-sm -translate-x-1/2 -translate-y-1/2 z-0 flex items-center justify-center"
        animate={{
          scale: hoveredIndex !== null ? 1.2 : 1,
          borderColor: hoveredIndex !== null ? '#fdba74' : '#e5e7eb',
          boxShadow: hoveredIndex !== null ? '0 0 15px rgba(251, 146, 60, 0.3)' : 'none'
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-gray-300"
          animate={{
            backgroundColor: hoveredIndex !== null ? '#f97316' : '#d1d5db'
          }}
        />
      </motion.div>
    </div>
  );
};

// --- Problem Timeline Component ---

const ProblemTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      id: 'inputs',
      label: 'INPUTS',
      title: '2.5 Weeks',
      subtitle: 'IMPACT DETECTED',
      desc: 'Wasted validating raw data before any work begins.',
    },
    {
      id: 'alignment',
      label: 'ALIGNMENT',
      title: 'Endless Debate',
      subtitle: 'FRICTION DETECTED',
      desc: 'Marketing and Product teams measure success differently.',
    },
    {
      id: 'decision',
      label: 'DECISION',
      title: 'Gut-Feel Choices',
      subtitle: 'CONFIDENCE LOW',
      desc: 'Without trusted signals, opinions overrule facts in meetings.',
    },
    {
      id: 'execution',
      label: 'EXECUTION',
      title: 'Missed ROI',
      subtitle: 'GROWTH BLOCKED',
      desc: 'Campaigns launch too late or target the wrong audience segments.',
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="w-full py-12 md:py-24 relative max-w-5xl mx-auto px-4">
      {/* Timeline Track (Desktop) */}
      <div className="hidden md:block relative mb-36">
        <div className="absolute top-6 left-0 w-full h-1 bg-gray-100 rounded-full" />
        <motion.div
          className="absolute top-6 left-0 h-1 bg-gradient-to-r from-orange-300 to-primary rounded-full z-0"
          initial={{ width: '0%' }}
          animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        <div className="relative z-10 flex justify-between w-full">
          {steps.map((step, idx) => {
            const isActive = idx === activeStep;
            const isPast = idx <= activeStep;

            return (
              <div key={idx} className="relative flex flex-col items-center group w-48">
                <div className="h-8 mb-2 relative flex justify-center items-end" />

                <motion.div
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-300 relative z-10 ${isActive ? 'bg-primary border-primary ring-4 ring-orange-100 scale-110 shadow-md' :
                    isPast ? 'bg-primary border-primary' : 'bg-gray-100 border-gray-300'
                    }`}
                />

                <div className={`mt-4 text-xs font-bold tracking-widest uppercase transition-colors duration-300 ${isActive ? 'text-primary' : 'text-slate-400'
                  }`}>
                  {step.label}
                </div>

                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.95 }}
                      transition={{ duration: 0.4, type: "spring" }}
                      className="absolute top-24 w-72 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
                    >
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-primary to-transparent opacity-50" />

                      <div className="w-full bg-white rounded-xl border-l-4 border-l-primary border border-gray-100 p-5 shadow-xl relative overflow-hidden">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle size={14} className="text-primary" />
                          <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{step.subtitle}</span>
                        </div>

                        <div className="text-xl font-bold text-graphite mb-2 leading-tight">{step.title}</div>
                        <p className="text-sm text-slate leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Vertical View */}
      <div className="md:hidden space-y-8 pl-8 border-l-2 border-gray-100 relative mt-8">
        <motion.div
          className="absolute left-[-2px] top-0 w-1 bg-primary rounded-full"
          initial={{ height: '0%' }}
          animate={{ height: `${((activeStep + 0.5) / steps.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />

        {steps.map((step, idx) => {
          const isActive = idx === activeStep;
          return (
            <div key={idx} className={`relative transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-50'}`}>
              <div className={`absolute left-[-37px] top-1.5 w-3 h-3 rounded-full border-2 transition-all ${isActive ? 'bg-primary border-primary ring-4 ring-orange-50 scale-110' : 'bg-gray-100 border-gray-200'}`} />

              <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{step.label}</div>

              {isActive && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white border-l-4 border-l-primary border border-gray-100 rounded-lg p-4 shadow-md mt-2"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <AlertTriangle size={12} className="text-primary" />
                    <span className="text-[10px] font-bold text-primary uppercase">{step.subtitle}</span>
                  </div>
                  <div className="font-bold text-graphite text-lg">{step.title}</div>
                  <p className="text-sm text-slate mt-1">{step.desc}</p>
                </motion.div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  );
};


// --- SECTION COMPONENT: Outcome Micro-Indicators ---

const MicroIndicator = ({ type }: { type: 'time' | 'confidence' | 'spend' | 'learn' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <div ref={ref} className="h-full flex items-center justify-center pointer-events-none">
      {type === 'time' && (
        <div className="flex items-center gap-4 text-sm font-semibold text-slate">
          <span className="text-slate/40 line-through decoration-slate/30">Days</span>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: 32, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-[2px] bg-primary relative overflow-hidden"
          >
            <ArrowRight size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-primary" />
          </motion.div>
          <motion.span
            initial={{ color: "#94a3b8", scale: 0.9 }}
            animate={isInView ? { color: "#111827", scale: 1.1 } : {}}
            transition={{ delay: 0.6 }}
            className="font-bold"
          >
            Hours
          </motion.span>
        </div>
      )}

      {type === 'confidence' && (
        <div className="relative w-36 h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
          <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-white z-10" />
          <div className="absolute left-2/4 top-0 bottom-0 w-[1px] bg-white z-10" />
          <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-white z-10" />

          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-300 to-green-500"
            initial={{ width: "20%" }}
            animate={isInView ? { width: "88%" } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute right-2 top-0 bottom-0 flex items-center">
            <span className="text-[9px] font-bold text-slate mix-blend-multiply">88%</span>
          </div>
        </div>
      )}

      {type === 'spend' && (
        <div className="relative w-28 h-14 flex items-end justify-center">
          <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
            <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#e2e8f0" strokeWidth="8" strokeLinecap="round" />
            <motion.path
              d="M 10 50 A 40 40 0 0 1 90 50"
              fill="none"
              stroke="#10b981" // green
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="126"
              strokeDashoffset="126"
              animate={isInView ? { strokeDashoffset: 35 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute bottom-0 text-[10px] font-bold text-slate flex flex-col items-center leading-none mb-1">
            <span className="text-xs">+24%</span>
            <span className="text-slate/60 text-[8px] uppercase">ROI</span>
          </div>
        </div>
      )}

      {type === 'learn' && (
        <div className="flex items-end gap-1.5 h-16">
          {[15, 30, 20, 45, 35, 70].map((h, i) => (
            <motion.div
              key={i}
              className={`w-3 rounded-t-sm ${i === 5 ? 'bg-primary' : 'bg-blue-100'}`}
              initial={{ height: 4 }}
              animate={isInView ? { height: h } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
          ))}
        </div>
      )}
    </div>
  );
};


// --- MAIN PAGE ---

interface HomeProps {
  onOpenDemo: () => void;
  onOpenExample: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenDemo, onOpenExample }) => {
  const [hoveredModule, setHoveredModule] = useState<number | null>(null);
  const [activeOutcomeFilter, setActiveOutcomeFilter] = useState<string | null>(null);
  const [activeUseCase, setActiveUseCase] = useState<keyof typeof useCaseContent>('Founders');
  const [selectedPricing, setSelectedPricing] = useState<number | null>(null);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const heroImageY = useTransform(scrollY, [0, 1000], [0, 80]);
  const shouldReduceMotion = useReducedMotion();

  // Floating animation for hero card
  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // --- Mappings ---

  const outcomeCards = [
    {
      id: 'speed',
      title: 'Faster decision cycles',
      desc: 'Move from long research loops to clear, repeatable decision workflows.',
      visual: <MicroIndicator type="time" />,
      tags: ['Decision time']
    },
    {
      id: 'confidence',
      title: 'Higher confidence execution',
      desc: 'Decisions come with confidence, reasons, and trade-offs — so teams align quickly.',
      visual: <MicroIndicator type="confidence" />,
      tags: ['Retention', 'Revenue lift']
    },
    {
      id: 'roi',
      title: 'Smarter growth spend',
      desc: 'Focus experiments on the highest-fit segments and messages that are likely to convert.',
      visual: <MicroIndicator type="spend" />,
      tags: ['Conversion rate', 'CPA / CAC', 'Activation', 'Revenue lift']
    },
    {
      id: 'learn',
      title: 'Faster learning loops',
      desc: 'Run better tests, measure lift, and iterate with evidence — not opinions.',
      visual: <MicroIndicator type="learn" />,
      tags: ['Activation', 'Retention', 'Revenue lift']
    },
  ];

  const toggleOutcomeFilter = (kpi: string) => {
    setActiveOutcomeFilter(prev => prev === kpi ? null : kpi);
  };

  const isOutcomeHighlighted = (cardTags: string[]) => {
    if (!activeOutcomeFilter) return true; // Show all if none selected
    if (activeOutcomeFilter === 'Revenue lift') return true; // Compound metric shows all
    return cardTags.includes(activeOutcomeFilter);
  };

  const useCaseContent = {
    Founders: {
      copy: "Make the call — and align your team fast.",
      list: ["Should we launch this?", "Which ICP focus?", "Landing page copy?", "Growth move?"],
      output: "Focus on D2C brands first: Higher LTV and faster integration cycle.",
      color: "orange"
    },
    Product: {
      copy: "Validate features before writing a single line of code.",
      list: ["Is this problem real?", "Will they pay for it?", "Feature prioritization?", "Messaging fit?"],
      output: "Feature X has 40% higher willingness to pay among Enterprise users.",
      color: "blue"
    },
    Growth: {
      copy: "Stop guessing. Target the channels that actually convert.",
      list: ["Which ad angle?", "Which audience segment?", "Retention lever?", "Pricing sensitivity?"],
      output: "Switching to 'Save Time' messaging improves CTR by 22% in this segment.",
      color: "green"
    }
  };

  const modules = [
    {
      title: 'Validate',
      desc: 'Test ideas with synthetic audiences before you build.',
      visual: <ValidateVisual />,
      extra: 'Shareable Decision Report',
      primary: true
    },
    {
      title: 'Intel',
      desc: 'Deep dive into market shifts and competitor moves.',
      visual: <IntelVisual />,
      extra: 'Trend snapshots',
      primary: false
    },
    {
      title: 'Attack',
      desc: 'Identify competitor weaknesses and exploit them.',
      visual: <AttackVisual />,
      extra: 'Experiment plan',
      primary: false
    },
    {
      title: 'Connect',
      desc: 'Sync decisions back to your roadmap and CRM.',
      visual: <ConnectVisual />,
      extra: 'APIs + connectors',
      primary: false
    }
  ];

  const pricing = [
    { name: 'Starter', desc: 'Best for: Solo founders & small teams' },
    { name: 'Team', desc: 'Best for: Product & growth teams', popular: true },
    { name: 'Business', desc: 'Best for: Scaling teams running weekly experiments' },
    { name: 'Enterprise', desc: 'Best for: Governance, integrations, and custom needs' },
  ];

  return (
    <div data-page>
      {/* --- Section 1: Hero --- */}
      <Section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
        {/* Animated mesh gradient background */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        <GradientBlob className="bg-orange-300 -top-20 -left-20 w-[500px] h-[500px] opacity-15" delay={0} />
        <GradientBlob className="bg-amber-200 top-40 -right-20 w-[500px] h-[500px] opacity-15" delay={2} />
        <GradientBlob className="bg-orange-100 bottom-0 left-1/3 w-[400px] h-[400px] opacity-10" delay={4} />

        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            {/* Left Column */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card shimmer-border shadow-sm backdrop-blur-sm"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-primary"
                />
                <span className="text-xs font-bold text-gradient-primary tracking-wide uppercase">Decision + Growth Layer</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl lg:text-7xl font-extrabold text-graphite tracking-tight leading-[1.05] font-display"
              >
                Make confident decisions <span className="text-gradient-primary-animated">faster</span>.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg lg:text-xl text-slate max-w-lg leading-relaxed"
              >
                Enlayer converts privacy-safe consumer signals into decision-ready recommendations — with confidence, reasons, and next steps.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button onClick={onOpenDemo}>Get a Demo</Button>
                <Button variant="white" onClick={onOpenExample}>See Example Report</Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                className="flex flex-wrap items-center gap-4 pt-6 border-t border-gray-100/30"
              >
                <div className="flex items-center gap-2 text-sm font-medium text-slate glass-card px-3 py-1.5 rounded-full transition-all duration-200 hover:shadow-md hover:border-orange-100/50">
                  <ShieldCheck size={18} className="text-primary" /> Privacy-safe signals
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate glass-card px-3 py-1.5 rounded-full transition-all duration-200 hover:shadow-md hover:border-orange-100/50">
                  <Zap size={18} className="text-primary" /> Decision-ready output
                </div>
              </motion.div>
            </div>

            {/* Right Column: Decision Report UI */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.2 }}
              style={{ y: shouldReduceMotion ? 0 : heroImageY }}
              className="relative"
            >
              <motion.div style={{ y: shouldReduceMotion ? 0 : y2 }} className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100 rounded-full opacity-40 blur-2xl" />
              <motion.div style={{ y: shouldReduceMotion ? 0 : y1 }} className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-100 rounded-full opacity-40 blur-2xl" />

              <motion.div animate={shouldReduceMotion ? {} : floatingAnimation}>
                <Card className="relative z-10 !p-0 overflow-hidden shimmer-border shadow-2xl shadow-orange-900/10">
                  {/* Gradient top accent */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent z-20" />
                  <div className="bg-gradient-to-r from-slate-50/80 to-white/90 backdrop-blur-sm px-6 py-4 border-b border-gray-100/50 flex justify-between items-center">
                    <span className="text-xs font-bold text-slate uppercase tracking-wider flex items-center gap-2">
                      <Layers size={14} className="text-primary" /> System Output
                    </span>
                    <Chip active variant="primary">High confidence</Chip>
                  </div>

                  <div className="p-6 md:p-8 space-y-8">
                    {/* Recommendation */}
                    <div>
                      <h4 className="text-xs font-bold text-primary uppercase mb-2">Recommendation</h4>
                      <p className="text-2xl font-bold text-graphite leading-tight">
                        Launch the feature — lead with "save time in 2 taps."
                      </p>
                    </div>

                    {/* Confidence Bar */}
                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <h4 className="text-xs font-bold text-primary uppercase">Confidence</h4>
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          className="text-xl font-bold text-graphite"
                        >
                          82%
                        </motion.span>
                      </div>
                      <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '82%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-orange-400 to-primary rounded-full relative"
                        >
                          <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/40 animate-pulse" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Why */}
                    <div>
                      <h4 className="text-xs font-bold text-primary uppercase mb-3">Why</h4>
                      <ul className="space-y-3">
                        {[
                          "Clearer value than alternatives",
                          "Strong intent from your ICP",
                          "Low friction to try"
                        ].map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + (i * 0.1) }}
                            className="flex items-start gap-3 text-sm text-slate"
                          >
                            <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle2 size={12} className="text-green-500" />
                            </div>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* --- SECTION 2: THE PROBLEM --- */}
      <Section background="white" gradientBorder="bottom" className="relative overflow-hidden">
        {/* Signal Noise Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-graphite opacity-[0.05]"
              initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
              animate={{
                x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                y: [Math.random() * 100 + "%", Math.random() * 100 + "%"]
              }}
              transition={{
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
          ))}
        </div>

        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
            className="mb-16 max-w-3xl relative z-10"
          >
            <motion.h2 variants={fadeInUp} className="text-base font-bold text-primary uppercase tracking-wide mb-4 font-display">The Problem</motion.h2>
            <motion.h3 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-graphite leading-tight mb-6 font-display tracking-tight">
              Most teams don’t have a decision problem. <span className="text-gradient-primary">They have a confidence problem.</span>
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-lg text-slate leading-relaxed max-w-2xl">
              Bad inputs stall progress. When teams lack confidence in their data sources, they hesitate, debate, and guess instead of executing with conviction.
            </motion.p>
          </motion.div>

          <ProblemTimeline />

        </Container>
      </Section>

      {/* --- Section 3: What Enlayer Is --- */}
      <Section background="gradient" className="relative">
        <div className="absolute inset-0 bg-slate-50/30 skew-y-1 transform origin-top-left -z-10" />
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
            >
              <h2 className="text-base font-bold text-primary uppercase tracking-wide mb-4 font-display">What Enlayer Is</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-graphite mb-6 leading-tight font-display">
                A <span className="text-gradient-primary-animated">Decision + Growth Layer</span> between insight and execution.
              </h3>
              <p className="text-lg text-slate mb-8 leading-relaxed">
                Enlayer converts privacy-safe consumer signals into decision-ready recommendations — with confidence, reasons, and next steps your team can execute.
              </p>

              <div className="mb-12 overflow-hidden -mx-1">
                <div className="flex gap-3 w-max animate-scroll-infinite">
                  {[...["Not BI dashboards", "Not surveys", "Not generic AI chat", "Not a data warehouse"], ...["Not BI dashboards", "Not surveys", "Not generic AI chat", "Not a data warehouse"]].map((text, i) => (
                    <span key={`${text}-${i}`} className="px-4 py-2 glass-card rounded-lg text-sm text-slate flex items-center gap-2 shadow-sm hover:shadow-glow-soft hover:border-primary/20 transition-all duration-300 shrink-0">
                      <span className="block w-1.5 h-1.5 bg-gradient-cta rounded-full shrink-0"></span> {text}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xl font-semibold text-graphite pl-4" style={{ borderLeft: '4px solid transparent', borderImage: 'linear-gradient(135deg, #FF7A00, #F59E0B) 1' }}>
                Enlayer is the layer that tells you what to do next — and why.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8 md:p-12 shadow-soft relative overflow-hidden"
            >
              <GradientBlob className="bg-orange-100 -right-20 -bottom-20 w-64 h-64" />
              <h4 className="font-bold text-xl text-graphite mb-10 relative z-10 font-display">How Enlayer works</h4>
              <div className="relative space-y-12 pl-6 z-10" style={{ borderLeft: '2px solid transparent', borderImage: 'linear-gradient(to bottom, #FF7A00, #F59E0B, transparent) 1' }}>
                {[
                  { step: "Question", sub: "\"Should we launch this?\"" },
                  { step: "Decision", sub: "Confidence + reasons" },
                  { step: "Action", sub: "Messaging + segments + tests" },
                  { step: "Outcome", sub: "Measured impact: Learn → iterate" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-gradient-cta text-white flex items-center justify-center font-bold text-sm shadow-md shadow-orange-200 ring-4 ring-white z-20">
                      {idx + 1}
                    </span>
                    <h5 className="font-bold text-graphite text-lg">{item.step}</h5>
                    <p className="text-slate text-sm">{item.sub}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* --- Section 4: How it works --- */}
      <Section className="relative overflow-hidden py-20 md:py-32">
        {/* Prominent soft peach/orange gradient background */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />

        <Container className="relative z-10">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
            className="text-center mb-16 md:mb-20"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-orange-200/70 shadow-md shimmer-border mb-6">
              <Zap size={16} className="text-primary shrink-0" />
              <span className="text-xs font-bold text-gradient-primary uppercase tracking-widest">How it works</span>
            </motion.div>
            <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-graphite font-display leading-tight tracking-tight">
              From question to <span className="text-gradient-primary-animated">growth</span>
              <br className="hidden sm:block" /> in 3 simple steps.
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-slate text-lg md:text-xl mt-5 max-w-2xl mx-auto leading-relaxed">
              A streamlined workflow that transforms raw data into confident decisions.
            </motion.p>
          </motion.div>

          {/* Desktop: Horizontal Steps */}
          <div className="hidden md:block relative">
            {/* Animated connector line */}
            <div className="absolute top-[150px] left-[10%] right-[10%] z-0">
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gray-200/80 to-transparent rounded-full" />
              <motion.div
                className="absolute top-0 left-0 h-[2px] rounded-full min-w-0"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,122,0,0.5) 20%, #FF7A00 40%, #F59E0B 50%, #FF7A00 60%, rgba(255,122,0,0.5) 80%, transparent 100%)',
                  backgroundSize: '100% 100%'
                }}
                initial={{ width: '0%', opacity: 0 }}
                whileInView={{ width: '100%', opacity: 1 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1], delay: 0.3 }}
              />
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-primary shadow-glow-primary"
                initial={{ left: '0%', opacity: 0, scale: 0 }}
                whileInView={{ left: ['0%', '100%'], opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 2.2, delay: 0.7, ease: "easeInOut" }}
              />
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={staggerContainer}
              className="grid grid-cols-3 gap-6 lg:gap-10 relative z-10"
            >
              {[
                {
                  step: "01",
                  title: "Connect",
                  desc: "Plug in your data sources (Stripe, HubSpot, GA4) and define your ICP.",
                  icon: <Share2 className="text-primary" size={25} />,
                  gradient: "from-orange-500/10 via-amber-500/5 to-transparent",
                  ringColor: "ring-orange-200/60",
                  glowColor: "group-hover:shadow-[0_0_30px_rgba(255,122,0,0.15)]"
                },
                {
                  step: "02",
                  title: "Analyze",
                  desc: "AI agents test hypotheses against synthetic audiences and live market signals.",
                  icon: <Search className="text-primary" size={25} />,
                  gradient: "from-amber-500/10 via-yellow-500/5 to-transparent",
                  ringColor: "ring-amber-200/60",
                  glowColor: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
                },
                {
                  step: "03",
                  title: "Decide",
                  desc: "Get a clear 'Go/No-Go' memo with confidence scores and execution steps.",
                  icon: <CheckCircle2 className="text-primary" size={25} />,
                  gradient: "from-green-500/10 via-emerald-500/5 to-transparent",
                  ringColor: "ring-green-200/60",
                  glowColor: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
                  className="group"
                >
                  <div className={`relative flex flex-col items-center text-center glass-card rounded-3xl p-8 pt-12 transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-card-hover ${item.glowColor} hover:border-primary/25 border border-white/50 overflow-hidden group/card`}>
                    {/* Gradient accent at top with subtle animation */}
                    <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r ${item.gradient} transition-opacity duration-300 group-hover/card:opacity-100`} />
                    {/* Soft gradient border glow on hover */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none ring-1 ring-primary/10" style={{ background: 'linear-gradient(135deg, rgba(255,122,0,0.03), transparent 40%, transparent 60%, rgba(245,158,11,0.03))' }} />

                    {/* Icon circle with animated ring */}
                    <div className="relative mb-8">
                      {/* Outer pulse ring */}
                      <motion.div
                        className={`absolute inset-[-10px] rounded-full ring-2 ${item.ringColor} opacity-0 group-hover:opacity-100`}
                        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      />
                      {/* Icon container */}
                      <div className="w-15 h-15 rounded-2xl bg-gradient-to-br from-white to-gray-50/80 border border-white/80 shadow-glass flex items-center justify-center relative transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-glow-soft group-hover:rounded-xl">
                        <div className="relative z-10 transition-transform duration-300 group-hover:scale-105">{item.icon}</div>
                      </div>
                      {/* Step badge */}
                      <motion.div
                        className="absolute -top-3 -right-3 w-9 h-9 rounded-xl bg-gradient-cta text-white flex items-center justify-center font-bold text-xs shadow-lg shadow-orange-500/30 border-[3px] border-white"
                        initial={{ scale: 0, rotate: -12 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 260, delay: 0.4 + i * 0.15 }}
                        whileHover={{ scale: 1.08, rotate: 4 }}
                      >
                        {item.step}
                      </motion.div>
                    </div>

                    {/* Content */}
                    <h4 className="text-xl font-bold text-graphite mb-3 font-display group-hover:text-gradient-primary transition-all duration-300">{item.title}</h4>
                    <p className="text-slate text-sm leading-relaxed max-w-[260px]">{item.desc}</p>

                    {/* Learn more link with hover state */}
                    <motion.a
                      href="#"
                      className="group/link mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary/70 hover:text-primary transition-all duration-300 rounded-lg px-3 py-1.5 -m-1.5 hover:bg-orange-50/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.15 }}
                      onClick={(e) => e.preventDefault()}
                    >
                      <span>Learn more</span>
                      <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform duration-200" strokeWidth={2.5} />
                    </motion.a>
                  </div>

                  {/* Progression arrow after third card */}
                  {i == 2 && (
                    <div className="absolute top-[150px] -right-2 translate-x-full z-20 hidden md:flex items-center justify-center">
                      <motion.div
                        className="w-9 h-9 rounded-full bg-gradient-cta text-white shadow-lg shadow-orange-500/25 flex items-center justify-center"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                        whileHover={{ scale: 1.1, x: 2 }}
                      >
                        <ArrowRight size={18} className="text-white" strokeWidth={2.5} />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile: Vertical Steps */}
          <div className="md:hidden space-y-6 relative">
            {/* Vertical gradient line */}
            <div className="absolute left-6 top-0 bottom-0 w-[2px]" style={{ background: 'linear-gradient(to bottom, #FF7A00, #F59E0B, transparent)' }} />

            {[
              {
                step: "01",
                title: "Connect",
                desc: "Plug in your data sources (Stripe, HubSpot, GA4) and define your ICP.",
                icon: <Share2 className="text-primary" size={22} />
              },
              {
                step: "02",
                title: "Analyze",
                desc: "AI agents test hypotheses against synthetic audiences and live market signals.",
                icon: <Search className="text-primary" size={22} />
              },
              {
                step: "03",
                title: "Decide",
                desc: "Get a clear 'Go/No-Go' memo with confidence scores and execution steps.",
                icon: <CheckCircle2 className="text-primary" size={22} />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-start gap-5 pl-2"
              >
                {/* Step dot on the line */}
                <div className="relative shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-gradient-cta text-white flex items-center justify-center font-bold text-xs shadow-lg shadow-orange-500/20 border-[3px] border-white">
                    {item.step}
                  </div>
                </div>

                {/* Card */}
                <div className="glass-card rounded-2xl p-5 flex-1 relative overflow-hidden">
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-primary/40 to-transparent rounded-l-2xl" />
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold text-graphite font-display">{item.title}</h4>
                  </div>
                  <p className="text-slate text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA: See it in action */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
            className="text-center mt-14 md:mt-16"
          >
            <motion.button
              type="button"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/95 backdrop-blur-md border border-orange-200/70 text-sm font-semibold text-graphite hover:text-primary hover:shadow-glow-soft hover:border-primary/40 transition-all duration-300 cursor-pointer group shimmer-border shadow-md"
              onClick={onOpenDemo}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Zap size={18} className="text-primary shrink-0 group-hover:scale-110 transition-transform duration-200" />
              <span>See it in action</span>
              <ArrowRight size={16} className="text-primary/80 group-hover:translate-x-1 transition-transform duration-200" strokeWidth={2.5} />
            </motion.button>
          </motion.div>
        </Container>
      </Section>

      {/* --- SECTION 5: MODULES --- */}
      <Section id="modules" background="default" gradientBorder="bottom">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-base font-bold text-primary uppercase tracking-wide mb-4 font-display">Modules</motion.h2>
            <motion.h3 variants={fadeInUp} className="text-4xl font-bold text-graphite font-display tracking-tight">The <span className="text-gradient-primary">Enlayer</span> Suite</motion.h3>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 relative"
          >
            <ConnectorRails hoveredIndex={hoveredModule} />

            {modules.map((mod, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                onMouseEnter={() => setHoveredModule(idx)}
                onMouseLeave={() => setHoveredModule(null)}
                className="relative z-10"
                animate={{
                  opacity: (hoveredModule !== null && hoveredModule !== idx && mod.primary && hoveredModule === 0) ? 0.6 : 1,
                  scale: hoveredModule === idx ? 1.02 : 1
                }}
                transition={{ duration: 0.2 }}
              >
                <AnimatedCard
                  noHover
                  className={`!p-0 relative flex flex-col group transition-all duration-400 overflow-hidden h-full
                    ${mod.primary ? 'ring-2 ring-orange-100 shimmer-border' : ''}
                    ${hoveredModule === idx ? 'shadow-card-hover ring-1 ring-primary/20' : 'shadow-soft'}
                  `}
                >
                  {/* Primary Badge */}
                  {mod.primary && (
                    <motion.div
                      className="absolute top-4 right-4 bg-gradient-cta text-white text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-md shadow-orange-500/20 z-20 uppercase tracking-wide"
                      initial={{ opacity: 0.8 }}
                      animate={hoveredModule === idx ? { opacity: 1, scale: 1.05 } : { opacity: 0.8 }}
                    >
                      Core System
                    </motion.div>
                  )}

                  {/* Visual Area */}
                  <div className="h-48 relative overflow-hidden group-hover:bg-orange-50/10 transition-colors">
                    {mod.visual}
                  </div>

                  {/* Content */}
                  <div className="p-8 bg-white relative z-10 flex-grow flex flex-col">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold text-graphite font-display">{mod.title}</h4>
                    </div>
                    <p className="text-slate mb-4 text-sm leading-relaxed">{mod.desc}</p>

                    {/* Expand Detail */}
                    <motion.div
                      className="mt-auto pt-4 border-t border-gray-50 text-xs font-bold text-primary flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronRight size={14} /> {mod.extra}
                    </motion.div>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 text-center text-slate font-medium text-sm">
            Use them together — or start with one.
          </div>
        </Container>
      </Section>

      {/* --- Section 6: Use Cases (Tabbed, like enlayer.ai) --- */}
      <Section id="use-cases" background="white" className="bg-gray-50/30 pt-10 md:pt-14 pb-16 md:pb-20">
        <Container>
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={staggerContainer}
              className="text-center mb-6"
            >
              <motion.span variants={fadeInUp} className="inline-block text-base font-bold text-primary uppercase tracking-wide mb-3 font-display">
                Use Cases
              </motion.span>
              <motion.h3 variants={fadeInUp} className="text-4xl font-bold text-graphite mb-3 font-display">
                Built for <span className="text-gradient-primary">every team</span>.
              </motion.h3>
              <motion.p variants={fadeInUp} className="text-slate text-lg">
                Whether you're finding fit or scaling it.
              </motion.p>
            </motion.div>
            {/* Persona Tabs */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-20px' }}
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-3 mb-6 px-3 py-2 rounded-full bg-white/70 shadow-sm shadow-orange-100/60 border border-orange-50/80 backdrop-blur-sm"
            >
              {(Object.keys(useCaseContent) as (keyof typeof useCaseContent)[]).map((key) => {
                const content = useCaseContent[key];
                const isActive = activeUseCase === key;
                const isOrange = content.color === 'orange';
                const isBlue = content.color === 'blue';
                const isGreen = content.color === 'green';
                const iconBg = isOrange ? 'bg-orange-100 text-orange-600' : isBlue ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600';

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveUseCase(key)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer border
                      ${
                        isActive
                          ? 'bg-gradient-cta text-white shadow-md shadow-orange-200/60 border-transparent ring-2 ring-orange-200'
                          : 'bg-white/95 border-gray-200 text-slate hover:border-primary/40 hover:text-primary hover:shadow-glow-soft hover:-translate-y-0.5'
                      }`}
                  >
                    <span
                      className={`w-8 h-8 rounded-2xl flex items-center justify-center text-xs font-bold ${iconBg}`}
                    >
                      {key === 'Founders' ? <Target size={18} /> : key === 'Product' ? <Layers size={18} /> : <TrendingUp size={18} />}
                    </span>
                    <span className="font-display tracking-tight">{key}</span>
                  </button>
                );
              })}
            </motion.div>

            {/* Active Persona Panel */}
            <AnimatePresence mode="wait">
              {(() => {
              const content = useCaseContent[activeUseCase];
              const isOrange = content.color === 'orange';
              const isBlue = content.color === 'blue';
              const isGreen = content.color === 'green';
              const accentBorder = isOrange ? 'border-l-orange-400' : isBlue ? 'border-l-blue-400' : 'border-l-green-400';
              const iconBg = isOrange ? 'bg-orange-100 text-orange-600' : isBlue ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600';
              const shadowColor = isOrange ? 'shadow-orange-100/50' : isBlue ? 'shadow-blue-100/50' : 'shadow-green-100/50';
              const dotColor = isOrange ? 'bg-orange-400' : isBlue ? 'bg-blue-400' : 'bg-green-400';
                const panelTint = isOrange
                ? 'from-orange-50/80 via-white to-white'
                : isBlue
                  ? 'from-blue-50/80 via-white to-white'
                  : 'from-emerald-50/80 via-white to-white';
              const insightTint = isOrange
                ? 'from-orange-50/80 to-white'
                : isBlue
                  ? 'from-blue-50/80 to-white'
                  : 'from-emerald-50/80 to-white';

                return (
                  <motion.div
                    key={activeUseCase}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-5 items-stretch"
                  >
                  {/* Left: Copy + Questions */}
                  <AnimatedCard
                    noHover
                    className={`relative overflow-visible group/card transition-all duration-300 border border-gray-200/80 bg-gradient-to-br ${panelTint} border-l-4 ${accentBorder}`}
                  >
                    <div className="mb-6 relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-2xl font-bold text-graphite font-display tracking-tight">{activeUseCase}</h4>
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${iconBg} ${shadowColor} shadow-md`}
                        >
                          {activeUseCase === 'Founders' ? <Target size={24} /> : activeUseCase === 'Product' ? <Layers size={24} /> : <TrendingUp size={24} />}
                        </div>
                      </div>
                      <p className="font-medium text-slate text-lg leading-snug min-h-[56px]">{content.copy}</p>
                    </div>

                    <div className="space-y-3 mb-6 flex-grow min-h-0">
                      <p className="text-xs font-bold text-slate/50 uppercase tracking-wider mb-2">
                        Top Questions
                      </p>
                      {content.list.map((q, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 text-sm text-slate group-hover/card:text-graphite transition-colors duration-200 rounded-2xl px-2 py-1.5 hover:bg-white/70"
                        >
                          <div
                            className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${dotColor} transition-transform duration-200 group-hover/card:scale-110`}
                          />
                          {q}
                        </div>
                      ))}
                    </div>
                  </AnimatedCard>

                  {/* Right: Example Insight */}
                  <AnimatedCard
                    noHover
                    className={`relative overflow-hidden flex flex-col justify-between border border-gray-200/80 bg-gradient-to-b ${insightTint}`}
                  >
                    <div className="mb-4">
                      <p className="text-xs font-bold text-slate/60 uppercase tracking-wider mb-2">
                        Example Insight
                      </p>
                      <p className="text-base font-medium text-graphite italic leading-relaxed">
                        “{content.output}”
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100/70 text-xs text-slate/70">
                      <span>Decision-ready output for {activeUseCase}</span>
                      <Sparkles size={16} className={isOrange ? 'text-orange-500' : isBlue ? 'text-blue-500' : 'text-green-500'} />
                    </div>
                  </AnimatedCard>
                </motion.div>
              );
            })()}
            </AnimatePresence>
          </div>
        </Container>
      </Section>

      {/* --- SECTION 7: OUTCOMES --- */}
      <Section gradientBorder="top">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-base font-bold text-primary uppercase tracking-wide mb-4 font-display">Outcomes</h2>
            <h3 className="text-4xl font-bold text-graphite mb-6 font-display">Clarity that compounds into <span className="text-gradient-primary-animated">growth</span>.</h3>
          </motion.div>

          {/* Interactive Filters */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20px' }}
            className="flex flex-wrap gap-2 mb-10"
          >
            <span className="text-sm font-bold text-graphite mr-2 self-center">What teams measure:</span>
            {['Decision time', 'Conversion rate', 'Activation', 'Retention', 'CPA / CAC', 'Revenue lift'].map(kpi => {
              const isActive = activeOutcomeFilter === kpi;
              return (
                <button
                  key={kpi}
                  onClick={() => toggleOutcomeFilter(kpi)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 flex items-center gap-1 ${isActive
                    ? 'bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200 text-primary shadow-sm shadow-orange-100/50'
                    : 'glass-panel text-slate hover:border-orange-200 hover:text-primary hover:shadow-glow-soft'
                    }`}
                >
                  {kpi}
                  {isActive && <X size={10} />}
                </button>
              )
            })}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20px' }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {outcomeCards.map((out, idx) => {
              const highlighted = isOutcomeHighlighted(out.tags);
              const parallaxY = idx < 2 ? -20 : -10;

              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="h-full"
                  style={{ y: shouldReduceMotion ? 0 : useTransform(scrollY, [1800, 3000], [0, parallaxY]) }}
                  animate={{ opacity: highlighted ? 1 : 0.4, scale: highlighted ? 1 : 0.98, filter: highlighted ? 'grayscale(0%)' : 'grayscale(100%)' }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    hoverEffect={highlighted}
                    className={`!p-0 flex flex-col h-full group overflow-hidden transition-all duration-300 ${highlighted ? 'ring-1 ring-orange-100 shadow-md' : 'shadow-none border-gray-100 bg-gray-50'
                      }`}
                  >
                    <div className="h-32 bg-gradient-to-br from-white to-gray-50 border-b border-gray-50 relative overflow-hidden flex items-center justify-center">
                      {out.visual}
                    </div>
                    <div className="p-8 flex-grow">
                      <h4 className="text-xl font-bold text-graphite mb-3 font-display">{out.title}</h4>
                      <p className="text-slate mb-6 text-sm leading-relaxed">{out.desc}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Compound Loop Graphic */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-2 md:gap-6 text-[10px] md:text-xs font-bold text-slate/40 uppercase tracking-widest"
          >
            <span className="hover:text-primary transition-colors cursor-default">Decide</span>
            <ChevronRight size={14} />
            <span className="hover:text-primary transition-colors cursor-default">Execute</span>
            <ChevronRight size={14} />
            <span className="hover:text-primary transition-colors cursor-default">Measure</span>
            <ChevronRight size={14} />
            <span className="hover:text-primary transition-colors cursor-default">Learn</span>
            <ChevronRight size={14} />
            <span className="text-primary font-bold">Growth</span>
            <motion.div
              className="w-5 h-5 rounded-full border-2 border-primary/20 border-t-primary animate-spin"
              style={{ animationDuration: '2s' }}
            />
          </motion.div>
        </Container>
      </Section>

      {/* --- Section 8: Pricing --- */}
      <Section id="pricing" background="gradient">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="inline-block text-base font-bold text-primary uppercase tracking-wide mb-4 font-display">Pricing</motion.span>
            <motion.h3 variants={fadeInUp} className="text-4xl font-bold text-graphite mb-4 font-display">Simple plans for <span className="text-gradient-primary">every stage</span>.</motion.h3>
            <motion.p variants={fadeInUp} className="text-slate max-w-xl mx-auto text-lg">Start with a 14-day free trial. No credit card required.</motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch"
          >
            {pricing.map((p, i) => {
              const price = i === 0 ? '$0' : i === 1 ? '$49' : i === 2 ? '$199' : 'Custom';
              const period = i === 3 ? '' : '/mo';
              const isSelected = selectedPricing === i;
              const isDimmed = !isSelected && selectedPricing !== null;
              const features = i === 0
                ? ['2 Decision reports', 'Basic signals', '1 User']
                : i === 1
                  ? ['Unlimited reports', 'Market Intel', '3 Users', 'Slack integration']
                  : i === 2
                    ? ['Everything in Team', 'Competitor Attack', '10 Users', 'API Access']
                    : ['Everything in Business', 'SSO & Audit Logs', 'Dedicated Success', 'Custom Integrations'];

              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  onClick={() => setSelectedPricing(prev => prev === i ? null : i)}
                  className={`group/card h-full transition-all duration-300 ease-out cursor-pointer ${p.popular ? 'lg:-mt-2 lg:mb-2' : ''} ${isDimmed ? 'opacity-75 scale-[0.98]' : ''}`}
                  whileHover={{ y: p.popular ? -4 : -2, transition: { duration: 0.25 } }}
                >
                  <AnimatedCard
                    noHover
                    className={`flex flex-col relative h-full overflow-visible transition-all duration-300 ease-out
                      ${isSelected
                        ? 'ring-2 ring-primary shadow-xl shadow-orange-500/15 scale-[1.02] bg-white'
                        : p.popular
                          ? 'ring-2 ring-primary/90 shadow-xl shadow-orange-500/10 z-10 bg-white/95'
                          : 'border border-gray-200/80 bg-white/90'
                      }`}
                  >
                    {p.popular && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                      >
                        <span className="inline-flex items-center gap-1.5 bg-gradient-cta text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg shadow-orange-500/25 border border-white/20">
                          Most Popular
                        </span>
                      </motion.div>
                    )}

                    <div className="mb-6 pt-1">
                      <h4 className="font-bold text-xl text-graphite mb-2 font-display tracking-tight">{p.name}</h4>
                      <p className="text-sm text-slate leading-snug min-h-[40px]">{p.desc}</p>
                    </div>

                    <div className="mb-6 pb-6 border-b border-gray-100">
                      <span className={`text-3xl lg:text-4xl font-bold font-display tracking-tight ${p.popular ? 'text-gradient-primary' : 'text-graphite'}`}>{price}</span>
                      <span className="text-slate text-sm font-medium ml-0.5">{period}</span>
                    </div>

                    <ul className="space-y-4 mb-8 flex-grow">
                      {features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate transition-colors duration-200 group-hover/card:text-graphite">
                          <CheckCircle2 size={18} className={`mt-0.5 shrink-0 transition-colors duration-200 ${p.popular ? 'text-primary' : 'text-slate-400 group-hover/card:text-primary/70'}`} />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto">
                      <Button
                        variant={p.popular ? 'primary' : 'secondary'}
                        fullWidth
                        className={`transition-all duration-300 ${!p.popular ? '!border-gray-200 hover:!border-primary/40 hover:!bg-orange-50/30' : 'shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/25'}`}
                      >
                        {i === 3 ? 'Contact Sales' : 'Start Trial'}
                      </Button>
                    </div>
                  </AnimatedCard>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </Section>
    </div>
  );
};