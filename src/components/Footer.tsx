import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaYoutube, FaHeart } from 'react-icons/fa';
import { navLinks, contactInfo } from '../data/navigation';
import { assetUrl } from '../utils/assets';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebook, href: contactInfo.social.facebook, label: 'Facebook' },
    { icon: FaInstagram, href: contactInfo.social.instagram, label: 'Instagram' },
    // { icon: FaYoutube, href: contactInfo.social.youtube, label: 'YouTube' },
  ];

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-4 group">
              <img 
                src={assetUrl('/icon.png')} 
                alt="Bornais Music" 
                className="h-10 w-auto"
              />
              <span className="font-heading text-xl font-semibold group-hover:text-accent transition-colors">
                Bornais Music
              </span>
            </a>
            <p className="text-white/70 font-body text-sm leading-relaxed mb-6">
              Professional piano and organ performances for weddings, funerals, 
              church services, and special occasions in Windsor-Essex and beyond.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-accent hover:text-white transition-colors"
                  whileHover={{ y: -3 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors font-body text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-accent">More</h4>
            <ul className="space-y-2">
              {navLinks.slice(5).map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors font-body text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm font-body">
              © {currentYear} Bornais Music. All rights reserved.
            </p>
            <p className="text-white/50 text-sm font-body flex items-center gap-1">
              Made with <FaHeart className="text-accent" size={12} /> for music lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
