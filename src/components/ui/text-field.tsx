import React from "react";

import { cn } from "@/lib/utils";

const TextField = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { label?: string }
>(({ className, label, ...props }, ref) => (
  <div className="flex flex-col gap-[3px]">
    {!!label?.length && <label className="text-sm text-label">{label}</label>}
    <input
      ref={ref}
      className={cn(
        "w-full rounded-md text-lg font-medium",
        "focus:outline-none",
        className
      )}
      {...props}
    />
  </div>
));
TextField.displayName = "TextField";

export { TextField };
