import { isWithinInterval, parseISO } from "date-fns";
import { DateValueType } from "react-tailwindcss-datepicker";

import { DEFAULT_VALUES } from "@/components/common/PassengersPicker";
import { TJourney } from "@/types/journey.models";

import { JourneyFilters } from "./useHotTicketsReducer";

export const INITIAL_FILTER_VALUES: JourneyFilters = {
  quickFilters: { pool: false, topStars: false, allInclusive: false },
  destination: "",
  travelDates: {
    startDate: null,
    endDate: null,
  },
  passengers: DEFAULT_VALUES,
};

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

export const filterByDestination = (
  destinationFilter: string,
  journey: TJourney
) => {
  if (!destinationFilter) return true;

  const normalizedDestination = destinationFilter.toLowerCase();

  return (
    journey.city.toLowerCase().includes(normalizedDestination) ||
    journey.country.toLowerCase().includes(normalizedDestination)
  );
};

export const filterByTravelDates = (
  travelDates: DateValueType,
  journey: TJourney
) => {
  if (!travelDates?.startDate || !travelDates?.endDate) return true;

  const departureDate = parseISO(journey.departureDate);

  return isWithinInterval(departureDate, {
    start: travelDates.startDate,
    end: travelDates.endDate,
  });
};

export const filterByPassengers = (
  passengerFilter: { adults: number; childrenAge: number[] },
  journey: TJourney
) => {
  const totalGuests =
    passengerFilter.adults + passengerFilter.childrenAge.length;

  return journey.guests >= totalGuests;
};

export const formatNumeric = (value: number, precision = 0) => {
  const factor = Math.pow(10, precision);
  const roundedValue = Math.round(value * factor) / factor;

  return roundedValue.toLocaleString("en-US", {
    minimumFractionDigits: precision,
  });
};
