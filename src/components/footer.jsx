import { Link } from "react-router-dom";
import {
  Camera,
  ChevronRight,
  Globe,
  Heart,
  Mail,
  MessageCircle,
  MapPin,
  PlayCircle,
  Phone,
} from "lucide-react";
import { FaFacebook, FaInstagramSquare, FaTwitter, FaYoutube } from "react-icons/fa";

import icon from "../assets/icon.png";

const goldIconProps = {
  strokeWidth: 1.5,
  className: "text-[var(--gold-accent)]"
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Franchise", path: "/franchise" },
    { name: "Contact", path: "/contact" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "#" },
    { name: "Terms & Conditions", path: "#" },
    { name: "Return Policy", path: "#" }
  ];

  const socialLinks = [
    { icon: <FaFacebook size={22} />, name: "Facebook", url: "https://facebook.com" },
    { icon: <FaInstagramSquare size={22} />, name: "Instagram", url: "https://instagram.com" },
    { icon: <FaTwitter size={22} />, name: "Twitter", url: "https://twitter.com" },
    { icon: <FaYoutube size={22} />, name: "YouTube", url: "https://youtube.com" }
  ];

  return (
    <footer className="bg-primary text-accent">
      <div className="border-b border-accent/10 py-16">
        <div className="container-max px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-6">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="relative overflow-hidden rounded-lg bg-white p-1">
                  <img
                    src={icon}
                    alt="Babuji Chaay"
                    className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div>
                  <p className="text-xl font-bold tracking-wide text-accent font-serif">Babuji Chaay</p>
                  <p className="text-xs font-medium uppercase tracking-widest text-secondary">
                    Brewing Happiness
                  </p>
                </div>
              </Link>
              <p className="max-w-xs text-sm leading-relaxed text-accent/80">
                Authentic Indian chai, premium beverages, and delicious snacks crafted with passion and quality ingredients.
              </p>
            </div>

            <div>
              <h4 className="mb-6 text-lg font-bold text-secondary underline decoration-secondary/30 underline-offset-8">
                Explore
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="group flex items-center gap-2 text-sm text-accent/80 transition-all hover:text-secondary"
                    >
                      <ChevronRight size={16} strokeWidth={1.5} className="text-[var(--gold-accent)] opacity-70 transition-opacity group-hover:opacity-100" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-lg font-bold text-secondary underline decoration-secondary/30 underline-offset-8">
                Contact Us
              </h4>
              <ul className="space-y-4 text-sm text-accent/80">
                <li className="flex items-start gap-3">
                  <MapPin size={36} {...goldIconProps} />
                  <span className="leading-snug">
                    K D Empire, Kanakia Park, Mira Road East, Mumbai, Maharashtra 401107
                  </span>
                </li>
                <li>
                  <a href="tel:+919076165666" className="group flex items-center gap-3 transition-colors hover:text-secondary">
                    <Phone size={18} {...goldIconProps} />
                    <span>+91 90761 65666</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:babujichai55@gmail.com" className="group flex items-center gap-3 transition-colors hover:text-secondary">
                    <Mail size={18} {...goldIconProps} />
                    <span>babujichai55@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="mb-6 text-lg font-bold text-secondary underline decoration-secondary/30 underline-offset-8">
                Follow Our Story
              </h4>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: socialIcon, name, url }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-secondary/30 text-secondary transition-all duration-300 hover:-translate-y-1 hover:bg-secondary hover:text-primary"
                  >
                    {socialIcon}
                  </a>
                ))}
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="mb-1 text-xs font-bold uppercase tracking-tighter text-secondary">Newsletter</p>
                <p className="text-xs text-accent/60">Subscribe for updates and special offers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/20 py-8">
        <div className="container-max px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="order-3 text-center md:order-1 md:text-left">
              <p className="text-xs text-accent/50">&copy; {currentYear} Babuji Chaay. All rights reserved.</p>
            </div>

            <div className="order-1 text-center md:order-2">
              <p className="text-sm font-serif italic text-secondary/80">
                "Brewing Happiness / Fresh chai, fresh smiles"
              </p>
            </div>

            <div className="order-2 flex gap-4 md:order-3">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-xs text-accent/50 transition-colors hover:text-secondary"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-accent/30">
              Made with <Heart size={12} strokeWidth={1.5} className="text-[var(--gold-accent)]" /> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
