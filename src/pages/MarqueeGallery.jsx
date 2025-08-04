import React from 'react';
import { motion } from 'framer-motion';

const MarqueeGallery = () => {
  // Sample images - you can replace with your actual image URLs
  const images = [
    "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=200&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=200&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=200&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=200&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&h=200&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=200&h=200&fit=crop&crop=center"
  ];

  // Animation variants for the marquee
  const marqueeVariants = {
    animate: {
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="mx-auto px-4 md:px-8 bg-white min-h-screen py-12">
      {/* Header Section */}
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-center text-3xl font-semibold mt-12 text-gray-900">
          Some magic generations.
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Some amazing contents you can create in seconds.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative mt-6 overflow-hidden">
        <motion.div 
          className="flex gap-4 p-2"
          style={{ width: 'max-content' }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {/* Create multiple sets for seamless loop */}
          {[...Array(4)].map((_, setIndex) => (
            <motion.div
              key={setIndex}
              className="flex shrink-0 gap-4"
              variants={marqueeVariants}
              animate="animate"
            >
              {images.map((src, index) => (
                <motion.div
                  key={`${setIndex}-${index}`}
                  className="relative overflow-hidden rounded-md"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <img
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="w-48 h-48 object-cover rounded-md"
                    loading="lazy"
                  />
                  {/* Subtle overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-0"
                    whileHover={{ 
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                      transition: { duration: 0.3 }
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Overlays for Fade Effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-white to-transparent z-10" />
      </div>

      {/* Additional Content Section */}
      <div className="mx-auto max-w-4xl mt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h3 className="text-2xl font-medium text-gray-800 mb-4">
            Endless Creativity
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the power of AI-generated content with our seamless, 
            infinitely scrolling gallery. Each image represents the possibilities 
            of modern creative technology.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeGallery;