import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { Sun, Moon, FileText, MapPin, Users, Camera, BarChart3, Wrench, Printer, Cpu, GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenDossier?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDossier }) => {
  const { scrollY } = useScroll();
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest >= 80);
  });

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'overview-section', label: 'Overview', icon: FileText },
    { id: 'households-section', label: 'Households', icon: Users },
    { id: 'field-photos-section', label: 'Field Photos', icon: Camera },
    { id: 'map-section', label: 'Village Map', icon: MapPin },
    { id: 'analytics-section', label: 'Analytics', icon: BarChart3 },
    { id: 'cse-solutions-section', label: 'CSE Solutions', icon: Cpu },
    { id: 'interventions-section', label: 'Interventions', icon: Wrench },
    { id: 'mentors-section', label: 'Mentors', icon: GraduationCap },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FBF9F5]/90 dark:bg-[#131D12]/90 backdrop-blur-md shadow-xs border-b border-[#243324]/10 dark:border-white/10 py-3'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left Brand Badge */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#243324] dark:bg-[#344D32] text-[#F4EFE6] flex items-center justify-center font-bold text-sm tracking-wider shadow-sm group-hover:scale-105 transition-transform">
              WPU
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-semibold text-sm sm:text-base text-[#1F2B1D] dark:text-[#F4EFE6] tracking-tight">
                  RUIP Report 2026
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-[#3B4D36]/10 dark:bg-emerald-500/20 text-[#3B4D36] dark:text-emerald-300">
                  Mudhale • Baramati
                </span>
              </div>
              <p className="text-[11px] text-[#657351] dark:text-[#A3B59E] font-medium hidden sm:block">
                Dept. of Computer Engineering & Technology, MIT-WPU Pune
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[#3B4D36] dark:text-[#CBD7C7] hover:text-[#1F2B1D] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools: Print Dossier & Theme Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {onOpenDossier && (
              <button
                type="button"
                onClick={onOpenDossier}
                className="hidden xs:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#243324] dark:bg-[#384F35] text-[#F4EFE6] text-xs font-medium hover:bg-[#1A261A] dark:hover:bg-[#456341] transition-all shadow-xs cursor-pointer"
                title="View & Print Official Survey Dossier"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Export Dossier</span>
              </button>
            )}

            {/* Dark / Light Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-[#243324]/15 dark:border-white/20 bg-white/60 dark:bg-[#202E1E] text-[#1F2B1D] dark:text-[#F4EFE6] hover:bg-white dark:hover:bg-[#2A3D28] transition-colors cursor-pointer"
              aria-label="Toggle theme"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, scale: 0.7, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 90, scale: 0.7, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-4 h-4 text-amber-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, scale: 0.7, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: -90, scale: 0.7, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-4 h-4 text-[#1F2B1D]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border border-[#243324]/15 dark:border-white/20 bg-white/60 dark:bg-[#202E1E] text-[#1F2B1D] dark:text-[#F4EFE6]"
              aria-label="Toggle navigation menu"
            >
              <div className="w-4 h-3.5 flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-current transform transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`h-0.5 w-full bg-current transition-opacity ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`h-0.5 w-full bg-current transform transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#FBF9F5] dark:bg-[#152014] border-b border-[#243324]/10 dark:border-white/10 px-4 py-3 space-y-1 overflow-hidden"
            >
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-sm font-medium text-[#243324] dark:text-[#F4EFE6] hover:bg-black/5 dark:hover:bg-white/10"
                  >
                    <Icon className="w-4 h-4 text-[#657351] dark:text-[#A3B59E]" />
                    <span>{link.label}</span>
                  </button>
                );
              })}

              {onOpenDossier && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDossier();
                  }}
                  className="w-full mt-2 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#243324] dark:bg-[#384F35] text-white text-sm font-medium"
                >
                  <Printer className="w-4 h-4" />
                  <span>View Official Survey Dossier</span>
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
