import React from 'react';
import { motion } from 'motion/react';
import { Home, ShieldCheck, HeartHandshake, Landmark, Flame, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { VILLAGE_STAT_CARDS, RUIP_REPORT_HEADER } from '../data/mudhaleSurveyData';
import { VILLAGE_IMAGES } from '../assets/images';

export const OverviewSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-orange-600 dark:text-orange-400" />;
      case 'AlertCircle':
        return <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      default:
        return <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section
      id="overview-section"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FBF9F5] dark:bg-[#131D12] text-[#243324] dark:text-[#F4EFE6] transition-colors duration-400"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#3B4D36]/10 dark:bg-white/10 text-[#3B4D36] dark:text-[#85E7B7]">
            <span>Executive Overview & Village Demographics</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#1F2B1D] dark:text-[#F4EFE6] font-normal tracking-tight leading-[1.08]">
            Mudhale Village: Agrarian Stability & Emerging Technology Opportunities
          </h2>

          <p className="text-base sm:text-lg text-[#3B4D36] dark:text-[#CBD7C7] font-light leading-relaxed">
            Located in the fertile cooperative belt of Baramati Taluka, Mudhale exhibits notable baseline achievements in physical infrastructure, 100% pucca housing, and universal toilet adoption, alongside critical emerging challenges in irrigation schedules and farm mechanization.
          </p>
        </div>

        {/* 6 Key Village Indicator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VILLAGE_STAT_CARDS.map((stat, idx) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#1A261A] border border-[#243324]/10 dark:border-white/10 shadow-xs hover:shadow-md transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-2xl bg-[#F5F2EB] dark:bg-[#233522]">
                  {getIcon(stat.iconName)}
                </div>
                <span className="font-display text-3xl sm:text-4xl text-[#1F2B1D] dark:text-[#F4EFE6] font-normal">
                  {stat.value}
                </span>
              </div>
              <div>
                <h3 className="font-display text-lg text-[#1F2B1D] dark:text-[#F4EFE6] font-medium">
                  {stat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#657351] dark:text-[#A3B59E] font-light leading-relaxed pt-1">
                  {stat.subtext}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Institutional Context & Landscape Visual Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          {/* Someshwar Vidyalaya Campus Photo */}
          <div className="lg:col-span-7 h-[360px] sm:h-[440px] rounded-3xl overflow-hidden shadow-lg relative bg-[#1F2B1D]">
            <img
              src={VILLAGE_IMAGES.schoolCampus}
              alt="Someshwar Vidyalaya Mudhale Campus and rural surroundings"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md">
                Primary Immersion Anchor
              </span>
              <h4 className="font-display text-xl sm:text-2xl text-white font-normal">
                Someshwar Vidyalaya, Mudhale
              </h4>
              <p className="text-xs text-white/80 font-light">
                Taluka Baramati, District Pune (PIN: 413110) • Coordinates: 18.179808° N, 74.386464° E
              </p>
            </div>
          </div>

          {/* Academic Synthesis Notes */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-[#F5F2EB] dark:bg-[#1E2E1D] border border-[#243324]/10 dark:border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-400 font-medium text-sm">
                <Info className="w-4 h-4" />
                <span>Field Immersion Methodology</span>
              </div>
              <h3 className="font-display text-2xl text-[#1F2B1D] dark:text-[#F4EFE6] font-normal leading-snug">
                Department of Computer Engineering & Technology, MIT-WPU
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5D44] dark:text-[#CBD7C7] font-light leading-relaxed">
                As part of MIT-WPU’s Rural Immersion Program (RUIP), student engineering cohorts conducted field visits across Mudhale’s residential hamlets and agricultural lands. Data was collected across 14 standardised socio-economic parameters covering housing, livelihood, credit access, drinking water, and state welfare schemes.
              </p>
              <div className="pt-2 border-t border-[#243324]/10 dark:border-white/10 flex items-center justify-between text-xs text-[#657351] dark:text-[#A3B59E]">
                <span>Sample Size: 5 Target Case Studies</span>
                <span>Total Surveyed: 27 Citizens</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#1A261A] border border-[#243324]/10 dark:border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 flex items-center justify-center font-bold text-lg shrink-0">
                100%
              </div>
              <div className="text-xs">
                <span className="font-semibold text-[#1F2B1D] dark:text-[#F4EFE6] block">
                  Swachh Bharat & Pucca Construction Landmark
                </span>
                <span className="text-[#657351] dark:text-[#A3B59E]">
                  Zero open defecation and 100% reinforced masonry housing across all surveyed households.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
