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
import { useLayoutEffect, useRef } from "react";

const Details = () => {
  const pricingRef = useRef<null | HTMLDivElement>(null);
  const { expertName } = useParams();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='pt-[10px] flex flex-col'>
      <div className='px-[22px] flex flex-col space-y-6'>
        <DetailsNavbar />

        <div className="flex flex-row gap-2 text-lg flex-wrap">
          <Link to={'/'}>Experts</Link>
          /
          <span className="text-muted-foreground">{expertName}</span>
        </div>

        <Profile name={expertName} />
        <Separator />

        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col gap-0">
              <p className="text-muted-foreground text-lg">Starting From</p>
              <p className="text-xl font-medium">5000 ETB</p>
            </div>
            <Button size={'xlg'} onClick={() => pricingRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' })}>
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
