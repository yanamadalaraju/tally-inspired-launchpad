// import React from 'react';
// import { Button } from "@/components/ui/button";
// import { Menu } from "lucide-react";
// import { Link } from "react-router-dom";
// import logo from '../assets/Mcrt-logo.jpg'; // Adjust path if needed

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   return (
//     <nav className="bg-white shadow-sm fixed w-full z-10">
//       <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Link to="/" className="flex items-center justify-start md:justify-center">
//             <img
//               src={logo}
//               alt="BizManager Logo"
//               className="h-10 w-30 object-contain hover:scale-105 transition-transform duration-300"
//             />
//           </Link>
//         </div>

//         {/* Desktop Nav Links */}
//         <div className="hidden md:flex space-x-6">
//           <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
//           <a href="#benefits" className="text-gray-600 hover:text-primary transition-colors">Benefits</a>
//           <a href="#webinar" className="text-gray-600 hover:text-primary transition-colors">Webinar</a>
//           <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">Testimonials</a>
//         </div>

//         {/* Desktop Buttons */}
//         <div className="hidden md:flex space-x-3">
//           {/* <Link to="">
//             <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
//               Contact Sales
//             </Button>
//           </Link> */}
//           <Link to="">
//             <Button className="bg-secondary hover:bg-secondary-light text-white transition-all duration-300 transform hover:scale-105">
//               Get Demo
//             </Button>
//           </Link>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button 
//           onClick={() => setIsMenuOpen(!isMenuOpen)} 
//           className="md:hidden text-primary"
//         >
//           <Menu />
//         </button>
//       </div>

//       {/* Mobile Menu Content */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white shadow-md py-3 px-4 absolute w-full">
//           <div className="flex flex-col space-y-3">
//             <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-primary transition-colors py-2">Features</a>
//             <a href="#benefits" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-primary transition-colors py-2">Benefits</a>
//             <a href="#webinar" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-primary transition-colors py-2">Webinar</a>
//             <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-primary transition-colors py-2">Testimonials</a>

//             {/* Mobile Buttons */}
//             <div className="flex flex-col space-y-2 pt-2">
//             <Link to="/login">
//   <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
//     Log in
//   </Button>
// </Link>

//               <Link to="" onClick={() => setIsMenuOpen(false)}>
//                 <Button className="w-full bg-secondary hover:bg-secondary-light text-white">
//                   Get Demo
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../assets/Mcrt-logo.jpg'; // Adjust path if needed

const Navbar = () => {
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
            Features
          </a>
          <a
            href="#benefits"
            className={`text-gray-600 hover:text-primary transition-colors ${activeLink === 'benefits' ? 'text-primary border-b-2 border-primary' : ''}`}
            onClick={() => handleLinkClick('benefits')}
          >
            Benefits
          </a>
          <a
            href="#webinar"
            className={`text-gray-600 hover:text-primary transition-colors ${activeLink === 'webinar' ? 'text-primary border-b-2 border-primary' : ''}`}
            onClick={() => handleLinkClick('webinar')}
          >
            Webinar
          </a>
          <a
            href="#testimonials"
            className={`text-gray-600 hover:text-primary transition-colors ${activeLink === 'testimonials' ? 'text-primary border-b-2 border-primary' : ''}`}
            onClick={() => handleLinkClick('testimonials')}
          >
            Testimonials
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
              {/* <Link to="/login">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  Log in
                </Button>
              </Link> */}

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

export default Navbar;
