import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowDown, Users, CheckCircle2, Building, Calendar } from 'lucide-react';
import { VILLAGE_IMAGES } from '../assets/images';
import { RUIP_REPORT_HEADER } from '../data/mudhaleSurveyData';

export const HeroSection: React.FC = () => {
  const handleScrollToOverview = () => {
    const el = document.getElementById('overview-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToHouseholds = () => {
    const el = document.getElementById('households-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen w-full flex flex-col justify-center items-center overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-[#182417] text-[#F4EFE6]">
      {/* Background Hero Image with Dark Botanical Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}assets/aistudio/IMG-20260813-WA0235.jpg_71afe591.jpeg`}
          alt="MIT-WPU Rural Immersion Delegation at Someshwar Vidyalaya Mudhale"
          className="w-full h-full object-cover object-center scale-105 filter brightness-60 contrast-105"
        />
        {/* Multi-stage dark gradient overlays for maximum editorial contrast & legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#131D12] via-[#162215]/80 to-[#10190F]/70" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#131D12]/40 to-[#131D12]/80" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center space-y-6 sm:space-y-8">
        {/* Academic Institutional Tag & Location Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-[#F4EFE6]"
        >
          <span className="flex items-center gap-1 text-emerald-300 font-semibold">
            <Building className="w-3.5 h-3.5" />
            MIT-WPU Pune
          </span>
          <span className="text-white/40">•</span>
          <span>Dept. of Computer Engineering & Technology</span>
          <span className="text-white/40">•</span>
          <span className="flex items-center gap-1 text-amber-200">
            <Calendar className="w-3.5 h-3.5" />
            RUIP 2026
          </span>
        </motion.div>

        {/* Primary Report Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-3"
        >
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.02] text-[#F4EFE6] font-normal drop-shadow-md">
            Mudhale Village
            <span className="block text-2xl sm:text-4xl md:text-5xl font-light text-[#E8DCC4] mt-1 font-sans">
              Rural Immersion Project (RUIP) Report
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#CBD7C7] font-light max-w-3xl mx-auto leading-relaxed pt-2">
            A comprehensive socio-economic, agrarian, and infrastructure field study across representative households in Baramati Taluka, Pune District, Maharashtra.
          </p>
          <p className="text-xs sm:text-sm text-[#A3B59E] font-sans tracking-wide">
            सोमेश्वर विद्यालय मुढाळे परिसर, तालुका बारामती, जि. पुणे (पिन: ४१३११०)
          </p>
        </motion.div>

        {/* GPS Geotag & Immersion Details Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 text-xs text-[#E8DCC4]"
        >
          <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Someshwar Vidyalaya Base: 18.179808° N, 74.386464° E</span>
          <span className="text-white/30">|</span>
          <span>SH-62 Baramati Cluster: 18.184937° N, 74.387502° E</span>
        </motion.div>

        {/* Key Aggregate Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-2"
        >
          <div className="p-3.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left space-y-1">
            <div className="flex items-center justify-between text-emerald-300">
              <Users className="w-4 h-4" />
              <span className="text-[11px] font-semibold uppercase tracking-wider">Sample</span>
            </div>
            <div className="font-display text-2xl sm:text-3xl text-white font-normal">
              {RUIP_REPORT_HEADER.totalSampleHouseholds} <span className="text-xs font-sans text-white/70">Homes</span>
            </div>
            <p className="text-[11px] text-[#CBD7C7] truncate">27 Family Members</p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left space-y-1">
            <div className="flex items-center justify-between text-emerald-300">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-[11px] font-semibold uppercase tracking-wider">Housing</span>
            </div>
            <div className="font-display text-2xl sm:text-3xl text-white font-normal">
              100%
            </div>
            <p className="text-[11px] text-[#CBD7C7] truncate">Pucca Homes & Toilets</p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left space-y-1">
            <div className="flex items-center justify-between text-amber-300">
              <Building className="w-4 h-4" />
              <span className="text-[11px] font-semibold uppercase tracking-wider">Economy</span>
            </div>
            <div className="font-display text-2xl sm:text-3xl text-white font-normal">
              80%
            </div>
            <p className="text-[11px] text-[#CBD7C7] truncate">Agri & Dairy / 20% Kirana</p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left space-y-1">
            <div className="flex items-center justify-between text-sky-300">
              <MapPin className="w-4 h-4" />
              <span className="text-[11px] font-semibold uppercase tracking-wider">Banking</span>
            </div>
            <div className="font-display text-2xl sm:text-3xl text-white font-normal">
              80%
            </div>
            <p className="text-[11px] text-[#CBD7C7] truncate">Cooperative Credit (PDCC)</p>
          </div>
        </motion.div>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <button
            type="button"
            onClick={handleScrollToHouseholds}
            className="px-6 py-3.5 rounded-2xl bg-[#E8DCC4] text-[#1F2B1D] font-semibold text-sm hover:bg-white transition-all shadow-md cursor-pointer flex items-center gap-2"
          >
            <span>Explore 5 Household Case Studies</span>
          </button>
          <button
            type="button"
            onClick={handleScrollToOverview}
            className="px-6 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 text-[#F4EFE6] font-medium text-sm backdrop-blur-md border border-white/20 transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Village Indicators</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
