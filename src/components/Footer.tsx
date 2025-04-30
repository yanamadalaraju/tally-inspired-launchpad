
import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">BizManager</h3>
            <p className="text-gray-300 mb-4">
              Comprehensive business management software for modern enterprises.
              Streamline operations, ensure compliance, and drive growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#webinar" className="text-gray-300 hover:text-white transition-colors">Webinar</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Knowledge Base</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Video Tutorials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-secondary" />
                <span className="text-gray-300">support@bizmanager.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-secondary" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 BizManager. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
