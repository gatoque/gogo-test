import { compose, filter } from "rambda";
import { useReducer } from "react";

import { TJourney } from "@/types/journey.models";

import { onlyAllInclusive, onlyTopStars, onlyWithPool } from "./utils";

type JourneyFilters = {
  quickFilters: {
    pool: boolean;
    topStars: boolean;
    allInclusive: boolean;
  };
};

export type HotTicketsState = {
  journeys: TJourney[];
  filteredJourneys: TJourney[];
  filters: JourneyFilters;
};

export enum HotTicketsActionType {
  SetFilters = "SET_FILTERS",
  ToggleQuickFilters = "TOGGLE_QUICK_FILTERS",
}

export type HotTicketsAction =
  | {
      type: HotTicketsActionType.SetFilters;
      filters: JourneyFilters;
    }
  | {
      type: HotTicketsActionType.ToggleQuickFilters;
      quickFilter: keyof JourneyFilters["quickFilters"];
    };

const filterJourneys = (journey: TJourney[], filters: JourneyFilters) =>
  compose<[TJourney[]], TJourney[], TJourney[], TJourney[]>(
    filter(onlyAllInclusive.bind(null, filters.quickFilters.allInclusive)),
    filter(onlyWithPool.bind(null, filters.quickFilters.pool)),
    filter(onlyTopStars.bind(null, filters.quickFilters.topStars))
  )(journey);

export const hotTicketsReducer = (
  state: HotTicketsState,
  action: HotTicketsAction
) => {
  switch (action.type) {
    case HotTicketsActionType.SetFilters: {
      return {
        ...state,
        filters: action.filters,
        filteredJourneys: filterJourneys(state.journeys, state.filters),
      };
    }

    case HotTicketsActionType.ToggleQuickFilters: {
      const filters = {
        ...state.filters,
        quickFilters: {
          ...state.filters.quickFilters,
          [action.quickFilter]: !state.filters.quickFilters[action.quickFilter],
        },
      };

      return {
        ...state,
        filters,
        filteredJourneys: filterJourneys(state.journeys, filters),
      };
    }

    default: {
      return state;
    }
  }
};

const useHotTicketsReducer = (initialState: HotTicketsState) => {
  const reducer = useReducer<React.Reducer<HotTicketsState, HotTicketsAction>>(
    hotTicketsReducer,
    initialState
  );

  return reducer;
};

export { useHotTicketsReducer };
