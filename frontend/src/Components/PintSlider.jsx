import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import PostsDb from "../Dbs/imageDB";

const ImageSlider = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous
  const slideInterval = useRef(null);
  const progressInterval = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const visibleSlides = 3; 

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setProgress(0);
  };

  useEffect(() => {
    if (!isPaused) {
      slideInterval.current = setInterval(nextSlide, 3000);
      progressInterval.current = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + (100 / (3000 / 100)))); 
      }, 100);
    }

    return () => {
      clearInterval(slideInterval.current);
      clearInterval(progressInterval.current);
    };
  }, [isPaused]);

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < visibleSlides; i++) {
      slides.push(images[(currentIndex + i) % images.length]);
    }
    return slides;
  };

  return (
    <div
      className="relative w-full max-w-6xl mx-auto overflow-hidden group mt-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="overflow-hidden">
        <motion.div
          key={currentIndex}
          className="flex items-center gap-6 px-4"
          initial={{ x: direction > 0 ? "100%" : "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: direction > 0 ? "-100%" : "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {getVisibleSlides().map((post, idx) => (
            <motion.div
              key={idx}
              className="relative w-1/3 flex-shrink-0"
              initial={{ x: direction > 0 ? "100%" : "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: direction > 0 ? "-100%" : "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <img
                src={post.url}
                alt={`Slide ${idx}`}
                className="w-full h-72 object-cover rounded-xl shadow-lg"
              />
              {/* Overlay */}
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-3 w-full rounded-b-xl">
                <div className="flex items-center mb-2">
                  <img
                    src={post.profilePic}
                    alt={`${post.name} Profile`}
                    className="w-8 h-8 rounded-full object-cover mr-2 border-2 border-white"
                  />
                  <div>
                    <h2 className="text-sm font-semibold">{post.name}</h2>
                    <p className="text-xs">{post.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {post.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="bg-white bg-opacity-20 text-xs px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Left Arrow */}
      <motion.button
        whileHover={{ scale: 1.2, y: -5 }}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition z-20"
        onClick={prevSlide}
      >
        &#8592;
      </motion.button>

      {/* Right Arrow */}
      <motion.button
        whileHover={{ scale: 1.2, y: -5 }}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition z-20"
        onClick={nextSlide}
      >
        &#8594;
      </motion.button>
    </div>
  );
};

export default ImageSlider;
