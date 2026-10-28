import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Smartphone, MonitorCheck, Wrench, CheckCircle, ArrowRight, Lightbulb, Users } from 'lucide-react';
import { INTERVENTION_RECOMMENDATIONS } from '../data/mudhaleSurveyData';

export const InterventionsSection: React.FC = () => {
  return (
    <section
      id="interventions-section"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F5F2EB] dark:bg-[#182417] text-[#243324] dark:text-[#F4EFE6] transition-colors duration-400 border-t border-[#243324]/10 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#3B4D36]/10 dark:bg-white/10 text-[#3B4D36] dark:text-[#85E7B7]">
            <span>Department of Computer Engineering & Technology • MIT-WPU</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#1F2B1D] dark:text-[#F4EFE6] font-normal tracking-tight leading-[1.08]">
            Targeted Engineering & Policy Interventions
          </h2>

          <p className="text-base sm:text-lg text-[#4A5D44] dark:text-[#CBD7C7] font-light leading-relaxed">
            Translating Mudhale’s household survey pain points into actionable digital, IoT, and cooperative sharing interventions designed by student engineers to empower Baramati farmers and micro-enterprises.
          </p>
        </div>

        {/* 3 Detailed Engineering Proposal Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {INTERVENTION_RECOMMENDATIONS.map((proposal, idx) => {
            const icons = [Cpu, Smartphone, MonitorCheck];
            const Icon = icons[idx % icons.length];

            return (
              <motion.div
                key={proposal.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl bg-white dark:bg-[#1C291B] border border-[#243324]/10 dark:border-white/12 shadow-md p-7 sm:p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#243324]/8 dark:bg-white/10 text-[#3B4D36] dark:text-[#CBD7C7]">
                      Intervention #{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-display text-2xl text-[#1F2B1D] dark:text-[#F4EFE6] font-semibold leading-tight">
                      {proposal.title}
                    </h3>
                    <p className="text-xs text-[#657351] dark:text-[#A3B59E]">
                      {proposal.titleMarathi}
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-300 space-y-1">
                    <span className="font-bold uppercase tracking-wider text-[10px] block">
                      Targeted Survey Need:
                    </span>
                    <p className="leading-snug">{proposal.targetNeed}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4A5D44] dark:text-[#CBD7C7] font-light leading-relaxed">
                    {proposal.solutionDescription}
                  </p>
                </div>

                {/* Bottom Impact & Deliverables */}
                <div className="space-y-3 pt-4 border-t border-[#243324]/10 dark:border-white/10 text-xs">
                  <div>
                    <span className="font-semibold text-[#1F2B1D] dark:text-[#F4EFE6] block">
                      Core Deliverable:
                    </span>
                    <span className="text-[#657351] dark:text-[#A3B59E]">
                      {proposal.keyDeliverable}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F5F2EB] dark:bg-[#141E13] flex items-center gap-2 text-emerald-800 dark:text-emerald-300">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span className="font-medium">{proposal.socialImpact}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Academic Mentorship Letter & Report Footer */}
        <div className="p-8 sm:p-12 rounded-[2.5rem] bg-[#1F2B1D] dark:bg-[#152014] text-white shadow-xl space-y-6 border border-white/15">
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Lightbulb className="w-4 h-4" />
              <span>Departmental Immersion Conclusion</span>
            </div>
            <blockquote className="font-display text-xl sm:text-2xl text-[#F4EFE6] font-light leading-relaxed">
              &ldquo;The Rural Immersion Program in Mudhale demonstrates that while rural Baramati excels in foundational housing and sanitation, the next frontier of rural upliftment lies in digital water rotation telemetry and shared dairy mechanization like electric chaff cutters.&rdquo;
            </blockquote>
            <div className="pt-2 text-xs text-[#E8DCC4] space-y-1">
              <p className="font-semibold text-sm">Rural Immersion Project (RUIP) Student Delegation</p>
              <p className="text-white/70">Department of Computer Engineering and Technology, MIT World Peace University (MIT-WPU), Pune</p>
              <p className="text-white/60">Fieldwork executed at Someshwar Vidyalaya Mudhale, Taluka Baramati, District Pune (413110)</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-8 border-t border-[#243324]/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#657351] dark:text-[#A3B59E] font-light">
          <p>© 2026 MIT-WPU Pune • Rural Immersion Program (RUIP) Report.</p>
          <p>Mudhale Village, Taluka Baramati, District Pune, Maharashtra 413110.</p>
        </footer>
      </div>
    </section>
  );
};
