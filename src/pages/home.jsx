import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  Handshake,
  MoveRight,
  Phone,
  Rocket,
  Sparkles,
  Star
} from "lucide-react";
import icon from "../assets/icon.png";
import { products } from "../data/products";

const productRange = [
  { value: "27", label: "Hot Beverages" },
  { value: "20+", label: "Fresh Snacks" },
  { value: "8", label: "Combo Deals" },
  { value: "9", label: "Tea Specials" }
];

const IMAGE_ALIASES = {
  "Babuji Regular Chaay": ["Babuji Chaay [Regular, 150 ml]"],
  "Elaichi Chaay": ["Elaichi Chaay [150 ml]"],
  "Special Coffee": ["Special Coffee [200 ml]"],
  "Lemon Ice Tea": ["Lemon Ice Tea [300 ml]", "iced tea 1"],
  "Peri-Peri Burger": ["Peri Peri Burger"],
  "Chipotle Veg Burger": ["Chipotle Burger", "Veggie Chipotle Wrap"],
  "Veggi Classic Burger": ["Veggie Classic Burger"],
  "Vegitable Maggie": ["Vegetable Masala Maggie"],
  "Cheese Vegitable Maggie": ["Vegetable Cheese Maggie"]
};

const FEATURED_PRODUCTS = [
  { categoryKey: "hot-beverages", name: "Babuji Regular Chaay", tag: "Hot Beverage", anchor: true },
  { categoryKey: "hot-beverages", name: "Rose Tea", tag: "Tea Special" },
  { categoryKey: "hot-beverages", name: "Black Tulsi Chaay", tag: "Herbal Brew" },
  { categoryKey: "cold-beverages", name: "Cold Coffee", tag: "Cold Beverage" },
  { categoryKey: "cold-beverages", name: "Lemon Ice Tea", tag: "Seasonal Pour" },
  { categoryKey: "snacks", name: "Masala Maggie", tag: "Snack" },
  { categoryKey: "snacks", name: "Cheese Maggie", tag: "Comfort Bite" },
  { categoryKey: "burgers", name: "Veggi Classic Burger", tag: "Burger" },
  { categoryKey: "burgers", name: "Chipotle Veg Burger", tag: "Burger" },
  { categoryKey: "tea-special", name: "Honey Tulsi Black Chaay", tag: "Tea Special" }
];

const partnerCards = [
  {
    icon: <Handshake size={26} strokeWidth={1.7} className="text-secondary" />,
    eyebrow: "Operational Support",
    title: "A model built for steady day-to-day consistency.",
    description:
      "Clear processes, dependable product formats, and practical support make the brand easier to run with confidence."
  },
  {
    icon: <BriefcaseBusiness size={28} strokeWidth={1.7} className="text-secondary" />,
    eyebrow: "Why Partner With Us",
    title: "Premium chai culture with an accessible, repeat-visit business.",
    description:
      "The middle card carries the focal story: trusted flavors, approachable positioning, and an identity that feels polished without feeling distant.",
    featured: true
  },
  {
    icon: <Rocket size={26} strokeWidth={1.7} className="text-secondary" />,
    eyebrow: "Growth Potential",
    title: "Strong menu breadth and familiar appeal create room to scale.",
    description:
      "From signature chai to snacks and combos, the offer is broad enough to support both quick visits and recurring local loyalty."
  }
];

function buildImageCandidates(name, aliases = []) {
  const normalized = [
    name,
    ...aliases,
    name.replace("Veggie", "Veggi"),
    name.replace("Veggi", "Veggie"),
    name.replace("Chaay", "Chai"),
    name.replace("Chai", "Chaay")
  ]
    .filter(Boolean)
    .flatMap((candidate) => [
      `/images/${candidate}.JPG`,
      `/images/${candidate}.jpg`,
      `/images/${candidate}.jpeg`,
      `/images/${candidate}.png`
    ]);

  return [...new Set(normalized.map((path) => encodeURI(path)))];
}

const signatureFrames = FEATURED_PRODUCTS.map((featured) => {
  const category = products[featured.categoryKey];
  const item = category?.items.find((product) => product.name === featured.name);

  return {
    name: item?.name ?? featured.name,
    tag: featured.tag,
    description: item?.description ?? "Babuji selection",
    imageAliases: IMAGE_ALIASES[featured.name] ?? [],
    anchor: featured.anchor ?? false
  };
}).filter((item) => item.name);

