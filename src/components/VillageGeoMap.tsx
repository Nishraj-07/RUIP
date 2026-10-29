import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Navigation, Compass, Layers, School, TreePine, Droplets, Home, Store, Landmark, ExternalLink } from 'lucide-react';
import { VILLAGE_IMAGES } from '../assets/images';

interface MapPoint {
  id: string;
  name: string;
  nameMarathi: string;
  category: 'institution' | 'agriculture' | 'community' | 'household';
  lat: number;
  lng: number;
  x: number; // SVG %
  y: number; // SVG %
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  photoUrl?: string;
  surveyConnection: string;
}

const MAP_POINTS: MapPoint[] = [
  {
    id: 'pt-panchayat',
    name: 'Gram Panchayat Mudhale (Karyalaya & India Post)',
    nameMarathi: 'ग्रामपंचायत मुढाळे कार्यालय व पोस्ट ऑफिस',
    category: 'institution',
    lat: 18.18395,
    lng: 74.39263,
    x: 64,
    y: 38,
    icon: Landmark,
    description: 'Civic and administrative headquarters of Mudhale village, hosting the Sarpanch desk, Gram Sevak records, and India Post branch.',
    photoUrl: `${import.meta.env.BASE_URL}assets/aistudio/IMG-20260813-WA0005.jpg_58a470a3.jpeg`,
    surveyConnection: 'Administrative coordination base for Ladki Bahin records, PDS ration quotas, and municipal water pipeline projects.',
  },
  {
    id: 'pt-school',
    name: 'Someshwar Vidyalaya Mudhale',
    nameMarathi: 'सोमेश्वर विद्यालय मुढाळे',
    category: 'institution',
    lat: 18.179808,
    lng: 74.386464,
    x: 48,
    y: 52,
    icon: School,
    description: 'Central educational hub, student assembly area, and immersion headquarters for MIT-WPU delegation.',
    photoUrl: VILLAGE_IMAGES.delegationBanner,
    surveyConnection: 'Host campus for village elder meetings and student demographic interviews.',
  },
  {
    id: 'pt-sh62-pump',
    name: 'Agricultural Canal & Irrigation Pump Station',
    nameMarathi: 'शेततळे उपसा सिंचन व पंप स्थानक (SH 62)',
    category: 'agriculture',
    lat: 18.184937,
    lng: 74.387502,
    x: 74,
    y: 28,
    icon: Droplets,
    description: 'High-discharge pump feeding drip irrigation networks and protective polyhouse vegetable farming along SH-62.',
    photoUrl: VILLAGE_IMAGES.irrigationPump,
    surveyConnection: 'Directly linked to water irregularities reported by Household 5 (Trambak Jagtap) and Household 3 (Aditya Jagtap).',
  },
  {
    id: 'pt-plantation',
    name: 'Village Tree Plantation Site',
    nameMarathi: 'ग्रामपंचायत वृक्षारोपण परिसर',
    category: 'community',
    lat: 18.180175,
    lng: 74.387314,
    x: 58,
    y: 44,
    icon: TreePine,
    description: 'Green corridor along village residential street planted with native neem and shade trees by students and villagers.',
    photoUrl: VILLAGE_IMAGES.treePlantation,
    surveyConnection: 'Community engagement site near central residential dwellings.',
  },
  {
    id: 'pt-hh-kirana',
    name: 'Household #2 — Sachin Kirana Store',
    nameMarathi: 'किराणा दुकान व सार्वजनिक नळ परिसर',
    category: 'household',
    lat: 18.1805,
    lng: 74.3861,
    x: 38,
    y: 46,
    icon: Store,
    description: 'Village square retail grocery hub operated by Graduate entrepreneur Sachin.',
    surveyConnection: 'Relies on public water tap; reports urgent need for regular municipal water supply.',
  },
  {
    id: 'pt-hh-kote',
    name: 'Household #1 — Omkar Kote Homestead',
    nameMarathi: 'ओमकार कोते वस्ती (शेती परिसर)',
    category: 'household',
    lat: 18.1785,
    lng: 74.3855,
    x: 32,
    y: 68,
    icon: Home,
    description: 'Pakka agricultural homestead with up to 5 acres of mixed sugarcane and jowar cultivation.',
    surveyConnection: 'Beneficiary of Majhi Ladki Bahin Yojana (₹1,500/mo) and PDS ration facilities.',
  },
  {
    id: 'pt-hh-jagtap',
    name: 'Household #3 & #5 — Jagtap Dairy & Farm Cluster',
    nameMarathi: 'जगताप वस्ती (दुग्धव्यवसाय व बागायती)',
    category: 'household',
    lat: 18.1822,
    lng: 74.3892,
    x: 82,
    y: 60,
    icon: Home,
    description: 'Mixed dairy and deep-well agricultural farmland supporting 16 family members across two joint households.',
    surveyConnection: 'Primary site requesting Chaff Cutters (कडबा कुट्टी) and regular canal water rotation.',
  },
];

