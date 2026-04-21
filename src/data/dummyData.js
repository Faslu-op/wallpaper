import one1Img from '../assets/one1.png';
import one2Img from '../assets/one2.png';
import one3Img from '../assets/one3.jpeg';
import two1Img from '../assets/two1.png';
import two2Img from '../assets/two2.png';
import two3Img from '../assets/two3.png';
import three1Img from '../assets/three1.png';
import three2Img from '../assets/three2.png';
import three3Img from '../assets/three3.png';
import four1Img from '../assets/four1.png';
import four2Img from '../assets/four2.png';
import four3Img from '../assets/four3.png';
import five1Img from '../assets/five1.png';
import five2Img from '../assets/five2.png';
import five3Img from '../assets/five3.png';
import six1Img from '../assets/six1.png';
import six2Img from '../assets/six2.png';
import six3Img from '../assets/six3.png';

export const products = [
  {
    id: "special-1",
    name: "KWES Wallpaper Pack Of 4 | Ketli Design (Waterproof)",
    price: 269,
    description: "Give your kitchen a total makeover seamlessly with this grey Ketli design.",
    features: [
      { text: "Buy 1 Get 3 Free (Pack of 4)", color: "text-red-700 bg-red-100 ring-red-500" },
      { text: "Waterproof & Oil Proof", color: "text-blue-700 bg-blue-100 ring-blue-500" },
      { text: "Easy Peel & Stick", color: "text-green-700 bg-green-100 ring-green-500" },
      { text: "Fits Tiles & Cupboards", color: "text-purple-700 bg-purple-100 ring-purple-500" }
    ],
    tag: "Mega Sale",
    image: one1Img,
    images: [one1Img, one2Img, one3Img],
    isSpecialOffer: true,
    offerBanner: "🔥 BUY 1 GET 3 (PACK OF 4) 🔥",
    offerColorStyles: {
      border: "border-red-500",
      bg: "bg-red-600"
    }
  },
  {
    id: "2",
    name: "PVC 3D Wall Sticker (Sky White, Pack of 2)",
    price: 299,
    description: "Self-Adhesive PVC 3D Wall Sticker. Brighten your hotel, living room, wardrobe, bedroom, or café walls beautifully. Comes in a pack of 2 pieces measuring 60cm x 200cm each.",
    features: [
      { text: "Pack of 2 (60x200cm)", color: "text-blue-700 bg-blue-100 ring-blue-500" },
      { text: "Oil Proof & Waterproof", color: "text-orange-700 bg-orange-100 ring-orange-500" },
      { text: "Self-Adhesive 3D PVC", color: "text-teal-700 bg-teal-100 ring-teal-500" },
      { text: "Multi-room Utility", color: "text-purple-700 bg-purple-100 ring-purple-500" }
    ],
    tag: "Trending",
    image: two1Img,
    images: [two1Img, two2Img, two3Img],
    isSpecialOffer: true,
    offerBanner: "⭐ BUY 1 GET 1 (PACK OF 2) ⭐",
    offerColorStyles: {
      border: "border-orange-500",
      bg: "bg-orange-500"
    }
  },
  {
    id: "3",
    name: "WallDaddy Kitchen Wallpaper (Brown, Pack of 3)",
    price: 299,
    description: "Waterproof & Oil Proof Wallpaper. Ideal for Kitchen walls, cup plates, and cupboards. 40x100 cm per roll.",
    features: [
      { text: "Pack of 3 (40x100cm)", color: "text-amber-700 bg-amber-100 ring-amber-500" },
      { text: "Brown Kitchen Finish", color: "text-red-700 bg-red-100 ring-red-500" },
      { text: "Oil & Water Proof", color: "text-cyan-700 bg-cyan-100 ring-cyan-500" },
      { text: "Peel & Stick Sticker", color: "text-emerald-700 bg-emerald-100 ring-emerald-500" }
    ],
    tag: "Top Rated",
    image: three1Img,
    images: [three1Img, three2Img, three3Img],
    isSpecialOffer: true,
    offerBanner: "🎁 BUY 1 GET 2 (PACK OF 3) 🎁",
    offerColorStyles: {
      border: "border-teal-500",
      bg: "bg-teal-600"
    }
  },
  {
    id: "4",
    name: "Black Marble Shelf Liner Roll (Pack of 2)",
    price: 299,
    description: "Self-Adhesive Kitchen Shelf Liner Roll. Fully waterproof and oil-proof black marble finish. Suitable for cabinets, cupboards, and even floors.",
    features: [
      { text: "Pack of 2 (60x200cm)", color: "text-indigo-700 bg-indigo-100 ring-indigo-500" },
      { text: "Black Marble Finish", color: "text-gray-700 bg-gray-200 ring-gray-600" },
      { text: "Oil & Water Proof", color: "text-cyan-700 bg-cyan-100 ring-cyan-500" },
      { text: "Multi-surface (Floors)", color: "text-rose-700 bg-rose-100 ring-rose-500" }
    ],
    tag: "Bestseller",
    image: four1Img,
    images: [four1Img, four2Img, four3Img],
    isSpecialOffer: true,
    offerBanner: "✨ BUY 1 GET 1 (PACK OF 2) ✨",
    offerColorStyles: {
      border: "border-indigo-500",
      bg: "bg-indigo-600"
    }
  },
  {
    id: "5",
    name: "WallDaddy Stone Brick Wallpaper Tiles (Pack of 6)",
    price: 249,
    description: "Self Adhesive Stone Brick Vinyl Wallpaper Tiles. Perfect for home decoration across kitchen, bedroom, and living spaces. Each tile measures 12x18 inches.",
    features: [
      { text: "Pack of 6 (12x18 Inch)", color: "text-pink-700 bg-pink-100 ring-pink-500" },
      { text: "Stone Brick Finish", color: "text-slate-700 bg-slate-200 ring-slate-600" },
      { text: "Self Adhesive Vinyl", color: "text-emerald-700 bg-emerald-100 ring-emerald-500" },
      { text: "Waterproof Decor", color: "text-blue-700 bg-blue-100 ring-blue-500" }
    ],
    tag: "Trending",
    image: five1Img,
    images: [five1Img, five2Img, five3Img],
    isSpecialOffer: true,
    offerBanner: "💎 MEGA BUNDLE (PACK OF 6) 💎",
    offerColorStyles: {
      border: "border-pink-500",
      bg: "bg-pink-600"
    }
  },
  {
    id: "6",
    name: "Premium Vinyl Marble Stickers (White Gold, Pack of 2)",
    price: 299,
    description: "Premium DIY Wallpaper made of Vinyl Marble. Fully waterproof and oil proof. Ideal for giving your kitchen countertops, cabinets, and furniture a luxurious peel and stick facelift. Each roll is 60x200cm.",
    features: [
      { text: "Pack of 2 (60x200cm)", color: "text-amber-800 bg-amber-100 ring-amber-500" },
      { text: "White Gold Marble Detail", color: "text-zinc-800 bg-zinc-100 ring-zinc-400" },
      { text: "Vinyl Peel & Stick", color: "text-emerald-800 bg-emerald-100 ring-emerald-500" },
      { text: "Water & Oil Proof", color: "text-sky-800 bg-sky-100 ring-sky-500" }
    ],
    tag: "Luxury",
    image: six1Img,
    images: [six1Img, six2Img, six3Img],
    isSpecialOffer: true,
    offerBanner: "🌟 PREMIUM LUXURY (PACK OF 2) 🌟",
    offerColorStyles: {
      border: "border-amber-500",
      bg: "bg-amber-500"
    }
  }
];
