import miniMargherita from "@/assets/mini-margherita.jpg";
import calzone from "@/assets/calzone.jpg";
import ingredients from "@/assets/gallery-ingredients.jpg";
import baked from "@/assets/stage-baked.jpg";

/**
 * Menu — names, descriptions and prices verified from sliceoflife.site (prices in Turkish lira).
 * price: null means "not verified — ask via WhatsApp". Never put guessed prices here.
 * Images are art-directed illustrations of each dish; replace with real photos when available.
 */
export type MenuItem = {
  id: string;
  name: string;
  category: "Pizza & Calzone" | "Starters" | "Sides";
  description: string;
  ingredients: string[];
  price: number | null;
  image?: string;
  dietary?: string; // only when verified
};

export const categories = ["All", "Pizza & Calzone", "Starters", "Sides"] as const;

export const menu: MenuItem[] = [
  {
    id: "mini-margarita",
    name: "Mini Pizza (Margarita) 15cm",
    category: "Pizza & Calzone",
    description: "A 15cm Margarita from our small menu — simple, classic, made fresh.",
    ingredients: ["Tomato sauce", "Mozzarella"],
    price: 450,
    image: miniMargherita,
  },
  {
    id: "bbq-chicken-calzone",
    name: "BBQ Chicken Calzone",
    category: "Pizza & Calzone",
    description: "Folded pizza dough baked around chicken, mushrooms and sweetcorn with BBQ sauce.",
    ingredients: ["Mozzarella", "Chicken", "Mushrooms", "Sweetcorn", "BBQ sauce"],
    price: 690,
    image: calzone,
  },
  {
    id: "deluxe-veggie-calzone",
    name: "Deluxe Veggie Calzone",
    category: "Pizza & Calzone",
    description: "Packed with vegetables and finished with Slice of Life's special sauce.",
    ingredients: ["Mozzarella", "Mushrooms", "Green peppers", "Onion", "Olives", "Sweetcorn", "Special sauce"],
    price: 670,
    image: baked,
  },
  {
    id: "garlic-cheesy-bread",
    name: "Garlic Cheesy Bread",
    category: "Starters",
    description: "Garlic and cheese bread, straight from the oven.",
    ingredients: ["Garlic", "Cheese"],
    price: 340,
  },
  {
    id: "sharing-plate",
    name: "Slice of Life Sharing Plate",
    category: "Starters",
    description: "Buffalo wings, chicken tenders, onion rings, mozzarella sticks and loaded potato skin with blue cheese, BBQ and honey mustard dips.",
    ingredients: ["Buffalo wings", "Chicken tenders", "Onion rings", "Mozzarella sticks", "Loaded potato skin"],
    price: 1640,
    image: ingredients,
  },
  {
    id: "loaded-potato-skins",
    name: "Loaded Potato Skins",
    category: "Starters",
    description: "Italian pastrami, sweetcorn and melted mozzarella with blue cheese or BBQ dip.",
    ingredients: ["Italian pastrami", "Sweetcorn", "Mozzarella"],
    price: 370,
  },
  {
    id: "buffalo-wings",
    name: "Buffalo Wings",
    category: "Starters",
    description: "5 pieces with blue cheese dipping sauce.",
    ingredients: ["Chicken wings", "Buffalo sauce", "Blue cheese dip"],
    price: 430,
  },
  {
    id: "mozzarella-sticks",
    name: "Mozzarella Sticks",
    category: "Sides",
    description: "4 pieces.",
    ingredients: ["Mozzarella"],
    price: 295,
  },
  {
    id: "onion-rings",
    name: "Onion Rings",
    category: "Sides",
    description: "6 pieces with BBQ dip.",
    ingredients: ["Onion", "BBQ dip"],
    price: 260,
  },
  {
    id: "fries",
    name: "Fries Chips",
    category: "Sides",
    description: "Classic fries.",
    ingredients: ["Potatoes"],
    price: 260,
  },
];

/** Signature spotlight item (must exist above). */
export const signatureId = "deluxe-veggie-calzone";
