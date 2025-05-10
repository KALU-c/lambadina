import { Link, useParams } from "react-router"
import DetailsNavbar from "./layout/navbar";
import { Star } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import AboutMe from "./AboutMe";
import Profile from "./Profile";
import Pricing from "./Pricing";
import CTA from "../Home/CTA";
import FAQ from "./FAQ-accordion";
import Footer from "../Footer";
import { useLayoutEffect, useRef, useState } from "react";
import type { MentorProfile } from "@/types/mentor";
import { MENTORS } from "@/constants/mentors";

const Details = () => {
  const [mentor, setMentor] = useState<MentorProfile>();
  const pricingRef = useRef<null | HTMLDivElement>(null);
  const { mentorId } = useParams();

  useLayoutEffect(() => {
    {/* Make API request */ }
    setMentor(MENTORS.find(mentor => mentor.id === Number(mentorId)));
  }, [mentorId])

  if (!mentor) return <div>Loading...</div>

  return (
    <main className='pt-[10px] flex flex-col'>
      <div className='px-[22px] flex flex-col space-y-6'>
        <DetailsNavbar />

        <div className="flex flex-row gap-2 text-lg flex-wrap">
          <Link to={'/'}>Mentors</Link>
          /
          <span className="text-muted-foreground">{mentor?.user.first_name}{" "}{mentor?.user.last_name}</span>
        </div>

        <Profile
          src={mentor.user.profile_picture ?? "/"}
          name={mentor?.user.first_name + " " + mentor?.user.last_name}
        />
        <Separator />

        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col gap-0">
              <p className="text-muted-foreground text-lg">Starting From</p>
              <p className="text-xl font-medium">{mentor?.price_per_minute} ETB</p>
            </div>
            <Button size={'xlg'} onClick={() => pricingRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' })}>
              See Plans
            </Button>
          </div>

          <div className="flex flex-row gap-0 items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                color="#FFB000"
                fill={i < Math.floor(parseFloat(mentor!.rating)) ? "#FFB000" : "none"}
              />
            ))}
            {/* TODO - rating list 404 in the API */}
            <p className="ml-2 text-[#FFB000]">{mentor?.rating} <span className="text-muted-foreground">(27)</span></p>
          </div>
        </div>

        <AboutMe />
        <Pricing ref={pricingRef} />

        <CTA
          className="flex flex-row gap-6 overflow-x-auto scrollbar-hide py-2 -mx-[22px] px-[22px]"
        />

        <Separator />

        <FAQ />
      </div>

      <Footer />
    </main>
  )
}

export default Details
