import { useParams } from "react-router"
import DetailsNavbar from "./layout/navbar";
import { Star } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import AboutMe from "./AboutMe";
import Profile from "./Profile";
import Pricing from "./Pricing";

const Details = () => {
  const { expertName } = useParams();

  return (
    <main className='pt-[10px] flex flex-col mb-32'>
      <div className='px-[22px] flex flex-col space-y-5'>
        <DetailsNavbar />

        <div className="flex flex-row gap-2 text-lg">
          Intro / Expert Marketplace /
          <span className="text-muted-foreground">{expertName}</span>
        </div>

        <Profile />
        <Separator />

        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col gap-0">
              <p className="text-muted-foreground text-lg">Starting From</p>
              <p className="text-xl font-medium">5000 ETB</p>
            </div>
            <Button size={'xlg'}>
              See Plans
            </Button>
          </div>

          <div className="flex flex-row gap-0 items-center">
            <Star size={16} color="#FFB000" fill="#FFB000" />
            <Star size={16} color="#FFB000" fill="#FFB000" />
            <Star size={16} color="#FFB000" fill="#FFB000" />
            <Star size={16} color="#FFB000" fill="#FFB000" />
            <Star size={16} color="#FFB000" />
            <p className="ml-2 text-[#FFB000]">5.0 <span className="text-muted-foreground">(27)</span></p>
          </div>
        </div>

        <AboutMe />
        <Pricing />
      </div>


    </main>
  )
}

export default Details
