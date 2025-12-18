import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const Contact = () => {
  // Konfigurasi Tilt (Efek 3D)
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.05,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-6 flex items-center justify-center">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Mari <span className="text-blue-600">Berkolaborasi</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Punya ide proyek menarik atau sekadar ingin menyapa? Jangan ragu untuk menghubungi saya.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* KOLOM KIRI: INFO KONTAK (Dengan Efek Tilt 3D) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Tilt options={defaultOptions} className="h-full">
              <div className="bg-blue-600 rounded-3xl p-10 text-white h-full shadow-2xl relative overflow-hidden flex flex-col justify-between">
                
                {/* Dekorasi Lingkaran Background */}
                <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-[-50px] left-[-50px] w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
                  <div className="space-y-6">
                    {/* Item Email */}
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </div>
                      <div>
                        <p className="text-blue-100 text-sm">Email Saya</p>
                        <p className="font-semibold">2400016089@webmail.uad.ac.id</p>
                      </div>
                    </div>

                    {/* Item Lokasi */}
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </div>
                      <div>
                        <p className="text-blue-100 text-sm">Lokasi</p>
                        <p className="font-semibold">Yogyakarta, Indonesia</p>
                      </div>
                    </div>
                    
                    {/* Item WhatsApp */}
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      </div>
                      <div>
                        <p className="text-blue-100 text-sm">WhatsApp</p>
                        <p className="font-semibold">+62 812 3456 7890</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className="mt-10">
                  <p className="text-blue-200 text-sm mb-4">Sosial Media</p>
                  <div className="flex gap-4">
                    {['IG', 'IN', 'TW', 'GH'].map((item, index) => (
                      <div key={index} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all cursor-pointer font-bold text-xs">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>

          {/* KOLOM KANAN: FORM INPUT */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Nama Depan</label>
                  <input type="text" placeholder="John" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Nama Belakang</label>
                  <input type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Pesan Anda</label>
                <textarea rows="4" placeholder="Ceritakan ide proyekmu..." className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"></textarea>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-300">
                Kirim Pesan Sekarang 
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;