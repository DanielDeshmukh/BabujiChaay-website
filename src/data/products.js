const rawProducts = {
  "hot-beverages": {
    name: "Hot Beverages",
    icon: "coffee",
    items: [
      { name: "Babuji Regular Chaay", price: "15", variants: ["15", "20", "25"] },
      { name: "Rose Tea", price: "30" },
      { name: "Masala Chaay", price: "25" },
      { name: "Adrak Chaay", price: "25" },
      { name: "Dry Ginger Tea", price: "30" },
      { name: "Adrak Elaichi Chaay", price: "35" },
      { name: "Elaichi Chaay", price: "25" },
      { name: "Tulsi Chaay", price: "30" },
      { name: "Maratha Chaay", price: "30" },
      { name: "Hydrabadi Kadak Chaya", price: "35" },
      { name: "Kashmiri Pink Tea", price: "30" },
      { name: "Clove Chaay", price: "30" },
      { name: "Lemon Tea", price: "20" },
      { name: "Lemon Mint Chaay", price: "20" },
      { name: "Lemon Masala Chaay", price: "25" },
      { name: "Lemon Ginger Chaay", price: "25" },
      { name: "Lemon Paper Mint Chaay", price: "30" },
      { name: "Lemon Tulsi Chaay", price: "30" },
      { name: "Lemon Ginger Masala Tea", price: "30" },
      { name: "Black Tulsi Chaay", price: "25" },
      { name: "Black Chaay", price: "20" },
      { name: "Black Dry Ginger Chaay", price: "25" },
      { name: "Black Adrak Chaay", price: "25" },
      { name: "Black Clove Tea", price: "25" },
      { name: "Regular Coffee", price: "25" },
      { name: "Special Coffee", price: "60" },
      { name: "Black Coffee", price: "25" }
    ]
  },
  "cold-beverages": {
    name: "Cold Beverages",
    icon: "cup-soda",
    items: [
      { name: "Lemon Ice Tea", price: "55" },
      { name: "Cold Coffee", price: "90" },
      { name: "White Mojito", price: "70" },
      { name: "Black Mojito", price: "70" },
      { name: "Masala Chaas", price: "30" },
      { name: "Nibu Pani", price: "25" }
    ]
  },
  "snacks": {
    name: "Snacks & Noodles",
    icon: "utensils-crossed",
    items: [
      { name: "Maggie", price: "45" },
      { name: "Masala Maggie", price: "60" },
      { name: "Peri-Peri Masala Maggie", price: "65" },
      { name: "Cheese Maggie", price: "75" },
      { name: "Masala Cheese Maggie", price: "85" },
      { name: "Peri-Peri Masala Cheese Maggie", price: "90" },
      { name: "Vegitable Maggie", price: "85" },
      { name: "Cheese Vegitable Maggie", price: "110" },
      { name: "Vegitable Peri-Peri Masala Maggie", price: "85" },
      { name: "Vegitable Cheese Peri-Peri Masala Maggie", price: "110" },
      { name: "Butter Maggie", price: "65" },
      { name: "Butter Masala Maggie", price: "80" },
      { name: "Butter Vegitable Maggie", price: "105" },
      { name: "Corn Maggie", price: "60" },
      { name: "Corn Masala Maggie", price: "75" },
      { name: "Butter Corn Maggie", price: "80" },
      { name: "Corn Cheese Maggie", price: "85" },
      { name: "Corn Cheese Masala Maggie", price: "99" }
    ]
  },
  "fries": {
    name: "Fries",
    icon: "sandwich",
    items: [
      { name: "French Fries Large", price: "80" },
      { name: "Peri-Peri Fries Large", price: "90" },
      { name: "Loaded Cheese Fries Large", price: "130" },
      { name: "French Fries Medium", price: "55" },
      { name: "Peri-Peri Fries Medium", price: "65" }
    ]
  },
  "burgers": {
    name: "Burgers",
    icon: "pizza",
    items: [
      { name: "Veggi Classic Burger", price: "69" },
      { name: "Classic Salad Veggi Burger", price: "79" },
      { name: "Classic Cheese Veggi Burger", price: "89" },
      { name: "Classic Salad Cheese Veggi Burger", price: "99" },
      { name: "Peri-Peri Burger", price: "79" },
      { name: "Chipotle Veg Burger", price: "89" }
    ]
  },
  "toasts": {
    name: "Toast & Buns",
    icon: "sandwich",
    items: [
      { name: "Amul Butter Toast", price: "25" },
      { name: "Amul Bun Maska", price: "30" },
      { name: "Amul Jam Bun Maska", price: "35" },
      { name: "Grill Amul Bun Maska", price: "35" }
    ]
  },
  "combos": {
    name: "Combos",
    icon: "package",
    items: [
      { name: "Masala Cheese Maggie + Cold Coffee", price: "135" },
      { name: "Salted Fries Large + Cold Coffee", price: "130" },
      { name: "Veggi Classic Burger + Cold Coffee", price: "130" },
      { name: "Veggi Classic Burger + Any Special Tea", price: "85" },
      { name: "Veggi Classic Burger + Fries + Tea/Coffee", price: "110" },
      { name: "Veggi Classic Burger + Fries + 200ml Cold Drink", price: "110" },
      { name: "2 Veggi Classic Burger", price: "110" },
      { name: "Peri-Peri Burger + Fries + Cold Drink/Tea/Coffee", price: "139" },
      { name: "Chipotle Burger + Fries + Cold Drink/Tea/Coffee", price: "149" },
      { name: "Family Combo - 2 Burger + Fries + 2 Cold Drinks/Tea/Coffee", price: "255" }
    ]
  },
  "tea-special": {
    name: "Tea Specials",
    icon: "leaf",
    items: [
      { name: "Honey Black Tea", price: "25" },
      { name: "Honey Tulsi Black Chaay", price: "30" },
      { name: "Honey Adrak Black Chaay", price: "30" },
      { name: "Honey Dry Ginger Black Chaay", price: "35" },
      { name: "Honey Clove Black Chaay", price: "30" },
      { name: "Honey Lemon Mint Chaay", price: "25" },
      { name: "Honey Lemon Masala Chaay", price: "30" },
      { name: "Honey Lemon Adrak Chaay", price: "30" },
      { name: "Honey Lemon Tulsi Chaay", price: "35" },
      { name: "Honey Lemon Adrak Masala Chaay", price: "40" },
      { name: "Honey Lemon Clove Chaay", price: "40" },
      { name: "Honey Lemon Paper Mint Chaay", price: "35" }
    ]
  }
};

