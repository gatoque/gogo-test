import React from "react";
import Datepicker, { DatepickerType } from "react-tailwindcss-datepicker";

import { cn } from "@/lib/utils";

interface DatePickerProps extends DatepickerType {
  label?: string;
}

const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  ({ label, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-[3px]")}>
      {!!label?.length && <label className="text-sm text-label">{label}</label>}
      <Datepicker
        asSingle={true}
        inputClassName={cn("p-0 font-medium focus:outline-none")}
        toggleIcon={() => null}
        {...props}
      />
    </div>
  )
);
DatePicker.displayName = "DatePicker";

export { DatePicker };
