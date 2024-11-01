import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-[48px] w-full rounded-md border border-white/10 focus:border-accent font-light bg-slate-900 px-4 py-5 placeholder:text-white/60 outline-none placeholder:font-mono",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
