const products = [
  {
    id: 1,
    name: "AURA Pro X",
    category: "Premium",
    price: 12999,
    oldPrice: 15999,
    discount: "19% OFF",
    rating: 4.9,
    reviews: 284,
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=1200&q=85",
    description:
      "Flagship wireless earbuds with immersive ANC, studio-grade sound and all-day comfort.",
    features: [
      "Adaptive Active Noise Cancellation",
      "Up to 40 hours battery life",
      "Hi-Res wireless audio",
      "Premium wireless charging case",
      "IPX5 water resistance",
      "Low-latency gaming mode",
    ],
    reviewsList: [
      {
        id: 1,
        name: "Arjun Mehta",
        rating: 5,
        date: "2 weeks ago",
        comment:
          "The sound quality is incredible. ANC is surprisingly good and the bass feels powerful without being muddy.",
        verified: true,
      },
      {
        id: 2,
        name: "Priya Sharma",
        rating: 5,
        date: "1 month ago",
        comment:
          "Very comfortable for long listening sessions. The case also feels extremely premium.",
        verified: true,
      },
      {
        id: 3,
        name: "Rahul K",
        rating: 4,
        date: "2 months ago",
        comment:
          "Great earbuds overall. Battery life is excellent and calls are clear.",
        verified: true,
      },
    ],
  },

  {
    id: 2,
    name: "AURA Air",
    category: "Everyday",
    price: 6999,
    oldPrice: 8499,
    discount: "18% OFF",
    rating: 4.7,
    reviews: 192,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1200&q=85",
    description:
      "Lightweight everyday earbuds built for effortless music, calls and comfortable all-day listening.",
    features: [
      "Active Noise Cancellation",
      "30 hours total battery",
      "Bluetooth 5.3",
      "Fast USB-C charging",
      "Dual microphone calls",
      "IPX4 splash resistance",
    ],
    reviewsList: [
      {
        id: 1,
        name: "Sneha Rao",
        rating: 5,
        date: "5 days ago",
        comment:
          "Perfect everyday earbuds. They are light and don't hurt my ears even after several hours.",
        verified: true,
      },
      {
        id: 2,
        name: "Karan Singh",
        rating: 4,
        date: "3 weeks ago",
        comment:
          "Good sound and very reliable connection. Great value for the price.",
        verified: true,
      },
      {
        id: 3,
        name: "Meera N",
        rating: 5,
        date: "1 month ago",
        comment:
          "The microphone is much better than I expected. Calls sound very clean.",
        verified: true,
      },
    ],
  },

  {
    id: 3,
    name: "AURA Max",
    category: "Premium",
    price: 16999,
    oldPrice: 19999,
    discount: "15% OFF",
    rating: 4.8,
    reviews: 167,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=85",
    description:
      "Premium over-ear headphones designed for deep bass, wide soundstage and long listening sessions.",
    features: [
      "Advanced Active Noise Cancellation",
      "50 hours battery life",
      "Spatial audio",
      "Premium memory foam cushions",
      "Multi-device connection",
      "Foldable travel design",
    ],
    reviewsList: [
      {
        id: 1,
        name: "Vikram Joshi",
        rating: 5,
        date: "1 week ago",
        comment:
          "These are easily the best headphones I've owned. The soundstage is huge.",
        verified: true,
      },
      {
        id: 2,
        name: "Ananya P",
        rating: 5,
        date: "3 weeks ago",
        comment:
          "Amazing for flights and office work. ANC blocks almost everything around me.",
        verified: true,
      },
      {
        id: 3,
        name: "Rohit Verma",
        rating: 4,
        date: "2 months ago",
        comment:
          "Very comfortable and excellent battery life.",
        verified: true,
      },
    ],
  },

  {
    id: 4,
    name: "AURA Beat",
    category: "Sports",
    price: 4999,
    oldPrice: 5999,
    discount: "17% OFF",
    rating: 4.6,
    reviews: 143,
    badge: "Sports",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=85",
    description:
      "Secure-fit sports earbuds made for workouts, running and high-energy training.",
    features: [
      "Secure sport fit",
      "24 hours battery",
      "IPX7 water resistance",
      "Sweat resistant",
      "Quick charge",
      "Low-latency mode",
    ],
    reviewsList: [
      {
        id: 1,
        name: "Aditya S",
        rating: 5,
        date: "1 week ago",
        comment:
          "They stay in my ears perfectly while running. No movement at all.",
        verified: true,
      },
      {
        id: 2,
        name: "Nisha R",
        rating: 4,
        date: "2 weeks ago",
        comment:
          "Good workout earbuds with strong bass and great fit.",
        verified: true,
      },
      {
        id: 3,
        name: "Manoj P",
        rating: 5,
        date: "1 month ago",
        comment:
          "Used them during several gym sessions and they handle sweat really well.",
        verified: true,
      },
    ],
  },

  {
    id: 5,
    name: "AURA Mini",
    category: "Everyday",
    price: 3499,
    oldPrice: 4299,
    discount: "19% OFF",
    rating: 4.5,
    reviews: 118,
    badge: "Compact",
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=1200&q=85",
    description:
      "Ultra-compact earbuds delivering surprisingly powerful sound in a pocket-sized design.",
    features: [
      "Compact charging case",
      "22 hours battery",
      "Bluetooth 5.3",
      "Touch controls",
      "Clear calling",
      "USB-C charging",
    ],
    reviewsList: [
      {
        id: 1,
        name: "Divya M",
        rating: 5,
        date: "4 days ago",
        comment:
          "The case is tiny and super convenient. Sound is much better than expected.",
        verified: true,
      },
      {
        id: 2,
        name: "Aman T",
        rating: 4,
        date: "2 weeks ago",
        comment:
          "Great compact earbuds for daily commuting.",
        verified: true,
      },
    ],
  },

  {
    id: 6,
    name: "AURA Studio",
    category: "Premium",
    price: 18999,
    oldPrice: 22999,
    discount: "17% OFF",
    rating: 4.9,
    reviews: 326,
    badge: "Editor's Pick",
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=85",
    description:
      "Reference-inspired headphones engineered for creators, audiophiles and serious listeners.",
    features: [
      "Studio-grade drivers",
      "60 hours battery",
      "Premium ANC",
      "Spatial audio",
      "Professional microphone",
      "Ultra-comfort headband",
    ],
    reviewsList: [
      {
        id: 1,
        name: "Siddharth Rao",
        rating: 5,
        date: "1 week ago",
        comment:
          "Absolutely phenomenal. The clarity and separation are on another level.",
        verified: true,
      },
      {
        id: 2,
        name: "Neha Kapoor",
        rating: 5,
        date: "2 weeks ago",
        comment:
          "Beautiful design and fantastic audio. Easily worth the money.",
        verified: true,
      },
      {
        id: 3,
        name: "Rakesh M",
        rating: 5,
        date: "1 month ago",
        comment:
          "I use these for music production and they're excellent.",
        verified: true,
      },
    ],
  },

  {
    id: 7,
    name: "AURA Flow",
    category: "Everyday",
    price: 5799,
    oldPrice: 6999,
    discount: "17% OFF",
    rating: 4.6,
    reviews: 91,
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&w=1200&q=85",
    description:
      "Smooth everyday wireless audio with balanced tuning and a sleek minimalist design.",
    features: [
      "Balanced sound profile",
      "32 hours battery",
      "Bluetooth 5.3",
      "Fast charging",
      "Dual-device support",
      "Clear voice calls",
    ],
    reviewsList: [
      {
        id: 1,
        name: "Ishaan G",
        rating: 5,
        date: "1 week ago",
        comment:
          "The tuning is very balanced. Great for both podcasts and music.",
        verified: true,
      },
      {
        id: 2,
        name: "Pooja S",
        rating: 4,
        date: "3 weeks ago",
        comment:
          "Really nice design and comfortable fit.",
        verified: true,
      },
    ],
  },

  {
    id: 8,
    name: "AURA Pulse",
    category: "Sports",
    price: 4499,
    oldPrice: 5499,
    discount: "18% OFF",
    rating: 4.6,
    reviews: 86,
    badge: "Workout",
    image:
      "https://images.unsplash.com/photo-1598331668826-20cecc596b86?auto=format&fit=crop&w=1200&q=85",
    description:
      "Energetic sports earbuds with powerful bass and a secure fit for every workout.",
    features: [
      "Bass Boost mode",
      "26 hours battery",
      "IPX6 water resistance",
      "Secure ear hooks",
      "Quick charge",
      "Touch controls",
    ],
    reviewsList: [
      {
        id: 1,
        name: "Yash K",
        rating: 5,
        date: "6 days ago",
        comment:
          "Excellent for gym workouts. The bass gives me the extra push.",
        verified: true,
      },
      {
        id: 2,
        name: "Harshita V",
        rating: 4,
        date: "2 weeks ago",
        comment:
          "Comfortable and stays secure while exercising.",
        verified: true,
      },
    ],
  },

  {
    id: 9,
    name: "AURA Neo",
    category: "Premium",
    price: 10999,
    oldPrice: 12999,
    discount: "15% OFF",
    rating: 4.8,
    reviews: 134,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1588423771078-4a1f9a8a3e6e?auto=format&fit=crop&w=1200&q=85",
    description:
      "Modern premium earbuds combining immersive audio, intelligent controls and refined comfort.",
    features: [
      "Smart ANC",
      "36 hours battery",
      "Spatial audio",
      "Wireless charging",
      "Transparency mode",
      "IPX5 protection",
    ],
    reviewsList: [
      {
        id: 1,
        name: "Akash N",
        rating: 5,
        date: "4 days ago",
        comment:
          "The ANC and transparency modes are fantastic. Very polished product.",
        verified: true,
      },
      {
        id: 2,
        name: "Riya J",
        rating: 5,
        date: "2 weeks ago",
        comment:
          "Looks premium and sounds even better.",
        verified: true,
      },
    ],
  },

  {
    id: 10,
    name: "AURA Bass One",
    category: "Everyday",
    price: 3999,
    oldPrice: 4999,
    discount: "20% OFF",
    rating: 4.5,
    reviews: 104,
    badge: "Best Value",
    image:
      "https://images.unsplash.com/photo-1590658006821-04f4008d5713?auto=format&fit=crop&w=1200&q=85",
    description:
      "Punchy bass and dependable everyday performance at an accessible price.",
    features: [
      "Deep Bass drivers",
      "28 hours battery",
      "Bluetooth 5.2",
      "Low-latency gaming",
      "Dual microphones",
      "USB-C fast charging",
    ],
    reviewsList: [
      {
        id: 1,
        name: "Vivek R",
        rating: 5,
        date: "1 week ago",
        comment:
          "For the price, these are fantastic. Bass is strong and battery is great.",
        verified: true,
      },
      {
        id: 2,
        name: "Asha K",
        rating: 4,
        date: "3 weeks ago",
        comment:
          "Good quality and easy to use.",
        verified: true,
      },
    ],
  },

  {
    id: 11,
    name: "AURA Flex",
    category: "Sports",
    price: 6299,
    oldPrice: 7499,
    discount: "16% OFF",
    rating: 4.7,
    reviews: 77,
    badge: "Active",
    image:
      "https://images.unsplash.com/photo-1590658165737-15a047b3c8c9?auto=format&fit=crop&w=1200&q=85",
    description:
      "Flexible sports audio with secure comfort, powerful sound and reliable battery life.",
    features: [
      "Flexible sport fit",
      "35 hours battery",
      "IPX7 protection",
      "Noise reduction microphones",
      "Fast charging",
      "Gaming mode",
    ],
    reviewsList: [
      {
        id: 1,
        name: "Naveen P",
        rating: 5,
        date: "5 days ago",
        comment:
          "Very secure fit. Perfect for running and cycling.",
        verified: true,
      },
      {
        id: 2,
        name: "Keerthi S",
        rating: 4,
        date: "1 month ago",
        comment:
          "Strong battery and comfortable fit.",
        verified: true,
      },
    ],
  },

  {
    id: 12,
    name: "AURA Elite",
    category: "Premium",
    price: 14999,
    oldPrice: 17999,
    discount: "17% OFF",
    rating: 4.9,
    reviews: 211,
    badge: "Premium",
    image:
      "https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&w=1200&q=85",
    description:
      "Luxury wireless headphones combining exceptional detail, comfort and sophisticated design.",
    features: [
      "Premium ANC",
      "55 hours battery",
      "High-resolution audio",
      "Premium leather cushions",
      "Multi-device pairing",
      "Ambient sound mode",
    ],
    reviewsList: [
      {
        id: 1,
        name: "Vishal A",
        rating: 5,
        date: "1 week ago",
        comment:
          "These feel like a luxury product from the moment you open the box.",
        verified: true,
      },
      {
        id: 2,
        name: "Tanvi M",
        rating: 5,
        date: "2 weeks ago",
        comment:
          "Fantastic sound and extremely comfortable.",
        verified: true,
      },
      {
        id: 3,
        name: "Sanjay R",
        rating: 5,
        date: "1 month ago",
        comment:
          "Excellent headphones. The detail in vocals is outstanding.",
        verified: true,
      },
    ],
  },
];

export { products };
export default products;