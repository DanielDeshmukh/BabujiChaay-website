import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Home, Mail, Menu, Store, X } from "lucide-react";
import icon from "../assets/icon.png";

const iconProps = {
  size: 18,
  strokeWidth: 1.5,
  className: "text-[var(--gold-accent)]"
};

const navItems = [
  { href: "/", label: "Home", icon: <Home {...iconProps} /> },
  { href: "/menu", label: "Menu", icon: <BookOpen {...iconProps} /> },
  { href: "/franchise", label: "Franchise", icon: <Store {...iconProps} /> },
  { href: "/contact", label: "Contact", icon: <Mail {...iconProps} /> }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky left-0 top-0 z-50 w-full border-b border-secondary/20 bg-primary/95 text-accent shadow-premium backdrop-blur-md">
      <div className="container-max flex items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={icon}
              alt="Babuji Chaay Logo"
              className="h-12 w-12 object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div>
            <span className="block text-2xl font-extrabold leading-tight tracking-wider text-accent">
              Babuji
            </span>
            <span className="text-sm font-semibold text-secondary">Chaay Cafe</span>
          </div>
        </Link>

        <button
          className="rounded-full p-2 transition-colors hover:text-secondary md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>

        <nav className="hidden gap-1 md:flex">
          {navItems.map(({ href, label, icon }) => (
            <NavLink key={href} href={href} label={label} icon={icon} />
          ))}
        </nav>

        <Link to="/contact" className="hidden md:inline-block btn-primary text-sm">
          Get In Touch
        </Link>
      </div>

      {open && (
        <div className="animate-slideDown border-t border-secondary/20 bg-primary/95 shadow-lg backdrop-blur-md md:hidden">
          <nav className="container-max flex flex-col space-y-2 px-4 py-6">
            {navItems.map(({ href, label, icon }) => (
              <MobileNavLink
                key={href}
                href={href}
                label={label}
                icon={icon}
                onClose={() => setOpen(false)}
              />
            ))}
            <Link
              to="/contact"
              className="btn-primary mt-4 w-full text-center"
              onClick={() => setOpen(false)}
            >
              Get In Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, label, icon }) {
  return (
    <Link
      to={href}
      className="group relative flex items-center gap-2 px-4 py-2 text-lg font-medium text-accent transition-colors duration-300 hover:text-secondary"
    >
      {icon}
      {label}
      <span className="absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 bg-secondary transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  );
}

function MobileNavLink({ href, label, icon, onClose }) {
  return (
    <Link
      to={href}
      onClick={onClose}
      className="flex items-center gap-3 rounded-lg px-4 py-3 text-lg font-medium text-accent transition-colors duration-300 hover:bg-black/10 hover:text-secondary"
    >
      {icon}
      {label}
    </Link>
  );
}
