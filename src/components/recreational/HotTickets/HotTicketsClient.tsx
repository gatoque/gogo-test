"use client";
import { Dispatch } from "react";

import {
  JourneyCard,
  JourneyCardSkeleton,
} from "@/components/common/cards/JourneyCard";
import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { TJourney } from "@/types/journey.models";

import { HotTicketsTabs } from "./HotTicketTabs";
import {
  HotTicketsAction,
  HotTicketsActionType,
  HotTicketsState,
  useHotTicketsReducer,
} from "./useHotTicketsReducer";
import { INITIAL_FILTER_VALUES } from "./utils";

type HotTicketsTabsContainerProps = {
  dispatch?: Dispatch<HotTicketsAction>;
  state?: HotTicketsState;
};

const HotTicketsTabsContainer = ({
  state,
  dispatch,
}: HotTicketsTabsContainerProps) => (
  <div className="mt-[8rem] mb-[11rem] flex justify-center">
    <HotTicketsTabs state={state} dispatch={dispatch} />
  </div>
);

type HotTicketsFiltersProps = {
  dispatch?: Dispatch<HotTicketsAction>;
  state?: HotTicketsState;
};

const HotTicketsFilters = ({ dispatch, state }: HotTicketsFiltersProps) => {
  return (
    <div className="mb-4 flex items-center gap-4">
      <Button variant="destructive-outline">
        <Icons.sliderHorizontal className="mr-2" />
        Visi pasiulymai
      </Button>
      <div className="flex gap-2 items-center">
        <Button
          variant={
            state?.filters.quickFilters.pool ? "outline-primary" : "outline"
          }
          onClick={() => {
            if (!dispatch) return;
            dispatch({
              type: HotTicketsActionType.ToggleQuickFilters,
              quickFilter: "pool",
            });
          }}
        >
          <Icons.pool className="mr-2" />
          Pool
        </Button>
        <Button
          variant={
            state?.filters.quickFilters.allInclusive
              ? "outline-primary"
              : "outline"
          }
          onClick={() => {
            if (!dispatch) return;
            dispatch({
              type: HotTicketsActionType.ToggleQuickFilters,
              quickFilter: "allInclusive",
            });
          }}
        >
          <Icons.infinity className="mr-2" />
          All inclusive
        </Button>
        <Button
          variant={
            state?.filters.quickFilters.topStars ? "outline-primary" : "outline"
          }
          onClick={() => {
            if (!dispatch) return;
            dispatch({
              type: HotTicketsActionType.ToggleQuickFilters,
              quickFilter: "topStars",
            });
          }}
        >
          <Icons.outlinedStar className="mr-2" />4 to 5 Stars
        </Button>
      </div>
    </div>
  );
};

type HotTicketsClientProps = {
  journeys: TJourney[];
};

const HotTicketsGridClient = ({ journeys }: HotTicketsClientProps) => {
  const [state, dispatch] = useHotTicketsReducer({
    journeys,
    filteredJourneys: journeys,
    filters: INITIAL_FILTER_VALUES,
  });

  return (
    <>
      <HotTicketsTabsContainer state={state} dispatch={dispatch} />
      <h2 className="text-3xl font-medium mb-4">Paskutine minute</h2>
      <HotTicketsFilters dispatch={dispatch} state={state} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-auto gap-x-8 gap-y-4">
        {state.filteredJourneys.map((journey, idx) => (
          <JourneyCard key={idx} data={journey} />
        ))}
      </div>
    </>
  );
};

type HotTicketsClientSkeletonProps = {
  items: number;
};

const HotTicketsGridSkeleton = ({ items }: HotTicketsClientSkeletonProps) => {
  return (
    <>
      <HotTicketsFilters />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-auto gap-x-8 gap-y-4">
        {Array.from({ length: items }, (_, idx) => (
          <JourneyCardSkeleton key={idx} />
        ))}
      </div>
    </>
  );
};

export { HotTicketsGridSkeleton, HotTicketsGridClient, HotTicketsTabs };
