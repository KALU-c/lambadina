import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

type SectionIndicatorProps = {
  highlightMainText?: boolean
  mainText: string
  text: string
}

const SectionIndicator = ({
  highlightMainText = true,
  mainText,
  text
}: SectionIndicatorProps) => {
  return (
    <div className="flex flex-col gap-3 py-2">
      <div className="text-3xl text-muted-foreground">
        {mainText && (
          <span
            className={cn(
              "text-black dark:text-white mr-2",
              highlightMainText && "bg-[#d9d9d9] p-1 px-2 rounded-[8px]"
            )}
          >
            {mainText}
          </span>
        )}
        {text}
      </div>
      <div className="flex flex-row gap-2 text-xl items-center">
        See all
        <ArrowRight size={20} />
      </div>
    </div>
  )
}

export default SectionIndicator
