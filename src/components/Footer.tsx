import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#57B524] text-white mx-auto">
      <div className="container-fintech section-padding max-w-500 mx-auto px-5 md:px-8 lg:px-10 py-9 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold">AJO MONI</span>
            </div>
            <p className="text-white text-sm leading-relaxed">
              Ajo Moni captures long-tail savings behavior in Nigeria with a first-mover advantage in structured, community-based financial systems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start lg:items-center">
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#work" className=" text-white hover:text-fintech-secondary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className=" text-white hover:text-fintech-secondary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#services" className="text-white hover:text-fintech-secondary transition-colors">
                  Join a Group
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white hover:text-fintech-secondary transition-colors">
                  Wallet Groups
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white hover:text-fintech-secondary transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col lg:items-center">
            <h3 className="font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li className="text-white">
                <a href="#home" className="text-white hover:text-fintech-secondary transition-colors">
                  About
                </a>
              </li>
              <li className="text-white">
                <a href="#faq" className="text-white hover:text-fintech-secondary transition-colors">
                  FAQS
                </a>
              </li>
              <li className="text-white">
                <a href="#contact" className="text-white hover:text-fintech-secondary transition-colors">
                  Contact
                </a>
              </li>
              <li className="text-white">Career</li>
              <li className="text-white">Community</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Support</h3>
            <ul className="space-y-2">
              <li className="text-white">
                <a href="#home" className="text-white hover:text-fintech-secondary transition-colors">
                  Help Center
                </a>
              </li>
              <li className="text-white">
                <a href="#contact" className="text-white hover:text-fintech-secondary transition-colors">
                  Chat With Us
                </a>
              </li>
              <li className="text-white">
                <a href="#contact" className="text-white hover:text-fintech-secondary transition-colors">
                  Report a Problem
                </a>
              </li>
              <li className="text-white">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white">
                <a href="https://www.instagram.com" className="text-white hover:text-fintech-secondary transition-colors">
                  Instagram
                </a>
              </li>
              <li className="text-white">
                <a href="https://www.x.com" className="text-white hover:text-fintech-secondary transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-white text-sm">
            Built with ❤️ 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
