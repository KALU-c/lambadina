import { cn } from "@/lib/utils"
import type { CtaCardProps } from "./layout/cta-card"
import CtaCard from "./layout/cta-card"

const CTA_DATA: CtaCardProps[] = [
  {
    src: "/icons/search.png",
    title: "Find an expert",
    description: "Discover and choose from our list of the world's most in-demand experts"
  },
  {
    src: "/icons/calendar.png",
    title: "Book a video call",
    description: "Select a time that works for both you and your expert's schedule"
  },
  {
    src: "/icons/camera.png",
    title: "Virtual consultation",
    description: "Join the 1-on-1 video call, ask questions, and get expert advice"
  }
]

const CTA = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col gap-6 py-2", className)}>
      {CTA_DATA.map(item => (
        <CtaCard
          src={item.src}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  )
}

export default CTA
