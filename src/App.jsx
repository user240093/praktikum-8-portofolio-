import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from "./pages/Projects";
import Contact from './pages/Kontak';  // Sesuaikan nama file Anda (Kontak.jsx)

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Rute 404 jika halaman tidak ada */}
          <Route path="*" element={<div className="text-center mt-10">404 Not Found</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;