import { BadgeCheck, Heart } from "lucide-react"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router"

type ExpertsCardProps = {
  src: string
  name: string
  price: number
  description: string
  isVerified?: boolean
}

const ExpertsCard = ({
  src,
  name,
  price,
  description,
  isVerified = false
}: ExpertsCardProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <Card className="max-w-[210px] flex-shrink-0 shadow-none pt-0 border-none">
      <CardContent className="p-0 flex flex-col gap-3">
        <div className="relative w-[210px] min-h-[240px]">
          <Link to={`/experts/${name}`}>
            {/* TODO - add fallback image */}
            <img
              src={src}
              className="w-[210px] h-[240px] object-cover rounded-[8px]"
            />
          </Link>
          <Heart
            className="absolute right-3 top-3"
            color={liked ? "red" : "#cdcbca"}
            fill={liked ? "red" : "transparent"}
            onClick={() => setLiked(!liked)}
          />
          <Badge
            className="absolute bottom-2 left-2"
            variant={'secondary'}
          >
            Top Expert
          </Badge>
        </div>
        <Link to={`/experts/${name}`}>
          <div>
            <h2 className="font-medium text-lg flex flex-row gap-[2px] items-center">
              {name}
              {isVerified && <BadgeCheck fill="#ffb102" color="#ffffff" size={20} />}
            </h2>
            <p>ETB {price} • Session</p>
            <p className="mt-1 text-md text-muted-foreground line-clamp-3">
              {description}
            </p>
          </div>
        </Link>
      </CardContent>
    </Card>
  )
}
export default ExpertsCard
