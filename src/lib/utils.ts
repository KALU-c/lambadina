import { clsx, type ClassValue } from "clsx"
import { toast } from "sonner"
import { twMerge } from "tailwind-merge"
import { t } from "i18next";
import i18n from "./i18n"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const playNotificationSound = () => {
  const audio = new Audio('/sounds/toast.wav')
  audio.play().catch(err => {
    console.error("Failed to play sound", err)
  })
}

export const changeLanguage = () => {
  const newLang = i18n.language === "en" ? "am" : "en";

  i18n.changeLanguage(newLang);
  localStorage.setItem("lambadina_i18nextLgn", newLang);

  toast.success(t("language_changed_to", { lang: newLang === "en" ? "English" : "Amharic" }));
  playNotificationSound();
};
