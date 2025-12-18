// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col-reverse md:flex-row items-center gap-10">
      
      {/* Kolom Kiri: Teks */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          <span className="text-blue-600">RUANG EKSPRESI :</span> Wadah Kreatif & Kompetitif Mahasiswa
        </h1>
        
        {/* Tags / Badges */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
          <span className="px-4 py-1 bg-yellow-200 rounded-full text-sm font-semibold text-gray-800">Ideation</span>
          <span className="px-4 py-1 bg-green-200 rounded-full text-sm font-semibold text-gray-800">Creative</span>
          <span className="px-4 py-1 bg-blue-200 rounded-full text-sm font-semibold text-gray-800">Collaboration</span>
          <span className="px-4 py-1 bg-pink-200 rounded-full text-sm font-semibold text-gray-800">Guidance & Support</span>
        </div>
        
        <p className="text-gray-600 mb-6">
            Tempat mahasiswa mengembangkan potensi melalui pendekatan holistik dan kolaboratif.
        </p>
      </div>

      {/* Kolom Kanan: Gambar */}
      <div className="flex-1">
        {/* Ganti src dengan gambar meeting mahasiswa Anda */}
        <img 
          src="https://placehold.co/600x400/png?text=Meeting+Image" 
          alt="Diskusi Mahasiswa" 
          className="w-full rounded-tr-[50px] rounded-bl-[50px] object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;