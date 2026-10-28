import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Cpu,
  Wifi,
  AlertTriangle,
  Lightbulb,
  Droplets,
  Trash2,
  Send,
  CheckCircle2,
  Clock,
  Terminal,
  Layers,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  BookOpen,
  MapPin,
  Flame,
  Radio,
  FileCode,
} from 'lucide-react';

export const CseTechnicalSolutionsSection: React.FC = () => {
  // State for Card 1: Street Light IoT Simulator
  const [lightStatus, setLightStatus] = useState<'normal' | 'blown'>('blown');
  const [ticketAcknowledged, setTicketAcknowledged] = useState<boolean>(false);

  // State for Card 2: Drainage Sensor Simulator
  const [waterLevelCm, setWaterLevelCm] = useState<number>(48); // Threshold = 40cm
  const isClogged = waterLevelCm >= 40;

  // State for Card 3: Grievance Portal Simulator
  const [activeTab, setActiveTab] = useState<'report' | 'track' | 'marathi-guide'>('report');
  const [complaintType, setComplaintType] = useState<string>('Unmanaged Garbage Dumping');
  const [complaintLocation, setComplaintLocation] = useState<string>('Near Someshwar Vidyalaya gate');
  const [complaintSubmitted, setComplaintSubmitted] = useState<boolean>(false);
  const [ticketId, setTicketId] = useState<string>('MUD-2026-084');

  const handleSimulateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setComplaintSubmitted(true);
    setTicketId(`MUD-2026-0${Math.floor(Math.random() * 90 + 10)}`);
  };

  return (
    <section
      id="cse-solutions-section"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0E2918] text-[#F4EFE6] transition-colors duration-400 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Academic / Team Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#2E4F4F] text-[#85E7B7] border border-[#85E7B7]/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>MIT-WPU SY BTech CSE • Our Team</span>
            <span className="text-white/40">•</span>
            <span>Applied IoT Systems Architecture</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-[1.08]">
            CSE Technical Solutions & Future Actions
          </h2>

          <p className="text-base sm:text-lg text-[#CBD7C7] font-light leading-relaxed">
            Directly addressing the three primary infrastructural deficits documented during household and panchayat fieldwork in Mudhale Village: <strong className="text-white font-semibold">Street Lighting Deficits</strong>, <strong className="text-white font-semibold">Open/Clogged Wastewater Drains</strong>, and <strong className="text-white font-semibold">Unmanaged Garbage Accumulation</strong>.
          </p>
        </div>

        {/* 1. Problem-to-Solution Mapping Architecture (3 Detailed Technical Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CARD 1: Smart Street Light & Dark Zone Management */}
          <div className="rounded-3xl bg-[#143521] border border-[#2E4F4F] p-6 sm:p-7 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#2E4F4F] text-amber-300 flex items-center justify-center shadow-inner">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/40 text-amber-300 border border-amber-300/20">
                  ESP32 + MQTT Broker
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl text-white font-medium">
                  Smart Street Light & Dark Zone Manager
                </h3>
                <p className="text-xs text-[#85E7B7] font-mono mt-0.5">
                  Automated Lux Sensing & Fault Telemetry
                </p>
              </div>

              {/* Problem Addressed */}
              <div className="p-3.5 rounded-2xl bg-black/30 border border-white/10 space-y-1 text-xs">
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" /> Problem Addressed:
                </span>
                <p className="text-[#CBD7C7] leading-relaxed">
                  Critical unlit village arterial roads and Kote/Jagtap wasti stretches posing severe night safety risks, snake-bite hazards, and delayed manual failure reporting.
                </p>
              </div>

              {/* CSE Solution & Architecture */}
              <div className="space-y-2 text-xs">
                <span className="text-[10px] uppercase font-bold text-[#85E7B7] tracking-wider block">
                  CSE & IoT Architecture:
                </span>
                <p className="text-[#CBD7C7] leading-relaxed">
                  An edge-node prototype combining an <strong>ESP32 Microcontroller</strong> and calibrated <strong>LDR (Light Dependent Resistor)</strong> with a shunt current sensor. If the circuit draws no current during dusk/night scheduled hours, a lightweight <strong>MQTT / HTTP JSON payload</strong> is pushed to the Gram Panchayat maintenance console.
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['ESP32-WROOM', 'LDR Sensor', 'MQTT over TLS', 'Node.js Broker', 'Mosquitto'].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-[#2E4F4F]/60 text-[10px] font-mono text-[#CBD7C7]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Live Simulator */}
            <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  Live Hardware Edge Simulation
                </span>
                <div className="flex bg-white/10 rounded-lg p-0.5 text-[10px]">
                  <button
                    onClick={() => setLightStatus('normal')}
                    className={`px-2 py-0.5 rounded font-medium ${lightStatus === 'normal' ? 'bg-emerald-600 text-white' : 'text-gray-400'}`}
                  >
                    Nominal
                  </button>
                  <button
                    onClick={() => setLightStatus('blown')}
                    className={`px-2 py-0.5 rounded font-medium ${lightStatus === 'blown' ? 'bg-rose-600 text-white' : 'text-gray-400'}`}
                  >
                    Bulb Fault
                  </button>
                </div>
              </div>

              {/* Simulated MQTT Payload */}
              <div className="p-2.5 rounded-xl bg-[#0A160D] border border-white/5 font-mono text-[10px] text-emerald-400 overflow-x-auto space-y-0.5">
                <div className="text-gray-500">// MQTT Topic: mudhale/streetlights/node_04/telemetry</div>
                <div>{'{'}</div>
                <div className="pl-3">&quot;node_id&quot;: &quot;MUDHALE_ST_04&quot;,</div>
                <div className="pl-3">&quot;location&quot;: &quot;Someshwar Vidyalaya Access Road&quot;,</div>
                <div className="pl-3">&quot;lux_level&quot;: {lightStatus === 'normal' ? '12.4' : '0.2'},</div>
                <div className="pl-3">
                  &quot;status&quot;:{' '}
                  <span className={lightStatus === 'normal' ? 'text-emerald-300' : 'text-rose-400 font-bold'}>
                    &quot;{lightStatus === 'normal' ? 'NOMINAL_OPERATING' : 'FAULT_BULB_BLOWN'}&quot;
                  </span>
                </div>
                <div>{'}'}</div>
              </div>

              {lightStatus === 'blown' ? (
                <div className="p-2 rounded-xl bg-rose-950/50 border border-rose-800/40 text-[11px] text-rose-200 flex items-center justify-between">
                  <span>🚨 Alert triggered to Mudhale Gram Sevak</span>
                  <button
                    onClick={() => setTicketAcknowledged(!ticketAcknowledged)}
                    className="px-2 py-1 rounded bg-rose-700 hover:bg-rose-600 text-white font-semibold text-[10px]"
                  >
                    {ticketAcknowledged ? 'Assigned' : 'Dispatch Tech'}
                  </button>
                </div>
              ) : (
                <div className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-[11px] text-emerald-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>All 14 light poles operating normally</span>
                </div>
              )}
            </div>
          </div>

          {/* CARD 2: IoT-Enabled Drainage & Stagnant Water Monitoring */}
          <div className="rounded-3xl bg-[#143521] border border-[#2E4F4F] p-6 sm:p-7 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#2E4F4F] text-sky-300 flex items-center justify-center shadow-inner">
                  <Droplets className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/40 text-sky-300 border border-sky-300/20">
                  HC-SR04 + Webhooks
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl text-white font-medium">
                  IoT Drainage & Stagnant Water Monitor
                </h3>
                <p className="text-xs text-[#85E7B7] font-mono mt-0.5">
                  Ultrasonic Level & Clog Detection Nodes
                </p>
              </div>

              {/* Problem Addressed */}
              <div className="p-3.5 rounded-2xl bg-black/30 border border-white/10 space-y-1 text-xs">
                <span className="text-[10px] uppercase font-bold text-sky-400 tracking-wider flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" /> Problem Addressed:
                </span>
                <p className="text-[#CBD7C7] leading-relaxed">
                  Open and choked wastewater channels along central gaothan streets causing stagnant overflow, foul odors, and severe mosquito breeding zones.
                </p>
              </div>

              {/* CSE Solution & Architecture */}
              <div className="space-y-2 text-xs">
                <span className="text-[10px] uppercase font-bold text-[#85E7B7] tracking-wider block">
                  CSE & IoT Architecture:
                </span>
                <p className="text-[#CBD7C7] leading-relaxed">
                  Ultrasonic <strong>HC-SR04 / JSN-SR04T waterproof depth sensors</strong> mounted inside culverts and primary drain bottlenecks. When stagnant water height surpasses the safety threshold (40 cm), an automated <strong>FastAPI / Node webhook</strong> dispatches high-priority WhatsApp/Telegram bot alerts directly to the Gram Panchayat sanitation supervisor.
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['JSN-SR04T Waterproof', 'ESP32 Wi-Fi', 'FastAPI Webhook', 'Telegram Bot API', 'InfluxDB'].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-[#2E4F4F]/60 text-[10px] font-mono text-[#CBD7C7]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Live Simulator */}
            <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-white">Live Sluice Gate Depth:</span>
                <span className={`font-mono font-bold text-xs ${isClogged ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {waterLevelCm} cm {isClogged ? '(CRITICAL CLOG)' : '(NORMAL FLOW)'}
                </span>
              </div>

              <input
                type="range"
                min="10"
                max="65"
                value={waterLevelCm}
                onChange={(e) => setWaterLevelCm(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#85E7B7]"
              />

              <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                <span>10cm (Clean Drain)</span>
                <span className="text-amber-400 font-bold">40cm (Threshold)</span>
                <span>65cm (Overflow)</span>
              </div>

              {/* Simulated Telegram / WhatsApp Bot Notification */}
              {isClogged ? (
                <div className="p-3 rounded-xl bg-sky-950/60 border border-sky-600/40 text-xs space-y-1">
                  <div className="flex items-center justify-between text-[10px] text-sky-300 font-mono font-bold uppercase">
                    <span>📱 Bot Notification Dispatched</span>
                    <span>Just now</span>
                  </div>
                  <p className="text-[#E2E8F0] text-[11px] leading-snug">
                    ⚠️ <strong>Mudhale Drainage Alert [Node D-02]:</strong> Sluice depth exceeded 40cm (Current: {waterLevelCm}cm) at Gaothan Main Bazar Choke point. Probable debris blockage.
                  </p>
                  <div className="text-[10px] text-sky-400 font-medium">
                    → Assigned to: Mudhale Sanitation Ward Lead (Ticket #DRN-402)
                  </div>
                </div>
              ) : (
                <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-[11px] text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Drain clearance optimal. No backflow detected.</span>
                </div>
              )}
            </div>
          </div>

          {/* CARD 3: Digital Waste Segregation & Community Grievance Portal */}
          <div className="rounded-3xl bg-[#143521] border border-[#2E4F4F] p-6 sm:p-7 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#2E4F4F] text-emerald-300 flex items-center justify-center shadow-inner">
                  <Trash2 className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/40 text-emerald-300 border border-emerald-300/20">
                  Fullstack React + Chatbot
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl text-white font-medium">
                  Waste Segregation & Grievance Portal
                </h3>
                <p className="text-xs text-[#85E7B7] font-mono mt-0.5">
                  Mudhale Citizen Helpdesk & Swachhata Bot
                </p>
              </div>

              {/* Problem Addressed */}
              <div className="p-3.5 rounded-2xl bg-black/30 border border-white/10 space-y-1 text-xs">
                <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" /> Problem Addressed:
                </span>
                <p className="text-[#CBD7C7] leading-relaxed">
                  Absence of centralized segregated waste collection (dry vs. wet garbage), open roadside dumping, and lack of a transparent complaint-tracking mechanism for villagers.
                </p>
              </div>

              {/* CSE Solution & Architecture */}
              <div className="space-y-2 text-xs">
                <span className="text-[10px] uppercase font-bold text-[#85E7B7] tracking-wider block">
                  CSE & Web Architecture:
                </span>
                <p className="text-[#CBD7C7] leading-relaxed">
                  A mobile-responsive PWA (React & Tailwind CSS) paired with a lightweight WhatsApp Twilio API chatbot. Villagers capture photo evidence of garbage piles with automatic GPS tagging, track Gram Panchayat clearing status in real-time, and access Marathi audio-visual guides on composting and dry/wet segregation.
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['React SPA / PWA', 'Tailwind CSS', 'WhatsApp Business API', 'Supabase PostgreSQL', 'Geolocation API'].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-[#2E4F4F]/60 text-[10px] font-mono text-[#CBD7C7]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Live Mini-Portal Simulator */}
            <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-3">
              {/* Tab Selector */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <button
                  onClick={() => setActiveTab('report')}
                  className={`text-[11px] font-semibold pb-1 cursor-pointer transition-colors ${
                    activeTab === 'report' ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-gray-400'
                  }`}
                >
                  Log Issue
                </button>
                <button
                  onClick={() => setActiveTab('track')}
                  className={`text-[11px] font-semibold pb-1 cursor-pointer transition-colors ${
                    activeTab === 'track' ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-gray-400'
                  }`}
                >
                  Track Ticket
                </button>
                <button
                  onClick={() => setActiveTab('marathi-guide')}
                  className={`text-[11px] font-semibold pb-1 cursor-pointer transition-colors ${
                    activeTab === 'marathi-guide' ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-gray-400'
                  }`}
                >
                  मराठी मार्गदर्शक
                </button>
              </div>

              {/* Tab 1: Quick Report Form */}
              {activeTab === 'report' && (
                <form onSubmit={handleSimulateSubmit} className="space-y-2 text-xs">
                  <div>
                    <label className="text-[10px] text-gray-400 uppercase font-semibold block">Issue Category:</label>
                    <select
                      value={complaintType}
                      onChange={(e) => setComplaintType(e.target.value)}
                      className="w-full bg-[#143521] border border-[#2E4F4F] rounded-lg p-1.5 text-[11px] text-white focus:outline-none"
                    >
                      <option>Unmanaged Garbage Dumping</option>
                      <option>Blocked Open Drainage</option>
                      <option>Broken Street Light Pole</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] text-gray-400 uppercase font-semibold block">Village Location:</label>
                    <input
                      type="text"
                      value={complaintLocation}
                      onChange={(e) => setComplaintLocation(e.target.value)}
                      className="w-full bg-[#143521] border border-[#2E4F4F] rounded-lg p-1.5 text-[11px] text-white focus:outline-none"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> GPS: 18.1798° N, 74.3865° E
                    </span>
                    <button
                      type="submit"
                      className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-[11px] transition-colors cursor-pointer"
                    >
                      Submit Grievance
                    </button>
                  </div>

                  {complaintSubmitted && (
                    <div className="p-2 rounded-lg bg-emerald-950/70 border border-emerald-700/50 text-[11px] text-emerald-300">
                      ✓ Complaint Registered: <strong>{ticketId}</strong>. SMS confirmation sent to registered mobile.
                    </div>
                  )}
                </form>
              )}

              {/* Tab 2: Track Active Ticket */}
              {activeTab === 'track' && (
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-[#143521] border border-white/10 space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-mono text-emerald-400 font-bold">{ticketId}</span>
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[9px] font-semibold uppercase">
                        In Progress
                      </span>
                    </div>
                    <p className="text-[11px] text-white font-medium">{complaintType}</p>
                    <p className="text-[10px] text-gray-400">{complaintLocation}</p>
                    <div className="pt-1.5 flex items-center justify-between text-[10px] text-emerald-400 border-t border-white/5">
                      <span>Assigned: Mudhale Gram Swachhata Dal</span>
                      <span>ETA: 24h</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Marathi Waste Segregation Visual Guide */}
              {activeTab === 'marathi-guide' && (
                <div className="space-y-2 text-xs">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 rounded-xl bg-emerald-950/60 border border-emerald-600/40 space-y-1">
                      <span className="font-bold text-emerald-300 text-[11px] block">🟢 ओला कचरा (Wet Waste)</span>
                      <p className="text-[10px] text-gray-300">
                        भाजीपाला देठ, उरलेले अन्न, फळांची साले, जनावरांचे शेण व खत निर्मिती.
                      </p>
                    </div>
                    <div className="p-2 rounded-xl bg-sky-950/60 border border-sky-600/40 space-y-1">
                      <span className="font-bold text-sky-300 text-[11px] block">🔵 सुका कचरा (Dry Waste)</span>
                      <p className="text-[10px] text-gray-300">
                        प्लॅस्टिक पिशव्या, बाटल्या, कागद, काच व पुनर्वापर (Recycle) योग्य वस्तू.
                      </p>
                    </div>
                  </div>
                  <div className="text-[10px] text-emerald-400 text-center font-medium pt-1">
                    मुढाळे ग्रामपंचायत कचरा मुक्त अभियान २०२६
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 2. Implementation Roadmap & Future Actions (3-Phase Engineering Timeline) */}
        <div className="rounded-[2.5rem] bg-[#143521] border border-[#2E4F4F] p-8 sm:p-12 shadow-2xl space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#85E7B7] uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>Execution Strategy</span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl text-white font-normal">
              Implementation Roadmap & Future Actions
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD7C7] font-light max-w-3xl">
              Phased transition from field survey prototypes to self-sustaining village deployment maintained by local youth in Mudhale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Phase 1 */}
            <div className="p-6 rounded-3xl bg-[#0E2918] border border-[#2E4F4F] space-y-3 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300">
                    Phase 1 (Immediate)
                  </span>
                  <span className="text-xs font-mono text-gray-400">Month 1</span>
                </div>
                <h4 className="font-display text-xl text-white font-medium">
                  Gram Panchayat WhatsApp Grievance Pilot
                </h4>
                <p className="text-xs text-[#CBD7C7] font-light leading-relaxed">
                  Deploy the lightweight WhatsApp grievance logging chatbot prototype with the Mudhale Gram Panchayat office. Initial sandbox testing with 5 surveyed households (Omkar Kote, Sachin, Jagtap family) for garbage and drain clog reporting.
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Deliverable: Active Twilio Bot & GP Admin Portal</span>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="p-6 rounded-3xl bg-[#0E2918] border border-[#2E4F4F] space-y-3 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300">
                    Phase 2 (Medium Term)
                  </span>
                  <span className="text-xs font-mono text-gray-400">Months 2–3</span>
                </div>
                <h4 className="font-display text-xl text-white font-medium">
                  Sensor Node Fabrication & Calibration
                </h4>
                <p className="text-xs text-[#CBD7C7] font-light leading-relaxed">
                  Build, waterproof (IP65 enclosures), and bench-calibrate low-cost ESP32 sensor nodes. Install 6 street light LDR monitors along dark village road stretches and 4 JSN-SR04T ultrasonic depth nodes at known drainage choke points.
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-amber-300 font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Deliverable: 10 Operational Solar-IoT Nodes in Mudhale</span>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="p-6 rounded-3xl bg-[#0E2918] border border-[#2E4F4F] space-y-3 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sky-500/20 text-sky-300">
                    Phase 3 (Long Term)
                  </span>
                  <span className="text-xs font-mono text-gray-400">Month 4+</span>
                </div>
                <h4 className="font-display text-xl text-white font-medium">
                  Community Youth Capacity Building
                </h4>
                <p className="text-xs text-[#CBD7C7] font-light leading-relaxed">
                  Conduct hands-on technical workshops at Someshwar Vidyalaya Mudhale. Train village youth, ITI students, and Gram Panchayat technical operators to reboot nodes, replace LDR sensors, clean ultrasonic lenses, and manage the dashboard independently.
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-sky-300 font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Deliverable: Self-Sustaining Rural Maintenance Council</span>
              </div>
            </div>
          </div>

          {/* Academic Signature Banner */}
          <div className="p-5 rounded-2xl bg-[#0E2918]/90 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#CBD7C7]">
            <div className="space-y-0.5 text-center sm:text-left">
              <span className="font-semibold text-white block">
                Designed & Engineered by Our Team
              </span>
              <span>Second Year (SY) BTech Computer Engineering, MIT World Peace University (MIT-WPU), Pune</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="px-3 py-1.5 rounded-xl bg-[#2E4F4F] text-[#85E7B7] font-mono text-[11px] font-bold">
                MUDHALE_IOT_REV_1.0
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
