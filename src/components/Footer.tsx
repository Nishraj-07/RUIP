import React from 'react';
import { Users, GraduationCap, MapPin, Award, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const teamMembers = [
    { name: 'NISHANT RAJPUT', role: 'SY BTech CSE • IoT & Systems Architecture' },
    { name: 'VEDANT KADVEKAR', role: 'SY BTech CSE • Field Survey & Analytics' },
    { name: 'RAJDEEP DESHMUKH', role: 'SY BTech CSE • Geospatial Mapping & Data' },
    { name: 'AKSHAT CHARDE', role: 'SY BTech CSE • Hardware & Embedded Systems' },
    { name: 'ISHAN GADHE', role: 'SY BTech CSE • Documentation & Civic Tech' },
  ];

  return (
    <footer className="bg-[#151916] text-[#b5c2b7] border-t border-[#263328] pt-14 pb-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title matching reference image typography */}
        <div className="mb-10 pb-6 border-b border-[#233125]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-widest text-white uppercase font-sans">
                RUIP - MUDHALE TEAM
              </h2>
              <p className="text-xs sm:text-sm text-[#7f9c84] tracking-wide mt-1 font-medium">
                Rural Immersion Program 2026 • Mudhale Village Field Research & Technical Interventions
              </p>
            </div>
            <div className="inline-flex items-center gap-2 self-start md:self-auto px-3.5 py-1.5 rounded-full bg-[#1e2a20] border border-[#344837] text-xs text-[#a2d8ab] font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Verified Field Dossier • Baramati
            </div>
          </div>
        </div>

        {/* 4-Column Layout modeled after the corporate/academic footer reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
          {/* Column 1: Creators / Team Members */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-white">
              <Users className="w-4 h-4 text-emerald-400" />
              <h3 className="text-base font-bold text-white tracking-wide uppercase">
                Team Members
              </h3>
            </div>
            <ul className="space-y-3">
              {teamMembers.map((member, index) => (
                <li key={member.name} className="group">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-mono text-[#66876c] font-bold">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span className="text-sm font-semibold tracking-wide text-white group-hover:text-emerald-300 transition-colors">
                      {member.name}
                    </span>
                  </div>
                  <p className="text-xs text-[#829986] pl-6">
                    {member.role}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Academic Institution */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-white">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <h3 className="text-base font-bold text-white tracking-wide uppercase">
                Academic Affiliation
              </h3>
            </div>
            <div className="space-y-2 text-sm text-[#a8b8aa] leading-relaxed">
              <p className="font-semibold text-white">
                MIT World Peace University (MIT-WPU)
              </p>
              <p>Department of Computer Engineering and Technology</p>
              <p>School of Engineering & Technology</p>
              <p className="text-xs text-[#7e9683] pt-1">
                Survey No. 124, Paud Road, Kothrud, Pune, Maharashtra 411038, India
              </p>
              <div className="pt-2 text-xs font-mono text-[#8fad93]">
                Academic Year: 2025–2026 (SY BTech CSE)
              </div>
            </div>
          </div>

          {/* Column 3: Immersion Field Site */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-white">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <h3 className="text-base font-bold text-white tracking-wide uppercase">
                Immersion Field Site
              </h3>
            </div>
            <div className="space-y-2 text-sm text-[#a8b8aa] leading-relaxed">
              <p className="font-semibold text-white">
                Mudhale Village & Someshwar Vidyalaya
              </p>
              <p>State Highway 62 Corridor</p>
              <p>Baramati Taluka, Pune District</p>
              <p>Maharashtra 413110, India</p>
              <div className="pt-2">
                <span className="inline-block px-2.5 py-1 bg-[#1a251c] border border-[#2e4231] rounded text-xs font-mono text-[#a3d8ac]">
                  GPS: 18.1808° N, 74.3896° E
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: Mentorship & Acknowledgments */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-white">
              <Award className="w-4 h-4 text-emerald-400" />
              <h3 className="text-base font-bold text-white tracking-wide uppercase">
                Faculty Mentorship
              </h3>
            </div>
            <div className="space-y-3 text-sm text-[#a8b8aa]">
              <div>
                <p className="font-semibold text-white">Dr. Pramod Mali Sir</p>
                <p className="text-xs text-[#7f9784]">Lead Academic & Immersion Mentor</p>
              </div>
              <div>
                <p className="font-semibold text-white">Prof. Seema Idhate Ma&apos;am</p>
                <p className="text-xs text-[#7f9784]">Faculty Coordinator & Academic Guide</p>
              </div>
              <div>
                <p className="font-semibold text-white">Mrs. Arundhati Ma&apos;am</p>
                <p className="text-xs text-[#7f9784]">Project Faculty & Guidance Mentor</p>
              </div>
              <div className="pt-2 flex items-center gap-1.5 text-xs text-[#719177]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Field survey authenticated with Gram Panchayat</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rule & Copyright Bar */}
        <div className="pt-8 border-t border-[#233125] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#708a75]">
          <p className="text-center sm:text-left">
            © 2026 <span className="text-white font-medium">RUIP - MUDHALE TEAM</span> • MIT-WPU SY BTech Computer Science &amp; Engineering. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-[#8aa38f]">
            <span>Crafted for rural impact with</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-current" />
            <span>in Mudhale, Baramati</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
