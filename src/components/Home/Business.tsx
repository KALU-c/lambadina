import ExpertsCard from "./layout/experts-card"
import SectionIndicator from "./layout/section-indicator"

const Business = () => {
  return (
    <>
      <SectionIndicator
        mainText="Business"
        text="Launch smarter, grow faster - expert advice for your business!"
      />

      <div className="flex flex-row gap-6 overflow-x-auto scrollbar-hide py-2 -mx-[22px] px-[22px]">
        <ExpertsCard
          src="/images/p10-lg.png"
          name="Ermias Amelga"
          price={10000}
          description="West-educated investment banker turned real estate developer and founder and chairman of Access Real Estate"
          isVerified={true}
        />
        <ExpertsCard
          src="/images/p8-lg.png"
          name="Er. Tsedeke Yihune"
          isVerified={true}
          price={10000}
          description="founder and CEO of Flintstone Homes, a real estate company in Ethiopia."
        />
      </div>
    </>
  )
}

export default Business
