import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Coffee,
  CupSoda,
  Leaf,
  Package,
  Pizza,
  Sandwich,
  UtensilsCrossed
} from "lucide-react";
import { products } from "../data/products";

const CATEGORY_ICONS = {
  coffee: Coffee,
  "cup-soda": CupSoda,
  "utensils-crossed": UtensilsCrossed,
  sandwich: Sandwich,
  pizza: Pizza,
  package: Package,
  leaf: Leaf
};

const categoryIconProps = {
  size: 18,
  strokeWidth: 1.5,
  className: "text-[var(--gold-accent)]"
};

const IMAGE_ALIASES = {
  "Babuji Regular Chaay": ["Babuji Chai [Regular, 150 ml]"],
  "Elaichi Chaay": ["Elaichi Chai [150 ml]"],
  "Special Coffee": ["Special Coffee [200 ml]"],
  "Lemon Ice Tea": ["Lemon Ice Tea [300 ml]", "iced tea 1"],
  "Peri-Peri Burger": ["Peri Peri Burger"],
  "Chipotle Veg Burger": ["Chipotle Burger", "Veggie Chipotle Wrap"],
  "Veggi Classic Burger": ["Veggie Classic Burger"],
  "Vegitable Maggie": ["Vegetable Masala Maggie"],
  "Cheese Vegitable Maggie": ["Vegetable Cheese Maggie"]
};

function formatPrice(item) {
  if (item.variants?.length) {
    return `Rs. ${item.variants.join(" / ")}`;
  }

  return `Rs. ${item.price}`;
}

function buildImageCandidates(productName) {
  const aliasCandidates = IMAGE_ALIASES[productName] ?? [];
  const normalizedCandidates = [
    productName,
    productName.replace("Chaay", "Chai"),
    productName.replace("Veggi", "Veggie"),
    productName.replace("Vegitable", "Vegetable"),
    productName.replace("Peri-Peri", "Peri Peri")
  ];

  const candidates = [...new Set([productName, ...aliasCandidates, ...normalizedCandidates])]
    .filter(Boolean)
    .flatMap((candidate) => [
      `/images/${candidate}.JPG`,
      `/images/${candidate}.jpg`,
      `/images/${candidate}.jpeg`,
      `/images/${candidate}.png`
    ]);

  return [...new Set(candidates)];
}

function GoldenPattern() {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#FBF6EA] p-5">
      <svg
        viewBox="0 0 320 240"
        className="h-[72%] w-[72%] max-h-[180px] max-w-[220px] text-[#D4AF37]"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Decorative tea-inspired pattern"
      >
        <rect width="320" height="240" fill="#FBF6EA" />
        <g fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.85">
          <path d="M68 62c22 0 40 18 40 40S90 142 68 142 28 124 28 102s18-40 40-40Z" />
          <path d="M108 88h18c10 0 18 8 18 18s-8 18-18 18h-14" />
          <path d="M42 146h94" />
          <path d="M168 72c12-15 34-17 49-5 15 12 17 34 5 49-12 15-34 17-49 5-15-12-17-34-5-49Z" />
          <path d="M216 77c7-15 24-24 41-19" />
          <path d="M176 150c17-12 39-8 51 9" />
          <path d="M229 160c16-9 37-3 46 13" />
          <path d="M214 118c6 9 17 14 28 14" />
        </g>
        <g fill="currentColor" opacity="0.14">
          <circle cx="74" cy="102" r="24" />
          <circle cx="196" cy="102" r="22" />
          <circle cx="246" cy="170" r="12" />
        </g>
        <text
          x="160"
          y="212"
          textAnchor="middle"
          fontSize="18"
          letterSpacing="5"
          fill="currentColor"
          opacity="0.78"
        >
          SIGNATURE BLEND
        </text>
      </svg>
    </div>
  );
}

