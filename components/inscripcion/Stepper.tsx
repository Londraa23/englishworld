"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface StepperProps {
  steps: { id: string; label: string }[]
  currentStep: number
}

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="flex items-center mb-6">
      {steps.map((step, i) => {
        const isActive = i === currentStep
        const isComplete = i < currentStep
        return (
          <div key={step.id} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center">
              <motion.div
                animate={{
                  backgroundColor: isComplete ? "#CF142B" : isActive ? "#002868" : "#E8DCC8",
                  scale: isActive ? 1.1 : 1,
                }}
                transition={{ duration: 0.25 }}
                className="w-8 h-8 rounded-full flex items-center justify-center relative"
              >
                {isComplete ? (
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                ) : (
                  <span className={`font-satoshi font-bold text-xs ${isActive ? "text-white" : "text-navy/25"}`}>
                    {i + 1}
                  </span>
                )}
              </motion.div>
              <span className={`font-dm-sans text-[10px] mt-1 whitespace-nowrap ${isActive ? "text-navy font-medium" : isComplete ? "text-red" : "text-navy/25"}`}>
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex-1 h-0.5 mx-2 mt-[-14px] rounded-full overflow-hidden bg-sand/80">
                <motion.div
                  animate={{ width: isComplete ? "100%" : "0%" }}
                  transition={{ duration: 0.35 }}
                  className="h-full bg-red rounded-full"
                />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
