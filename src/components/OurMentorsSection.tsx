import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  MapPin, 
  Award, 
  Compass, 
  Sparkles, 
  Maximize2, 
  X, 
  CheckCircle2, 
  BookOpen, 
  HeartHandshake, 
  Building2,
  Globe2,
  Cpu,
  Layers,
  ChevronRight
} from 'lucide-react';

interface MentorProfile {
  id: string;
  orderNumber: number;
  name: string;
  salutation: string;
  designation: string;
  department: string;
  institution: string;
  imageSrc: string;
  gpsLocation: {
    label: string;
    subLoc: string;
    coordinates: string;
    plusCode: string;
    timestamp: string;
  };
  eventContext: string;
  bioSummary: string;
  contributions: {
    title: string;
    desc: string;
    icon: typeof GraduationCap;
  }[];
  quote?: string;
  tags: string[];
}

const MENTORS: MentorProfile[] = [
  {
    id: 'dr-pramod-mali-sir',
    orderNumber: 1,
    name: 'DR. PRAMOD MALI SIR',
    salutation: 'Lead Faculty Mentor & Senior Academic Guide',
    designation: 'Associate Professor / Faculty Lead, Rural Immersion Program',
    department: 'Department of Computer Engineering and Technology',
    institution: 'MIT World Peace University (MIT-WPU), Pune',
    imageSrc: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.23.59_PM_0ec74b87.jpeg',
    gpsLocation: {
      label: 'Mudhale, Maharashtra, India',
      subLoc: 'Someshwar Vidyalaya Courtyard, SH 62, Mudhale, Baramati 413110',
      coordinates: 'Lat 18.179854° N • Long 74.386476° E',
      plusCode: '59hp+vgr, Mudhale, Maharashtra 413110',
      timestamp: 'Friday, 14/08/2026 10:48 AM GMT+05:30'
    },
    eventContext: 'Honored on stage with traditional ceremonial shawl and felicitation token by Someshwar Vidyalaya dignitaries',
    bioSummary: 'Provided senior academic leadership and strategic field coordination for the SY BTech Computer Science & Engineering rural immersion delegation in Mudhale. Mentored students on grassroots technology adoption, ethical sociological surveying, and synthesizing engineering research for rural transformation.',
    contributions: [
      {
        title: 'Strategic Academic Leadership & Immersion Framework',
        desc: 'Defined research parameters and methodology for rural community immersion, aligning the engineering curriculum with ground-level socio-economic challenges.',
        icon: GraduationCap,
      },
      {
        title: 'Gram Panchayat & Institutional Collaboration',
        desc: 'Spearheaded key dialogues with Gram Panchayat officials, Baramati regional educational administrators, and village community elders to build mutual trust.',
        icon: Building2,
      },
      {
        title: 'Engineering Innovation & IoT Systems Guidance',
        desc: 'Mentored our team in translating village pain-points into robust, low-maintenance IoT solutions suitable for rural power and connectivity constraints.',
        icon: Cpu,
      },
      {
        title: 'Delegation Oversight & Field Safety Protocols',
        desc: 'Administered field operations, ensuring professional discipline, ethical student conduct during household surveys, and comprehensive delegation wellbeing.',
        icon: HeartHandshake,
      }
    ],
    quote: '"Rural immersion challenges engineers not merely to write code, but to observe authentic human needs and build resilient, compassionate technology that elevates rural livelihoods."',
    tags: ['Senior Faculty Lead', 'Academic Mentor', 'RUIP 2026 Lead', 'Baramati Outreach', 'IoT Strategy']
  },
  {
    id: 'prof-seema-idhate-maam',
    orderNumber: 2,
    name: 'PROF. SEEMA IDHATE MA\'AM',
    salutation: 'Faculty Mentor & Academic Coordinator',
    designation: 'Assistant Professor / Faculty Coordinator',
    department: 'Department of Computer Engineering and Technology',
    institution: 'MIT World Peace University (MIT-WPU), Pune',
    imageSrc: '/assets/aistudio/image_adfc3347.png',
    gpsLocation: {
      label: 'Mudhale, Maharashtra, India',
      subLoc: 'Someshwar Vidyalaya (सोमेश्वर विद्यालय मुढाळे), Baramati 413110',
      coordinates: 'Lat 18.179829° N • Long 74.386414° E',
      plusCode: '59hp+vgr, Mudhale, Maharashtra 413110',
      timestamp: 'Friday, 14/08/2026 11:09 AM GMT+05:30'
    },
    eventContext: 'Presented the ceremonial World Globe by Someshwar Vidyalaya leadership in recognition of educational outreach and youth empowerment',
    bioSummary: 'Coordinated student academic fieldwork, school educational outreach, and female student mentorship throughout the 5-day immersion. Championed digital literacy sessions at Someshwar Vidyalaya and guided survey data validation on rural household welfare and welfare scheme outreach.',
    contributions: [
      {
        title: 'School Education & Digital Literacy Outreach',
        desc: 'Organized and coordinated interactive computer fundamentals, digital awareness, and STEM demonstrations for rural students at Someshwar Vidyalaya.',
        icon: Globe2,
      },
      {
        title: 'Socio-Demographic Survey Data Verification',
        desc: 'Audited survey questionnaires on household education levels, female literacy rates, and direct benefit transfer (DBT) implementation like the Ladki Bahin Yojana.',
        icon: BookOpen,
      },
      {
        title: 'Student Team Coordination & Support',
        desc: 'Maintained day-to-day coordination among survey sub-teams, providing empathetic mentorship and continuous academic review during field visits.',
        icon: HeartHandshake,
      },
      {
        title: 'Community Empowerment & Women Outreach',
        desc: 'Encouraged active dialogue with female household heads and local women Self-Help Groups (SHGs) to gauge cottage business and financial inclusion needs.',
        icon: Sparkles,
      }
    ],
    quote: '"Empowering rural classrooms through technology literacy plants seeds for generational transformation. The energy of Mudhale\'s students proves that curiosity knows no geography."',
    tags: ['Faculty Coordinator', 'Educational Outreach', 'Digital Literacy', 'Survey Verification', 'Women in Tech']
  },
  {
    id: 'mrs-arundhati-maam',
    orderNumber: 3,
    name: 'MRS. ARUNDHATI MA\'AM',
    salutation: 'Faculty Mentor & Project Guide',
    designation: 'Assistant Professor / Project Coordinator',
    department: 'Department of Computer Engineering and Technology',
    institution: 'MIT World Peace University (MIT-WPU), Pune',
    imageSrc: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.23.12_PM_b9275e49.jpeg',
    gpsLocation: {
      label: 'Mudhale, Maharashtra, India',
      subLoc: 'Someshwar Vidyalaya Courtyard, SH 62, Mudhale, Baramati 413110',
      coordinates: 'Lat 18.179783° N • Long 74.386399° E',
      plusCode: '59hp+vgr, Mudhale, Maharashtra 413110',
      timestamp: 'Friday, 14/08/2026 10:50 AM GMT+05:30'
    },
    eventContext: 'Felicitation & Community Honor Ceremony at Someshwar Vidyalaya (श्री सोमेश्वर शिक्षण प्रसारक मंडळ, सोमेश्वर विद्यालय)',
    bioSummary: 'Spearheaded on-ground field ethnographic research, ethical household surveys, and village liaison across Mudhale. Mentored our team in mapping rural infrastructural pain-points (open drainage, dark-zone streetlights, unmanaged waste) into feasible low-cost CSE IoT interventions.',
    contributions: [
      {
        title: 'Academic & Survey Research Supervision',
        desc: 'Oversaw rigorous socio-economic questionnaire administration across pakka and kachha households, verifying data integrity for income brackets, PDS ration distribution, and Ladki Bahin DBT analytics.',
        icon: BookOpen,
      },
      {
        title: 'Institutional & Village Panchayat Liaison',
        desc: 'Facilitated formal meetings with Gram Panchayat officials, local farmers, and Someshwar Vidyalaya educators, building trust and cultural alignment for student engineers.',
        icon: Building2,
      },
      {
        title: 'CSE Problem-to-Solution Direction',
        desc: 'Guided students to align low-cost hardware (ESP32 microcontrollers, LDR sensors, ultrasonic water-level transducers) with real village constraints such as load-shedding and limited maintenance bandwidth.',
        icon: Compass,
      },
      {
        title: 'Student Wellbeing & Field Mentorship',
        desc: 'Ensured team safety, logistical discipline, and empathetic interaction protocols across agricultural farms, school computer literacy sessions, and evening community sports outreach.',
        icon: HeartHandshake,
      }
    ],
    quote: '"Engineering education achieves its highest purpose when our students step out of laboratories into rural communities, listening with humility and building with technological precision."',
    tags: ['Field Project Mentor', 'Rural Immersion 2026', 'Someshwar Vidyalaya', 'CSE Department', 'Baramati Outreach']
  }
];

