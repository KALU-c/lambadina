import ExpertsCard from "./layout/experts-card"
import SectionIndicator from "./layout/section-indicator"

const TechAndDigital = () => {
  return (
    <>
      <SectionIndicator
        highlightMainText={false}
        mainText="Tech & Digital Services"
        text="Build, market, and scale - tech solutions tailored for your success."
      />

      <div className="flex flex-row gap-6 overflow-x-auto scrollbar-hide py-2 -mx-[22px] px-[22px]">
        <ExpertsCard
          src="/images/p7-lg.png"
          name="Zelalem Weldemariam"
          isVerified={true}
          price={12000}
          description="World renowned hair artist. Clients include Oprah, Michelle Obama, and more"
        />
        <ExpertsCard
          src="/images/p12-lg.png"
          name="Ezedin Kamil"
          price={10000}
          description="CEO, celebrity stylist, author, and television show creator (The Rachel Zoe Project)"
        />
      </div>
    </>
  )
}

export default TechAndDigital
