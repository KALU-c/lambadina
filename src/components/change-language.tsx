import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import i18n from "@/lib/i18n";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Languages } from "lucide-react";

type SupportedLanguages = 'en' | 'am' | 'om'

export default function ChangeLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguages>('en');

  useEffect(() => {
    setCurrentLanguage(i18n.language as SupportedLanguages)
  }, []);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage)
  }, [currentLanguage]);

  return (
    <Select
      defaultValue={currentLanguage}
      onValueChange={(value) => setCurrentLanguage(value as SupportedLanguages)}
    >
      <SelectTrigger className="border-none hover:bg-accent shadow-none w-full p-0">
        <Button variant={'secondary'} className="w-full justify-start">
          <Languages />
          Change Language
        </Button>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup defaultValue={currentLanguage}>
          <SelectLabel>Select Language</SelectLabel>
          <SelectItem value="am">Amharic</SelectItem>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="om">Afaan Oromo</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}