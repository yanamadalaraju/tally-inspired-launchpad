
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Mcrt-logo-removebg-preview.png'; // or './assets/logo.png' based on your file structure
import { Award, BadgeCheck, Facebook, FacebookIcon, Globe2, Instagram, Linkedin, Mail, MapPin, Phone, Smile, Users, Youtube } from 'lucide-react';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
          <div className="flex items-center space-x-4">
  {/* <h6 className="text-4xl font-bold text-white">MCRT Software India Pvt Ltd</h6> */}
  <Link to="/">
    <img
      src={logo}
      alt="BizManager Logo"
      className="h-20 w-50 object-contain hover:scale-105 transition-transform duration-300"
    />
  </Link>
</div>

<p className="text-gray-400 mb-4">
  The all-in-one solution to streamline your business operations and drive growth. Manage tasks, improve efficiency, and scale seamlessly.
</p>


            {/* <div className="flex space-x-6 items-center">
  <a href="https://www.facebook.com/mcrtallysolutions" className="text-gray-400 hover:text-secondary transition-colors duration-200">
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
    </svg>
  </a>
  
  <a href="https://www.instagram.com/mcr_tally_solutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-400 hover:text-secondary transition-colors duration-200">
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.2c3.267 0 5.8 2.533 5.8 5.8v8.8c0 3.267-2.533 5.8-5.8 5.8H6.2c-3.267 0-5.8-2.533-5.8-5.8V8c0-3.267 2.533-5.8 5.8-5.8h5.6zM12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18.6c-3.633 0-6.6-2.967-6.6-6.6S8.367 5.4 12 5.4c3.633 0 6.6 2.967 6.6 6.6s-2.967 6.6-6.6 6.6zm4.5-8.4c0 .828-.672 1.5-1.5 1.5-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5c.828 0 1.5.672 1.5 1.5z"></path>
    </svg>
  </a>
  
  <a href="https://www.linkedin.com/company/106770203/admin/dashboard/" className="text-gray-400 hover:text-secondary transition-colors duration-200">
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.98 3c-.822 0-1.49.667-1.49 1.49 0 .822.668 1.49 1.49 1.49.823 0 1.49-.668 1.49-1.49 0-.823-.667-1.49-1.49-1.49zm0 2.01c-.284 0-.49-.204-.49-.49 0-.285.206-.49.49-.49.285 0 .49.205.49.49 0 .286-.205.49-.49.49zm-2.99 15.02V8.99H4.98v9.03H1.99zM4.98 6.17c2.6 0 4.73-2.13 4.73-4.73 0-2.6-2.13-4.73-4.73-4.73-2.6 0-4.73 2.13-4.73 4.73 0 2.6 2.13 4.73 4.73 4.73zm9.03 3.98c-1.22 0-2.22.4-3.08 1.1v-2.18h-2.99v9.03h2.99v-5.69c0-1.43.82-2.2 2.11-2.2 1.23 0 2.24.84 2.24 2.46v5.43h2.99v-5.43c0-3.48-2.26-5.13-5.14-5.13zm-5.56-.07c1.33 0 2.42.45 3.02 1.2v-.9h2.99v7.47h-2.99v-3.61c0-1.92-1.09-2.99-2.82-2.99-1.64 0-2.82 1.22-2.82 2.99v3.61h-2.99V8.99h2.99v2.76c.6-.74 1.69-1.2 3.02-1.2z"></path>
    </svg>
  </a>
</div> */}

          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">🔗 Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/existing-customers" className="text-gray-400 hover:text-secondary transition-colors">Existing Customers</Link></li>
              <li><Link to="/combined" className="text-gray-400 hover:text-secondary transition-colors">Combined View</Link></li>
              <li><a href="#features" className="text-gray-400 hover:text-secondary transition-colors">Features</a></li>
              <li><a href="#webinar" className="text-gray-400 hover:text-secondary transition-colors">Webinar</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">🛒 Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Accounting Software</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">GST Software</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Inventory Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Payroll Software</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Enterprise Solutions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">💬 Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">System Requirements</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">FAQs</a></li>
            </ul>
          </div>
          <div>
  <h3 className="font-bold text-lg mb-4">🖥️ Services</h3>
  <ul className="space-y-2">
    <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Tally Installation & Setup</a></li>
    <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">GST Configuration</a></li>
    <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Company Data Migration</a></li>
    <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Custom Tally Reports</a></li>
    <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Tally On Cloud</a></li>
    <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">AMC & Support Services</a></li>
    <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Tally Training & Workshops</a></li>
  </ul>
</div>

<div>
  <h3 className="font-bold text-lg mb-4">🧑‍💼 Why Choose Us</h3>
  <ul className="space-y-2">
    <li className="flex items-start">
      <BadgeCheck size={18} className="mr-2 mt-1 flex-shrink-0 text-secondary" />
      <a href="#" className="text-gray-400 hover:text-secondary transition-colors">25+ Years of Experience</a>
    </li>
    <li className="flex items-start">
      <Award size={18} className="mr-2 mt-1 flex-shrink-0 text-secondary" />
      <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Authorized Tally Partner</a>
    </li>
    <li className="flex items-start">
      <Users size={18} className="mr-2 mt-1 flex-shrink-0 text-secondary" />
      <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Certified Tally Experts</a>
    </li>
    <li className="flex items-start">
      <Globe2 size={18} className="mr-2 mt-1 flex-shrink-0 text-secondary" />
      <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Pan India Support</a>
    </li>
    <li className="flex items-start">
      <Smile size={18} className="mr-2 mt-1 flex-shrink-0 text-secondary" />
      <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Client-Centric Approach</a>
    </li>
  </ul>
</div>

<div>
  <h3 className="font-bold text-lg mb-4">📰 Latest News / Updates</h3>
  <ul className="space-y-2">
    <li>
      <a href="#" className="text-gray-400 hover:text-secondary transition-colors">TallyPrime 4.0 Released</a>
    </li>
    <li>
      <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Budget 2025: GST Changes</a>
    </li>
    <li>
      <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Tally & E-Invoicing Explained</a>
    </li>
    <li>
      <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Upcoming Training Webinars</a>
    </li>
    <li>
      <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Client Success Stories</a>
    </li>
  </ul>
</div>



<div>
  <h3 className="font-bold text-lg mb-4">🌐 Contact Us</h3>
  <ul className="space-y-2">
    <li className="flex items-start">
      <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-secondary" />
      <span>No.660, 1st Floor, 1st B Main Road, Jayanagar 8 Block, BANGALORE - 560070</span>
    </li>
    <li className="flex items-center">
      <Phone size={18} className="mr-2 flex-shrink-0 text-secondary" />
      <span>+91 9964740243</span>
    </li>
    <li className="flex items-center">
      <Mail size={18} className="mr-2 flex-shrink-0 text-secondary" />
      <span>sales@mcrindia.in</span>
    </li>
    <li className="flex items-center space-x-4 mt-2">
      <a href="https://www.facebook.com/mcrtallysolutions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
        <FacebookIcon size={18} />
      </a>
      <a href="https://www.instagram.com/mcr_tally_solutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
        <Instagram size={18} />
      </a>
      <a href="https://www.linkedin.com/company/106770203/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
        <Linkedin size={18} />
      </a>
      {/* <a href="https://www.youtube.com/mcrindia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
        <Youtube size={18} />
      </a> */}
    </li>
  </ul>
</div>


        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {currentYear} MCRT Software Indian Private Limited. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-secondary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-secondary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-secondary text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
