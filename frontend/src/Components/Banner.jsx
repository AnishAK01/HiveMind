import React, { useEffect, useState } from 'react';
import BannerDb from '../bannerDB';
import { ChevronLeft, ChevronRight, Bookmark } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Banner = () => {
  const [banner, setBanner] = useState(0);

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setBanner((prev) => (prev + 1) % BannerDb.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Manual controls
  const handlePrev = () => {
    setBanner((prev) => (prev - 1 + BannerDb.length) % BannerDb.length);
  };

  const handleNext = () => {
    setBanner((prev) => (prev + 1) % BannerDb.length);
  };

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden mt-10 z-10">

      {/* Image transition */}
      <AnimatePresence mode="wait">
        <motion.img
          key={banner}
          src={BannerDb[banner].url}
          alt=""
          className="w-full h-full object-cover absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent flex items-center px-10">
        <div className="text-white max-w-xl space-y-4">
          {/* Tags */}
         

          {/* Title */}
          <h1 className="text-4xl font-bold">{BannerDb[banner].title}</h1>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed">{BannerDb[banner].desc}</p>

          {/* Info cards */}
          <div className="flex gap-6 mt-4">
            <div className="bg-black/60 px-4 py-2 rounded">
              <p className="text-xs text-gray-400">Rating</p>
              <p className="text-white font-medium">4</p>
            </div>
            
           
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold shadow-md">
              Visit
            </button>
            <button className="bg-white/20 p-2 rounded hover:bg-white/30">
              <Bookmark className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Left / Right Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white"
      >
        <ChevronRight />
      </button>

      {/* Pagination display */}
      <div className="absolute bottom-5 right-5 flex items-center gap-2 text-white text-sm">
        {banner + 1} / {BannerDb.length}
      </div>
    </div>
  );
};

export default Banner;
