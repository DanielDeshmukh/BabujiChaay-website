import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Camera,
  Clock3,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  PlayCircle,
  Phone,
  Rocket,
} from "lucide-react";
import { FaFacebook, FaInstagramSquare, FaTwitter, FaYoutube } from "react-icons/fa";

const goldIconClass = "text-[var(--gold-accent)]";
const cardIconProps = { size: 22, strokeWidth: 1.5, className: goldIconClass };
const inlineIconProps = { size: 20, strokeWidth: 1.5, className: goldIconClass };

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setSubmitted(true);

    const whatsappMessage = `Hello Babuji Chaay, I would like to inquire about: ${formData.subject}\n\nMy details:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
    const whatsappLink = `https://wa.me/919076165666?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappLink, "_blank");

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin {...cardIconProps} size={28} />,
      linkIcon: <MapPin {...inlineIconProps} size={16} />,
      title: "Address",
      details: ["K D Empire, Kanakia Park, Mira Road East, Mira Bhayandar, Maharashtra 401107, India"],
      link: "https://maps.google.com/?q=Babuji+Chaay+Mira+Road"
    },
    {
      icon: <Phone {...cardIconProps} size={28} />,
      linkIcon: <Phone {...inlineIconProps} size={16} />,
      title: "Phone",
      details: ["+91 90761 65666"],
      link: "tel:+919076165666"
    },
    {
      icon: <Mail {...cardIconProps} size={28} />,
      linkIcon: <Mail {...inlineIconProps} size={16} />,
      title: "Email",
      details: ["babujichai55@gmail.com"],
      link: "mailto:babujichai55@gmail.com"
    },
    {
      icon: <Clock3 {...cardIconProps} size={28} />,
      title: "Hours",
      details: ["Mon - Sun: 8:00 AM - 10:00 PM", "Holidays: 10:00 AM - 8:00 PM"],
      link: null
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook size={22} />, name: "Facebook", url: "https://facebook.com" },
    { icon: <FaInstagramSquare size={22} />, name: "Instagram", url: "https://instagram.com" },
    { icon: <FaTwitter size={22} />, name: "Twitter", url: "https://twitter.com" },
    { icon: <FaYoutube size={22} />, name: "YouTube", url: "https://youtube.com" }
  ];

  return (
    <main className="min-h-screen bg-accent pt-24">
      <section className="bg-primary py-16 text-center text-accent">
        <div className="container-max px-4">
          <h1 className="mb-4 text-4xl font-serif font-bold md:text-5xl">Get In Touch</h1>
          <p className="mx-auto max-w-2xl text-lg text-accent/90">
            We'd love to hear from you! Whether you have questions, want to visit us, or are interested in franchise opportunities.
          </p>
        </div>
      </section>

      <section className="bg-accent py-16">
        <div className="container-max px-4">
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map(({ icon, linkIcon, title, details, link }) => (
              <div
                key={title}
                className="rounded-xl bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-2 hover:shadow-hover"
              >
                <div className="mb-4 flex justify-center">{icon}</div>
                <h3 className="mb-3 text-xl font-bold text-primary">{title}</h3>
                <div className="mb-4 space-y-1">
                  {details.map((detail) => (
                    <p key={detail} className="text-sm text-gray-700">
                      {detail}
                    </p>
                  ))}
                </div>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline"
                  >
                    {linkIcon}
                    Open
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-max px-4">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="animate-slideInLeft">
              <h2 className="mb-6 text-3xl font-bold text-primary">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 rounded-lg border border-green-500 bg-green-50 p-4 text-green-700 animate-fadeInSlow">
                  Thank you! Redirecting to WhatsApp...
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-primary">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-primary">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-primary">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                      placeholder="+91 xxxxx xxxxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-primary">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="franchise">Franchise Opportunity</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-primary">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary py-4 font-bold text-accent shadow-md transition-all duration-300 hover:bg-secondary hover:text-primary"
                >
                  Send Message via WhatsApp
                </button>
              </form>
            </div>

            <div className="space-y-8 animate-slideInRight">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-primary">Visit Us Today!</h3>
                <p className="mb-4 leading-relaxed text-gray-700">
                  Come experience the authentic taste of Babuji Chaay. Our welcoming team is ready to serve you fresh,
                  handcrafted beverages and delicious snacks in a warm, inviting atmosphere.
                </p>
                <p className="leading-relaxed text-gray-700">
                  Whether you're a customer looking for the perfect chai experience or a potential franchise partner,
                  we're here to help!
                </p>
              </div>

              <div className="rounded-xl bg-primary p-6 text-accent shadow-premium">
                <h4 className="mb-4 border-b border-accent/20 pb-2 text-xl font-bold">Quick Links</h4>
                <ul className="space-y-4">
                  <li>
                    <Link to="/menu" className="flex items-center gap-3 transition-colors hover:text-secondary">
                      <BookOpen {...inlineIconProps} />
                      Explore Our Menu
                    </Link>
                  </li>
                  <li>
                    <Link to="/franchise" className="flex items-center gap-3 transition-colors hover:text-secondary">
                      <Rocket {...inlineIconProps} />
                      Franchise Opportunities
                    </Link>
                  </li>
                  <li>
                    <a href="tel:+919076165666" className="flex items-center gap-3 transition-colors hover:text-secondary">
                      <Phone {...inlineIconProps} />
                      Call: +91 90761 65666
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:babujichai55@gmail.com"
                      className="flex items-center gap-3 transition-colors hover:text-secondary"
                    >
                      <Mail {...inlineIconProps} />
                      Email: babujichai55@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 text-xl font-bold text-primary">Follow Us</h4>
                <div className="flex gap-4">
                  {socialLinks.map(({ icon: socialIcon, name, url }) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary shadow-sm transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-secondary"
                      title={name}
                    >
                      {socialIcon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container-max px-4">
          <div className="mb-8 flex items-center justify-center gap-3">
            <MapPin size={24} strokeWidth={1.5} className={goldIconClass} />
            <h2 className="text-3xl font-bold text-primary">Find Us on Map</h2>
          </div>
          <div className="h-96 w-full overflow-hidden rounded-2xl border-4 border-white shadow-premium">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="Babuji Chaay Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.7381232814337!2d72.87165037521088!3d19.29373098195511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b03666666667%3A0x6a0c5c4e9c7c4c4!2sBabuji%20Chai!5e0!3m2!1sen!2sin!4v1700000000000"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
