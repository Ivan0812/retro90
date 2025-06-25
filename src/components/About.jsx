import React from 'react';

const About = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center text-white py-16 px-6"
      style={{ backgroundImage: "url('/wp7301120-80s-movies-wallpapers.webp')" }}
    >
      {/* Tamni overlay sloj za čitljivost */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>

      {/* Glavni sadržaj iznad overlaya */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl tracking-wider font-bold mb-4">About This Project</h2>
        <p className="text-2xl">
          Retro90 is a modern web application inspired by iconic movies from the 80s and 90s. The website was created with the support of artificial intelligence to ensure high-quality design, features, and user experience.
          <br /><br />
          This project was built using React for the frontend, Tailwind CSS for styling, and the TMDB API for retrieving movie data in real-time.
          <br /><br />
          AI assistance (ChatGPT) was used throughout the development process – from designing the structure and writing code to improving UX and solving technical challenges. The application does not use a backend or database; instead, it relies entirely on the TMDB API to display up-to-date information.
          <br /><br />
          Retro90 is a passion project aimed at combining nostalgia with modern web technologies.
        </p>
      </div>
    </section>
  );
};

export default About;