function FallbackArtwork({ label, className = "" }) {
  return (
    <div className={`relative h-full w-full overflow-hidden bg-[#14372e] ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(214,167,86,0.22),transparent_34%),linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02)_32%,rgba(11,36,29,0.95)_100%)]" />
      <div className="relative flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
        <div className="rounded-[26px] border border-white/10 bg-white/[0.08] p-4 shadow-[inset_0_0_30px_rgba(255,255,255,0.08)] backdrop-blur-sm">
          <img src={icon} alt="Babuji logo" className="h-16 w-16 object-contain md:h-20 md:w-20" />
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-secondary">
            Babuji Selection
          </p>
          <p className="mt-2 text-lg font-bold text-white text-balance">{label}</p>
        </div>
      </div>
    </div>
  );
}

function SmartImage({
  name,
  aliases,
  alt,
  className,
  fallbackLabel,
  fallbackClassName = ""
}) {
  const candidates = useMemo(() => buildImageCandidates(name, aliases), [aliases, name]);
  const [imageIndex, setImageIndex] = useState(0);
  const [showFallback, setShowFallback] = useState(candidates.length === 0);

  const handleError = () => {
    if (imageIndex < candidates.length - 1) {
      setImageIndex((current) => current + 1);
      return;
    }

    setShowFallback(true);
  };

  if (showFallback) {
    return <FallbackArtwork label={fallbackLabel} className={fallbackClassName} />;
  }

  return <img src={candidates[imageIndex]} alt={alt} onError={handleError} className={className} />;
}

function PremiumCard({ children, className = "", innerClassName = "" }) {
  return (
    <div className={`card-premium ${className}`}>
      <div className={`h-full rounded-[calc(1.75rem-1px)] ${innerClassName}`}>{children}</div>
    </div>
  );
}

function RangePill({ value, label }) {
  return (
    <div className="rounded-[1.15rem] border border-secondary/20 bg-white/50 px-4 py-3">
      <div className="flex items-start gap-3 text-left">
        <span className="min-w-[2.2rem] text-lg font-bold leading-none text-secondary">{value}</span>
        <span className="pt-0.5 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/70">
          {label}
        </span>
      </div>
    </div>
  );
}

function SignatureCard({ frame, className = "" }) {
  return (
    <article
      className={`card-premium group shrink-0 snap-start overflow-hidden ${frame.anchor ? "h-[30rem] md:h-[33rem]" : "h-[28rem] md:h-[31rem]"} ${className}`}
    >
      <div className="flex h-full flex-col overflow-hidden rounded-[calc(1.75rem-1px)] bg-white/65">
        <div className="relative h-[70%] overflow-hidden">
          <SmartImage
            name={frame.name}
            aliases={frame.imageAliases}
            alt={frame.name}
            fallbackLabel={frame.name}
            className="h-full w-full object-cover brightness-95 transition duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,61,46,0.02),rgba(11,61,46,0.12)_38%,rgba(11,61,46,0.78)_100%)]" />
          <div className="absolute left-4 top-4">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-sm">
              {frame.tag}
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-4">
            <span className="inline-flex items-center gap-1 rounded-full border border-secondary/30 bg-secondary/15 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-secondary backdrop-blur-sm">
              <Sparkles size={12} strokeWidth={1.8} />
              Selection
            </span>
            <h3 className="mt-3 text-xl font-bold leading-tight text-white text-balance">{frame.name}</h3>
            <p className="mt-1 text-sm text-white/80">{frame.description}</p>
          </div>
        </div>
        <div className="flex flex-1 items-center px-4 py-4">
          <p className="text-sm leading-7 text-primary/72">
            Crafted to feel polished, readable, and easy to browse at a glance.
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="w-full bg-accent text-primary">
      <section className="relative overflow-hidden px-4 py-24 md:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(circle_at_50%_12%,rgba(214,167,86,0.14),transparent_38%)]" />

        <div className="container-max relative z-10 max-w-7xl">
          <div className="grid items-center gap-8 md:gap-10 xl:grid-cols-[0.92fr_1.08fr]">
            <PremiumCard className="animate-slideInLeft" innerClassName="flex h-full flex-col justify-center p-6 md:p-8 lg:p-10">
              <span className="inline-flex w-fit rounded-full border border-secondary/30 bg-primary px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-secondary">
                Welcome to Babuji Chaay
              </span>

              <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-[1.02] text-primary text-balance md:text-5xl xl:text-[4.5rem]">
                Brewing <span className="text-secondary">Happiness</span>,
                <br />
                One Cup at a Time
              </h1>

              <div className="mt-6">
                <div className="divider-accent" />
              </div>

              <p className="mt-6 max-w-xl text-sm leading-relaxed text-primary/78 md:text-base">
                Experience the authentic taste of traditional Indian chai blended with modern cafe culture,
                thoughtful ambience, and handcrafted comfort in every pour.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link to="/menu" className="btn-primary inline-flex items-center justify-center gap-2 text-center">
                  Explore Menu
                </Link>
                <Link to="/contact" className="btn-secondary inline-flex items-center justify-center gap-2 text-center">
                  Contact Us
                </Link>
              </div>
            </PremiumCard>

            <PremiumCard className="animate-fadeInSlow" innerClassName="p-3 md:p-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] bg-primary">
                <SmartImage
                  name="Babuji Signature Chaay"
                  aliases={["Black Tulsi Chaay", "Babuji Chaay [Regular, 150 ml]"]}
                  alt="Babuji Canvas"
                  fallbackLabel="Babuji Canvas"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,61,46,0.04),rgba(11,61,46,0.18)_38%,rgba(11,61,46,0.84)_100%)]" />
                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-sm">
                  Babuji Canvas
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-secondary">
                    Signature Visuals
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-white text-balance md:text-4xl">
                    Babuji Signature Chaay
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/78">
                    A high-aspect premium frame with reliable fallback handling and cleaner crop control.
                  </p>
                </div>
              </div>
            </PremiumCard>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-6 lg:px-8">
        <div className="container-max">
          <PremiumCard innerClassName="p-5 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary">
                  Signature Frames
                </p>
                <h2 className="mt-3 text-3xl font-bold text-primary text-balance md:text-4xl">
                  A swipeable gallery of Babuji favourites.
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-primary/74">
                  Poster-style menu cards with clearer hierarchy, better contrast, and a more premium browse rhythm.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 self-start rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/80">
                <MoveRight size={16} strokeWidth={1.6} className="text-secondary" />
                Scroll Sideways
              </div>
            </div>

            <div className="scrollbar-hide mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 md:gap-5">
              {signatureFrames.map((frame) => (
                <SignatureCard
                  key={frame.name}
                  frame={frame}
                  className="w-[280px] md:w-[320px] xl:w-[350px]"
                />
              ))}
            </div>
          </PremiumCard>
        </div>
      </section>

      <section className="px-4 py-24 md:px-6 lg:px-8">
        <div className="container-max">
          <div className="mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary">
              Product Range
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary text-balance md:text-4xl">
              A menu breadth that supports all-day visits.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {productRange.map((item) => (
              <RangePill key={item.label} value={item.value} label={item.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-6 lg:px-8">
        <div className="container-max">
          <div className="mb-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary">
              Why Partner With Us
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary text-balance md:text-4xl">
              A professional model with premium brand clarity.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
            {partnerCards.map((card) => (
              <PremiumCard
                key={card.title}
                className={card.featured ? "lg:translate-y-6" : ""}
                innerClassName={`p-6 md:p-8 ${card.featured ? "min-h-[24rem]" : "min-h-[21rem]"}`}
              >
                <div className="rounded-2xl border border-secondary/20 bg-secondary/10 p-3 w-fit">
                  {card.icon}
                </div>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary">
                  {card.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-primary text-balance">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-primary/74">
                  {card.description}
                </p>
              </PremiumCard>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
            <PremiumCard innerClassName="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-secondary/20 bg-secondary/10 p-3">
                  <Star size={22} strokeWidth={1.7} className="text-secondary" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary">
                    Why Guests Return
                  </p>
                  <h2 className="mt-3 text-2xl font-bold text-primary text-balance md:text-3xl">
                    Traditional chai character, framed with a modern cafe feel.
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary/74">
                    Premium ingredients, consistent quality, and a welcoming atmosphere come together in a layout that now feels more curated and professional.
                  </p>
                </div>
              </div>
            </PremiumCard>

            <PremiumCard innerClassName="p-6 md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary">
                Reach Out
              </p>
              <p className="mt-3 text-sm leading-relaxed text-primary/74">
                Visit for dine-in comfort or contact us directly for menu questions, timings, and fresh availability.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link to="/contact" className="btn-primary text-center">
                  Get In Touch
                </Link>
                <a
                  href="tel:+919076165666"
                  className="btn-secondary inline-flex items-center justify-center gap-2 text-center"
                >
                  Call +91 90761 65666
                </a>
              </div>
            </PremiumCard>
          </div>
        </div>
      </section>
    </main>
  );
}
