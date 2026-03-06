import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 dark:from-black dark:to-gray-950 text-gray-300">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 shadow-lg">
                <span className="text-white font-bold text-xl">CPC</span>
              </div>
              <div>
                <span className="font-bold text-white text-lg block">Compact Pile</span>
                <span className="text-xs text-gray-400">Construction Pvt. Ltd.</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Leading the geotechnical testing industry with 48 years of expertise in
              foundation testing and deep foundation solutions across India.
            </p>
            <div className="flex space-x-4 pt-2">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Instagram, href: '#' }
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="Social media link"
                >
                  <Icon className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/projects', label: 'Projects' },
                { to: '/team', label: 'Our Team' },
                { to: '/certifications', label: 'Certifications' },
                { to: '/contact', label: 'Contact Us' }
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-gray-400 hover:text-blue-500 transition-colors text-sm flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 group-hover:bg-blue-500 transition-colors"></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              {[
                'Pile Load Tests (NABL)',
                'NDT Testing',
                'High Strain Dynamic Test',
                'Cross-Hole Sonic Logging',
                'Piling Works',
                'Rock Anchors & Soil Nailing'
              ].map((service, index) => (
                <li key={index} className="text-gray-400 text-sm flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 mt-1.5"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                  <MapPin className="h-4 w-4 text-blue-500 group-hover:text-white transition-colors" />
                </div>
                <div className="text-sm text-gray-400">
                  <p className="font-medium text-white mb-1">Head Office:</p>
                  <p>2nd Floor, D-17, Lajpat Nagar III</p>
                  <p>New Delhi – 110024</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                  <Phone className="h-4 w-4 text-blue-500 group-hover:text-white transition-colors" />
                </div>
                <div className="text-sm">
                  <p className="text-gray-400">+91 9810208189</p>
                  <p className="text-gray-400">011-41716543</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                  <Mail className="h-4 w-4 text-blue-500 group-hover:text-white transition-colors" />
                </div>
                <a
                  href="mailto:compactpile@yahoo.co.in"
                  className="text-sm text-gray-400 hover:text-blue-500 transition-colors break-all"
                >
                  compactpile@yahoo.co.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              &copy; {currentYear} Compact Pile Construction Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-blue-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-blue-500 transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-blue-500 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;