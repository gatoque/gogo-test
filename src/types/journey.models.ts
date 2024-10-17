type TJourney = {
  id: number;
  image: string;
  country: string;
  city: string;
  tags: { id: string; label: string; color: string; textColor: string }[];
  rating: {
    score: number;
    reviews: number;
    reviewed: boolean;
  };
  hotelName: string;
  stars: number;
  features: string[];
  departureDate: string;
  nights: number;
  price: {
    currency: string;
    currencySymbol: string;
    current: number;
    regular: number;
    discountPct: number;
    highlightDiscount: boolean;
  };
  flightFrom: string;
  likes: number;
  shareLabel: string;
  guests: number;
  swimmingPool: boolean;
  allInclusive: boolean;
};

export type { TJourney };
