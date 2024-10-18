import { Dispatch, FC, ReactNode } from "react";

import { Icons } from "@/components/common/icons";
import {
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from "@/components/ui/tabs";

import { HotTicketsAction, HotTicketsState } from "./useHotTicketsReducer";
import { VacationsTabForm } from "./VacationsTabForm";

enum HotTicketTabsEnum {
  Vacation = "VACATION",
  Acquaintances = "ACQUAINTANCES",
  Exoticism = "EXOTICISM",
  Cruises = "CRUIZES",
  Skiing = "SKIING",
}

interface TabsConfig {
  value: HotTicketTabsEnum;
  title: ReactNode;
  content: ReactNode;
}

type HotTicketsTabsProps = {
  dispatch?: Dispatch<HotTicketsAction>;
  state?: HotTicketsState;
};

export const HotTicketsTabs: FC<HotTicketsTabsProps> = ({
  state,
  dispatch,
}) => {
  const tabsConfig: TabsConfig[] = [
    {
      value: HotTicketTabsEnum.Vacation,
      title: (
        <>
          <Icons.beach /> Poilsines
        </>
      ),
      content: <VacationsTabForm state={state} dispatch={dispatch} />,
    },
    {
      value: HotTicketTabsEnum.Acquaintances,
      title: (
        <>
          <Icons.bus /> Pazintines
        </>
      ),
      content: "Content for Pazintine",
    },
    {
      value: HotTicketTabsEnum.Exoticism,
      title: (
        <>
          <Icons.palm /> Egzotika
        </>
      ),
      content: "Content for Egzotika",
    },
    {
      value: HotTicketTabsEnum.Cruises,
      title: (
        <>
          <Icons.cruize /> Kruizai
        </>
      ),
      content: "Content for Kruizai",
    },
    {
      value: HotTicketTabsEnum.Skiing,
      title: (
        <>
          <Icons.skis /> Slidinejimas
        </>
      ),
      content: "Content for Slidinejimas",
    },
  ];

  return (
    <TabsRoot defaultValue={tabsConfig[0].value}>
      <TabsList>
        {tabsConfig.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabsConfig.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </TabsRoot>
  );
};
