import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  const location = useLocation();

  const navLinkStyle = (path) => 
    `px-4 py-2 rounded-full transition-all duration-300 ${
      location.pathname === path 
      ? "bg-blue-600 text-white shadow-lg font-medium" 
      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
    }`;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-100 shadow-sm"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Project<span className="font-light">Me</span>
        </Link>

        {/* Menu */}
        <div className="flex gap-2">
          <Link to="/" className={navLinkStyle('/')}>Home</Link>
          <Link to="/projects" className={navLinkStyle('/projects')}>Projects</Link>
          <Link to="/contact" className={navLinkStyle('/contact')}>Contact</Link>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;