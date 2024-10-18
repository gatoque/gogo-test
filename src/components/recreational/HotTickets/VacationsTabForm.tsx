import React, { Dispatch, FC } from "react";
import { Controller, useForm } from "react-hook-form";

import { Icons } from "@/components/common/icons";
import { PassengersPicker } from "@/components/common/PassengersPicker";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { TextField } from "@/components/ui/text-field";

import {
  HotTicketsAction,
  HotTicketsActionType,
  HotTicketsState,
  JourneyFilters,
} from "./useHotTicketsReducer";
import { INITIAL_FILTER_VALUES } from "./utils";

type VacationsTabFormProps = {
  dispatch?: Dispatch<HotTicketsAction>;
  state?: HotTicketsState;
};

export const VacationsTabForm: FC<VacationsTabFormProps> = ({
  state,
  dispatch,
}) => {
  const { handleSubmit, register, control } = useForm({
    defaultValues: {
      destination: INITIAL_FILTER_VALUES.destination,
      travelDates: INITIAL_FILTER_VALUES.travelDates,
      passengers: INITIAL_FILTER_VALUES.passengers,
    },
  });

  const onSubmit = (data: Omit<JourneyFilters, "quickFilters">) => {
    const quickFilters =
      state?.filters?.quickFilters ?? INITIAL_FILTER_VALUES.quickFilters;
    const destination = data.destination ?? INITIAL_FILTER_VALUES.destination;
    const travelDates = data.travelDates ?? INITIAL_FILTER_VALUES.travelDates;
    const passengers = data.passengers ?? INITIAL_FILTER_VALUES.passengers;

    dispatch?.({
      type: HotTicketsActionType.SetFilters,
      filters: { quickFilters, destination, travelDates, passengers },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-wrap justify-between items-center"
    >
      <TextField
        placeholder="Visos kelioniu kryptys"
        label="Kur keliausite"
        {...register("destination")}
      />

      <div className="pl-4 border-l">
        <Controller
          name="travelDates"
          control={control}
          render={({ field }) => (
            <DatePicker
              value={field.value}
              onChange={field.onChange}
              label="Jusu keliones data"
            />
          )}
        />
      </div>

      <div className="pl-4 border-l">
        <Controller
          name="passengers"
          control={control}
          render={({ field }) => (
            <PassengersPicker
              label="Keleiviai"
              defaultValue={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>

      <Button
        type="submit"
        className="px-5 py-4 flex items-center gap-1 rounded-full font-medium text-lg"
      >
        <Icons.search /> leskoti
      </Button>
    </form>
  );
};
