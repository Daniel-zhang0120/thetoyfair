import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// This section defines the button variants using class-variance-authority
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-poppins font-bold text-[14px] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black transition duration-200",
        outline: "border-2 border-white bg-transparent text-white hover:bg-white hover:text-black rounded-full transition duration-200",
      },
      size: {
        custom: "h-[42px] px-[24px] py-[8px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "custom",
    },
  }
)

// This section defines the props for the Button component, extending standard button attributes
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean // Allows the button to render as a different component
}

// This section defines the Button component using React.forwardRef
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button" // Determines the component type based on asChild prop
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))} // Applies the button variants
        ref={ref}
        {...props} // Spreads the remaining props onto the component
      />
    )
  }
)
Button.displayName = "Button" // Sets the display name for the Button component

// This section exports the Button component and the buttonVariants for use in other parts of the application
export { Button, buttonVariants }
