import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download, CheckCircle, MapPin, Building, Calendar } from 'lucide-react';
import { HOUSEHOLD_SURVEY_DATA, RUIP_REPORT_HEADER, FIELD_PHOTOS } from '../data/mudhaleSurveyData';

interface PrintDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintDossierModal: React.FC<PrintDossierModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          className="relative w-full max-w-5xl max-h-[92vh] bg-white text-[#1F2B1D] rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-gray-300 print:border-none print:shadow-none print:max-h-none print:rounded-none"
        >
          {/* Modal Header & Actions (hidden during print) */}
          <div className="p-4 sm:p-5 bg-[#F5F2EB] border-b border-gray-200 flex items-center justify-between print:hidden">
            <div className="flex items-center gap-2">
              <Printer className="w-5 h-5 text-emerald-800" />
              <span className="font-display font-semibold text-lg">
                Official RUIP Field Survey Dossier
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#243324] hover:bg-[#1A261A] text-white text-xs font-semibold shadow-xs cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-200 text-gray-600 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Document Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-white print:p-8">
            {/* Academic Institutional Header */}
            <div className="border-b-2 border-[#1F2B1D] pb-6 text-center space-y-2">
              <div className="text-xs uppercase font-bold tracking-widest text-[#4A5D44]">
                MIT WORLD PEACE UNIVERSITY (MIT-WPU), PUNE
              </div>
              <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#1F2B1D]">
                DEPARTMENT OF COMPUTER ENGINEERING AND TECHNOLOGY
              </h1>
              <div className="text-sm font-semibold uppercase tracking-wider text-emerald-900">
                RURAL IMMERSION PROGRAM (RUIP) 2026 FIELD STUDY DOSSIER
              </div>
              <p className="text-xs text-gray-600">
                Village: Mudhale (मुढाळे) • Taluka: Baramati • District: Pune, Maharashtra (PIN: 413110)
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-[11px] text-gray-700">
                <span><strong>Partner School:</strong> Someshwar Vidyalaya Mudhale</span>
                <span>•</span>
                <span><strong>GPS Base:</strong> 18.179808° N, 74.386464° E</span>
                <span>•</span>
                <span><strong>Sample:</strong> 5 Households (27 Citizens)</span>
              </div>
            </div>

            {/* Executive Abstract */}
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-1 text-xs leading-relaxed">
              <div className="font-bold uppercase tracking-wider text-gray-800">Field Study Abstract:</div>
              <p className="text-gray-700">
                This document synthesizes primary survey data collected in August 2026 by student researchers from the Department of Computer Engineering and Technology, MIT-WPU. Five representative households were audited across 14 standard socio-economic metrics. The findings show 100% pucca housing and toilet usage, significant cooperative bank credit adoption (80%), and high uptake of Maharashtra's Majhi Ladki Bahin Yojana (60%). The predominant community bottlenecks center on agricultural canal rotation schedules (40%) and dairy farm mechanization (electric chaff cutters).
              </p>
            </div>

            {/* 14-Question Complete Master Table */}
            <div className="space-y-3">
              <h2 className="font-display text-lg font-bold border-b border-gray-300 pb-1">
                Table 1: Comprehensive 14-Question Household Survey Matrix
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-gray-300 border-collapse">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-300 font-bold text-gray-900">
                      <th className="p-2 border border-gray-300 w-8">No.</th>
                      <th className="p-2 border border-gray-300">Survey Question</th>
                      {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                        <th key={hh.id} className="p-2 border border-gray-300 font-semibold min-w-[130px]">
                          HH #{hh.number} — {hh.headOfFamily}
                          <div className="text-[10px] text-gray-500 font-normal">{hh.headOfFamilyMarathi}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-800">
                    <tr>
                      <td className="p-2 font-mono border border-gray-300">1</td>
                      <td className="p-2 font-semibold border border-gray-300">Head of family</td>
                      {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                        <td key={hh.id} className="p-2 border border-gray-300 font-medium">{hh.headOfFamily}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-2 font-mono border border-gray-300">2</td>
                      <td className="p-2 font-semibold border border-gray-300">Total family members</td>
                      {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                        <td key={hh.id} className="p-2 border border-gray-300">{hh.totalMembers} ({hh.males}M, {hh.females}F, {hh.childrenBelow14} child)</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-2 font-mono border border-gray-300">3</td>
                      <td className="p-2 font-semibold border border-gray-300">Type of house</td>
                      {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                        <td key={hh.id} className="p-2 border border-gray-300 font-medium text-emerald-800">Pakka</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-2 font-mono border border-gray-300">4</td>
                      <td className="p-2 font-semibold border border-gray-300">Primary family business</td>
                      {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                        <td key={hh.id} className="p-2 border border-gray-300">{hh.primaryBusiness}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-2 font-mono border border-gray-300">5</td>
                      <td className="p-2 font-semibold border border-gray-300">Annual household income</td>
                      {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                        <td key={hh.id} className="p-2 border border-gray-300 font-bold">{hh.annualIncome}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-2 font-mono border border-gray-300">6</td>
                      <td className="p-2 font-semibold border border-gray-300">Agricultural land owned</td>
                      {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                        <td key={hh.id} className="p-2 border border-gray-300">{hh.landOwned}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-2 font-mono border border-gray-300">7</td>
                      <td className="p-2 font-semibold border border-gray-300">Highest education in family</td>
                      {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                        <td key={hh.id} className="p-2 border border-gray-300">{hh.highestEducation}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-2 font-mono border border-gray-300">8</td>
                      <td className="p-2 font-semibold border border-gray-300">Primary cooking fuel</td>
                      {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                        <td key={hh.id} className="p-2 border border-gray-300">{hh.cookingFuel}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-2 font-mono border border-gray-300">9</td>
                      <td className="p-2 font-semibold border border-gray-300">Drinking water source</td>
                      {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                        <td key={hh.id} className="p-2 border border-gray-300">{hh.drinkingWaterSource}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-2 font-mono border border-gray-300">10</td>
                      <td className="p-2 font-semibold border border-gray-300">Toilet availability & usage</td>
                      {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                        <td key={hh.id} className="p-2 border border-gray-300 text-emerald-800">All family members use toilet</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-2 font-mono border border-gray-300">11</td>
                      <td className="p-2 font-semibold border border-gray-300">Ladki Bahin Yojana</td>
                      {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                        <td key={hh.id} className="p-2 border border-gray-300 font-medium">
                          {hh.ladkiBahinYojana.isBeneficiary ? 'Eligible (₹1,500/mo)' : 'Not eligible (income)'}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-2 font-mono border border-gray-300">12</td>
                      <td className="p-2 font-semibold border border-gray-300">Other government schemes</td>
                      {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                        <td key={hh.id} className="p-2 border border-gray-300">{hh.otherGovernmentSchemes.join(', ')}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-2 font-mono border border-gray-300">13</td>
                      <td className="p-2 font-semibold border border-gray-300">Loans taken</td>
                      {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                        <td key={hh.id} className="p-2 border border-gray-300">{hh.loansTaken}</td>
                      ))}
                    </tr>
                    <tr className="bg-amber-50">
                      <td className="p-2 font-mono border border-gray-300 font-bold">14</td>
                      <td className="p-2 font-bold border border-gray-300 text-amber-900">Main problems reported</td>
                      {HOUSEHOLD_SURVEY_DATA.map((hh) => (
                        <td key={hh.id} className="p-2 border border-gray-300 font-bold text-amber-900">{hh.mainProblemsReported}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* GPS Photo Verification Table */}
            <div className="space-y-3 pt-4">
              <h2 className="font-display text-lg font-bold border-b border-gray-300 pb-1">
                Table 2: Geotagged Photographic Audit Log
              </h2>
              <table className="w-full text-left text-xs border border-gray-300 border-collapse">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-300 font-semibold text-gray-900">
                    <th className="p-2 border border-gray-300">Site Title</th>
                    <th className="p-2 border border-gray-300">GPS Coordinates</th>
                    <th className="p-2 border border-gray-300">Timestamp</th>
                    <th className="p-2 border border-gray-300">Fieldwork Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {FIELD_PHOTOS.map((p) => (
                    <tr key={p.id}>
                      <td className="p-2 border border-gray-300 font-medium">{p.title}</td>
                      <td className="p-2 border border-gray-300 font-mono text-[11px]">{p.coordinates.lat}° N, {p.coordinates.lng}° E</td>
                      <td className="p-2 border border-gray-300">{p.date}</td>
                      <td className="p-2 border border-gray-300 text-gray-600">{p.caption}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Sign-off & Signatures block */}
            <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-gray-600 border-t border-gray-300 gap-4">
              <div className="space-y-1">
                <div className="font-bold text-gray-900">Student Survey Leads & Field Engineers</div>
                <div>Our Team • SY BTech CSE Field Delegation</div>
                <div>Dept. of Computer Engineering & Technology, MIT-WPU</div>
              </div>

              <div className="space-y-1 text-left sm:text-right">
                <div className="font-bold text-gray-900">Institutional Faculty Mentors & Guides</div>
                <div className="text-gray-800 font-medium">1. Dr. Pramod Mali Sir • 2. Prof. Seema Idhate Ma'am • 3. Mrs. Arundhati Ma'am</div>
                <div>Rural Immersion Program (RUIP 2026), MIT-WPU Pune</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
