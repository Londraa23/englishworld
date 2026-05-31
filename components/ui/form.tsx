<<<<<<< HEAD
'use client'

import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form'

import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'
=======
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
>>>>>>> b4879b962bb657922e8ed398700147642d303a33

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
<<<<<<< HEAD
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
=======
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>>>>>>> b4879b962bb657922e8ed398700147642d303a33
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
<<<<<<< HEAD
  {} as FormFieldContextValue,
=======
  {} as FormFieldContextValue
>>>>>>> b4879b962bb657922e8ed398700147642d303a33
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
<<<<<<< HEAD
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
=======
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>>>>>>> b4879b962bb657922e8ed398700147642d303a33
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
<<<<<<< HEAD
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name: fieldContext.name })
  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
=======
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
>>>>>>> b4879b962bb657922e8ed398700147642d303a33
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
<<<<<<< HEAD
  {} as FormItemContextValue,
)

function FormItem({ className, ...props }: React.ComponentProps<'div'>) {
=======
  {} as FormItemContextValue
)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
>>>>>>> b4879b962bb657922e8ed398700147642d303a33
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
<<<<<<< HEAD
      <div
        data-slot="form-item"
        className={cn('grid gap-2', className)}
        {...props}
      />
    </FormItemContext.Provider>
  )
}

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
=======
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
>>>>>>> b4879b962bb657922e8ed398700147642d303a33
  const { error, formItemId } = useFormField()

  return (
    <Label
<<<<<<< HEAD
      data-slot="form-label"
      data-error={!!error}
      className={cn('data-[error=true]:text-destructive', className)}
=======
      ref={ref}
      className={cn(error && "text-destructive", className)}
>>>>>>> b4879b962bb657922e8ed398700147642d303a33
      htmlFor={formItemId}
      {...props}
    />
  )
<<<<<<< HEAD
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
=======
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
>>>>>>> b4879b962bb657922e8ed398700147642d303a33
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
<<<<<<< HEAD
      data-slot="form-control"
=======
      ref={ref}
>>>>>>> b4879b962bb657922e8ed398700147642d303a33
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
<<<<<<< HEAD
}

function FormDescription({ className, ...props }: React.ComponentProps<'p'>) {
=======
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
>>>>>>> b4879b962bb657922e8ed398700147642d303a33
  const { formDescriptionId } = useFormField()

  return (
    <p
<<<<<<< HEAD
      data-slot="form-description"
      id={formDescriptionId}
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function FormMessage({ className, ...props }: React.ComponentProps<'p'>) {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? '') : props.children
=======
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children
>>>>>>> b4879b962bb657922e8ed398700147642d303a33

  if (!body) {
    return null
  }

  return (
    <p
<<<<<<< HEAD
      data-slot="form-message"
      id={formMessageId}
      className={cn('text-destructive text-sm', className)}
=======
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
>>>>>>> b4879b962bb657922e8ed398700147642d303a33
      {...props}
    >
      {body}
    </p>
  )
<<<<<<< HEAD
}
=======
})
FormMessage.displayName = "FormMessage"
>>>>>>> b4879b962bb657922e8ed398700147642d303a33

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
