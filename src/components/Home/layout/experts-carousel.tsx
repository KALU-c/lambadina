import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Suspense } from "react"
import ExpertsCarouselSkeleton from "./experts-carousel-skeleton"
import { Link } from "react-router"
import { MENTORS } from "@/constants/mentors"

const ExpertsCarousel = () => {
  // Sort mentors by rating (highest first) and take top 4
  const topRatedMentors = [...MENTORS]
    .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
    .slice(0, 4);

  return (
    <div className="flex flex-col gap-3 py-2">
      <span className="text-muted-foreground text-3xl">Ethiopia's Top Freelance Advisors at Your Fingertips!</span>

      <Suspense fallback={<ExpertsCarouselSkeleton />}>
        <div className="flex flex-row gap-6 overflow-x-auto scrollbar-hide py-2 -mx-[22px] px-[22px]">
          {topRatedMentors.map((mentor) => (
            <Link
              to={`/mentors/${mentor.user.id}`}
              key={mentor.id}
            >
              <Avatar className="h-[96px] w-[96px]">
                <AvatarImage
                  src={mentor.user.profile_picture}
                  alt={`${mentor.user.first_name} ${mentor.user.last_name}`}
                />
                <AvatarFallback>
                  {mentor.user.first_name.charAt(0)}{mentor.user.last_name.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </Link>
          ))}
        </div>
      </Suspense>
    </div>
  )
}

export default ExpertsCarousel