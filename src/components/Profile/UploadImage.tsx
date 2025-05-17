import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toBase64 } from "@/lib/utils";
import { PencilIcon, User2Icon } from "lucide-react";
import React from "react";

type AvatarUploadProps = {
  value?: string;
  onChange?: (value?: string) => void;
}

export function AvatarUpload({
  value,
  onChange
}: AvatarUploadProps) {

  const inputRef = React.useRef<HTMLInputElement>(null)
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const base64 = await toBase64(file) as string;
      onChange?.(base64);
    }
  }

  return (
    <div className="relative w-60 h-80">
      <Avatar className="w-full h-full rounded-xl bg-red-400">
        <AvatarImage src={value} className="object-cover rounded-xl" />
        <AvatarFallback className="bg-secondary rounded-xl">
          <User2Icon className="w-16 h-16" />
        </AvatarFallback>
      </Avatar>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full p-1 bg-secondary-foreground/90 hover:bg-secondary-foreground absolute bottom-0 right-0"
        onClick={e => {
          e.preventDefault()
          inputRef.current?.click()
        }}
      >
        <PencilIcon className="w-4 h-4 text-white" />
      </Button>
      <Input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleChange}
        accept="image/*"
      />
    </div>
  )
}