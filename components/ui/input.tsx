import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[48px] rounded-md border-b-stone-400 border-b-4 focus:border-b-4 focus:border-green-600 font-light bg-stone-200 px-4 py-5 text-base placeholder:text-stone-600 outline-none  ",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