export const OurMentorsSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; name: string; location: string; timestamp: string } | null>(null);
  const [activeMentorId, setActiveMentorId] = useState<string>('all');

  const filteredMentors = activeMentorId === 'all' 
    ? MENTORS 
    : MENTORS.filter(m => m.id === activeMentorId);

  return (
    <section id="mentors-section" className="py-20 bg-[#F4EFE6]/60 dark:bg-[#121A11] border-t border-[#243324]/10 dark:border-white/10 relative overflow-hidden">
      {/* Decorative background gradient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3B4D36]/5 dark:bg-emerald-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#C59B27]/5 dark:bg-amber-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3B4D36]/10 dark:bg-emerald-500/10 border border-[#3B4D36]/20 dark:border-emerald-500/20 text-[#243324] dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <GraduationCap className="w-4 h-4 text-[#3B4D36] dark:text-emerald-400" />
            <span>Academic Mentorship & Faculty Guidance</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F2B1D] dark:text-[#F4EFE6] tracking-tight">
            OUR MENTORS
          </h2>
          
          <p className="mt-3 text-base sm:text-lg text-[#556950] dark:text-[#A3B59E] font-serif italic">
            मार्गदर्शक प्राध्यापक व शैक्षणिक नेतृत्व • Department of Computer Engineering and Technology, MIT-WPU Pune
          </p>

          <p className="mt-4 text-sm sm:text-base text-[#475443] dark:text-[#C5D4C0] leading-relaxed">
            We express our deepest gratitude to our faculty leadership and mentors who guided our team throughout the 5-day Rural Immersion Program (RUIP 2026) in Mudhale Village, Baramati. Their academic guidance, community coordination, and on-ground encouragement made this comprehensive study and technical intervention possible.
          </p>
        </div>

        {/* Quick Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveMentorId('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeMentorId === 'all'
                ? 'bg-[#243324] text-[#F4EFE6] shadow-md dark:bg-emerald-600'
                : 'bg-white/80 dark:bg-[#1A2518] text-[#556950] dark:text-[#A3B59E] border border-[#243324]/10 dark:border-white/10 hover:bg-white dark:hover:bg-[#223020]'
            }`}
          >
            All Mentors ({MENTORS.length})
          </button>

          {MENTORS.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveMentorId(m.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeMentorId === m.id
                  ? 'bg-[#243324] text-[#F4EFE6] shadow-md dark:bg-emerald-600'
                  : 'bg-white/80 dark:bg-[#1A2518] text-[#556950] dark:text-[#A3B59E] border border-[#243324]/10 dark:border-white/10 hover:bg-white dark:hover:bg-[#223020]'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-[#3B4D36]/20 dark:bg-emerald-400/20 text-[#243324] dark:text-emerald-300 text-[11px] flex items-center justify-center font-mono font-bold">
                {m.orderNumber}
              </span>
              <span>{m.name}</span>
            </button>
          ))}
        </div>

        {/* Mentors Cards Showcase in Exact Specified Order */}
        <div className="space-y-12">
          {filteredMentors.map((mentor) => (
            <div 
              key={mentor.id}
              id={mentor.id}
              className="bg-white dark:bg-[#1A2518] rounded-2xl border border-[#243324]/12 dark:border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Photo & Geotag Card Column */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-[#FAF7F2] to-[#ECE5D8] dark:from-[#172015] dark:to-[#121910] border-b lg:border-b-0 lg:border-r border-[#243324]/10 dark:border-white/10">
                  <div>
                    {/* Geotag Header Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#243324] text-[#F4EFE6] text-[11px] font-mono font-medium">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                        <span>MUDHALE • GPS CAMERA VERIFIED</span>
                      </div>
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#3B4D36]/15 dark:bg-emerald-500/15 text-[#243324] dark:text-emerald-300">
                        MENTOR #{mentor.orderNumber}
                      </span>
                    </div>

                    {/* Image with zoom interaction */}
                    <div 
                      className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group border border-[#243324]/15 dark:border-white/15"
                      onClick={() => setSelectedImage({
                        src: mentor.imageSrc,
                        name: mentor.name,
                        location: mentor.gpsLocation.subLoc,
                        timestamp: mentor.gpsLocation.timestamp
                      })}
                    >
                      <img 
                        src={mentor.imageSrc} 
                        alt={`${mentor.name} - ${mentor.salutation}`}
                        className="w-full aspect-[4/3] object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/75 text-white text-xs font-medium backdrop-blur-xs">
                          <Maximize2 className="w-4 h-4" /> Click to Expand Geotagged Photo
                        </span>
                      </div>

                      {/* On-photo Geotag Metadata Stamp (Bottom) */}
                      <div className="absolute bottom-0 inset-x-0 bg-black/80 backdrop-blur-md text-white p-3 text-left border-t border-white/15">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-[12px] font-bold tracking-tight text-white flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              {mentor.gpsLocation.label}
                            </p>
                            <p className="text-[10px] text-gray-300 font-mono mt-0.5">
                              {mentor.gpsLocation.coordinates}
                            </p>
                            <p className="text-[10px] text-gray-400 font-mono">
                              {mentor.gpsLocation.timestamp}
                            </p>
                          </div>
                          <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-white/20 text-white shrink-0 self-center">
                            GPS Map Camera
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Felicitation Context Card */}
                    <div className="mt-4 p-3.5 rounded-xl bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/20 dark:border-amber-400/20">
                      <div className="flex items-start gap-2.5">
                        <Award className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-amber-900 dark:text-amber-200 uppercase tracking-wider">
                            Someshwar Vidyalaya Ceremony
                          </p>
                          <p className="text-xs text-amber-800 dark:text-amber-300/90 mt-0.5 leading-snug">
                            {mentor.eventContext}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Geotag Precise Lat/Long Box */}
                  <div className="mt-5 pt-4 border-t border-[#243324]/10 dark:border-white/10 text-[11px] text-[#556950] dark:text-[#9FB39B] space-y-1 font-mono">
                    <div className="flex items-center justify-between">
                      <span className="text-[#7A8C75] dark:text-[#7A8C75]">Plus Code:</span>
                      <span className="font-semibold text-[#1F2B1D] dark:text-[#F4EFE6]">{mentor.gpsLocation.plusCode}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#7A8C75] dark:text-[#7A8C75]">Venue:</span>
                      <span className="font-semibold text-[#1F2B1D] dark:text-[#F4EFE6]">Someshwar Vidyalaya, Baramati</span>
                    </div>
                  </div>
                </div>

                {/* Details & Academic Contributions Column */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    {/* Role & Name Headers */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-[#3B4D36]/15 dark:bg-emerald-400/15 text-[#243324] dark:text-emerald-300">
                        {mentor.salutation}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-[#C59B27]/15 dark:bg-amber-400/15 text-[#85630E] dark:text-amber-300">
                        Order #{mentor.orderNumber} • RUIP 2026
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1F2B1D] dark:text-[#F4EFE6] tracking-tight">
                      {mentor.name}
                    </h3>
                    
                    <p className="text-sm sm:text-base font-medium text-[#3B4D36] dark:text-emerald-400 mt-1">
                      {mentor.designation}
                    </p>
                    <p className="text-xs sm:text-sm text-[#62735D] dark:text-[#8FA08B]">
                      {mentor.department} • {mentor.institution}
                    </p>

                    {/* Bio Paragraph */}
                    <div className="mt-5 p-4 rounded-xl bg-[#FAF8F3] dark:bg-[#151E14] border border-[#243324]/8 dark:border-white/5">
                      <p className="text-sm text-[#354332] dark:text-[#C8D6C4] leading-relaxed">
                        {mentor.bioSummary}
                      </p>
                    </div>

                    {/* Key Contributions Grid */}
                    <div className="mt-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#556950] dark:text-[#9FB39B] mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        <span>Field Leadership & Research Guidance</span>
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {mentor.contributions.map((item, idx) => {
                          const ItemIcon = item.icon;
                          return (
                            <div 
                              key={idx}
                              className="p-3.5 rounded-xl bg-white dark:bg-[#1E2C1C] border border-[#243324]/10 dark:border-white/10 hover:border-[#3B4D36]/40 dark:hover:border-emerald-500/40 transition-colors shadow-2xs"
                            >
                              <div className="flex items-center gap-2.5 mb-1.5">
                                <div className="w-7 h-7 rounded-lg bg-[#3B4D36]/10 dark:bg-emerald-400/10 flex items-center justify-center shrink-0">
                                  <ItemIcon className="w-4 h-4 text-[#2E4F4F] dark:text-emerald-400" />
                                </div>
                                <h5 className="text-xs font-bold text-[#1F2B1D] dark:text-[#F4EFE6] leading-tight">
                                  {item.title}
                                </h5>
                              </div>
                              <p className="text-xs text-[#556950] dark:text-[#A3B59E] leading-relaxed pl-9">
                                {item.desc}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Quote Box */}
                    {mentor.quote && (
                      <div className="mt-6 p-4 rounded-xl border-l-4 border-[#3B4D36] dark:border-emerald-400 bg-[#3B4D36]/5 dark:bg-emerald-950/20 italic text-xs sm:text-sm text-[#2E4F4F] dark:text-[#C5D9C0]">
                        {mentor.quote}
                      </div>
                    )}
                  </div>

                  {/* Tags & Recognition Footer */}
                  <div className="mt-6 pt-5 border-t border-[#243324]/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {mentor.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#EAE3D2] dark:bg-[#253523] text-[#334230] dark:text-[#D1E0CD]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-xs font-medium text-[#2E4F4F] dark:text-emerald-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>Verified MIT-WPU RUIP Delegation</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Closing Note & Acknowledgment Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#243324] via-[#2F442F] to-[#1F2B1D] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-serif font-bold text-white tracking-wide">
                Special Acknowledgment & Faculty Gratitude
              </h4>
              <p className="text-xs sm:text-sm text-emerald-100/80 mt-1 max-w-2xl leading-relaxed">
                Our Team (MIT-WPU SY BTech CSE) expresses deepest gratitude to Dr. Pramod Mali Sir, Prof. Seema Idhate Ma'am, and Mrs. Arundhati Ma'am for their continuous academic mentorship, field coordination, and inspirational guidance throughout our rural immersion journey in Mudhale.
              </p>
            </div>
          </div>
          
          <div className="shrink-0 text-center md:text-right border-t md:border-t-0 md:border-l border-white/15 pt-4 md:pt-0 md:pl-6">
            <span className="text-[10px] font-mono tracking-wider uppercase text-emerald-300 block">
              Program Code
            </span>
            <span className="text-sm font-bold font-mono text-white block">
              RUIP-2026-MUDHALE
            </span>
            <span className="text-[11px] text-white/70 block mt-0.5">
              Baramati Taluka, Pune
            </span>
          </div>
        </div>

      </div>

      {/* Fullscreen Photo Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
          >
            <div 
              className="relative max-w-4xl max-h-[90vh] bg-black rounded-xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black text-white hover:scale-105 transition-all"
                aria-label="Close image viewer"
              >
                <X className="w-6 h-6" />
              </button>

              <img 
                src={selectedImage.src} 
                alt={`Full geotagged photograph - ${selectedImage.name}`} 
                className="w-full h-auto max-h-[80vh] object-contain"
              />

              <div className="p-4 bg-[#111A10] border-t border-white/10 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div>
                  <p className="font-bold text-sm text-emerald-300">
                    {selectedImage.name} — Felicitation Ceremony at Someshwar Vidyalaya, Mudhale
                  </p>
                  <p className="text-gray-300 font-mono text-[11px] mt-0.5">
                    {selectedImage.location} • {selectedImage.timestamp}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-white/10 text-gray-200 font-mono text-[11px]">
                    59hp+vgr, Mudhale, Maharashtra 413110
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
