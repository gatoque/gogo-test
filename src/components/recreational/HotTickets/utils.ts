import { TJourney } from "@/types/journey.models";

export const onlyTopStars = (topStars: boolean, journey: TJourney) => {
  if (!topStars) {
    return true;
  }

  return journey.stars >= 4;
};

export const onlyWithPool = (pool: boolean, journey: TJourney) => {
  if (!pool) {
    return true;
  }

  return journey.swimmingPool;
};

export const onlyAllInclusive = (allInclusive: boolean, journey: TJourney) => {
  if (!allInclusive) {
    return true;
  }

  return journey.allInclusive;
};
