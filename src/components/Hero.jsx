import React from 'react';

const Hero = () => {
  return (
    <section
      className="w-full h-[50vh] relative text-black py-20 px-6 text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/wallpaperflare.com_wallpaper.jpg')" }}
    >
      {/* Žuti overlay sloj */}
      <div className="absolute inset-0 bg-yellow-400 bg-opacity-60"></div>

      {/* Glavni sadržaj iznad pozadine */}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-4">🎬 Retro90</h1>
        <p className="text-4xl font-bold max-w-2xl mx-auto">
          A tribute to the most iconic films from the 80s and 90s. Discover hidden gems, cult classics, and timeless hits.
        </p>
      </div>
    </section>
  );
};

export default Hero;