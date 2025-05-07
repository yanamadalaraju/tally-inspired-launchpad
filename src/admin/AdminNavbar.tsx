// src/components/AdminNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '../assets/Mcrt-logo.jpg';

const AdminNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-10 h-20">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Admin Logo"
              className="h-10 w-30 object-contain hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/registrations" className="text-gray-600 hover:text-primary transition-colors">
            Members
          </Link>
          <Link to="/add-webinar-details" className="text-gray-600 hover:text-primary transition-colors">
            Webinars
          </Link>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:flex space-x-3">
        <Link to="/admin-dashboard">
  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
    Admin Dashboard
  </Button>
</Link>

        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-primary">
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-3 px-4 absolute w-full top-20">
          <div className="flex flex-col space-y-3">
            <Link to="/registrations" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-primary py-2">
              Members
            </Link>
            <Link to="/add-webinar-details" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-primary py-2">
              Webinars
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
  <Link to="/admin-dashboard" onClick={() => setIsMenuOpen(false)}>
    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
      Admin Dashboard
    </Button>
  </Link>
</div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;
