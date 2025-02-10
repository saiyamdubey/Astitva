import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gray border-t-2 text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div className='text-center'>
          <h3 className="text-lg font-bold text-teal-400">About Petshop</h3>
          <p className="mt-2">Your one-stop destination for all pet needs. We provide high-quality products, grooming services, and expert advice for your furry friends.</p>
        </div>
        
        {/* Quick Links */}
        <div className='text-center'>
          <h3 className="text-lg font-bold text-teal-400">Quick Links</h3>
          <ul className="mt-2 space-y-2 ">
            <li><Link to="/about" className="hover:text-teal-300">About Us</Link></li>
            <li><Link to="/services" className="hover:text-teal-300">Services</Link></li>
            <li><Link to="/contact" className="hover:text-teal-300">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-teal-300">FAQ</Link></li>
          </ul>
        </div>
        
        {/* Policies */}
        <div className='text-center'>
          <h3 className="text-lg font-bold text-teal-400">Our Policies</h3>
          <ul className="mt-2 space-y-2">
            <li><Link to="/privacy" className="hover:text-teal-300">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-teal-300">Terms & Conditions</Link></li>
            <li><Link to="/returns" className="hover:text-teal-300">Return Policy</Link></li>
          </ul>
        </div>
        
        {/* Contact Section */}
        <div className='text-center justify-center'>
          <h3 className="text-lg font-bold justify-center text-teal-400">Contact Us</h3>
          <p className="mt-2 flex text-center items-center justify-center"><FaEnvelope className="mr-2" /> support@petshop.com</p>
          <p className="mt-2 flex items-center justify-center"><FaPhone className="mr-2" /> +91 98765 43210</p>
          <div className="mt-4 flex justify-center text-center space-x-4">
            <a href="#" className="text-teal-400 hover:text-teal-300 text-xl"><FaFacebook /></a>
            <a href="#" className="text-teal-400 hover:text-teal-300 text-xl"><FaInstagram /></a>
            <a href="#" className="text-teal-400 hover:text-teal-300 text-xl"><FaTwitter /></a>
            <a href="#" className="text-teal-400 hover:text-teal-300 text-xl"><FaYoutube /></a>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="text-center bg-teal-400 py-4 text-gray-900 font-semibold">
        <h1 className="text-3xl font-bold">Astitva<span className="text-black">4</span>Animals</h1>
        <p className="mt-2">&copy; 2024 Astitva for Animals. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
