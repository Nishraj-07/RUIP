import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users,
  Home,
  Briefcase,
  IndianRupee,
  GraduationCap,
  Flame,
  Droplets,
  ShieldCheck,
  HeartHandshake,
  Landmark,
  AlertTriangle,
  Layers,
  Search,
  CheckCircle,
  Table,
  Eye,
  FileCheck,
} from 'lucide-react';
import { HOUSEHOLD_SURVEY_DATA } from '../data/mudhaleSurveyData';
import { HouseholdData } from '../types';

export const HouseholdSurveySection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('hh-1');
  const [filterTag, setFilterTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'card' | 'matrix'>('card');

  // Filter households based on category and search
  const filteredHouseholds = HOUSEHOLD_SURVEY_DATA.filter((hh) => {
    // Filter tags
    if (filterTag === 'agri' && hh.businessCategory !== 'Agriculture') return false;
    if (filterTag === 'dairy' && hh.businessCategory !== 'Agriculture & Dairy') return false;
    if (filterTag === 'retail' && hh.businessCategory !== 'Retail (Kirana)') return false;
    if (filterTag === 'water' && hh.problemTag !== 'Regular Water Supply') return false;
    if (filterTag === 'ladki' && !hh.ladkiBahinYojana.isBeneficiary) return false;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        hh.headOfFamily.toLowerCase().includes(q) ||
        hh.headOfFamilyMarathi.toLowerCase().includes(q) ||
        hh.primaryBusiness.toLowerCase().includes(q) ||
        hh.mainProblemsReported.toLowerCase().includes(q) ||
        hh.otherGovernmentSchemes.some((s) => s.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const activeHousehold: HouseholdData =
    HOUSEHOLD_SURVEY_DATA.find((h) => h.id === selectedId) || HOUSEHOLD_SURVEY_DATA[0];

  return (
    <section
      id="households-section"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F5F2EB] dark:bg-[#182417] text-[#243324] dark:text-[#F4EFE6] transition-colors duration-400 border-t border-[#243324]/10 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#3B4D36]/10 dark:bg-white/10 text-[#3B4D36] dark:text-[#85E7B7]">
              <span>Primary Field Data</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#1F2B1D] dark:text-[#F4EFE6] font-normal tracking-tight leading-[1.08]">
              Household Survey Dossiers (14 Questions)
            </h2>
            <p className="text-base sm:text-lg text-[#4A5D44] dark:text-[#CBD7C7] font-light leading-relaxed">
              Detailed socio-economic profiles of 5 representative Mudhale households, documenting income, landholding, education, water sources, Ladki Bahin Yojana, and critical infrastructure challenges.
            </p>
          </div>

          {/* View Mode Toggle: Interactive Card vs Complete 14-Question Comparative Matrix */}
          <div className="flex items-center bg-white dark:bg-[#223320] p-1.5 rounded-2xl border border-[#243324]/10 dark:border-white/10 shadow-xs self-start lg:self-auto shrink-0">
            <button
              onClick={() => setViewMode('card')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                viewMode === 'card'
                  ? 'bg-[#243324] dark:bg-[#344732] text-white shadow-xs'
                  : 'text-[#4A5D44] dark:text-[#CBD7C7] hover:text-[#1F2B1D] dark:hover:text-white'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Interactive Dossier</span>
            </button>
            <button
              onClick={() => setViewMode('matrix')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                viewMode === 'matrix'
                  ? 'bg-[#243324] dark:bg-[#344732] text-white shadow-xs'
                  : 'text-[#4A5D44] dark:text-[#CBD7C7] hover:text-[#1F2B1D] dark:hover:text-white'
              }`}
            >
              <Table className="w-4 h-4" />
              <span>14-Question Matrix</span>
            </button>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All 5 Households' },
              { id: 'dairy', label: 'Agri & Dairy (2)' },
              { id: 'agri', label: 'Pure Agriculture (2)' },
              { id: 'retail', label: 'Kirana Shop (1)' },
              { id: 'water', label: 'Water Problem (2)' },
              { id: 'ladki', label: 'Ladki Bahin Eligible (3)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterTag(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  filterTag === tab.id
                    ? 'bg-[#1F2B1D] dark:bg-[#384E36] text-white shadow-xs'
                    : 'bg-white/80 dark:bg-[#202E1E] text-[#3B4D36] dark:text-[#CBD7C7] hover:bg-white dark:hover:bg-[#2A3D28] border border-[#243324]/10 dark:border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[220px] sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#657351] dark:text-[#A3B59E]" />
            <input
              type="text"
              placeholder="Search respondent / problem..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-white dark:bg-[#202E1E] border border-[#243324]/15 dark:border-white/15 text-[#1F2B1D] dark:text-[#F4EFE6] placeholder-[#657351]/70 focus:outline-none focus:ring-2 focus:ring-[#3B4D36]"
            />
          </div>
        </div>

        {/* VIEW 1: INTERACTIVE DOSSIER (TAB SELECTOR + 14-QUESTION CARD) */}
        {viewMode === 'card' && (
          <div className="space-y-6">
            {/* Horizontal Household Selection Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {filteredHouseholds.map((hh) => {
                const isSelected = selectedId === hh.id;
                return (
                  <button
                    key={hh.id}
                    onClick={() => setSelectedId(hh.id)}
                    className={`p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer border relative overflow-hidden ${
                      isSelected
                        ? 'bg-[#1F2B1D] dark:bg-[#384F35] text-[#F4EFE6] border-[#1F2B1D] dark:border-[#4B6B47] shadow-md scale-[1.02]'
                        : 'bg-white dark:bg-[#202E1E] text-[#243324] dark:text-[#F4EFE6] border-[#243324]/10 dark:border-white/12 hover:border-[#243324]/30'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs pb-1">
                      <span className={`font-semibold uppercase tracking-wider ${isSelected ? 'text-[#E8DCC4]' : 'text-[#657351] dark:text-[#A3B59E]'}`}>
                        Household #{hh.number}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-[#243324]/8 dark:bg-white/10 text-[#3B4D36] dark:text-[#CBD7C7]'
                      }`}>
                        {hh.totalMembers} Members
                      </span>
                    </div>

                    <div className="font-display text-lg font-semibold truncate leading-tight">
                      {hh.headOfFamily}
                    </div>
                    <div className={`text-xs truncate ${isSelected ? 'text-[#CBD7C7]' : 'text-[#657351] dark:text-[#A3B59E]'}`}>
                      {hh.headOfFamilyMarathi}
                    </div>

                    <div className="mt-3 pt-2 border-t border-current/10 flex items-center justify-between text-[11px]">
                      <span className="truncate max-w-[110px]">{hh.primaryBusiness}</span>
                      <span className="font-medium text-amber-500 dark:text-amber-300">{hh.annualIncome}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Comprehensive 14-Question Survey Card for Active Household */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHousehold.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-white dark:bg-[#1C291B] rounded-3xl border border-[#243324]/12 dark:border-white/15 shadow-xl p-6 sm:p-8 lg:p-10 space-y-8"
              >
                {/* Header Banner */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#243324]/10 dark:border-white/10">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#243324] text-white dark:bg-white/15">
                        Household #{activeHousehold.number} Case Study
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                        {activeHousehold.primaryBusiness}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
                        Income: {activeHousehold.annualIncome}
                      </span>
                    </div>

                    <h3 className="font-display text-3xl sm:text-4xl text-[#1F2B1D] dark:text-[#F4EFE6] font-medium pt-1">
                      {activeHousehold.headOfFamily}{' '}
                      <span className="text-xl sm:text-2xl font-light text-[#657351] dark:text-[#A3B59E] font-sans">
                        ({activeHousehold.headOfFamilyMarathi})
                      </span>
                    </h3>
                  </div>

                  {/* Problem Status Tag in Header */}
                  <div className="p-3.5 rounded-2xl bg-[#F5F2EB] dark:bg-[#243522] border border-[#243324]/10 dark:border-white/10 max-w-sm">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#657351] dark:text-[#A3B59E]">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                      <span>Reported Bottleneck</span>
                    </div>
                    <div className="text-sm font-semibold text-[#1F2B1D] dark:text-[#F4EFE6] pt-0.5">
                      {activeHousehold.mainProblemsReported}
                    </div>
                  </div>
                </div>

                {/* 14 Survey Questions - Structured 4-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Q1 & Q2: Demographics */}
                  <div className="p-4 rounded-2xl bg-[#FBF9F5] dark:bg-[#152014] border border-[#243324]/8 dark:border-white/10 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#657351] dark:text-[#A3B59E]">
                      <Users className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                      <span>Q2: Family Members</span>
                    </div>
                    <div className="font-display text-2xl text-[#1F2B1D] dark:text-[#F4EFE6]">
                      {activeHousehold.totalMembers}{' '}
                      <span className="text-xs font-sans font-light">Persons</span>
                    </div>
                    <p className="text-xs text-[#657351] dark:text-[#CBD7C7]">
                      {activeHousehold.males} Male, {activeHousehold.females} Female, {activeHousehold.childrenBelow14} Child (&lt;14)
                    </p>
                  </div>

                  {/* Q3: House Type */}
                  <div className="p-4 rounded-2xl bg-[#FBF9F5] dark:bg-[#152014] border border-[#243324]/8 dark:border-white/10 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#657351] dark:text-[#A3B59E]">
                      <Home className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                      <span>Q3: Type of House</span>
                    </div>
                    <div className="font-display text-2xl text-[#1F2B1D] dark:text-[#F4EFE6]">
                      Pakka (पक्के)
                    </div>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300 font-medium flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Concrete & Masonry Build
                    </p>
                  </div>

                  {/* Q4: Primary Business */}
                  <div className="p-4 rounded-2xl bg-[#FBF9F5] dark:bg-[#152014] border border-[#243324]/8 dark:border-white/10 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#657351] dark:text-[#A3B59E]">
                      <Briefcase className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                      <span>Q4: Primary Business</span>
                    </div>
                    <div className="font-display text-xl text-[#1F2B1D] dark:text-[#F4EFE6] truncate">
                      {activeHousehold.primaryBusiness}
                    </div>
                    <p className="text-xs text-[#657351] dark:text-[#CBD7C7]">
                      {activeHousehold.businessCategory}
                    </p>
                  </div>

                  {/* Q5: Annual Income */}
                  <div className="p-4 rounded-2xl bg-[#FBF9F5] dark:bg-[#152014] border border-[#243324]/8 dark:border-white/10 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#657351] dark:text-[#A3B59E]">
                      <IndianRupee className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                      <span>Q5: Annual Income</span>
                    </div>
                    <div className="font-display text-2xl text-[#1F2B1D] dark:text-[#F4EFE6]">
                      {activeHousehold.annualIncome}
                    </div>
                    <p className="text-xs text-[#657351] dark:text-[#CBD7C7]">
                      Surveyed annual bracket
                    </p>
                  </div>

                  {/* Q6: Agricultural Land Owned */}
                  <div className="p-4 rounded-2xl bg-[#FBF9F5] dark:bg-[#152014] border border-[#243324]/8 dark:border-white/10 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#657351] dark:text-[#A3B59E]">
                      <Layers className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                      <span>Q6: Land Owned</span>
                    </div>
                    <div className="font-display text-xl text-[#1F2B1D] dark:text-[#F4EFE6]">
                      {activeHousehold.landOwned}
                    </div>
                    <p className="text-xs text-[#657351] dark:text-[#CBD7C7] line-clamp-2">
                      {activeHousehold.landAcresNote}
                    </p>
                  </div>

                  {/* Q7: Highest Education */}
                  <div className="p-4 rounded-2xl bg-[#FBF9F5] dark:bg-[#152014] border border-[#243324]/8 dark:border-white/10 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#657351] dark:text-[#A3B59E]">
                      <GraduationCap className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                      <span>Q7: Education</span>
                    </div>
                    <div className="font-display text-xl text-[#1F2B1D] dark:text-[#F4EFE6] truncate">
                      {activeHousehold.highestEducation}
                    </div>
                    <p className="text-xs text-[#657351] dark:text-[#CBD7C7]">
                      {activeHousehold.educationLevel}
                    </p>
                  </div>

                  {/* Q8: Primary Cooking Fuel */}
                  <div className="p-4 rounded-2xl bg-[#FBF9F5] dark:bg-[#152014] border border-[#243324]/8 dark:border-white/10 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#657351] dark:text-[#A3B59E]">
                      <Flame className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                      <span>Q8: Cooking Fuel</span>
                    </div>
                    <div className="font-display text-xl text-[#1F2B1D] dark:text-[#F4EFE6] truncate">
                      {activeHousehold.cookingFuel}
                    </div>
                    <p className="text-xs text-[#657351] dark:text-[#CBD7C7]">
                      {activeHousehold.usesFirewood ? 'Dual Fuel (LPG + Firewood)' : '100% Clean LPG Gas'}
                    </p>
                  </div>

                  {/* Q9: Drinking Water Source */}
                  <div className="p-4 rounded-2xl bg-[#FBF9F5] dark:bg-[#152014] border border-[#243324]/8 dark:border-white/10 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#657351] dark:text-[#A3B59E]">
                      <Droplets className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                      <span>Q9: Drinking Water</span>
                    </div>
                    <div className="font-display text-xl text-[#1F2B1D] dark:text-[#F4EFE6]">
                      {activeHousehold.drinkingWaterSource}
                    </div>
                    <p className="text-xs text-[#657351] dark:text-[#CBD7C7]">
                      Primary potable supply
                    </p>
                  </div>

                  {/* Q10: Toilet Availability & Usage */}
                  <div className="p-4 rounded-2xl bg-[#FBF9F5] dark:bg-[#152014] border border-[#243324]/8 dark:border-white/10 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#657351] dark:text-[#A3B59E]">
                      <ShieldCheck className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                      <span>Q10: Toilet Usage</span>
                    </div>
                    <div className="font-display text-lg text-emerald-700 dark:text-emerald-300 font-medium">
                      100% Family Usage
                    </div>
                    <p className="text-xs text-[#657351] dark:text-[#CBD7C7]">
                      Individual household facility
                    </p>
                  </div>

                  {/* Q11: Majhi Ladki Bahin Yojana */}
                  <div className={`p-4 rounded-2xl border space-y-1 ${
                    activeHousehold.ladkiBahinYojana.isBeneficiary
                      ? 'bg-rose-50/70 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/40'
                      : 'bg-[#FBF9F5] dark:bg-[#152014] border-[#243324]/8 dark:border-white/10'
                  }`}>
                    <div className="flex items-center gap-2 text-xs font-semibold text-rose-700 dark:text-rose-400">
                      <HeartHandshake className="w-4 h-4" />
                      <span>Q11: Ladki Bahin Yojana</span>
                    </div>
                    <div className="font-display text-lg text-[#1F2B1D] dark:text-[#F4EFE6]">
                      {activeHousehold.ladkiBahinYojana.isBeneficiary ? '₹1,500 / Month' : 'Ineligible'}
                    </div>
                    <p className="text-xs text-[#657351] dark:text-[#CBD7C7]">
                      {activeHousehold.ladkiBahinYojana.rawText}
                    </p>
                  </div>

                  {/* Q12: Other Government Schemes */}
                  <div className="p-4 rounded-2xl bg-[#FBF9F5] dark:bg-[#152014] border border-[#243324]/8 dark:border-white/10 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#657351] dark:text-[#A3B59E]">
                      <FileCheck className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                      <span>Q12: Other Govt Schemes</span>
                    </div>
                    <div className="font-display text-lg text-[#1F2B1D] dark:text-[#F4EFE6]">
                      {activeHousehold.otherGovernmentSchemes.join(', ')}
                    </div>
                    <p className="text-xs text-[#657351] dark:text-[#CBD7C7]">
                      Active state/central benefits
                    </p>
                  </div>

                  {/* Q13: Loans Taken */}
                  <div className="p-4 rounded-2xl bg-[#FBF9F5] dark:bg-[#152014] border border-[#243324]/8 dark:border-white/10 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#657351] dark:text-[#A3B59E]">
                      <Landmark className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                      <span>Q13: Loans Taken</span>
                    </div>
                    <div className="font-display text-lg text-[#1F2B1D] dark:text-[#F4EFE6]">
                      {activeHousehold.loansTaken}
                    </div>
                    <p className="text-xs text-[#657351] dark:text-[#CBD7C7]">
                      {activeHousehold.hasCooperativeLoan ? 'Formal cooperative credit' : 'Zero institutional debt'}
                    </p>
                  </div>
                </div>

                {/* Question 14: Main Problems & Field Observation Callout */}
                <div className="p-6 rounded-2xl bg-[#F5F2EB] dark:bg-[#202E1E] border border-[#243324]/10 dark:border-white/12 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3B4D36] dark:text-[#85E7B7]">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Q14: Main Problems Reported & Field Observation Notes</span>
                  </div>
                  <div className="text-base sm:text-lg font-medium text-[#1F2B1D] dark:text-[#F4EFE6]">
                    &ldquo;{activeHousehold.mainProblemsReported}&rdquo;
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A5D44] dark:text-[#CBD7C7] font-light leading-relaxed">
                    <strong>Surveyor Observation:</strong> {activeHousehold.fieldObservation}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* VIEW 2: COMPLETE 14-QUESTION COMPARATIVE MATRIX TABLE */}
        {viewMode === 'matrix' && (
          <div className="w-full overflow-x-auto rounded-3xl bg-white dark:bg-[#1C291B] border border-[#243324]/12 dark:border-white/15 shadow-xl p-4 sm:p-6">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[900px]">
              <thead>
                <tr className="border-b-2 border-[#243324]/20 dark:border-white/20 text-[#1F2B1D] dark:text-[#F4EFE6]">
                  <th className="py-3 px-3 font-semibold uppercase text-xs">No. & Question</th>
                  {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                    <th key={hh.id} className="py-3 px-3 font-semibold text-xs sm:text-sm">
                      <div className="text-[#3B4D36] dark:text-[#85E7B7] text-[10px] uppercase">HH #{hh.number}</div>
                      <div>{hh.headOfFamily}</div>
                      <div className="text-[11px] font-normal text-[#657351] dark:text-[#A3B59E]">{hh.headOfFamilyMarathi}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#243324]/10 dark:divide-white/10 text-[#243324] dark:text-[#CBD7C7]">
                <tr>
                  <td className="py-3 px-3 font-semibold text-[#1F2B1D] dark:text-white bg-[#F5F2EB]/50 dark:bg-white/5">1. Head of family</td>
                  {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                    <td key={hh.id} className="py-3 px-3 font-medium text-[#1F2B1D] dark:text-white">{hh.headOfFamily}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-[#1F2B1D] dark:text-white bg-[#F5F2EB]/50 dark:bg-white/5">2. Total family members</td>
                  {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                    <td key={hh.id} className="py-3 px-3">{hh.totalMembers} ({hh.males}M, {hh.females}F, {hh.childrenBelow14} child)</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-[#1F2B1D] dark:text-white bg-[#F5F2EB]/50 dark:bg-white/5">3. Type of house</td>
                  {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                    <td key={hh.id} className="py-3 px-3 text-emerald-700 dark:text-emerald-400 font-medium">Pakka</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-[#1F2B1D] dark:text-white bg-[#F5F2EB]/50 dark:bg-white/5">4. Primary family business</td>
                  {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                    <td key={hh.id} className="py-3 px-3">{hh.primaryBusiness}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-[#1F2B1D] dark:text-white bg-[#F5F2EB]/50 dark:bg-white/5">5. Annual household income</td>
                  {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                    <td key={hh.id} className="py-3 px-3 font-medium text-amber-700 dark:text-amber-300">{hh.annualIncome}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-[#1F2B1D] dark:text-white bg-[#F5F2EB]/50 dark:bg-white/5">6. Agricultural land owned</td>
                  {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                    <td key={hh.id} className="py-3 px-3">{hh.landOwned}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-[#1F2B1D] dark:text-white bg-[#F5F2EB]/50 dark:bg-white/5">7. Highest education</td>
                  {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                    <td key={hh.id} className="py-3 px-3">{hh.highestEducation}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-[#1F2B1D] dark:text-white bg-[#F5F2EB]/50 dark:bg-white/5">8. Primary cooking fuel</td>
                  {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                    <td key={hh.id} className="py-3 px-3">{hh.cookingFuel}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-[#1F2B1D] dark:text-white bg-[#F5F2EB]/50 dark:bg-white/5">9. Drinking water source</td>
                  {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                    <td key={hh.id} className="py-3 px-3">{hh.drinkingWaterSource}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-[#1F2B1D] dark:text-white bg-[#F5F2EB]/50 dark:bg-white/5">10. Toilet availability & usage</td>
                  {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                    <td key={hh.id} className="py-3 px-3 text-emerald-700 dark:text-emerald-400 font-medium">All members use toilet</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-[#1F2B1D] dark:text-white bg-[#F5F2EB]/50 dark:bg-white/5">11. Ladki Bahin Yojana</td>
                  {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                    <td key={hh.id} className="py-3 px-3">
                      {hh.ladkiBahinYojana.isBeneficiary ? (
                        <span className="text-rose-600 dark:text-rose-400 font-semibold">Eligible (₹1,500/mo)</span>
                      ) : (
                        <span className="text-[#657351] dark:text-[#A3B59E]">Not eligible (income)</span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-[#1F2B1D] dark:text-white bg-[#F5F2EB]/50 dark:bg-white/5">12. Other govt schemes</td>
                  {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                    <td key={hh.id} className="py-3 px-3">{hh.otherGovernmentSchemes.join(', ')}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-[#1F2B1D] dark:text-white bg-[#F5F2EB]/50 dark:bg-white/5">13. Loans taken</td>
                  {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                    <td key={hh.id} className="py-3 px-3">{hh.loansTaken}</td>
                  ))}
                </tr>
                <tr className="bg-amber-50/50 dark:bg-amber-950/20 font-medium">
                  <td className="py-3 px-3 font-semibold text-amber-900 dark:text-amber-300">14. Main problems reported</td>
                  {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                    <td key={hh.id} className="py-3 px-3 text-amber-900 dark:text-amber-200">{hh.mainProblemsReported}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};
