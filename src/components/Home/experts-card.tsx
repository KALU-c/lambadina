import { BadgeCheck, Heart } from "lucide-react"
import {
  Card,
  CardContent,
} from "../ui/card"
import { useState } from "react"

type ExpertsCardProps = {
  src: string
  name: string
  price: number
  description: string
}

const ExpertsCard = ({
  src,
  name,
  price,
  description
}: ExpertsCardProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <Card className="max-w-[210px] flex-shrink-0 shadow-none pt-0 border-none">
      <CardContent className="p-0 flex flex-col gap-3">
        <div className="relative w-[210px] min-h-[240px]">
          <img
            src={src}
            className="w-[210px] h-[240px] object-cover rounded-[8px]"
          />
          <Heart
            className="absolute right-3 top-3"
            color={liked ? "red" : "#cdcbca"}
            fill={liked ? "red" : "transparent"}
            onClick={() => setLiked(!liked)}
          />
        </div>
        <div>
          <h2 className="font-medium text-lg flex flex-row gap-[2px] items-center">
            {name}
            <BadgeCheck fill="#ffb102" color="#ffffff" size={20} />
          </h2>
          <p>ETB {price} • Session</p>
          <p className="mt-1 text-md text-muted-foreground line-clamp-3">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
export default ExpertsCard
