
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../assets/Mcrt-logo.jpg'; // or './assets/logo.png' based on your file structure


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center">
  <Link to="/">
    <img
      src={logo}
      alt="BizManager Logo"
      className="h-10 w-60 object-contain hover:scale-105 transition-transform duration-300"
    />
  </Link>
</div>


        
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
          <a href="#benefits" className="text-gray-600 hover:text-primary transition-colors">Benefits</a>
          <a href="#webinar" className="text-gray-600 hover:text-primary transition-colors">Webinar</a>
          <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">Testimonials</a>
        </div>
        
        <div className="hidden md:flex space-x-3">
          <Link to="/existing-customers">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
              Log In
            </Button>
          </Link>
          <Link to="/start-free-trail">
            <Button className="bg-secondary hover:bg-secondary-light text-white transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </Button>
          </Link>
        </div>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-primary"
        >
          <Menu />
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-3 px-4 absolute w-full">
          <div className="flex flex-col space-y-3">
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-primary transition-colors py-2">Features</a>
            <a href="#benefits" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-primary transition-colors py-2">Benefits</a>
            <a href="#webinar" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-primary transition-colors py-2">Webinar</a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-primary transition-colors py-2">Testimonials</a>
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/existing-customers" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  Log In
                </Button>
              </Link>
              <Link to="/combined" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-secondary hover:bg-secondary-light text-white">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
