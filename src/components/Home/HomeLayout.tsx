import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ExpertsCard from "./layout/experts-card"
import SectionIndicator from "./layout/section-indicator"
import Business from "./Business"
import Wellness from "./Wellness"
import LegalAndCompliance from "./LegalAndCompliance"
import TechAndDigital from "./TechAndDigital"
import CreativeAndMedia from "./CreativeAndMedia"
import SearchExperts from "./layout/search-experts"
import ExpertsCarousel from "./layout/experts-carousel"
import { Separator } from "@/components/ui/separator"
import CTA from "./CTA"
import { Suspense, useState } from "react"
import ExpertsCardSkeleton from "./layout/experts-card-skeleton"
import { MENTORS } from "@/constants/mentors"

const HomeLayout = () => {
  const [search, setSearch] = useState<string>('');

  return (
    <div className="flex flex-col space-y-4">
      <SearchExperts
        search={search}
        setSearch={setSearch}
      />

      {(!search || search.trim() === "") ? (
        <>
          <ExpertsCarousel />

          {/* Experts Tab */}
          <div>
            <Tabs defaultValue="all-experts" className="w-full">
              <TabsList className="bg-transparent overflow-x-auto max-w-full scrollbar-thin">
                <TabsTrigger value="all-experts">All Experts</TabsTrigger>
                <TabsTrigger value="top-experts">Top Experts</TabsTrigger>
                <TabsTrigger value="business-experts">Business Experts</TabsTrigger>
              </TabsList>
              {/* <TabsContent value="all-experts">All experts</TabsContent>
    <TabsContent value="top-experts">Top Experts</TabsContent>
    <TabsContent value="business-experts">Business Experts</TabsContent> */}
            </Tabs>

          </div>

          <SectionIndicator
            highlightMainText={false}
            mainText="Top Experts."
            text="Access to the best experts has never been easier"
          />

          <div className="flex flex-row gap-6 overflow-x-auto scrollbar-hide py-2 -mx-[22px] px-[22px]">
            {MENTORS.map(mentor => (
              <Suspense fallback={<ExpertsCardSkeleton />}>
                <ExpertsCard mentor={mentor} />
              </Suspense>
            ))}
          </div>

          <Business />
          <Wellness />
          <LegalAndCompliance />
          <TechAndDigital />
          <CreativeAndMedia />

          <Separator orientation="horizontal" className="border" />

          <CTA />
        </>
      ) : (
        <div className="py-4">
          <ExpertsCardSkeleton />
        </div>
      )}
    </div>
  )
}

export default HomeLayout
