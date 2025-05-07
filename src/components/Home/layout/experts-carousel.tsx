import { Avatar, AvatarImage } from "@/components/ui/avatar"

const ExpertsCarousel = () => {
  return (
    <div className="flex flex-col gap-3 py-2">
      <span className="text-muted-foreground text-3xl">Ethiopia’s Top Freelance Advisors at Your Fingertips!</span>

      <div className="flex flex-row gap-6 overflow-x-auto scrollbar-hide py-2 -mx-[22px] px-[22px]">
        <Avatar className="h-[96px] w-[96px]">
          <AvatarImage
            src="/images/p2.png"
            alt="@shadcn"
          />
          {/* <AvatarFallback>CN</AvatarFallback> */}
        </Avatar>

        <Avatar className="h-[96px] w-[96px]">
          <AvatarImage
            src="/images/p3.png"
            alt="@shadcn"
          />
          {/* <AvatarFallback>CN</AvatarFallback> */}
        </Avatar>

        <Avatar className="h-[96px] w-[96px]">
          <AvatarImage
            src="/images/p1.png"
            alt="@shadcn"
          />
          {/* <AvatarFallback>CN</AvatarFallback> */}
        </Avatar>

        <Avatar className="h-[96px] w-[96px]">
          <AvatarImage
            src="/images/p2.png"
            alt="@shadcn"
          />
          {/* <AvatarFallback>CN</AvatarFallback> */}
        </Avatar>
      </div>
    </div>
  )
}

export default ExpertsCarousel
