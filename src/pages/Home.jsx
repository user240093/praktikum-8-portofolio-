import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden font-sans">
      
      {/* --- HERO SECTION --- */}
      <div className="container mx-auto px-6 pt-20 pb-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[80vh]">
        
        {/* Kolom Kiri: Teks */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6 shadow-sm">
              Halo, Selamat Datang!
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-4">
            Saya <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {/* EFEK MENGETIK DISINI */}
              <Typewriter
                words={['Ahmad Raka Putra Pratama', 'Web Developer']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
            Membangun pengalaman digital yang estetik, fungsional, dan berdampak bagi bisnis Anda.
          </p>
          
          <div className="flex gap-4">
            <Link to="/projects" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-1 active:scale-95">
              Lihat Karyaku
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all hover:shadow-md">
              Kontak
            </Link>
          </div>
        </motion.div>

        {/* Kolom Kanan: Gambar dengan Animasi Floating */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Blob Background Animasi */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
          ></motion.div>
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-10 -left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
          ></motion.div>

          <img 
            src="/asset/gb 1.jpg" 
            alt="Hero" 
            className="relative z-10 w-full rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 border-4 border-white"
          />
        </motion.div>
      </div>

      {/* --- TECH STACK MARQUEE (Interaktif) --- */}
      <div className="py-10 bg-white border-t border-gray-100">
        <p className="text-center text-gray-400 font-semibold mb-6 text-sm tracking-widest uppercase">Teknologi yang saya gunakan</p>
        <div className="overflow-hidden flex gap-8 justify-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Logo Dummy (Bisa diganti logo asli) */}
          {['React', 'Vite', 'Tailwind', 'Framer', 'JavaScript', 'NodeJS'].map((tech, i) => (
            <span key={i} className="text-2xl font-bold text-gray-800 px-6 py-2 bg-gray-50 rounded-lg border border-gray-200">
              {tech}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;