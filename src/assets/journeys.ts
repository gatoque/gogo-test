import { TJourney } from "@/types/journey.models";

export const mockJourneys: TJourney[] = [
  {
    id: 1,
    country: "Turkey",
    city: "Antalya",
    tags: [
      { id: "couple", label: "Poroms", color: "#F8285A" },
      { id: "spa", label: "Sveikata ir grozis", color: "#FF8A00" },
      { id: "sports", label: "Sportas", color: "#B528F8" },
    ],
    rating: {
      score: 9.2,
      reviews: 1252,
    },
    hotelName: "Azure Haven Inn",
    stars: 4,
    features: [
      "Skrydis su bagazu",
      "Grazios apylinkes",
      "Salia papludimio",
      "3 baseinai",
    ],
    departureDate: "2024-09-14T09:38:58+0000",
    nights: 7,
    price: {
      currency: "EUR",
      current: 224,
      regular: 299,
      discount: 75,
    },
    flightFrom: "Kauno",
    likes: 62,
    shareLabel: "Dalintis pasiulymu",
    guests: 7,
    image: "/hotels/hotel-1.png",
    swimmingPool: true,
    allInclusive: true,
  },
  {
    id: 2,
    country: "Greece",
    city: "Rhodes",
    tags: [
      { id: "recommended", label: "Rekomenduojame", color: "#00A991" },
      { id: "popular", label: "Populiaru", color: "#FFD200" },
      { id: "family", label: "Su vaikais", color: "#0FA5FF" },
    ],
    rating: {
      score: 9.2,
      reviews: 1252,
    },
    hotelName: "Acharavi Garden",
    stars: 4,
    features: [
      "Skrydis su bagazu",
      "Grazios apylinkes",
      "Salia papludimio",
      "3 baseinai",
    ],
    departureDate: "2024-09-14T09:38:58+0000",
    nights: 7,
    price: {
      currency: "EUR",
      current: 324,
      regular: 399,
      discount: 75,
    },
    flightFrom: "Kauno",
    likes: 62,
    shareLabel: "Dalintis pasiulymu",
    guests: 12,
    image: "/hotels/hotel-2.png",
    swimmingPool: true,
    allInclusive: true,
  },
  {
    id: 3,
    country: "Germany",
    city: "Berlin",
    tags: [
      { id: "recommended", label: "Rekomenduojame", color: "#00A991" },
      { id: "popular", label: "Populiaru", color: "#FFD200" },
      { id: "family", label: "Su vaikais", color: "#0FA5FF" },
    ],
    rating: {
      score: 0,
      reviews: 0,
    },
    hotelName: "Vokietijos sostine - Berlynas",
    stars: 0,
    features: ["Ekskursine programa", "Keliones vadovo paslaugos"],
    departureDate: "2024-09-14T09:38:58+0000",
    nights: 3,
    price: {
      currency: "EUR",
      current: 244,
      regular: 299,
      discount: 55,
    },
    flightFrom: "Autobusas",
    likes: 0,
    shareLabel: "Dalintis pasiulymu",
    guests: 12,
    image: "/hotels/hotel-3.png",
    swimmingPool: false,
    allInclusive: true,
  },
  {
    id: 4,
    country: "Slovenia",
    city: "Bled",
    tags: [],
    rating: {
      score: 0,
      reviews: 0,
    },
    hotelName: "Smaragdine Slovenija ir kampelis Italijos",
    stars: 0,
    features: ["Ekskursine programa", "Keliones vadovo paslaugos"],
    departureDate: "2024-09-14T09:38:58+0000",
    nights: 3,
    price: {
      currency: "EUR",
      current: 249,
      regular: 299,
      discount: 50,
    },
    flightFrom: "Autobusas",
    likes: 6,
    shareLabel: "Dalintis pasiulymu",
    guests: 12,
    image: "/hotels/hotel-4.png",
    swimmingPool: true,
    allInclusive: true,
  },
  {
    id: 5,
    country: "UAE",
    city: "Dubai",
    tags: [
      { id: "couple", label: "Poroms", color: "#F8285A" },
      { id: "spa", label: "Sveikata ir grozis", color: "#FF8A00" },
      { id: "sports", label: "Sportas", color: "#B528F8" },
    ],
    rating: {
      score: 5.5,
      reviews: 1252,
    },
    hotelName: "Diamond Apartments Suites",
    stars: 5,
    features: [
      "Skrydis su bagazu",
      "Grazios apylinkes",
      "Salia papludimio",
      "3 baseinai",
    ],
    departureDate: "2024-09-14T09:38:58+0000",
    nights: 7,
    price: {
      currency: "EUR",
      current: 499,
      regular: 699,
      discount: 200,
    },
    flightFrom: "Kauno",
    likes: 62,
    shareLabel: "Dalintis pasiulymu",
    guests: 7,
    image: "/hotels/hotel-5.png",
    swimmingPool: true,
    allInclusive: true,
  },
  {
    id: 6,
    country: "Turkey",
    city: "Antalya",
    tags: [
      { id: "couple", label: "Poroms", color: "#F8285A" },
      { id: "spa", label: "Sveikata ir grozis", color: "#FF8A00" },
      { id: "sports", label: "Sportas", color: "#B528F8" },
    ],
    rating: {
      score: 5.5,
      reviews: 1252,
    },
    hotelName: "Akasia Resort Hotel",
    stars: 3,
    features: [
      "Skrydis su bagazu",
      "Grazios apylinkes",
      "Salia papludimio",
      "3 baseinai",
    ],
    departureDate: "2024-09-14T09:38:58+0000",
    nights: 7,
    price: {
      currency: "EUR",
      current: 499,
      regular: 699,
      discount: 200,
    },
    flightFrom: "Kauno",
    likes: 62,
    shareLabel: "Dalintis pasiulymu",
    guests: 7,
    image: "/hotels/hotel-6.png",
    swimmingPool: true,
    allInclusive: false,
  },
  {
    id: 7,
    country: "Germany",
    city: "Berlin",
    tags: [],
    rating: {
      score: 0,
      reviews: 0,
    },
    hotelName: "Vokiskoji Saksonijos Svecarija",
    stars: 0,
    features: ["Ekskursine programa", "Keliones vadovo paslaugos"],
    departureDate: "2024-09-14T09:38:58+0000",
    nights: 3,
    price: {
      currency: "EUR",
      current: 399,
      regular: 499,
      discount: 100,
    },
    flightFrom: "Autobusas",
    likes: 0,
    shareLabel: "Dalintis pasiulymu",
    guests: 7,
    image: "/hotels/hotel-7.png",
    swimmingPool: true,
    allInclusive: false,
  },
  {
    id: 8,
    country: "Turkey",
    city: "Antalya",
    tags: [
      { id: "couple", label: "Poroms", color: "#F8285A" },
      { id: "spa", label: "Sveikata ir grozis", color: "#FF8A00" },
      { id: "sports", label: "Sportas", color: "#B528F8" },
    ],
    rating: {
      score: 9.2,
      reviews: 1252,
    },
    hotelName: "Windmills Hotel Apartments",
    stars: 2,
    features: [
      "Skrydis su bagazu",
      "Grazios apylinkes",
      "Salia papludimio",
      "3 baseinai",
    ],
    departureDate: "2024-10-01T09:38:58+0000",
    nights: 7,
    price: {
      currency: "EUR",
      current: 399,
      regular: 499,
      discount: 100,
    },
    flightFrom: "Kauno",
    likes: 62,
    shareLabel: "Dalintis pasiulymu",
    guests: 7,
    image: "/hotels/hotel-8.png",
    swimmingPool: true,
    allInclusive: true,
  },
];