export const VillageGeoMap: React.FC = () => {
  const [selectedPoint, setSelectedPoint] = useState<MapPoint>(MAP_POINTS[0]);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredPoints = MAP_POINTS.filter((p) => {
    if (filterCategory === 'all') return true;
    return p.category === filterCategory;
  });

  return (
    <section
      id="map-section"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F5F2EB] dark:bg-[#182417] text-[#243324] dark:text-[#F4EFE6] transition-colors duration-400 border-t border-[#243324]/10 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#3B4D36]/10 dark:bg-white/10 text-[#3B4D36] dark:text-[#85E7B7]">
              <span>Geospatial Field Mapping</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#1F2B1D] dark:text-[#F4EFE6] font-normal tracking-tight leading-[1.08]">
              Mudhale Geospatial Field Infrastructure
            </h2>
            <p className="text-base sm:text-lg text-[#4A5D44] dark:text-[#CBD7C7] font-light leading-relaxed">
              Explore key field immersion sites mapped via on-site GPS coordinates, showing Someshwar Vidyalaya, State Highway 62 canal lift systems, and surveyed household clusters.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto shrink-0">
            {[
              { id: 'all', label: 'All Sites (7)' },
              { id: 'institution', label: 'Panchayat & School' },
              { id: 'agriculture', label: 'Irrigation & Pumping' },
              { id: 'household', label: 'Surveyed Wasti' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  filterCategory === tab.id
                    ? 'bg-[#1F2B1D] dark:bg-[#384E36] text-white shadow-xs'
                    : 'bg-white dark:bg-[#202E1E] text-[#3B4D36] dark:text-[#CBD7C7] hover:bg-white/80 dark:hover:bg-[#2A3D28] border border-[#243324]/10 dark:border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Split: Interactive Map Canvas on Left, Active Point Dossier on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Map Canvas (7 cols on lg) */}
          <div className="lg:col-span-7 bg-[#E8E4DA] dark:bg-[#121B11] rounded-3xl p-4 sm:p-6 border-2 border-[#243324]/20 dark:border-white/15 shadow-xl relative overflow-hidden min-h-[480px] sm:min-h-[540px] flex flex-col justify-between">
            {/* Top Coordinate Pill */}
            <div className="flex items-center justify-between text-xs text-[#243324] dark:text-[#F4EFE6] z-10">
              <div className="flex items-center gap-2 bg-white/90 dark:bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-current/10 font-mono text-[11px]">
                <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                <span>Mudhale • 18.1798° N, 74.3865° E • 562m ASL</span>
              </div>
              <div className="bg-white/90 dark:bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-current/10 text-[11px] font-medium hidden sm:block">
                Taluka Baramati • Pune
              </div>
            </div>

            {/* Custom Styled SVG Terrain Representation */}
            <div className="absolute inset-0 p-6 flex items-center justify-center pointer-events-none">
              <svg viewBox="0 0 800 600" className="w-full h-full opacity-60">
                {/* Canal Network */}
                <path
                  d="M 50 120 Q 300 180 500 150 T 750 220"
                  fill="none"
                  stroke="#3EA8C8"
                  strokeWidth="8"
                  strokeDasharray="4 2"
                  className="opacity-75"
                />
                <text x="350" y="140" fill="#3EA8C8" fontSize="12" fontWeight="600">
                  Nira Canal Irrigation Distributary
                </text>

                {/* State Highway 62 (SH 62) */}
                <path
                  d="M 700 50 L 550 300 L 450 550"
                  fill="none"
                  stroke="#A89F91"
                  strokeWidth="12"
                  className="opacity-50"
                />
                <text x="590" y="240" fill="#657351" fontSize="11" fontWeight="bold" transform="rotate(65 590,240)">
                  SH 62 (Baramati Road)
                </text>

                {/* Village Fields Contour Grid */}
                <rect x="180" y="240" width="160" height="140" rx="20" fill="#D3DEC9" opacity="0.35" />
                <rect x="360" y="320" width="180" height="150" rx="20" fill="#D3DEC9" opacity="0.35" />
                <rect x="560" y="340" width="150" height="160" rx="20" fill="#D3DEC9" opacity="0.35" />
                <text x="210" y="310" fill="#4B6344" fontSize="11">Sugarcane & Jowar Plots</text>
                <text x="390" y="400" fill="#4B6344" fontSize="11">Central Gaothan Area</text>
              </svg>
            </div>

            {/* Interactive Markers Placed by Percentage */}
            <div className="relative w-full h-[400px] z-10 my-4">
              {filteredPoints.map((point) => {
                const isSelected = selectedPoint.id === point.id;
                const IconComponent = point.icon;

                return (
                  <div
                    key={point.id}
                    onClick={() => setSelectedPoint(point)}
                    style={{ left: `${point.x}%`, top: `${point.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  >
                    {/* Pulsing Selection Ring */}
                    {isSelected && (
                      <span className="absolute -inset-2.5 rounded-full bg-emerald-500/30 dark:bg-emerald-400/40 animate-ping pointer-events-none" />
                    )}

                    {/* Marker Badge */}
                    <div
                      className={`px-3 py-1.5 rounded-2xl flex items-center gap-2 shadow-lg transition-all duration-200 ${
                        isSelected
                          ? 'bg-[#1F2B1D] dark:bg-[#384F35] text-white scale-110 ring-2 ring-emerald-400'
                          : 'bg-white/95 dark:bg-[#202E1E] text-[#1F2B1D] dark:text-[#F4EFE6] hover:scale-105 border border-current/15'
                      }`}
                    >
                      <IconComponent className={`w-4 h-4 ${isSelected ? 'text-emerald-300' : 'text-emerald-700 dark:text-emerald-400'}`} />
                      <span className="text-xs font-semibold whitespace-nowrap hidden sm:inline-block">
                        {point.name.split('—')[0].split('(')[0].trim()}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map Legend Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-white/90 dark:bg-[#1A261A]/90 backdrop-blur-md border border-current/10 text-[11px] text-[#4A5D44] dark:text-[#CBD7C7] z-10">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" /> Institution
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block" /> Irrigation Canal
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" /> Surveyed Homes
                </span>
              </div>
              <span className="italic font-light">Click any pin to inspect GPS field record</span>
            </div>
          </div>

          {/* Right Detail Dossier for Selected Map Point (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPoint.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-[#1C291B] rounded-3xl p-6 sm:p-7 border border-[#243324]/12 dark:border-white/15 shadow-xl space-y-5"
              >
                {/* Photo Preview if available */}
                {selectedPoint.photoUrl && (
                  <div className="h-44 rounded-2xl overflow-hidden shadow-sm relative bg-black">
                    <img
                      src={selectedPoint.photoUrl}
                      alt={selectedPoint.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2.5 left-3 text-white text-[11px] font-mono">
                      GPS Tagged: {selectedPoint.lat.toFixed(5)}° N, {selectedPoint.lng.toFixed(5)}° E
                    </div>
                  </div>
                )}

                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    {selectedPoint.category.toUpperCase()} INFRASTRUCTURE
                  </span>
                  <h3 className="font-display text-2xl text-[#1F2B1D] dark:text-[#F4EFE6] font-medium pt-1">
                    {selectedPoint.name}
                  </h3>
                  <p className="text-xs text-[#657351] dark:text-[#A3B59E]">
                    {selectedPoint.nameMarathi}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#F5F2EB] dark:bg-[#152014] border border-[#243324]/8 dark:border-white/10 space-y-2 text-xs">
                  <div className="flex items-center gap-1.5 font-semibold text-[#1F2B1D] dark:text-white">
                    <Compass className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Exact Geolocation</span>
                  </div>
                  <p className="text-[#4A5D44] dark:text-[#CBD7C7]">
                    Latitude: {selectedPoint.lat}° N • Longitude: {selectedPoint.lng}° E
                  </p>
                  <p className="text-[#4A5D44] dark:text-[#CBD7C7]">
                    Taluka: Baramati • District: Pune, Maharashtra (413110)
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#657351] dark:text-[#A3B59E]">
                    Infrastructure Role
                  </div>
                  <p className="text-xs sm:text-sm text-[#243324] dark:text-[#F4EFE6] leading-relaxed">
                    {selectedPoint.description}
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-[#243324]/10 dark:border-white/10">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#3B4D36] dark:text-[#85E7B7]">
                    Connection to Household Survey
                  </div>
                  <p className="text-xs text-[#4A5D44] dark:text-[#CBD7C7] font-light leading-relaxed">
                    {selectedPoint.surveyConnection}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
