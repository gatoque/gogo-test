"use server";

import { mockJourneys } from "@/assets/journeys";
import { TJourney } from "@/types/journey.models";

import { HotTicketsGridClient } from "./HotTicketsClient";

export const HotTickets = async () => {
  const journeys = await new Promise<{ data: TJourney[] }>((resolve) => {
    setTimeout(() => resolve({ data: mockJourneys }), 500);
  });

  return <HotTicketsGridClient journeys={journeys.data} />;
};
