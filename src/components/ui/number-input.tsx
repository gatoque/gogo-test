import * as React from "react";

import { Icons } from "@/components/common/icons";
import { cn } from "@/lib/utils";

interface NumberInputProps {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
}

const NumberInputRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-4", className)}
    {...props}
  />
));
NumberInputRoot.displayName = "NumberInputRoot";

const NumberInputButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "w-[30px] h-[30px] flex justify-center items-center rounded bg-gray-100 text-black disabled:opacity-50 disabled:cursor-not-allowed",
      className
    )}
    {...props}
  />
));
NumberInputButton.displayName = "NumberInputButton";

const NumberInputValue = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn("font-bold", className)} {...props} />
));
NumberInputValue.displayName = "NumberInputValue";

const NumberInput: React.FC<NumberInputProps> = ({
  value: _value = 0,
  onChange: _onChange,
  min = 0,
  max = 10,
}) => {
  const [value, setValue] = React.useState(_value);

  const onChange = (v: number) => {
    setValue(v);
    _onChange?.(v);
  };

  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <NumberInputRoot>
      <NumberInputButton onClick={handleDecrement} disabled={value <= min}>
        <Icons.minus />
      </NumberInputButton>
      <NumberInputValue>{value}</NumberInputValue>
      <NumberInputButton onClick={handleIncrement} disabled={value >= max}>
        <Icons.plus />
      </NumberInputButton>
    </NumberInputRoot>
  );
};

export { NumberInputRoot, NumberInputButton, NumberInputValue, NumberInput };
