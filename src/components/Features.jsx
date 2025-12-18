// src/components/Features.jsx
import React from 'react';

const Features = () => {
  const pillars = [
    { title: "Ideation", desc: "Mengembangkan ide-ide kreatif liar melalui brainstorming.", color: "bg-yellow-100 border-yellow-300" },
    { title: "Creative", desc: "Menjadikan ide menjadi karya nyata dengan dukungan tools.", color: "bg-green-100 border-green-300" },
    { title: "Collaboration", desc: "Bekerja sama dalam tim multidisiplin untuk solusi komprehensif.", color: "bg-blue-100 border-blue-300" },
    { title: "Guidance & Support", desc: "Mendapat bimbingan dari mentor berpengalaman.", color: "bg-pink-100 border-pink-300" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Empat Pilar <span className="text-blue-600">Ruang Ekspresi</span></h2>
        <p className="text-gray-500 mb-10">Komponen yang dirancang untuk mengembangkan potensi.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, index) => (
            <div key={index} className={`p-6 rounded-xl border-t-4 ${item.color} shadow-sm hover:shadow-md transition-shadow`}>
              <div className="mb-4 text-2xl">💡</div> {/* Ganti dengan Icon sesuai kebutuhan */}
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;