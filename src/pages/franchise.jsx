import { Link } from "react-router-dom";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Coffee,
  CupSoda,
  Flame,
  Gift,
  Handshake,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Pizza,
  Rocket,
  Sandwich,
  UtensilsCrossed
} from "lucide-react";

const goldIconClass = "text-[var(--gold-accent)] ";
const featureIconProps = { size: 36, strokeWidth: 1.5, className: goldIconClass };
const inlineIconProps = { size: 20, strokeWidth: 1.5, className: goldIconClass };

export default function Franchise() {
  const benefits = [
    { icon: <Flame {...featureIconProps} />, title: "Growing Brand", description: "Babuji Chaay is rapidly expanding with loyal customers" },
    { icon: <Coffee {...featureIconProps} />, title: "Proven Products", description: "50+ authentic beverages and snacks that customers love" },
    { icon: <Handshake {...featureIconProps} />, title: "Full Support", description: "We provide training, guidance, and ongoing assistance" },
    { icon: <BriefcaseBusiness {...featureIconProps} />, title: "Flexible Model", description: "Various setup options to suit your investment and location" }
  ];

  const productRange = [
    { icon: <Coffee {...featureIconProps} />, label: "27 Hot Beverages" },
    { icon: <CupSoda {...featureIconProps} />, label: "6 Cold Drinks" },
    { icon: <UtensilsCrossed {...featureIconProps} />, label: "20+ Snacks" },
    { icon: <Sandwich {...featureIconProps} />, label: "5 Fries Options" },
    { icon: <Pizza {...featureIconProps} />, label: "6 Burgers" },
    { icon: <Sandwich {...featureIconProps} />, label: "4 Toast/Bun" },
    { icon: <Gift {...featureIconProps} />, label: "8 Combos" },
    { icon: <Leaf {...featureIconProps} />, label: "9 Tea Specials" }
  ];

  return (
    <main className="min-h-screen bg-accent pt-24">
      <section className="bg-gradient-to-b from-primary to-primary py-16 text-center text-accent">
        <div className="container-max">
          <h1 className="mb-4 text-4xl font-serif font-bold md:text-5xl">Partnership Opportunities</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-accent/90">
            Interested in joining Babuji Chaay? We'd love to explore partnership opportunities with you.
          </p>
          <div className="inline-flex items-center gap-4 text-2xl md:text-3xl">
            <Coffee {...featureIconProps} />
            <span>Quality / Growth / Support</span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-accent">
        <div className="container-max">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-serif font-bold text-primary md:text-5xl">
              Why Partner With Us?
            </h2>
            <div className="divider-accent mx-auto" />
          </div>

          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon, title, description }, idx) => (
              <div
                key={title}
                className="card animate-fadeInUp p-8 text-center hover:border-2 hover:border-secondary"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="mb-4 flex justify-center">{icon}</div>
                <h3 className="mb-3 text-xl font-bold text-primary">{title}</h3>
                <p className="leading-relaxed text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="animate-slideInLeft">
              <h2 className="mb-8 text-4xl font-serif font-bold text-primary md:text-5xl">
                What We Provide
              </h2>
              <ul className="space-y-4">
                {[
                  "Proven product menu with 50+ items",
                  "Complete operational training",
                  "Supplier connections and sourcing support",
                  "Marketing guidance and branding materials",
                  "Ongoing operational support",
                  "Quality assurance monitoring"
                ].map((item, idx) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 animate-fadeInUp"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <BadgeCheck {...inlineIconProps} className={goldIconClass + " flex-shrink-0"} />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex h-full flex-col justify-center rounded-2xl bg-gradient-to-br from-primary to-[#124B39] p-8 text-center text-accent animate-slideInRight">
              <div className="mb-6 flex justify-center">
                <Rocket size={46} strokeWidth={1.5} className={goldIconClass} />
              </div>
              <h3 className="mb-4 text-3xl font-bold">Let's Talk!</h3>
              <p className="mb-8 text-lg leading-relaxed">
                Every partnership is unique. We'd love to discuss your vision and explore how we can work together to build something great.
              </p>
              <Link to="/contact" className="btn-primary text-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-accent">
        <div className="container-max">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-serif font-bold text-primary md:text-5xl">
              Our Product Range
            </h2>
            <div className="divider-accent mx-auto" />
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {productRange.map(({ icon, label }, idx) => (
              <div
                key={label}
                className="card animate-fadeInUp p-6 text-center"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="mb-3 flex justify-center">{icon}</div>
                <p className="font-semibold text-primary">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-2xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-serif font-bold text-primary">Get In Touch</h2>
            <div className="divider-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="animate-slideInLeft">
              <h3 className="mb-6 text-2xl font-bold text-primary">Contact Us Directly</h3>
              <div className="space-y-4">
                <ContactCard icon={<Phone size={18} strokeWidth={1.5} className={goldIconClass}  />} title="Phone">
                  <a href="tel:+919076165666" className="font-semibold text-primary transition-colors hover:text-secondary">
                    +91 90761 65666
                  </a>
                </ContactCard>
                <ContactCard icon={<Mail size={18} strokeWidth={1.5} className={goldIconClass} />} title="Email">
                  <a href="mailto:babujichaay@gmail.com" className="font-semibold text-primary transition-colors hover:text-secondary">
                    babujichaay@gmail.com
                  </a>
                </ContactCard>
                <ContactCard icon={<MapPin size={18} strokeWidth={1.5} className={goldIconClass} />} title="Location">
                  <p className="text-primary">
                    K D Empire, Kanakia Park, Mira Road East, Mira Bhayandar, Maharashtra 401107, India
                  </p>
                </ContactCard>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-primary to-[#124B39] p-8 text-accent animate-slideInRight">
              <h4 className="mb-4 text-2xl font-bold">Tell Us About Yourself</h4>
              <p className="mb-6 leading-relaxed">
                Share your vision, location, and interest level. We'll evaluate the opportunity and get back to you with details.
              </p>
              <Link to="/contact" className="btn-primary text-center">
                Send Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary to-[#124B39] text-center text-accent">
        <div className="container-max max-w-2xl">
          <h2 className="mb-6 text-4xl font-serif font-bold md:text-5xl">Ready to Explore?</h2>
          <p className="mb-8 text-lg leading-relaxed text-accent/90">
            We believe in building long-term partnerships with dedicated individuals who share our passion for quality chaay and customer satisfaction.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="btn-primary text-center">
              Send Us Your Interest
            </Link>
            <a href="tel:+919076165666" className="btn-secondary inline-flex items-center justify-center gap-2 text-center">
              <Phone {...inlineIconProps} />
              Call: +91 90761 65666
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactCard({ icon, title, children }) {
  return (
    <div className="card p-6">
      <div className="mb-2 flex items-center gap-3">
        {icon}
        <p className="text-lg font-bold text-secondary">{title}</p>
      </div>
      {children}
    </div>
  );
}
