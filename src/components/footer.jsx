import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import icon from "../assets/icon.png";

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
    { icon: <FaFacebookF size={18} />, name: "Facebook", url: "https://facebook.com" },
    { icon: <FaInstagram size={18} />, name: "Instagram", url: "https://instagram.com" },
    { icon: <FaTwitter size={18} />, name: "Twitter", url: "https://twitter.com" },
    { icon: <FaYoutube size={18} />, name: "YouTube", url: "https://youtube.com" }
  ];

  return (
    <footer className="bg-primary text-accent">
      {/* MAIN FOOTER CONTENT */}
      <div className="py-16 border-b border-accent/10">
        <div className="container-max px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* BRAND SECTION */}
            <div className="space-y-6">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="relative overflow-hidden rounded-lg bg-white p-1">
                  <img 
                    src={icon}
                    alt="Babuji Chaay"
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <p className="font-serif font-bold text-xl text-accent tracking-wide">Babuji Chaay</p>
                  <p className="text-xs text-secondary font-medium tracking-widest uppercase">Brewing Happiness</p>
                </div>
              </Link>
              <p className="text-sm text-accent/80 leading-relaxed max-w-xs">
                Authentic Indian chai, premium beverages, and delicious snacks crafted with passion and quality ingredients.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-secondary underline decoration-secondary/30 underline-offset-8">Explore</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link 
                      to={link.path}
                      className="text-accent/80 hover:text-secondary transition-all text-sm flex items-center gap-2 group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-secondary">→</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT INFO */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-secondary underline decoration-secondary/30 underline-offset-8">Contact Us</h4>
              <ul className="space-y-4 text-sm text-accent/80">
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-lg">📍</span>
                  <span className="leading-snug">K D Empire, Kanakia Park, Mira Road East, Mumbai, Maharashtra 401107</span>
                </li>
                <li>
                  <a href="tel:+919076165666" className="hover:text-secondary transition-colors flex items-center gap-3 group">
                    <span className="text-secondary text-lg">📞</span>
                    <span>+91 90761 65666</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:babujichai55@gmail.com" className="hover:text-secondary transition-colors flex items-center gap-3 group">
                    <span className="text-secondary text-lg">✉️</span>
                    <span>babujichai55@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* FOLLOW US */}
            <div className="space-y-6">
              <h4 className="font-bold text-lg mb-6 text-secondary underline decoration-secondary/30 underline-offset-8">Follow Our Story</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="w-10 h-10 border border-secondary/30 text-secondary rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-xs font-bold text-secondary uppercase tracking-tighter mb-1">Newsletter</p>
                <p className="text-xs text-accent/60">Subscribe for updates & special offers.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="py-8 bg-black/20">
        <div className="container-max px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* COPYRIGHT */}
            <div className="order-3 md:order-1 text-center md:text-left">
              <p className="text-xs text-accent/50">
                © {currentYear} Babuji Chaay. All rights reserved.
              </p>
            </div>

            {/* CENTER TEXT */}
            <div className="order-1 md:order-2 text-center">
              <p className="text-sm font-serif italic text-secondary/80">
                "Brewing Happiness • Fresh chai, fresh smiles"
              </p>
            </div>

            {/* LEGAL LINKS */}
            <div className="order-2 md:order-3 flex gap-4">
              {legalLinks.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.path}
                  className="text-xs text-accent/50 hover:text-secondary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-center">
             <p className="text-[10px] text-accent/30 uppercase tracking-[0.2em]">
                Made with ❤️ in India
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}