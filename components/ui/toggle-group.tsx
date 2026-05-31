<<<<<<< HEAD
'use client'

import * as React from 'react'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import { type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { toggleVariants } from '@/components/ui/toggle'
=======
"use client"

import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"
>>>>>>> b4879b962bb657922e8ed398700147642d303a33

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
<<<<<<< HEAD
  size: 'default',
  variant: 'default',
})

function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      className={cn(
        'group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs',
        className,
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants>) {
=======
  size: "default",
  variant: "default",
})

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
>>>>>>> b4879b962bb657922e8ed398700147642d303a33
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
<<<<<<< HEAD
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
=======
      ref={ref}
>>>>>>> b4879b962bb657922e8ed398700147642d303a33
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
<<<<<<< HEAD
        'min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l',
        className,
=======
        className
>>>>>>> b4879b962bb657922e8ed398700147642d303a33
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
<<<<<<< HEAD
}
=======
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName
>>>>>>> b4879b962bb657922e8ed398700147642d303a33

export { ToggleGroup, ToggleGroupItem }
