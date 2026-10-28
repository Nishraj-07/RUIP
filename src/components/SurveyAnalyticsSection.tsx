import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BarChart3, PieChart, IndianRupee, Droplets, HeartHandshake, AlertCircle, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';
import { HOUSEHOLD_SURVEY_DATA } from '../data/mudhaleSurveyData';

export const SurveyAnalyticsSection: React.FC = () => {
  const [multiplier, setMultiplier] = useState<number>(1);

  // Computed survey stats
  const totalSurveyed = HOUSEHOLD_SURVEY_DATA.length;
  const ladkiBeneficiaries = HOUSEHOLD_SURVEY_DATA.filter((h) => h.ladkiBahinYojana.isBeneficiary).length;
  const coOpLoanBorrowers = HOUSEHOLD_SURVEY_DATA.filter((h) => h.hasCooperativeLoan).length;
  const waterProblemHouseholds = HOUSEHOLD_SURVEY_DATA.filter((h) => h.problemTag === 'Regular Water Supply').length;
  const machineryNeedHouseholds = HOUSEHOLD_SURVEY_DATA.filter(
    (h) => h.problemTag === 'Agricultural Machinery' || h.problemTag === 'Livestock Chaff Cutter'
  ).length;

  // Simulator metrics
  const monthlyTransfer = ladkiBeneficiaries * 1500 * multiplier;
  const annualTransfer = monthlyTransfer * 12;

  return (
    <section
      id="analytics-section"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FBF9F5] dark:bg-[#131D12] text-[#243324] dark:text-[#F4EFE6] transition-colors duration-400 border-t border-[#243324]/10 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Headline */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#3B4D36]/10 dark:bg-white/10 text-[#3B4D36] dark:text-[#85E7B7]">
            <span>Socio-Economic Analytics</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#1F2B1D] dark:text-[#F4EFE6] font-normal tracking-tight leading-[1.08]">
            Demographic Insights & Welfare Distribution
          </h2>

          <p className="text-base sm:text-lg text-[#3B4D36] dark:text-[#CBD7C7] font-light leading-relaxed">
            Quantitative analysis across the 5 surveyed households revealing high institutional credit penetration, rapid state welfare cash flow, and persistent resource constraints in water rotations and farm implements.
          </p>
        </div>

        {/* 4 Interactive Visual Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Drinking Water Sources */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#1A261A] border border-[#243324]/10 dark:border-white/10 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sky-600 dark:text-sky-400">
                <Droplets className="w-5 h-5" />
                <span className="text-[11px] font-semibold uppercase tracking-wider">Potable Supply</span>
              </div>
              <h3 className="font-display text-xl text-[#1F2B1D] dark:text-[#F4EFE6] font-medium">
                Drinking Water Sources
              </h3>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-medium pb-1">
                  <span>Household Tap (नळ जोडणी)</span>
                  <span>40% (2/5)</span>
                </div>
                <div className="h-2 w-full rounded-full bg-[#E5EDE2] dark:bg-white/10 overflow-hidden">
                  <div className="h-full bg-sky-500 rounded-full w-[40%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium pb-1">
                  <span>Agricultural Well (विहीर)</span>
                  <span>40% (2/5)</span>
                </div>
                <div className="h-2 w-full rounded-full bg-[#E5EDE2] dark:bg-white/10 overflow-hidden">
                  <div className="h-full bg-teal-500 rounded-full w-[40%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium pb-1">
                  <span>Public Water Tap (सार्वजनिक नळ)</span>
                  <span>20% (1/5)</span>
                </div>
                <div className="h-2 w-full rounded-full bg-[#E5EDE2] dark:bg-white/10 overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full w-[20%]" />
                </div>
              </div>
            </div>

            <p className="text-[11px] text-[#657351] dark:text-[#A3B59E] pt-1 border-t border-[#243324]/8 dark:border-white/10">
              Retail businesses (Sachin) rely on public standposts; farm families draw from wells.
            </p>
          </div>

          {/* Card 2: Welfare Schemes Penetration */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#1A261A] border border-[#243324]/10 dark:border-white/10 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-rose-600 dark:text-rose-400">
                <HeartHandshake className="w-5 h-5" />
                <span className="text-[11px] font-semibold uppercase tracking-wider">Social Safety</span>
              </div>
              <h3 className="font-display text-xl text-[#1F2B1D] dark:text-[#F4EFE6] font-medium">
                Welfare Schemes Reach
              </h3>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-medium pb-1">
                  <span>Majhi Ladki Bahin Yojana</span>
                  <span className="text-rose-600 font-bold">60% (3/5)</span>
                </div>
                <div className="h-2 w-full rounded-full bg-[#E5EDE2] dark:bg-white/10 overflow-hidden">
                  <div className="h-full bg-rose-500 rounded-full w-[60%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium pb-1">
                  <span>PM Kisan Samman Nidhi</span>
                  <span>40% (2/5)</span>
                </div>
                <div className="h-2 w-full rounded-full bg-[#E5EDE2] dark:bg-white/10 overflow-hidden">
                  <div className="h-full bg-emerald-600 rounded-full w-[40%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium pb-1">
                  <span>Ration Card / PDS</span>
                  <span>40% (2/5)</span>
                </div>
                <div className="h-2 w-full rounded-full bg-[#E5EDE2] dark:bg-white/10 overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full w-[40%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium pb-1">
                  <span>PM Awas Yojana</span>
                  <span>20% (1/5)</span>
                </div>
                <div className="h-2 w-full rounded-full bg-[#E5EDE2] dark:bg-white/10 overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full w-[20%]" />
                </div>
              </div>
            </div>

            <p className="text-[11px] text-[#657351] dark:text-[#A3B59E] pt-1 border-t border-[#243324]/8 dark:border-white/10">
              Direct Benefit Transfer (DBT) provides liquid household financial autonomy for women.
            </p>
          </div>

          {/* Card 3: Financial & Credit Inclusion */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#1A261A] border border-[#243324]/10 dark:border-white/10 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-amber-600 dark:text-amber-400">
                <IndianRupee className="w-5 h-5" />
                <span className="text-[11px] font-semibold uppercase tracking-wider">Credit Landscape</span>
              </div>
              <h3 className="font-display text-xl text-[#1F2B1D] dark:text-[#F4EFE6] font-medium">
                Banking & Debt Profile
              </h3>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-2xl bg-[#F5F2EB] dark:bg-[#202E1E] text-center">
                <div className="font-display text-3xl text-emerald-700 dark:text-emerald-400">
                  80%
                </div>
                <div className="text-xs font-medium text-[#1F2B1D] dark:text-[#F4EFE6]">
                  Cooperative Bank Credit (4/5)
                </div>
                <div className="text-[11px] text-[#657351] dark:text-[#A3B59E]">
                  PDCC & Someshwar Sakhar Sahakari
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-[#F5F2EB] dark:bg-[#202E1E] text-center">
                <div className="font-display text-2xl text-[#1F2B1D] dark:text-[#F4EFE6]">
                  20%
                </div>
                <div className="text-xs font-medium text-[#1F2B1D] dark:text-[#F4EFE6]">
                  Debt-Free (1/5 - Sachin Kirana)
                </div>
              </div>
            </div>

            <p className="text-[11px] text-[#657351] dark:text-[#A3B59E] pt-1 border-t border-[#243324]/8 dark:border-white/10">
              0% informal moneylender borrowing; formal cooperative banking prevails.
            </p>
          </div>

          {/* Card 4: Problem Priority Breakdown */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#1A261A] border border-[#243324]/10 dark:border-white/10 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-amber-600 dark:text-amber-400">
                <AlertCircle className="w-5 h-5" />
                <span className="text-[11px] font-semibold uppercase tracking-wider">Key Bottlenecks</span>
              </div>
              <h3 className="font-display text-xl text-[#1F2B1D] dark:text-[#F4EFE6] font-medium">
                Reported Village Needs
              </h3>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs p-2 rounded-xl bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-300 font-medium">
                <span>Regular Water Supply</span>
                <span className="font-bold">40%</span>
              </div>
              <div className="flex items-center justify-between text-xs p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-300 font-medium">
                <span>Chaff Cutter (कडबा कुट्टी)</span>
                <span className="font-bold">20%</span>
              </div>
              <div className="flex items-center justify-between text-xs p-2 rounded-xl bg-sky-50 dark:bg-sky-950/30 text-sky-900 dark:text-sky-300 font-medium">
                <span>Agricultural Machinery</span>
                <span className="font-bold">20%</span>
              </div>
              <div className="flex items-center justify-between text-xs p-2 rounded-xl bg-gray-50 dark:bg-white/5 text-[#657351] dark:text-[#CBD7C7]">
                <span>No Major Problem</span>
                <span className="font-bold">20%</span>
              </div>
            </div>

            <p className="text-[11px] text-[#657351] dark:text-[#A3B59E] pt-1 border-t border-[#243324]/8 dark:border-white/10">
              Water scheduling and farm implements constitute 80% of reported challenges.
            </p>
          </div>
        </div>

        {/* Interactive Welfare Economic Flow Simulator */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F5F2EB] dark:bg-[#1E2E1D] border border-[#243324]/10 dark:border-white/12 space-y-6">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700 dark:text-rose-400 uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Interactive Welfare Direct Benefit Transfer (DBT) Calculator</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-[#1F2B1D] dark:text-[#F4EFE6] font-medium">
                Majhi Ladki Bahin Yojana Liquidity Impact
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5D44] dark:text-[#CBD7C7] font-light">
                Calculate direct cash liquidity flowing to eligible rural women across Mudhale households (₹1,500/month per woman).
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-[#657351] dark:text-[#A3B59E]">Village Scale Multiplier:</span>
              <div className="flex items-center bg-white dark:bg-[#152014] rounded-xl p-1 border border-current/10">
                {[1, 5, 20].map((val) => (
                  <button
                    key={val}
                    onClick={() => setMultiplier(val)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      multiplier === val
                        ? 'bg-[#243324] text-white dark:bg-[#384F35]'
                        : 'text-[#4A5D44] hover:bg-black/5 dark:hover:bg-white/10'
                    }`}
                  >
                    {val === 1 ? 'Survey Sample (5 HH)' : `${val * 5} Households`}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#141E13] border border-[#243324]/8 dark:border-white/10 space-y-1">
              <span className="text-xs font-semibold text-[#657351] dark:text-[#A3B59E] uppercase tracking-wider">
                Beneficiary Women
              </span>
              <div className="font-display text-3xl sm:text-4xl text-[#1F2B1D] dark:text-[#F4EFE6]">
                {ladkiBeneficiaries * multiplier}
              </div>
              <p className="text-xs text-rose-600 dark:text-rose-400 font-medium">
                60% Sample Eligible
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#141E13] border border-[#243324]/8 dark:border-white/10 space-y-1">
              <span className="text-xs font-semibold text-[#657351] dark:text-[#A3B59E] uppercase tracking-wider">
                Monthly Direct Transfer
              </span>
              <div className="font-display text-3xl sm:text-4xl text-emerald-700 dark:text-emerald-400">
                ₹{monthlyTransfer.toLocaleString()}
              </div>
              <p className="text-xs text-[#657351] dark:text-[#CBD7C7]">
                Deposited directly to Aadhaar bank accounts
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#141E13] border border-[#243324]/8 dark:border-white/10 space-y-1">
              <span className="text-xs font-semibold text-[#657351] dark:text-[#A3B59E] uppercase tracking-wider">
                Annual Village Liquidity
              </span>
              <div className="font-display text-3xl sm:text-4xl text-amber-700 dark:text-amber-400">
                ₹{annualTransfer.toLocaleString()}
              </div>
              <p className="text-xs text-[#657351] dark:text-[#CBD7C7]">
                Fuels local kirana commerce & nutrition
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
