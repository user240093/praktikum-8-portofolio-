import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const Projects = () => {
  // --- DATA PROYEK (Ganti link githubUrl dengan link asli Anda) ---
  const projects = [
    { 
      id: 1, 
      title: "Web To-Do List", 
      cat: "Web Design", 
      img: "/public/assets project/gb p1.png",
      desc: "pencatat tugas dengan fitur personalisasi antarmuka yang lengkap. Pengguna dapat mengganti tema warna, mengatur ukuran font (Zoom In/Out), memilih jenis font, serta beralih ke Dark Mode secara real-time.",
      tech: ["html", "Dom",],
      githubUrl: "https://github.com/user240093/24000016089_Ahmad-Raka-Putra-Pratama_A", 
      demoUrl: "https://user240093.github.io/24000016089_Ahmad-Raka-Putra-Pratama_A/Praktikum%203%20(js)/" 
    },
    { 
      id: 2, 
      title: "Random Useless Facts", 
      cat: "API Integration", 
      img: "/public/assets project/gb p2.png",
      desc: "Aplikasi interaktif yang mengambil data dari Public API secara real-time. Menggunakan teknik Asynchronous JavaScript (Async/Await) dan Fetch API untuk me-request fakta unik dan memperbarui antarmuka tanpa perlu reload halaman.",
      tech: ["Vue.js", "Chart.js", "Tailwind"],
      githubUrl: "https://github.com/user240093/24000016089_Ahmad-Raka-Putra-Pratama_A",
      demoUrl: "https://user240093.github.io/24000016089_Ahmad-Raka-Putra-Pratama_A/Praktikum%204%20(%20Random%20Useless%20Facts%20)/"
    },
    { 
      id: 3, 
      title: "Personal Bio Page", 
      cat: "Web Design / HTML & CSS", 
      img: "/public/assets project/gb p3.png",
      desc: "Halaman profil pribadi yang responsif dengan tata letak kartu (Card Layout) modern. Menggunakan Flexbox untuk pengaturan elemen hobi dan foto profil, serta penerapan Semantic HTML untuk struktur kode yang SEO-friendly.",
      tech: ["HTML5 Semantic", "CSS Flexbox", "Responsive UI"],
      githubUrl: "https://github.com/user240093/24000016089_Ahmad-Raka-Putra-Pratama_A",
      demoUrl: "https://user240093.github.io/24000016089_Ahmad-Raka-Putra-Pratama_A/Praktikum%205%20(%20Figma%20)/"
    },
    { 
      id: 4, 
      title: "Apollo Learning Platform", 
      cat: "UI Slicing & Frontend", 
      img: "/public/assets project/gb p4.png",
      desc: "Implementasi desain Landing Page untuk platform edukasi 'Apollo'. Mengubah desain mockup (Figma) menjadi kode React yang pixel-perfect. Fokus pada tata letak responsif, tipografi yang jelas, dan komponen UI modern seperti Hero Section dan tombol CTA (Call to Action).",
      tech: ["React", "Tailwind CSS", "Figma to Code"],
      githubUrl: "https://github.com/user240093/24000016089_Ahmad-Raka-Putra-Pratama_A",
      demoUrl: "https://user240093.github.io/24000016089_Ahmad-Raka-Putra-Pratama_A/Praktikum%205%20(%20Slicing%20APOLLO%20)/"
    },
    { 
      id: 5, 
      title: "Live Profil Card Editor", 
      cat: "React State Management", 
      img: "/public/assets project/gb p5.png",
      desc: "Web interaktif untuk membuat dan mengedit kartu profil secara langsung (real-time preview). Pengguna dapat mengubah data seperti nama, pekerjaan, dan bio dengan hasil yang langsung terlihat di layar.",
      tech: ["React Hooks", "Event Handling", "Dark Mode UI"],
      githubUrl: "https://github.com/user240093/24000016089_Ahmad-Raka-Putra-Pratama_A",
      demoUrl: "#"
    },
    { 
      id: 6, 
      title: "Sistem Tebak Angka", 
      cat: "JavaScript Logic", 
      img: "/public/assets project/gb p6.png",
      desc: "Game sederhana berbasis JavaScript yang menguji logika dan ketelitian pemain dalam menebak angka acak. Proyek ini menampilkan interaksi real-time antara input pengguna dan hasil tebakan secara dinamis.",
      tech: ["React", "Redux", "Firebase"],
      githubUrl: "https://github.com/user240093/24000016089_Ahmad-Raka-Putra-Pratama_A",
      demoUrl: "https://user240093.github.io/24000016089_Ahmad-Raka-Putra-Pratama_A/Praktikum%205%20(%20Figma%20)/"
    },
  ];

  // Konfigurasi Efek 3D Tilt
  const defaultOptions = {
    reverse: false, max: 20, perspective: 1000, scale: 1.02, speed: 1000, transition: true, axis: null, reset: true, easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6 font-sans">
      <div className="container mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900"
          >
            Galeri <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Proyek Unggulan</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.3 }}
             className="text-gray-500 text-lg leading-relaxed"
          >
            Setiap proyek adalah cerita tentang pemecahan masalah. Berikut adalah hasil eksplorasi saya dalam menciptakan solusi digital yang fungsional.
          </motion.p>
        </div>

        {/* Grid Kartu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Tilt options={defaultOptions} className="h-full">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 h-full flex flex-col group relative">
                  
                  {/* Bagian Gambar + Overlay Link */}
                  <div className="relative overflow-hidden h-52">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* OVERLAY: Muncul saat Hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                       {/* Tombol Demo */}
                       <a href={item.demoUrl} className="bg-white text-gray-900 px-5 py-2 rounded-full font-bold text-sm hover:bg-blue-600 hover:text-white transition transform hover:scale-105 shadow-lg">
                         Demo Live
                       </a>
                       {/* Tombol GitHub */}
                       <a 
                          href={item.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-transparent border-2 border-white text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-white hover:text-gray-900 transition transform hover:scale-105"
                       >
                         GitHub
                       </a>
                    </div>
                  </div>

                  {/* Bagian Konten Teks */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider border border-blue-100">
                        {item.cat}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                      {item.desc}
                    </p>

                    {/* Tech Stack Badge */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                      {item.tech.map((t, i) => (
                        <span key={i} className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;