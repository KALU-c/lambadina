import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Suspense } from "react"
import ExpertsCarouselSkeleton from "./experts-carousel-skeleton"

const expertsData = [
  { src: "/images/p2.png", alt: "Er. Tsedeke Yihune" },
  { src: "/images/p3.png", alt: "Tibeb Zewdu" },
  { src: "/images/p1.png", alt: "Ermias Amelga" },
  { src: "/images/p2.png", alt: "Er. Tsedeke Yihune" }
]

const ExpertsCarousel = () => {
  const getInitials = (name: string) => {
    const names = name.split(' ');
    const firstNameInitial = names[0]?.charAt(0).toUpperCase() || '';
    const lastNameInitial = names[names.length - 1]?.charAt(0).toUpperCase() || '';
    return `${firstNameInitial}${lastNameInitial}`;
  }

  return (
    <div className="flex flex-col gap-3 py-2">
      <span className="text-muted-foreground text-3xl">Ethiopia’s Top Freelance Advisors at Your Fingertips!</span>

      <Suspense fallback={<ExpertsCarouselSkeleton />}>
        <div className="flex flex-row gap-6 overflow-x-auto scrollbar-hide py-2 -mx-[22px] px-[22px]">
          {expertsData.map((expert, index) => (
            <Avatar key={index} className="h-[96px] w-[96px]">
              <AvatarImage
                src={expert.src}
                alt={expert.alt}
              />
              <AvatarFallback>{getInitials(expert.alt)}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </Suspense>
    </div>
  )
}

export default ExpertsCarousel
