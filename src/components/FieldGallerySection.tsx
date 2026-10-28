import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Calendar,
  X,
  ZoomIn,
  Info,
  Compass,
  ChevronLeft,
  ChevronRight,
  Layers,
  Trophy,
  GraduationCap,
  Sprout,
  Users,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import {
  FIELD_PHOTOS,
  GAMES_PHOTO_STACK,
  EDUCATION_PHOTO_STACK,
  AGRICULTURE_PHOTO_STACK,
  INTERVIEW_PHOTO_STACK,
} from '../data/mudhaleSurveyData';
import { FieldPhoto } from '../types';

export const FieldGallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<FieldPhoto | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeStackTab, setActiveStackTab] = useState<'interview' | 'agriculture' | 'education' | 'games'>('interview');

  // Household Surveys & Interviews Photo Stack state (3 photos in 1 deck)
  const [interviewIndex, setInterviewIndex] = useState<number>(0);
  const [isInterviewAutoPlaying, setIsInterviewAutoPlaying] = useState<boolean>(false);

  // Agriculture Photo Stack state (5 photos in 1 deck)
  const [agriIndex, setAgriIndex] = useState<number>(0);
  const [isAgriAutoPlaying, setIsAgriAutoPlaying] = useState<boolean>(false);

  // Education Photo Stack state (7 photos in 1 deck)
  const [eduIndex, setEduIndex] = useState<number>(0);
  const [isEduAutoPlaying, setIsEduAutoPlaying] = useState<boolean>(false);

  // Sports Photo Stack state (6 photos in 1 deck)
  const [gamesIndex, setGamesIndex] = useState<number>(0);
  const [isGamesAutoPlaying, setIsGamesAutoPlaying] = useState<boolean>(false);

  // Autoplay timers
  useEffect(() => {
    if (!isInterviewAutoPlaying) return;
    const interval = setInterval(() => {
      setInterviewIndex((prev) => (prev + 1) % INTERVIEW_PHOTO_STACK.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isInterviewAutoPlaying]);

  useEffect(() => {
    if (!isAgriAutoPlaying) return;
    const interval = setInterval(() => {
      setAgriIndex((prev) => (prev + 1) % AGRICULTURE_PHOTO_STACK.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isAgriAutoPlaying]);

  useEffect(() => {
    if (!isEduAutoPlaying) return;
    const interval = setInterval(() => {
      setEduIndex((prev) => (prev + 1) % EDUCATION_PHOTO_STACK.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isEduAutoPlaying]);

  useEffect(() => {
    if (!isGamesAutoPlaying) return;
    const interval = setInterval(() => {
      setGamesIndex((prev) => (prev + 1) % GAMES_PHOTO_STACK.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isGamesAutoPlaying]);

  // Current active stack configuration
  const currentStackPhotos =
    activeStackTab === 'interview'
      ? INTERVIEW_PHOTO_STACK
      : activeStackTab === 'agriculture'
        ? AGRICULTURE_PHOTO_STACK
        : activeStackTab === 'education'
          ? EDUCATION_PHOTO_STACK
          : GAMES_PHOTO_STACK;

  const currentStackIndex =
    activeStackTab === 'interview'
      ? interviewIndex
      : activeStackTab === 'agriculture'
        ? agriIndex
        : activeStackTab === 'education'
          ? eduIndex
          : gamesIndex;

  const isCurrentAutoPlaying =
    activeStackTab === 'interview'
      ? isInterviewAutoPlaying
      : activeStackTab === 'agriculture'
        ? isAgriAutoPlaying
        : activeStackTab === 'education'
          ? isEduAutoPlaying
          : isGamesAutoPlaying;

  const handleNextCard = () => {
    if (activeStackTab === 'interview') {
      setInterviewIndex((prev) => (prev + 1) % INTERVIEW_PHOTO_STACK.length);
    } else if (activeStackTab === 'agriculture') {
      setAgriIndex((prev) => (prev + 1) % AGRICULTURE_PHOTO_STACK.length);
    } else if (activeStackTab === 'education') {
      setEduIndex((prev) => (prev + 1) % EDUCATION_PHOTO_STACK.length);
    } else {
      setGamesIndex((prev) => (prev + 1) % GAMES_PHOTO_STACK.length);
    }
  };

  const handlePrevCard = () => {
    if (activeStackTab === 'interview') {
      setInterviewIndex((prev) => (prev - 1 + INTERVIEW_PHOTO_STACK.length) % INTERVIEW_PHOTO_STACK.length);
    } else if (activeStackTab === 'agriculture') {
      setAgriIndex((prev) => (prev - 1 + AGRICULTURE_PHOTO_STACK.length) % AGRICULTURE_PHOTO_STACK.length);
    } else if (activeStackTab === 'education') {
      setEduIndex((prev) => (prev - 1 + EDUCATION_PHOTO_STACK.length) % EDUCATION_PHOTO_STACK.length);
    } else {
      setGamesIndex((prev) => (prev - 1 + GAMES_PHOTO_STACK.length) % GAMES_PHOTO_STACK.length);
    }
  };

  const currentStackPhoto = currentStackPhotos[currentStackIndex];

  // Modal Stack Detection & Navigation
  const isSelectedInInterviewStack = selectedPhoto
    ? INTERVIEW_PHOTO_STACK.some((p) => p.id === selectedPhoto.id)
    : false;

  const isSelectedInAgriStack = selectedPhoto
    ? AGRICULTURE_PHOTO_STACK.some((p) => p.id === selectedPhoto.id)
    : false;

  const isSelectedInEduStack = selectedPhoto
    ? EDUCATION_PHOTO_STACK.some((p) => p.id === selectedPhoto.id)
    : false;

  const isSelectedInGamesStack = selectedPhoto
    ? GAMES_PHOTO_STACK.some((p) => p.id === selectedPhoto.id)
    : false;

  const currentModalStack = isSelectedInInterviewStack
    ? INTERVIEW_PHOTO_STACK
    : isSelectedInAgriStack
      ? AGRICULTURE_PHOTO_STACK
      : isSelectedInEduStack
        ? EDUCATION_PHOTO_STACK
        : isSelectedInGamesStack
          ? GAMES_PHOTO_STACK
          : [];

  const currentModalIndex = selectedPhoto && currentModalStack.length > 0
    ? currentModalStack.findIndex((p) => p.id === selectedPhoto.id)
    : -1;

  const handleModalNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentModalIndex >= 0 && currentModalStack.length > 0) {
      const nextIdx = (currentModalIndex + 1) % currentModalStack.length;
      setSelectedPhoto(currentModalStack[nextIdx]);
      if (isSelectedInInterviewStack) setInterviewIndex(nextIdx);
      if (isSelectedInAgriStack) setAgriIndex(nextIdx);
      if (isSelectedInEduStack) setEduIndex(nextIdx);
      if (isSelectedInGamesStack) setGamesIndex(nextIdx);
    }
  };

  const handleModalPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentModalIndex >= 0 && currentModalStack.length > 0) {
      const prevIdx = (currentModalIndex - 1 + currentModalStack.length) % currentModalStack.length;
      setSelectedPhoto(currentModalStack[prevIdx]);
      if (isSelectedInInterviewStack) setInterviewIndex(prevIdx);
      if (isSelectedInAgriStack) setAgriIndex(prevIdx);
      if (isSelectedInEduStack) setEduIndex(prevIdx);
      if (isSelectedInGamesStack) setGamesIndex(prevIdx);
    }
  };

  // Base individual field photos (Panchayat, Delegation, Environment)
  // Interviews, Agriculture, Education, and Games are each consolidated into their respective 1-deck stacks
  const individualFieldPhotos = FIELD_PHOTOS.filter(
    (photo) =>
      photo.category !== 'Sports & Games' &&
      photo.category !== 'Agriculture' &&
      photo.category !== 'Interviews' &&
      !photo.id.startsWith('interview-') &&
      !photo.id.startsWith('edu-')
  );

  // Filter tabs
  const categories = [
    { id: 'all', label: 'All Records (8)' },
    { id: 'interview-stack', label: `Interviews Stack (${INTERVIEW_PHOTO_STACK.length})` },
    { id: 'agriculture-stack', label: `Agriculture Stack (${AGRICULTURE_PHOTO_STACK.length})` },
    { id: 'education-stack', label: `Education Stack (${EDUCATION_PHOTO_STACK.length})` },
    { id: 'games-stack', label: `Sports & Games Stack (${GAMES_PHOTO_STACK.length})` },
    { id: 'panchayat', label: 'Panchayat Visit (1)' },
    { id: 'delegation', label: 'Delegation (2)' },
    { id: 'environment', label: 'Environment (1)' },
  ];

  const handleCategorySelect = (id: string) => {
    setActiveCategory(id);
    if (id === 'interview-stack') {
      setActiveStackTab('interview');
    } else if (id === 'agriculture-stack') {
      setActiveStackTab('agriculture');
    } else if (id === 'education-stack') {
      setActiveStackTab('education');
    } else if (id === 'games-stack') {
      setActiveStackTab('games');
    }
  };

  const filteredIndividualPhotos = individualFieldPhotos.filter((photo) => {
    if (activeCategory === 'all') return true;
    return photo.category.toLowerCase() === activeCategory.toLowerCase();
  });

  const shouldShowStack =
    activeCategory === 'all' ||
    activeCategory === 'interview-stack' ||
    activeCategory === 'agriculture-stack' ||
    activeCategory === 'education-stack' ||
    activeCategory === 'games-stack';

  const shouldShowGrid =
    activeCategory !== 'interview-stack' &&
    activeCategory !== 'agriculture-stack' &&
    activeCategory !== 'education-stack' &&
    activeCategory !== 'games-stack';

  return (
    <section
      id="field-photos-section"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FBF9F5] dark:bg-[#131D12] text-[#243324] dark:text-[#F4EFE6] transition-colors duration-400 border-t border-[#243324]/10 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#3B4D36]/10 dark:bg-white/10 text-[#3B4D36] dark:text-[#85E7B7]">
              <Layers className="w-3.5 h-3.5" />
              <span>Geotagged Visual Evidence & Field Log</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#1F2B1D] dark:text-[#F4EFE6] font-normal tracking-tight leading-[1.08]">
              Rural Immersion Photographic Field Log
            </h2>
            <p className="text-base sm:text-lg text-[#3B4D36] dark:text-[#CBD7C7] font-light leading-relaxed">
              GPS camera photographic documentation verified on-site in Mudhale Village, Baramati. Core immersion domains are organized into <strong>four unified photo stacks</strong> (Interviews, Agriculture, Education, and Sports), alongside official Gram Panchayat administrative visits and environmental tree drives.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto shrink-0">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleCategorySelect(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#1F2B1D] dark:bg-[#384E36] text-white shadow-xs'
                    : 'bg-white dark:bg-[#202E1E] text-[#3B4D36] dark:text-[#CBD7C7] hover:bg-white/80 dark:hover:bg-[#2A3D28] border border-[#243324]/10 dark:border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FEATURED DEDICATED PHOTO STACK DECK (INTERVIEWS, AGRI, EDU, SPORTS)       */}
        {/* ========================================================================= */}
        {shouldShowStack && (
          <div className="relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#EFECE4] to-[#E5E0D5] dark:from-[#1A261A] dark:to-[#131D12] border-2 border-emerald-700/20 dark:border-emerald-500/30 shadow-xl overflow-hidden">
            {/* Ambient lighting */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/15 dark:bg-emerald-500/10 blur-3xl pointer-events-none" />

            {/* Stack Switcher Banner Header */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-[#243324]/12 dark:border-white/10 gap-4">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  {/* Interview Stack Button */}
                  <button
                    onClick={() => setActiveStackTab('interview')}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeStackTab === 'interview'
                        ? 'bg-emerald-800 text-white shadow-sm'
                        : 'bg-white/80 dark:bg-[#202E1E] text-[#4A5D44] dark:text-[#CBD7C7] hover:bg-white'
                    }`}
                  >
                    <Users className="w-4 h-4 text-emerald-300" />
                    <span>Interviews Stack ({INTERVIEW_PHOTO_STACK.length} in 1 Deck)</span>
                  </button>

                  {/* Agriculture Stack Button */}
                  <button
                    onClick={() => setActiveStackTab('agriculture')}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeStackTab === 'agriculture'
                        ? 'bg-emerald-800 text-white shadow-sm'
                        : 'bg-white/80 dark:bg-[#202E1E] text-[#4A5D44] dark:text-[#CBD7C7] hover:bg-white'
                    }`}
                  >
                    <Sprout className="w-4 h-4 text-emerald-300" />
                    <span>Agriculture Stack ({AGRICULTURE_PHOTO_STACK.length} in 1 Deck)</span>
                  </button>

                  {/* Education Stack Button */}
                  <button
                    onClick={() => setActiveStackTab('education')}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeStackTab === 'education'
                        ? 'bg-emerald-800 text-white shadow-sm'
                        : 'bg-white/80 dark:bg-[#202E1E] text-[#4A5D44] dark:text-[#CBD7C7] hover:bg-white'
                    }`}
                  >
                    <GraduationCap className="w-4 h-4 text-emerald-300" />
                    <span>Education Stack ({EDUCATION_PHOTO_STACK.length} in 1 Deck)</span>
                  </button>

                  {/* Sports Stack Button */}
                  <button
                    onClick={() => setActiveStackTab('games')}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeStackTab === 'games'
                        ? 'bg-emerald-800 text-white shadow-sm'
                        : 'bg-white/80 dark:bg-[#202E1E] text-[#4A5D44] dark:text-[#CBD7C7] hover:bg-white'
                    }`}
                  >
                    <Trophy className="w-4 h-4 text-amber-400" />
                    <span>Sports Stack ({GAMES_PHOTO_STACK.length} in 1 Deck)</span>
                  </button>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl text-[#1F2B1D] dark:text-[#F4EFE6] font-medium pt-1">
                  {activeStackTab === 'interview'
                    ? 'Household Survey Interviews & Community Dialogue Stack'
                    : activeStackTab === 'agriculture'
                      ? 'Agricultural Irrigation & Polyhouse Precision Farming Stack'
                      : activeStackTab === 'education'
                        ? 'Education, STEM Literacy & Anganwadi Workshop Stack'
                        : 'Someshwar Vidyalaya Youth Sports & Field Activities Stack'}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5D44] dark:text-[#CBD7C7]">
                  {activeStackTab === 'interview'
                    ? 'All 3 household survey field dialogues (village elder Trambak Jagtap, dairy farmer with chaff cutter, and local kirana grocery enterprise) in this single deck.'
                    : activeStackTab === 'agriculture'
                      ? 'All 5 irrigation pump, furrow trench, canal distribution, and high-tech greenhouse photos in this single deck.'
                      : activeStackTab === 'education'
                        ? 'All 7 classroom computing modules, peer mentoring, and Anganwadi sessions consolidated in this single deck.'
                        : 'All 6 playground drills, team formations, camaraderie cheering, and prize distributions in this single deck.'}
                </p>
              </div>

              {/* Controls: Next / Prev / Autoplay / Counter */}
              <div className="flex items-center gap-3">
                <div className="px-3 py-1.5 rounded-full bg-white/90 dark:bg-[#202E1E] border border-[#243324]/12 dark:border-white/12 text-xs font-mono font-medium shadow-xs">
                  Card{' '}
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                    {currentStackIndex + 1}
                  </span>{' '}
                  of {currentStackPhotos.length}
                </div>

                <button
                  onClick={() => {
                    if (activeStackTab === 'interview') {
                      setIsInterviewAutoPlaying(!isInterviewAutoPlaying);
                    } else if (activeStackTab === 'agriculture') {
                      setIsAgriAutoPlaying(!isAgriAutoPlaying);
                    } else if (activeStackTab === 'education') {
                      setIsEduAutoPlaying(!isEduAutoPlaying);
                    } else {
                      setIsGamesAutoPlaying(!isGamesAutoPlaying);
                    }
                  }}
                  className={`p-2 rounded-full border transition-all cursor-pointer ${
                    isCurrentAutoPlaying
                      ? 'bg-emerald-700 text-white border-emerald-700 shadow-md'
                      : 'bg-white dark:bg-[#202E1E] text-[#243324] dark:text-white border-[#243324]/12 dark:border-white/12 hover:bg-white'
                  }`}
                  title={isCurrentAutoPlaying ? 'Pause autoplay' : 'Start autoplay slideshow'}
                  aria-label="Toggle autoplay"
                >
                  {isCurrentAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>

                <button
                  onClick={handlePrevCard}
                  className="p-2 rounded-full bg-white dark:bg-[#202E1E] text-[#243324] dark:text-white border border-[#243324]/12 dark:border-white/12 hover:bg-white cursor-pointer shadow-xs active:scale-95 transition-transform"
                  title="Previous photo in stack"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={handleNextCard}
                  className="p-2 rounded-full bg-white dark:bg-[#202E1E] text-[#243324] dark:text-white border border-[#243324]/12 dark:border-white/12 hover:bg-white cursor-pointer shadow-xs active:scale-95 transition-transform"
                  title="Next photo in stack"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Interactive Stack Deck Display & Details */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Stack Visual Deck (7 cols on lg) */}
              <div className="lg:col-span-7 flex flex-col items-center justify-center min-h-[360px] sm:min-h-[420px] relative">
                <div
                  className="relative w-full max-w-lg aspect-[16/10] sm:aspect-[16/9] cursor-pointer select-none"
                  onClick={handleNextCard}
                  title="Click anywhere on stack to flip to next photo"
                >
                  {currentStackPhotos.map((photo, i) => {
                    const offset =
                      (i - currentStackIndex + currentStackPhotos.length) %
                      currentStackPhotos.length;
                    if (offset > 3) return null;

                    const rotation =
                      offset === 0 ? 0 : offset === 1 ? 3 : offset === 2 ? -3.5 : 2;
                    const translateY = offset * 12;
                    const scale = 1 - offset * 0.045;
                    const zIndex = 30 - offset * 5;
                    const opacity =
                      offset === 0 ? 1 : offset === 1 ? 0.88 : offset === 2 ? 0.65 : 0.45;

                    return (
                      <motion.div
                        key={photo.id}
                        animate={{
                          rotate: rotation,
                          y: translateY,
                          scale: scale,
                          opacity: opacity,
                        }}
                        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                        style={{ zIndex }}
                        className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-black border-2 border-white/70 dark:border-white/25 origin-bottom"
                      >
                        <img
                          src={photo.src}
                          alt={photo.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />

                        {/* Vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                        {/* Overlays on top active card */}
                        {offset === 0 && (
                          <>
                            <div className="absolute top-3 left-3 flex items-center gap-2">
                              <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold text-amber-300 border border-white/20 uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                                <Sparkles className="w-3 h-3 text-amber-400" />
                                {activeStackTab === 'agriculture'
                                  ? 'Agri Stack'
                                  : activeStackTab === 'education'
                                    ? 'Edu Stack'
                                    : 'Sports Stack'}{' '}
                                {currentStackIndex + 1} of {currentStackPhotos.length}
                              </span>
                            </div>

                            <div className="absolute top-3 right-3">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedPhoto(photo);
                                }}
                                className="px-3 py-1.5 rounded-full bg-black/75 hover:bg-black/95 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5 border border-white/30 transition-all cursor-pointer shadow-lg active:scale-95"
                              >
                                <ZoomIn className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Inspect Full Res</span>
                              </button>
                            </div>

                            <div className="absolute bottom-3 left-3 right-3 text-white">
                              <p className="font-display text-base sm:text-lg font-medium leading-snug drop-shadow-md">
                                {photo.title}
                              </p>
                              <p className="text-[11px] text-amber-200/90 font-mono flex items-center gap-1 mt-0.5">
                                <MapPin className="w-3 h-3 shrink-0" />
                                {photo.coordinates.lat.toFixed(4)}° N,{' '}
                                {photo.coordinates.lng.toFixed(4)}° E • SH 62 Mudhale
                              </p>
                            </div>
                          </>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Progress Dots */}
                <div className="flex flex-col items-center gap-2 mt-7">
                  <div className="flex items-center gap-1.5">
                    {currentStackPhotos.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (activeStackTab === 'agriculture') setAgriIndex(idx);
                          else if (activeStackTab === 'education') setEduIndex(idx);
                          else setGamesIndex(idx);
                        }}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          currentStackIndex === idx
                            ? 'w-6 bg-emerald-700 dark:bg-emerald-400'
                            : 'w-2 bg-[#243324]/20 dark:bg-white/20 hover:bg-[#243324]/40'
                        }`}
                        aria-label={`Go to photo ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <p className="text-[11px] text-[#657351] dark:text-[#A3B59E] font-medium">
                    Click deck or arrows to shuffle cards ({currentStackIndex + 1}/{currentStackPhotos.length} in single stack)
                  </p>
                </div>
              </div>

              {/* Stack Details Card */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 sm:p-6 rounded-2xl bg-white/95 dark:bg-[#1E2B1D] border border-[#243324]/12 dark:border-white/12 shadow-sm space-y-3.5">
                  <div className="flex items-center justify-between pb-2 border-b border-[#243324]/8 dark:border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                        GPS Map Camera Verification
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      1 Stack • {currentStackPhotos.length} Photos
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-display text-lg text-[#1F2B1D] dark:text-[#F4EFE6] font-medium leading-tight">
                      {currentStackPhoto.title}
                    </h4>
                    <p className="text-xs text-[#657351] dark:text-[#A3B59E]">
                      {currentStackPhoto.titleMarathi}
                    </p>
                  </div>

                  <p className="text-xs text-[#3B4D36] dark:text-[#CBD7C7] leading-relaxed">
                    {currentStackPhoto.caption}
                  </p>

                  {/* Geotag Box */}
                  <div className="p-3.5 rounded-xl bg-[#F5F2EB] dark:bg-[#152014] border border-[#243324]/8 dark:border-white/10 text-[11px] font-mono space-y-1.5 text-[#4A5D44] dark:text-[#CBD7C7]">
                    <div className="flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-tight font-sans font-medium text-[#1F2B1D] dark:text-[#F4EFE6]">
                        {currentStackPhoto.gpsLocation}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#243324]/8 dark:border-white/10 text-[10px]">
                      <div>
                        <span className="text-[#657351] dark:text-[#A3B59E]">LAT:</span>{' '}
                        {currentStackPhoto.coordinates.lat}° N
                      </div>
                      <div>
                        <span className="text-[#657351] dark:text-[#A3B59E]">LNG:</span>{' '}
                        {currentStackPhoto.coordinates.lng}° E
                      </div>
                      <div className="col-span-2">
                        <span className="text-[#657351] dark:text-[#A3B59E]">TIMESTAMP:</span>{' '}
                        {currentStackPhoto.date} • {currentStackPhoto.time}
                      </div>
                    </div>
                  </div>

                  {/* Field Narrative */}
                  <div className="text-xs text-[#4A5D44] dark:text-[#CBD7C7] leading-relaxed italic bg-emerald-500/5 dark:bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
                    "{currentStackPhoto.fieldNarrative}"
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedPhoto(currentStackPhoto)}
                      className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Open fullscreen photo inspector</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>

                    <button
                      onClick={() => {
                        if (activeStackTab === 'interview') setInterviewIndex(0);
                        else if (activeStackTab === 'agriculture') setAgriIndex(0);
                        else if (activeStackTab === 'education') setEduIndex(0);
                        else setGamesIndex(0);
                      }}
                      className="p-1 text-[#657351] dark:text-[#A3B59E] hover:text-[#1F2B1D] dark:hover:text-white cursor-pointer"
                      title="Reset deck to first photo"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Thumbnail Selector */}
            <div className="relative z-10 mt-8 pt-6 border-t border-[#243324]/10 dark:border-white/10">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#657351] dark:text-[#A3B59E] mb-3">
                Deck Quick Selector ({currentStackPhotos.length} Photos in 1 Deck):
              </p>
              <div
                className={`grid gap-2.5 ${
                  activeStackTab === 'education'
                    ? 'grid-cols-4 sm:grid-cols-7'
                    : activeStackTab === 'games'
                      ? 'grid-cols-3 sm:grid-cols-6'
                      : activeStackTab === 'agriculture'
                        ? 'grid-cols-3 sm:grid-cols-5'
                        : 'grid-cols-3'
                }`}
              >
                {currentStackPhotos.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      if (activeStackTab === 'interview') setInterviewIndex(idx);
                      else if (activeStackTab === 'agriculture') setAgriIndex(idx);
                      else if (activeStackTab === 'education') setEduIndex(idx);
                      else setGamesIndex(idx);
                    }}
                    className={`group relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      currentStackIndex === idx
                        ? 'border-emerald-600 dark:border-emerald-400 ring-2 ring-emerald-500/30 scale-102 shadow-md'
                        : 'border-transparent opacity-65 hover:opacity-100'
                    }`}
                  >
                    <img src={p.src} alt={p.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <span className="absolute bottom-1 left-1.5 text-[9px] font-bold text-white font-mono">
                      #{idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* COMPREHENSIVE FIELD CATALOG GRID (CONSOLIDATED STACKS + INDIVIDUAL SITES)  */}
        {/* ========================================================================= */}
        {shouldShowGrid && (
          <div className="space-y-6 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl text-[#1F2B1D] dark:text-[#F4EFE6] font-medium">
                  Field Photo Catalog
                </h3>
                <p className="text-xs text-[#657351] dark:text-[#A3B59E]">
                  Verified fieldwork records • Interviews (3), Agriculture (5), Education (7), and Sports (6) unified in single stacks
                </p>
              </div>
              <span className="text-xs text-[#657351] dark:text-[#A3B59E]">
                Category: <strong className="capitalize">{activeCategory}</strong>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* CONSOLIDATED CARD 0: INTERVIEWS PHOTO STACK (3 PHOTOS IN 1 CARD) */}
              {activeCategory === 'all' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedPhoto(INTERVIEW_PHOTO_STACK[interviewIndex])}
                  className="group cursor-pointer rounded-3xl overflow-hidden bg-gradient-to-br from-[#ECEBE4] to-[#DFDCD2] dark:from-[#1A2619] dark:to-[#121C11] border-2 border-emerald-600/40 dark:border-emerald-500/40 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col relative"
                >
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-black">
                    <img
                      src={INTERVIEW_PHOTO_STACK[interviewIndex].src}
                      alt="Household Survey Interviews Stack"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40 pointer-events-none" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-800/95 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                        1 Stack • All 3 Interviews
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setInterviewIndex(
                              (prev) =>
                                (prev - 1 + INTERVIEW_PHOTO_STACK.length) %
                                INTERVIEW_PHOTO_STACK.length
                            );
                          }}
                          className="p-1 rounded-full bg-black/60 hover:bg-black/80 text-white cursor-pointer"
                          title="Previous interview card"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-[10px] font-mono font-bold text-emerald-300 px-1">
                          {interviewIndex + 1}/3
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setInterviewIndex((prev) => (prev + 1) % INTERVIEW_PHOTO_STACK.length);
                          }}
                          className="p-1 rounded-full bg-black/60 hover:bg-black/80 text-white cursor-pointer"
                          title="Next interview card"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white text-xs space-y-0.5">
                      <div className="flex items-center gap-1.5 text-emerald-300 text-[11px] font-medium">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">Mudhale Village Homes & Retail (SH 62)</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-white/80">
                        <Calendar className="w-3 h-3" />
                        <span>Wednesday, 12 Aug 2026 • 3 Household Interviews</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <h3 className="font-display text-lg sm:text-xl text-[#1F2B1D] dark:text-[#F4EFE6] font-medium group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                          Household Surveys & Interviews Stack
                        </h3>
                      </div>
                      <p className="text-xs text-[#657351] dark:text-[#A3B59E] font-sans">
                        ग्रामस्थ व कुटुंब सर्वेक्षण संवाद (३ छायाचित्रे एकत्रित स्टॅकमध्ये)
                      </p>
                    </div>

                    <p className="text-xs text-[#4A5D44] dark:text-[#CBD7C7] font-light">
                      All 3 in-depth household field dialogues (village elder Trambak Jagtap, dairy farmer with chaff cutter, and kirana grocery family) consolidated in one deck.
                    </p>

                    <div className="pt-2 border-t border-[#243324]/8 dark:border-white/10 flex items-center justify-between text-[11px] text-[#657351] dark:text-[#A3B59E]">
                      <span className="font-mono text-emerald-800 dark:text-emerald-400 font-semibold truncate max-w-[180px]">
                        {INTERVIEW_PHOTO_STACK[interviewIndex].title}
                      </span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-medium shrink-0">
                        Click to Inspect Stack
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* CONSOLIDATED CARD 1: AGRICULTURE PHOTO STACK (5 PHOTOS IN 1 CARD) */}
              {activeCategory === 'all' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedPhoto(AGRICULTURE_PHOTO_STACK[agriIndex])}
                  className="group cursor-pointer rounded-3xl overflow-hidden bg-gradient-to-br from-[#E8EDE4] to-[#DCE3D6] dark:from-[#172616] dark:to-[#0F1B0E] border-2 border-emerald-600/40 dark:border-emerald-500/40 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col relative"
                >
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-black">
                    <img
                      src={AGRICULTURE_PHOTO_STACK[agriIndex].src}
                      alt="Agriculture Photo Stack"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40 pointer-events-none" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-800/95 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                        1 Stack • All 5 Photos
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setAgriIndex(
                              (prev) =>
                                (prev - 1 + AGRICULTURE_PHOTO_STACK.length) %
                                AGRICULTURE_PHOTO_STACK.length
                            );
                          }}
                          className="p-1 rounded-full bg-black/60 hover:bg-black/80 text-white cursor-pointer"
                          title="Previous agriculture card"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-[10px] font-mono font-bold text-emerald-300 px-1">
                          {agriIndex + 1}/5
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setAgriIndex((prev) => (prev + 1) % AGRICULTURE_PHOTO_STACK.length);
                          }}
                          className="p-1 rounded-full bg-black/60 hover:bg-black/80 text-white cursor-pointer"
                          title="Next agriculture card"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white text-xs space-y-0.5">
                      <div className="flex items-center gap-1.5 text-emerald-300 text-[11px] font-medium">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">SH 62 Baramati Farmland & Greenhouses</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-white/80">
                        <Calendar className="w-3 h-3" />
                        <span>Thursday, 13 Aug 2026 • 5 Irrigation & Polyhouse Photos</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Sprout className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <h3 className="font-display text-lg sm:text-xl text-[#1F2B1D] dark:text-[#F4EFE6] font-medium group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                          Agriculture & Irrigation Stack
                        </h3>
                      </div>
                      <p className="text-xs text-[#657351] dark:text-[#A3B59E] font-sans">
                        शेती सिंचन, कालवा पाणी व हरितगृह शेती (५ छायाचित्रे एकाच स्टॅकमध्ये)
                      </p>
                    </div>

                    <p className="text-xs text-[#4A5D44] dark:text-[#CBD7C7] font-light">
                      All 5 agricultural records (polyhouse cultivation, furrow silt trenches, canal lift discharge, farmer dialogues, and pump networks) unified in one deck.
                    </p>

                    <div className="pt-2 border-t border-[#243324]/8 dark:border-white/10 flex items-center justify-between text-[11px] text-[#657351] dark:text-[#A3B59E]">
                      <span className="font-mono text-emerald-800 dark:text-emerald-400 font-semibold truncate max-w-[180px]">
                        {AGRICULTURE_PHOTO_STACK[agriIndex].title}
                      </span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-medium shrink-0">
                        Click to Inspect Stack
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* CONSOLIDATED CARD 2: EDUCATION PHOTO STACK (7 PHOTOS IN 1 CARD) */}
              {activeCategory === 'all' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  onClick={() => setSelectedPhoto(EDUCATION_PHOTO_STACK[eduIndex])}
                  className="group cursor-pointer rounded-3xl overflow-hidden bg-gradient-to-br from-[#EAE5D9] to-[#DFD8C9] dark:from-[#1D2B1C] dark:to-[#141F13] border-2 border-emerald-600/40 dark:border-emerald-500/40 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col relative"
                >
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-black">
                    <img
                      src={EDUCATION_PHOTO_STACK[eduIndex].src}
                      alt="Education Photo Stack"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40 pointer-events-none" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-800/95 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                        1 Stack • All 7 Photos
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setEduIndex(
                              (prev) =>
                                (prev - 1 + EDUCATION_PHOTO_STACK.length) %
                                EDUCATION_PHOTO_STACK.length
                            );
                          }}
                          className="p-1 rounded-full bg-black/60 hover:bg-black/80 text-white cursor-pointer"
                          title="Previous education card"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-[10px] font-mono font-bold text-emerald-300 px-1">
                          {eduIndex + 1}/7
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setEduIndex((prev) => (prev + 1) % EDUCATION_PHOTO_STACK.length);
                          }}
                          className="p-1 rounded-full bg-black/60 hover:bg-black/80 text-white cursor-pointer"
                          title="Next education card"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white text-xs space-y-0.5">
                      <div className="flex items-center gap-1.5 text-emerald-300 text-[11px] font-medium">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">Someshwar Vidyalaya & Anganwadi</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-white/80">
                        <Calendar className="w-3 h-3" />
                        <span>Wednesday, 12 Aug 2026 • 7 Education Photos in 1 Deck</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <h3 className="font-display text-lg sm:text-xl text-[#1F2B1D] dark:text-[#F4EFE6] font-medium group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                          Education & STEM Literacy Stack
                        </h3>
                      </div>
                      <p className="text-xs text-[#657351] dark:text-[#A3B59E] font-sans">
                        संगणक साक्षरता, वर्ग संवाद व अंगणवाडी उपक्रम (७ छायाचित्रे एकाच स्टॅकमध्ये)
                      </p>
                    </div>

                    <p className="text-xs text-[#4A5D44] dark:text-[#CBD7C7] font-light">
                      All 7 educational records (computer architecture, digital literacy, student Q&A, peer mentorship, and Anganwadi art) unified in one deck.
                    </p>

                    <div className="pt-2 border-t border-[#243324]/8 dark:border-white/10 flex items-center justify-between text-[11px] text-[#657351] dark:text-[#A3B59E]">
                      <span className="font-mono text-emerald-800 dark:text-emerald-400 font-semibold truncate max-w-[180px]">
                        {EDUCATION_PHOTO_STACK[eduIndex].title}
                      </span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-medium shrink-0">
                        Click to Inspect Stack
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* CONSOLIDATED CARD 3: SPORTS & GAMES STACK (6 PHOTOS IN 1 CARD) */}
              {activeCategory === 'all' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  onClick={() => setSelectedPhoto(GAMES_PHOTO_STACK[gamesIndex])}
                  className="group cursor-pointer rounded-3xl overflow-hidden bg-gradient-to-br from-[#EFECE4] to-[#E3DDCF] dark:from-[#1E2C1E] dark:to-[#152014] border-2 border-emerald-600/40 dark:border-emerald-500/40 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col relative"
                >
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-black">
                    <img
                      src={GAMES_PHOTO_STACK[gamesIndex].src}
                      alt="Sports and Games Stack"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40 pointer-events-none" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-700/90 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                        1 Stack • All 6 Photos
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setGamesIndex(
                              (prev) =>
                                (prev - 1 + GAMES_PHOTO_STACK.length) %
                                GAMES_PHOTO_STACK.length
                            );
                          }}
                          className="p-1 rounded-full bg-black/60 hover:bg-black/80 text-white cursor-pointer"
                          title="Previous sports card"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-[10px] font-mono font-bold text-amber-300 px-1">
                          {gamesIndex + 1}/6
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setGamesIndex((prev) => (prev + 1) % GAMES_PHOTO_STACK.length);
                          }}
                          className="p-1 rounded-full bg-black/60 hover:bg-black/80 text-white cursor-pointer"
                          title="Next sports card"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white text-xs space-y-0.5">
                      <div className="flex items-center gap-1.5 text-emerald-300 text-[11px] font-medium">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">Someshwar Vidyalaya Grounds</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-white/80">
                        <Calendar className="w-3 h-3" />
                        <span>Wednesday, 12 Aug 2026 • 6 Games Photos in 1 Deck</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        <h3 className="font-display text-lg sm:text-xl text-[#1F2B1D] dark:text-[#F4EFE6] font-medium group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                          Sports & Games Photo Stack
                        </h3>
                      </div>
                      <p className="text-xs text-[#657351] dark:text-[#A3B59E] font-sans">
                        क्रीडा, खेळ व मैदानी उपक्रम (६ छायाचित्रे एकत्रित स्टॅकमध्ये)
                      </p>
                    </div>

                    <p className="text-xs text-[#4A5D44] dark:text-[#CBD7C7] font-light">
                      All 6 playground session photos (boys squads, drills, cheer, awards, strategy) consolidated into one interactive card deck.
                    </p>

                    <div className="pt-2 border-t border-[#243324]/8 dark:border-white/10 flex items-center justify-between text-[11px] text-[#657351] dark:text-[#A3B59E]">
                      <span className="font-mono text-emerald-800 dark:text-emerald-400 font-semibold truncate max-w-[180px]">
                        {GAMES_PHOTO_STACK[gamesIndex].title}
                      </span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-medium shrink-0">
                        Click to Inspect Stack
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Individual Field Photos (Panchayat, Delegation, Environment) */}
              {filteredIndividualPhotos.map((photo, idx) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: (idx % 6) * 0.06 }}
                  onClick={() => setSelectedPhoto(photo)}
                  className="group cursor-pointer rounded-3xl overflow-hidden bg-white dark:bg-[#1A261A] border border-[#243324]/10 dark:border-white/12 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-[#1F2B1D]">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-semibold uppercase tracking-wider">
                        {photo.category}
                      </span>
                      <div className="p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white opacity-80 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white text-xs space-y-0.5">
                      <div className="flex items-center gap-1.5 text-emerald-300 text-[11px] font-medium">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{photo.gpsLocation}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-white/80">
                        <Calendar className="w-3 h-3" />
                        <span>{photo.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1">
                      <h3 className="font-display text-lg sm:text-xl text-[#1F2B1D] dark:text-[#F4EFE6] font-medium group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                        {photo.title}
                      </h3>
                      <p className="text-xs text-[#657351] dark:text-[#A3B59E] font-sans">
                        {photo.titleMarathi}
                      </p>
                    </div>

                    <p className="text-xs text-[#4A5D44] dark:text-[#CBD7C7] font-light line-clamp-2">
                      {photo.caption}
                    </p>

                    <div className="pt-2 border-t border-[#243324]/8 dark:border-white/10 flex items-center justify-between text-[11px] text-[#657351] dark:text-[#A3B59E]">
                      <span className="font-mono">
                        {photo.coordinates.lat.toFixed(4)}° N, {photo.coordinates.lng.toFixed(4)}° E
                      </span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                        Click to Inspect
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* MODAL INSPECTOR (WITH STACK CYCLING FOR AGRICULTURE, EDUCATION, SPORTS)    */}
        {/* ========================================================================= */}
        <AnimatePresence>
          {selectedPhoto && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-[#1C291B] rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-white/20"
              >
                <div className="p-4 sm:p-5 border-b border-[#243324]/10 dark:border-white/10 flex items-center justify-between bg-[#FBF9F5] dark:bg-[#152014]">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      {selectedPhoto.category}{' '}
                      {isSelectedInInterviewStack || isSelectedInAgriStack || isSelectedInEduStack || isSelectedInGamesStack
                        ? '• Photo Stack Deck'
                        : 'Field Record'}
                    </span>
                    {(isSelectedInInterviewStack || isSelectedInAgriStack || isSelectedInEduStack || isSelectedInGamesStack) && (
                      <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-400">
                        {currentModalIndex + 1} of {currentModalStack.length} in Stack
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-[#657351] dark:text-[#A3B59E] cursor-pointer"
                    aria-label="Close photo inspector"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
                  <div className="relative rounded-2xl overflow-hidden shadow-md max-h-[460px] bg-black flex items-center justify-center group">
                    <img
                      src={selectedPhoto.src}
                      alt={selectedPhoto.title}
                      className="w-full h-full max-h-[460px] object-contain"
                    />

                    {(isSelectedInInterviewStack || isSelectedInAgriStack || isSelectedInEduStack || isSelectedInGamesStack) && (
                      <>
                        <button
                          onClick={handleModalPrev}
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 cursor-pointer shadow-lg active:scale-95 transition-all"
                          title="Previous photo in stack"
                          aria-label="Previous photo in stack"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={handleModalNext}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 cursor-pointer shadow-lg active:scale-95 transition-all"
                          title="Next photo in stack"
                          aria-label="Next photo in stack"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>

                  {(isSelectedInInterviewStack || isSelectedInAgriStack || isSelectedInEduStack || isSelectedInGamesStack) && (
                    <div className="flex items-center justify-center gap-2 overflow-x-auto py-1">
                      {currentModalStack.map((p, idx) => (
                        <button
                          key={p.id}
                          onClick={() => {
                            setSelectedPhoto(p);
                            if (isSelectedInInterviewStack) setInterviewIndex(idx);
                            if (isSelectedInAgriStack) setAgriIndex(idx);
                            if (isSelectedInEduStack) setEduIndex(idx);
                            if (isSelectedInGamesStack) setGamesIndex(idx);
                          }}
                          className={`relative w-14 h-10 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                            selectedPhoto.id === p.id
                              ? 'border-emerald-500 scale-105 shadow-md'
                              : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={p.src} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    <div className="md:col-span-7 space-y-3">
                      <h3 className="font-display text-xl text-[#1F2B1D] dark:text-[#F4EFE6] font-medium">
                        {selectedPhoto.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#657351] dark:text-[#A3B59E]">
                        <Info className="w-4 h-4 text-emerald-600" />
                        <span>Field Narrative & Academic Significance</span>
                      </div>
                      <p className="text-sm text-[#243324] dark:text-[#F4EFE6] leading-relaxed">
                        {selectedPhoto.fieldNarrative}
                      </p>
                      <p className="text-xs text-[#657351] dark:text-[#A3B59E] italic">
                        {selectedPhoto.caption}
                      </p>
                    </div>

                    <div className="md:col-span-5 p-4 rounded-2xl bg-[#F5F2EB] dark:bg-[#152014] border border-[#243324]/8 dark:border-white/10 space-y-2.5 text-xs">
                      <div className="flex items-center gap-2 font-semibold text-[#1F2B1D] dark:text-white">
                        <Compass className="w-4 h-4 text-emerald-600" />
                        <span>GPS Geotag Verification</span>
                      </div>
                      <div className="space-y-1 text-[#4A5D44] dark:text-[#CBD7C7]">
                        <p>
                          <strong>Location:</strong> {selectedPhoto.gpsLocation}
                        </p>
                        <p>
                          <strong>Latitude:</strong> {selectedPhoto.coordinates.lat}° N
                        </p>
                        <p>
                          <strong>Longitude:</strong> {selectedPhoto.coordinates.lng}° E
                        </p>
                        <p>
                          <strong>Date / Timestamp:</strong> {selectedPhoto.date} •{' '}
                          {selectedPhoto.time}
                        </p>
                        <p>
                          <strong>Academic Institution:</strong> MIT-WPU Pune
                        </p>
                        {(isSelectedInAgriStack || isSelectedInEduStack || isSelectedInGamesStack) && (
                          <p className="text-emerald-700 dark:text-emerald-400 font-semibold pt-1">
                            Included in{' '}
                            {isSelectedInAgriStack
                              ? 'Agriculture 5-Photo Stack Deck'
                              : isSelectedInEduStack
                                ? 'Education 7-Photo Stack Deck'
                                : 'Sports & Games 6-Photo Stack Deck'}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
