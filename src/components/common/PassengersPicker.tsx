import * as Popover from "@radix-ui/react-popover";
import React, { useState } from "react";

import { Button } from "../ui/button";
import { NumberInput } from "../ui/number-input";

type PassengersPickerValues = {
  adults: number;
  childrenAge: number[];
};

type PassengersPickerProps = {
  defaultValue?: PassengersPickerValues;
  onChange?: (values: PassengersPickerValues) => void;
  label?: string;
};

export const DEFAULT_VALUES: PassengersPickerValues = {
  adults: 2,
  childrenAge: [],
};
const DEFAULT_CHILD_AGE = 8;

const PassengersPicker: React.FC<PassengersPickerProps> = ({
  label,
  defaultValue,
  onChange,
}) => {
  const [values, setValues] = useState<PassengersPickerValues>(
    defaultValue ?? DEFAULT_VALUES
  );
  const [tempValues, setTempValues] = useState<PassengersPickerValues>(values);

  const handleAdultsChange = (newValue: number) => {
    setTempValues((prev) => ({
      ...prev,
      adults: newValue,
    }));
  };

  const handleChildrenCountChange = (newValue: number) => {
    const newChildrenAge: number[] = Array(newValue).fill(DEFAULT_CHILD_AGE);

    setTempValues((prev) => ({
      ...prev,
      childrenAge: newChildrenAge,
    }));
  };

  const handleChildAgeChange = (index: number, newAge: number) => {
    const updatedAges = [...tempValues.childrenAge];
    updatedAges[index] = newAge;

    setTempValues((prev) => ({
      ...prev,
      childrenAge: updatedAges,
    }));
  };

  // Commit temp values to actual state
  const handleSave = () => {
    setValues(tempValues);
    onChange?.(tempValues);
  };

  // Handle popover close (reset tempValues)
  const handlePopoverClose = (open: boolean) => {
    if (open) return;

    setTempValues({
      adults: values.adults,
      childrenAge: [...values.childrenAge],
    });
  };

  return (
    <Popover.Root onOpenChange={handlePopoverClose}>
      <Popover.Trigger className="flex flex-col gap-[3px]">
        {!!label?.length && (
          <label className="text-sm text-label cursor-pointer">{label}</label>
        )}
        {values.adults + values.childrenAge.length} suauge
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          align="start"
          side="bottom"
          avoidCollisions={false}
          sideOffset={22}
          alignOffset={-16}
          className="px-4 py-5 max-w-[23rem] flex flex-col gap-[20px] bg-white rounded-2xl"
        >
          <div className="flex gap-[4rem] justify-between">
            <div className="font-bold">
              Suauge{" "}
              <span className="font-medium text-[#5A6872]">/14plius m./</span>
            </div>
            <NumberInput
              value={tempValues.adults}
              onChange={handleAdultsChange}
            />
          </div>

          <Separator />

          <div className="flex gap-[4rem] justify-between">
            <div className="font-bold">
              Vaikai{" "}
              <span className="font-medium text-[#5A6872]">/0-14 m./</span>
            </div>
            <NumberInput
              value={tempValues.childrenAge.length}
              onChange={handleChildrenCountChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            {tempValues.childrenAge.map((age, index) => (
              <div
                key={index}
                className="flex gap-[4rem] justify-between items-center"
              >
                <div className="text-sm font-normal">
                  {index + 1} vaiko amzius
                </div>
                <NumberInput
                  value={age}
                  onChange={(newAge) => handleChildAgeChange(index, newAge)}
                  min={0}
                  max={14}
                />
              </div>
            ))}
          </div>

          <div className="font-normal text-sm">
            Svarbu. Tiksliai nurodykite vaiko/kudikio amziu keliones grizimo
            datai.
          </div>

          <Separator />

          <Popover.Close className="w-full">
            <Button
              className="px-1 py-3 w-full rounded-sm font-bold text-sm"
              onClick={handleSave}
            >
              Issaugoti
            </Button>
          </Popover.Close>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

const Separator: React.FC = () => <div className="w-full h-px bg-border" />;

export { PassengersPicker };