function ProductCard({ item, categoryName }) {
  const imageCandidates = useMemo(() => buildImageCandidates(item.name), [item.name]);
  const [imageIndex, setImageIndex] = useState(0);
  const [showFallback, setShowFallback] = useState(imageCandidates.length === 0);

  const currentImage = imageCandidates[imageIndex];

  const handleImageError = () => {
    if (imageIndex < imageCandidates.length - 1) {
      setImageIndex((current) => current + 1);
      return;
    }

    setShowFallback(true);
  };

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-secondary/20 bg-white shadow-premium transition-all duration-300 [contain-intrinsic-size:28rem] [content-visibility:auto] [touch-action:manipulation] hover:-translate-y-1 hover:shadow-hover">
      <div className="relative aspect-[4/5] overflow-hidden border-b border-secondary/10 bg-accent/40">
        {showFallback ? (
          <GoldenPattern />
        ) : (
          <img
            src={currentImage}
            alt={item.name}
            loading="lazy"
            onError={handleImageError}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B3D2E]/15 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary shadow-sm backdrop-blur">
          {categoryName}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 md:p-5">
        <div className="space-y-2">
          <h3 className="line-clamp-2 min-h-[2.9rem] text-base font-bold leading-snug text-primary md:min-h-[3.4rem] md:text-lg">
            {item.name}
          </h3>
          <p className="line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-gray-600">
            {item.description}
          </p>
        </div>
        {/* <div className="mt-auto flex items-end justify-between gap-3 border-t border-secondary/10 pt-4">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.28em] text-gray-500">
              Crafted Price
            </p>
            <p className="truncate text-lg font-semibold text-[#9B6B12]">{formatPrice(item)}</p>
          </div>
          {item.variants?.length ? (
            <span className="shrink-0 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              {item.variants.length} sizes
            </span>
          ) : null}
        </div> */}
      </div>
    </article>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = Object.entries(products);
  const visibleCategories =
    activeCategory === "all"
      ? categories
      : categories.filter(([categoryKey]) => categoryKey === activeCategory);

  return (
    <main className="min-h-screen bg-accent pt-24 text-dark">
      <section className="relative overflow-hidden bg-gradient-to-b from-primary via-primary to-[#124B39] py-16 text-accent md:py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-[-8rem] top-10 h-48 w-48 rounded-full border border-secondary/40" />
          <div className="absolute right-[-4rem] top-24 h-72 w-72 rounded-full border border-secondary/20" />
          <div className="absolute bottom-[-7rem] left-1/3 h-56 w-56 rounded-full border border-secondary/20" />
        </div>

        <div className="container-max relative px-4 text-center md:px-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-secondary">
            Babuji Chaay Menu
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold text-accent md:text-5xl">
            A full tea-and-snacks catalog designed for a premium collection.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-accent/85 md:text-base">
            Explore handcrafted chaay, cooling refreshers, indulgent noodles, and cafe-style bites.
            Each card gracefully reveals its product image or a signature golden pattern when no image is available.
          </p>
        </div>
      </section>

      <section className="section-padding pt-10 md:pt-14">
        <div className="container-max space-y-10">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition-all duration-300 md:px-5 md:text-sm ${
                activeCategory === "all"
                  ? "border-secondary bg-secondary text-primary shadow-premium"
                  : "border-secondary/30 bg-white text-primary hover:border-secondary hover:bg-white/80"
              }`}
            >
              All Menu
            </button>
            {categories.map(([categoryKey, category]) => (
              <CategoryTab
                key={categoryKey}
                category={category}
                active={activeCategory === categoryKey}
                onClick={() => setActiveCategory(categoryKey)}
              />
            ))}
          </div>

          <div className="space-y-14">
            {visibleCategories.map(([categoryKey, category]) => (
              <section key={categoryKey} className="space-y-6">
                <div className="grid auto-rows-menu grid-cols-2 items-stretch gap-4 sm:grid-cols-3 md:gap-5 xl:grid-cols-4 2xl:grid-cols-5">
                  {category.items.map((item) => (
                    <ProductCard
                      key={`${categoryKey}-${item.name}`}
                      item={item}
                      categoryName={category.name}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary to-[#124B39] text-accent">
        <div className="container-max grid gap-8 rounded-[2rem] border border-secondary/20 bg-white/5 px-6 py-10 backdrop-blur md:grid-cols-[1.3fr_0.7fr] md:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-secondary">
              Order Fresh
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Pick your favorites and reach out for a freshly prepared order.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-accent/85 md:text-base">
              From comforting chaay to cafe snacks, the menu is ready for dine-in cravings and direct orders.
              Call or email to confirm availability and place your selection.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <a
              href="tel:+919076165666"
              className="btn-primary px-8 py-4 text-center text-base font-bold"
            >
              Call to Order
            </a>
            <a
              href="mailto:babujichai55@gmail.com?subject=Order%20Inquiry"
              className="btn-secondary px-8 py-4 text-center text-base font-bold"
            >
              Email for Availability
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function CategoryTab({ category, active, onClick }) {
  const Icon = CATEGORY_ICONS[category.icon] ?? Coffee;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition-all duration-300 md:px-5 md:text-sm ${
        active
          ? "border-secondary bg-secondary text-primary shadow-premium"
          : "border-secondary/30 bg-white text-primary hover:border-secondary hover:bg-white/80"
      }`}
    >
      <Icon {...categoryIconProps} />
      {category.name}
    </button>
  );
}
