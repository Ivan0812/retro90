import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      className="w-full h-[50vh] relative text-black py-20 px-6 text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/wallpaperflare.com_wallpaper.webp')" }}
    >
      {/* Overlay sloj */}
      <div className="absolute inset-0 bg-yellow-400 bg-opacity-60"></div>

      {/* Animirani sadržaj */}
      <div className="relative z-10">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          🎬 Retro90
        </motion.h1>

        <motion.p
          className="text-4xl font-bold max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          A tribute to the most iconic films from the 80s and 90s. Discover hidden gems, cult classics, and timeless hits.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;