function inferDescription(name, categoryKey) {
  const lowerName = name.toLowerCase();

  if (lowerName.includes("rose")) {
    return "Soft floral perfume, delicate sweetness, and a soothing finish.";
  }

  if (lowerName.includes("kashmiri pink")) {
    return "Creamy, rosy sips with silky body and gentle warmth.";
  }

  if (lowerName.includes("coffee")) {
    return lowerName.includes("cold")
      ? "Creamy chilled coffee, mellow sweetness, and a smooth finish."
      : "Roasted, velvety coffee with deep aroma and lingering richness.";
  }

  if (lowerName.includes("lemon") && lowerName.includes("mint")) {
    return "Bright citrus notes, cooling lift, and a crisp herbal finish.";
  }

  if (lowerName.includes("lemon") && lowerName.includes("ginger")) {
    return "Lively citrus spark, ginger warmth, and a clean finish.";
  }

  if (lowerName.includes("lemon")) {
    return "Fresh citrus brightness with brisk aroma and thirst-quenching finish.";
  }

  if (lowerName.includes("tulsi")) {
    return "Herbal tulsi fragrance, mellow warmth, and a calming finish.";
  }

  if (lowerName.includes("adrak") || lowerName.includes("ginger")) {
    return "Zesty ginger warmth, brisk aroma, and a soothing spiced finish.";
  }

  if (lowerName.includes("elaichi")) {
    return "Sweet cardamom perfume, creamy body, and softly spiced warmth.";
  }

  if (lowerName.includes("masala")) {
    return "Layered spice, creamy texture, and a bold lingering finish.";
  }

  if (lowerName.includes("clove")) {
    return "Warm clove perfume, gentle heat, and a rounded finish.";
  }

  if (lowerName.includes("black")) {
    return "Clean-bodied brew with assertive depth and elegant dry finish.";
  }

  if (lowerName.includes("mojito")) {
    return "Cooling, sparkling refreshment with lifted citrus and minty finish.";
  }

  if (lowerName.includes("chaas") || lowerName.includes("pani")) {
    return "Refreshing, savory sips with bright spice and cooling balance.";
  }

  if (lowerName.includes("fries")) {
    return lowerName.includes("loaded") || lowerName.includes("cheese")
      ? "Crisp fries crowned with molten cheese and indulgent savoriness."
      : "Golden, crisp fries with fluffy centers and satisfying seasoning.";
  }

  if (lowerName.includes("burger")) {
    return lowerName.includes("chipotle")
      ? "Smoky, saucy layers with tender bite and warming finish."
      : "Toasty bun, juicy filling, and balanced crunch in every bite.";
  }

  if (lowerName.includes("toast") || lowerName.includes("bun")) {
    return lowerName.includes("jam")
      ? "Buttery toastiness meets glossy jam and gentle comforting sweetness."
      : "Warm buttery toast with crisp edges and comforting softness.";
  }

  if (lowerName.includes("combo")) {
    return "A balanced pairing of signature favorites for satisfying variety.";
  }

  if (lowerName.includes("+")) {
    return "A craveable pairing layered with contrast, comfort, and value.";
  }

  if (lowerName.includes("maggie") || lowerName.includes("noodle")) {
    if (lowerName.includes("cheese")) {
      return "Silky noodles, molten cheese, and savory spice in harmony.";
    }

    if (lowerName.includes("peri-peri")) {
      return "Fiery seasoning, springy noodles, and bold savory depth throughout.";
    }

    if (lowerName.includes("butter")) {
      return "Buttery, glossy noodles with rich aroma and comforting warmth.";
    }

    if (lowerName.includes("corn")) {
      return "Sweet corn pops through savory noodles with cozy richness.";
    }

    if (lowerName.includes("vegitable")) {
      return "Tender vegetables, springy noodles, and layered masala comfort.";
    }

    return "Soft, savory noodles with cozy spice and familiar comfort.";
  }

  if (categoryKey === "combos") {
    return "A balanced pairing of signature favorites for satisfying variety.";
  }

  if (categoryKey === "cold-beverages") {
    return "Chilled, fragrant refreshment with bright flavor and clean finish.";
  }

  return "Comforting flavors, inviting aroma, and a polished premium finish.";
}

export const products = Object.fromEntries(
  Object.entries(rawProducts).map(([categoryKey, category]) => [
    categoryKey,
    {
      ...category,
      items: category.items.map((item) => ({
        ...item,
        description: inferDescription(item.name, categoryKey)
      }))
    }
  ])
);
