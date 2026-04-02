import { Link } from "react-router-dom";
import {
  Coffee,
  Gift,
  Handshake,
  MapPin,
  Phone,
  Sandwich,
  Star,
  UtensilsCrossed
} from "lucide-react";
import picture from "../assets/black-tulsi-chaay.jpg";

const goldIconClass = "text-[var(--gold-accent)]";
const featureIconProps = { size: 38, strokeWidth: 1.5, className: goldIconClass };
const inlineIconProps = { size: 20, strokeWidth: 1.5, className: goldIconClass };

export default function Home() {
  const features = [
    {
      icon: <Coffee {...featureIconProps} />,
      title: "Premium Chai",
      description: "27 varieties of authentic Indian chai with finest spices"
    },
    {
      icon: <Sandwich {...featureIconProps} />,
      title: "Fresh Snacks",
      description: "Delicious food from Maggie to Burgers crafted daily"
    },
    {
      icon: <Handshake {...featureIconProps} />,
      title: "Local Favorite",
      description: "Trusted by customers for authentic taste and quality"
    },
    {
      icon: <MapPin {...featureIconProps} />,
      title: "Find Us",
      description: "K D Empire, Kanakia Park, Mira Road East, Mira Bhayandar, Maharashtra 401107, India"
    }
  ];

  const testimonials = [
    {
      name: "Deep Goriwale",
      role: "Regular Customer",
      text: "The best chai in town! Perfect hangout spot with amazing snacks.",
      rating: 5
    },
    {
      name: "Ayush Jadyar",
      role: "Customer",
      text: "Love the variety. Every visit is a new experience with different tea options!",
      rating: 5
    },
    {
      name: "Anonymus Buyer",
      role: "Regular Customer",
      text: "Perfect blend of traditional taste and quality. Worth every visit!",
      rating: 5
    }
  ];

  return (
    <main className="w-full bg-accent">
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-primary to-primary px-4 pb-20 pt-32 md:pb-32">
        <div className="absolute right-10 top-10 h-32 w-32 rounded-full bg-secondary opacity-10 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-40 w-40 rounded-full bg-accent opacity-5 blur-3xl" />

        <div className="container-max relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-6 text-accent animate-slideInLeft">
            <div>
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-secondary">
                Welcome to Babuji Chaay
              </span>
              <h1 className="text-4xl font-serif font-bold leading-tight md:text-5xl xl:text-6xl">
                Brewing
                <span className="text-secondary"> Happiness,</span>
                <br />
                One Cup at a Time
              </h1>
            </div>

            <p className="max-w-lg text-base leading-relaxed text-accent/90 md:text-lg">
              Experience the authentic taste of traditional Indian chai blended with modern cafe culture.
              Premium ingredients, perfect ambiance, and unforgettable moments await you.
            </p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link to="/menu" className="btn-primary text-center">
                Explore Menu
              </Link>
              <Link to="/contact" className="btn-secondary text-center">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex justify-center animate-slideInRight md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 rounded-full bg-secondary opacity-20 blur-3xl" />
              <img
                src={picture}
                alt="Babuji Chaay - Premium Chai"
                className="relative aspect-square w-full rounded-2xl object-cover shadow-hover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-accent">
        <div className="container-max">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-serif font-bold text-primary md:text-5xl">
              Why Choose Babuji Chaay?
            </h2>
            <div className="divider-accent mx-auto mb-6" />
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              Quality chai, authentic recipes, and a welcoming place to unwind.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon, title, description }, idx) => (
              <div
                key={title}
                className="card animate-fadeInUp p-8 text-center transition-all hover:-translate-y-2 hover:border-2 hover:border-secondary"
                style={{ animationDelay: `${idx * 0.1}s` }}
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
              <h2 className="mb-6 text-4xl font-serif font-bold text-primary md:text-5xl">
                Extensive Menu
              </h2>
              <div className="mb-8 space-y-4">
                <MenuPreviewItem
                  icon={<Coffee {...inlineIconProps} />}
                  title="27 Hot Beverages"
                  description="From classic Masala Chai to specialty blends"
                />
                <MenuPreviewItem
                  icon={<UtensilsCrossed {...inlineIconProps} />}
                  title="20+ Snacks"
                  description="Maggie, Burgers, Fries, and more"
                />
                <MenuPreviewItem
                  icon={<Gift {...inlineIconProps} />}
                  title="8 Combo Deals"
                  description="Great value meal combinations"
                />
              </div>
              <Link to="/menu" className="btn-primary">
                View Full Menu
              </Link>
            </div>

            <div className="animate-slideInRight">
              <div className="flex h-full flex-col justify-center rounded-2xl bg-gradient-to-br from-primary to-[#124B39] p-8 text-center text-white">
                <div className="mb-4 flex justify-center gap-4">
                  <Coffee size={40} strokeWidth={1.5} className={goldIconClass} />
                  <Sandwich size={40} strokeWidth={1.5} className={goldIconClass} />
                </div>
                <p className="mb-4 text-xl font-semibold">Fresh Daily</p>
                <p className="mb-6 leading-relaxed text-accent">
                  Every item is made with premium quality ingredients. We take pride in consistency and taste across every order.
                </p>
                <div className="inline-flex items-center justify-center gap-1 text-sm text-accent/80">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      strokeWidth={1.5}
                      className={goldIconClass}
                      fill="currentColor"
                    />
                  ))}
                  <span className="ml-2">Trusted by our local community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-accent">
        <div className="container-max">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-serif font-bold text-primary md:text-5xl">
              What Our Customers Say
            </h2>
            <div className="divider-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.name}
                className="card animate-fadeInUp p-6"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="mb-4 flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      strokeWidth={1.5}
                      className={goldIconClass}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="mb-6 italic text-gray-700">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-secondary">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-2xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <MapPin size={24} strokeWidth={1.5} className={goldIconClass} />
            <h2 className="text-4xl font-serif font-bold text-primary md:text-5xl">
              Visit Us Today
            </h2>
          </div>
          <p className="mb-8 text-lg text-gray-700">
            K D Empire, Kanakia Park, Mira Road East, Mira Bhayandar, Maharashtra 401107, India. Open daily with fresh chai and a welcoming atmosphere.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="btn-primary text-center">
              Get in Touch
            </Link>
            <a href="tel:+919076165666" className="btn-outline inline-flex items-center justify-center gap-2 text-center">
              Call: +91 90761 65666
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function MenuPreviewItem({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4">
      {icon}
      <div>
        <h4 className="font-bold text-primary">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
