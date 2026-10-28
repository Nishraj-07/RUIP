/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OverviewSection } from './components/OverviewSection';
import { HouseholdSurveySection } from './components/HouseholdSurveySection';
import { FieldGallerySection } from './components/FieldGallerySection';
import { VillageGeoMap } from './components/VillageGeoMap';
import { SurveyAnalyticsSection } from './components/SurveyAnalyticsSection';
import { CseTechnicalSolutionsSection } from './components/CseTechnicalSolutionsSection';
import { InterventionsSection } from './components/InterventionsSection';
import { OurMentorsSection } from './components/OurMentorsSection';
import { Footer } from './components/Footer';
import { PrintDossierModal } from './components/PrintDossierModal';

function MainContent() {
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen bg-[#FBF9F5] dark:bg-[#131D12] text-[#243324] dark:text-[#F4EFE6] font-sans antialiased selection:bg-[#E8DCC4] dark:selection:bg-[#384F35] selection:text-[#1F2B1D] dark:selection:text-[#F4EFE6] transition-colors duration-400">
      {/* Top Floating Navigation */}
      <Navbar onOpenDossier={() => setIsDossierOpen(true)} />

      {/* Top Reading Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-[#3B4D36] dark:bg-[#4A6D47] origin-left z-50 pointer-events-none transition-colors duration-300"
      />

      {/* Main RUIP Report Flow */}
      <main className="w-full overflow-x-hidden">
        {/* 1. Hero Section with MIT-WPU Delegation Banner at Someshwar Vidyalaya */}
        <HeroSection />

        {/* 2. Executive Overview & Key Demographic Indicators */}
        <OverviewSection />

        {/* 3. The 5 Household Survey Dossiers (14 Questions per household + Matrix view) */}
        <HouseholdSurveySection />

        {/* 4. Photographic Field Log (6 Verified GPS Field Photos including Gram Panchayat) */}
        <FieldGallerySection />

        {/* 5. Mudhale Village Geospatial Map (Gram Panchayat, Someshwar Vidyalaya, SH 62 pump, households) */}
        <VillageGeoMap />

        {/* 6. Socio-Economic Analytics & Ladki Bahin DBT Impact Simulator */}
        <SurveyAnalyticsSection />

        {/* 7. CSE Technical Solutions & Future Actions (MIT-WPU SY BTech CSE - Our Team) */}
        <CseTechnicalSolutionsSection />

        {/* 8. Engineering & Policy Interventions (IoT Canal Network, Shared Chaff Cutter CHC, Digital Desk) */}
        <InterventionsSection />

        {/* 9. Our Mentors Section (Mrs. Arundhati Ma'am & Faculty Mentorship) */}
        <OurMentorsSection />
      </main>

      {/* Creators & Institutional Site Footer (RUIP - MUDHALE TEAM) */}
      <Footer />

      {/* Formal Printable Survey Dossier Modal */}
      <PrintDossierModal isOpen={isDossierOpen} onClose={() => setIsDossierOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}
