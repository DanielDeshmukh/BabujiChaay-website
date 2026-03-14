import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagramSquare, FaTwitter, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    setSubmitted(true);
    
    // WhatsApp Integration
    const whatsappMessage = `Hello Babuji Chaay, I would like to inquire about: ${formData.subject}\n\nMy details:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
    const whatsappLink = `https://wa.me/919076165666?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappLink, "_blank");

    // Reset Form
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <SiGooglemaps size={22} />,
      title: "Address",
      details: ["K D Empire, Kanakia Park, Mira Road East, Mira Bhayandar, Maharashtra 401107, India"],
      link: "https://maps.google.com/?q=Babuji+Chaay+Mira+Road"
    },
    {
      icon: <FaPhoneAlt size={22} />,
      title: "Phone",
      details: ["+91 90761 65666"],
      link: "tel:+919076165666"
    },
    {
      icon: "✉️",
      title: "Email",
      details: ["babujichai55@gmail.com"],
      link: "mailto:babujichai55@gmail.com"
    },
    {
      icon: "⏰",
      title: "Hours",
      details: ["Mon - Sun: 8:00 AM - 10:00 PM", "Holidays: 10:00 AM - 8:00 PM"],
      link: null
    }
  ];

  // Refactored socialLinks with explicit sizes for the icons
  const socialLinks = [
    { icon: <FaFacebook size={22} />, name: "Facebook", url: "https://facebook.com" },
    { icon: <FaInstagramSquare size={22} />, name: "Instagram", url: "https://instagram.com" },
    { icon: <FaTwitter size={22} />, name: "Twitter", url: "https://twitter.com" },
    { icon: <FaYoutube size={22} />, name: "YouTube", url: "https://youtube.com" }
  ];

  return (
    <main className="pt-24 min-h-screen bg-accent">
      {/* HERO SECTION */}
      <section className="bg-primary py-16 text-accent text-center">
        <div className="container-max px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-accent/90 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have questions, want to visit us, or are interested in franchise opportunities.
          </p>
        </div>
      </section>

      {/* CONTACT INFORMATION CARDS */}
      <section className="py-16 bg-accent">
        <div className="container-max px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-hover transition-all transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 leading-none">{info.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{info.title}</h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-700 text-sm">{detail}</p>
                  ))}
                </div>
                {info.link && (
                  <a 
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary font-semibold hover:underline text-sm inline-block"
                  >
                    Open →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="py-16 bg-white">
        <div className="container-max px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* FORM */}
            <div className="animate-slideInLeft">
              <h2 className="text-3xl font-bold text-primary mb-6">Send us a Message</h2>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-500 text-green-700 rounded-lg animate-fadeInSlow">
                  ✓ Thank you! Redirecting to WhatsApp...
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition"
                      placeholder="+91 xxxxx xxxxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition bg-white"
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
                  <label className="block text-sm font-semibold text-primary mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition resize-none"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-primary text-accent font-bold rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300 shadow-md">
                  Send Message via WhatsApp
                </button>
              </form>
            </div>

            {/* INFO SECTION */}
            <div className="animate-slideInRight space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Visit Us Today!</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Come experience the authentic taste of Babuji Chaay. Our welcoming team is ready to serve you fresh, 
                  handcrafted beverages and delicious snacks in a warm, inviting atmosphere.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether you're a customer looking for the perfect chai experience or a potential franchise partner, 
                  we're here to help!
                </p>
              </div>

              <div className="bg-primary rounded-xl p-6 text-accent shadow-premium">
                <h4 className="text-xl font-bold mb-4 border-b border-accent/20 pb-2">Quick Links</h4>
                <ul className="space-y-4">
                  <li>
                    <Link to="/menu" className="hover:text-secondary transition-colors flex items-center gap-3">
                      <span className="text-xl">☕</span> Explore Our Menu
                    </Link>
                  </li>
                  <li>
                    <Link to="/franchise" className="hover:text-secondary transition-colors flex items-center gap-3">
                      <span className="text-xl">🚀</span> Franchise Opportunities
                    </Link>
                  </li>
                  <li>
                    <a href="tel:+919076165666" className="hover:text-secondary transition-colors flex items-center gap-3">
                      <span className="text-xl">📞</span> Call: +91 90761 65666
                    </a>
                  </li>
                  <li>
                    <a href="mailto:babujichai55@gmail.com" className="hover:text-secondary transition-colors flex items-center gap-3">
                      <span className="text-xl">✉️</span> Email: babujichai55@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-primary mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-secondary transition-all duration-300 transform hover:scale-110 shadow-sm"
                      title={social.name}
                    >
                      {/* Icon is rendered here */}
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="container-max px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Find Us on Map</h2>
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-premium border-4 border-white">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="Babuji Chaay Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.7381232814337!2d72.87165037521088!3d19.29373098195511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b03666666667%3A0x6a0c5c4e9c7c4c4!2sBabuji%20Chai!5e0!3m2!1sen!2sin!4v1700000000000"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}