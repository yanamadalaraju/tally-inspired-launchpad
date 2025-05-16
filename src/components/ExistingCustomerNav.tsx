// import Link from 'next/link';
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import { useState } from 'react';

// const ExistingCustomerNav = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const navLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'Products', href: '/products' },
//     { name: 'Solutions', href: '/solutions' },
//     { name: 'Pricing', href: '/pricing' },
//     { name: 'Resources', href: '/resources' },
//     { name: 'Support', href: '/support' },
//   ];

//   return (
//     <header className="bg-white shadow-sm fixed w-full z-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16 md:h-20">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <Link href="/">
//               <span className="text-2xl font-bold text-primary">TallyPrime</span>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             {navLinks.map((link) => (
//               <Link 
//                 key={link.name} 
//                 href={link.href}
//                 className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Login/Account Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link href="/login">
//               <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
//                 Customer Login
//               </Button>
//             </Link>
//             <Link href="/contact">
//               <Button className="bg-primary hover:bg-primary-light text-white">
//                 Contact Sales
//               </Button>
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
//             >
//               {mobileMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-white shadow-lg">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             ))}
//             <div className="pt-4 pb-2 border-t border-gray-200">
//               <Link
//                 href="/login"
//                 className="block w-full px-4 py-2 text-center rounded-md bg-primary text-white font-medium mb-2"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Customer Login
//               </Link>
//               <Link
//                 href="/contact"
//                 className="block w-full px-4 py-2 text-center rounded-md border border-primary text-primary font-medium"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Contact Sales
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default ExistingCustomerNav;


import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../assets/Mcrt-logo.jpg'; // Adjust path if needed

const ExistingCustomerNav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState('');

  // Function to handle active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleClick = () => {
    const formSection = document.getElementById('formSection');
    if (formSection) {
      const offsetTop = formSection.offsetTop; // Get the top position of the form
      const offset = 80; // Adjust this value to your header height or preferred offset

      window.scrollTo({
        top: offsetTop - offset, // Subtract the offset so the form is fully visible
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center justify-start md:justify-center">
            <img
              src={logo}
              alt="BizManager Logo"
              className="h-10 w-30 object-contain hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#features"
            className={`text-gray-600 hover:text-primary transition-colors ${activeLink === 'features' ? 'text-primary border-b-2 border-primary' : ''}`}
            onClick={() => handleLinkClick('features')}
          >
            products
          </a>
          <a
            href="#benefits"
            className={`text-gray-600 hover:text-primary transition-colors ${activeLink === 'benefits' ? 'text-primary border-b-2 border-primary' : ''}`}
            onClick={() => handleLinkClick('benefits')}
          >
            pricing
          </a>
          <a
            href="#webinar"
            className={`text-gray-600 hover:text-primary transition-colors ${activeLink === 'webinar' ? 'text-primary border-b-2 border-primary' : ''}`}
            onClick={() => handleLinkClick('webinar')}
          >
            Solutions
          </a>
          <a
            href="#testimonials"
            className={`text-gray-600 hover:text-primary transition-colors ${activeLink === 'testimonials' ? 'text-primary border-b-2 border-primary' : ''}`}
            onClick={() => handleLinkClick('testimonials')}
          >
            Resources
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-3">
          <Link to="">
            <Button className="bg-secondary hover:bg-secondary-light text-white transition-all duration-300 transform hover:scale-105" onClick={handleClick}>
              Get Demo
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-primary"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-3 px-4 absolute w-full">
          <div className="flex flex-col space-y-3">
            <a
              href="#features"
              onClick={() => { setIsMenuOpen(false); handleLinkClick('features'); }}
              className={`text-gray-600 hover:text-primary transition-colors py-2 ${activeLink === 'features' ? 'text-primary border-b-2 border-primary' : ''}`}
            >
              Features
            </a>
            <a
              href="#benefits"
              onClick={() => { setIsMenuOpen(false); handleLinkClick('benefits'); }}
              className={`text-gray-600 hover:text-primary transition-colors py-2 ${activeLink === 'benefits' ? 'text-primary border-b-2 border-primary' : ''}`}
            >
              Benefits
            </a>
            <a
              href="#webinar"
              onClick={() => { setIsMenuOpen(false); handleLinkClick('webinar'); }}
              className={`text-gray-600 hover:text-primary transition-colors py-2 ${activeLink === 'webinar' ? 'text-primary border-b-2 border-primary' : ''}`}
            >
              Webinar
            </a>
            <a
              href="#testimonials"
              onClick={() => { setIsMenuOpen(false); handleLinkClick('testimonials'); }}
              className={`text-gray-600 hover:text-primary transition-colors py-2 ${activeLink === 'testimonials' ? 'text-primary border-b-2 border-primary' : ''}`}
            >
              Testimonials
            </a>

            {/* Mobile Buttons */}
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/login">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  Log in
                </Button>
              </Link>

              <Link to="" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-secondary hover:bg-secondary-light text-white">
                  Get Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ExistingCustomerNav;