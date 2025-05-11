import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const playNotificationSound = () => {
  const audio = new Audio('/sounds/toast.wav')
  audio.play().catch(err => {
    console.error("Failed to play sound", err)
  })
}
