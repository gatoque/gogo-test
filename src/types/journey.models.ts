type TJourney = {
  id: number;
  image: string;
  country: string;
  city: string;
  tags: { id: string; label: string; color: string }[];
  rating: {
    score: number;
    reviews: number;
  };
  hotelName: string;
  stars: number;
  features: string[];
  departureDate: string;
  nights: number;
  price: {
    currency: string;
    current: number;
    regular: number;
    discount: number;
  };
  flightFrom: string;
  likes: number;
  shareLabel: string;
  guests: number;
  swimmingPool: boolean;
  allInclusive: boolean;
};

export type { TJourney };
