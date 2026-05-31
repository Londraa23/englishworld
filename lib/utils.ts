<<<<<<< HEAD
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
=======
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
>>>>>>> b4879b962bb657922e8ed398700147642d303a33

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
