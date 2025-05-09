import ExpertsCard from "./layout/experts-card"
import SectionIndicator from "./layout/section-indicator"

const CreativeAndMedia = () => {
  return (
    <>
      <SectionIndicator
        highlightMainText={false}
        mainText="Creative & Media Services"
        text="Your story, beautifully told – visuals & media that sell! and more."
      />

      <div className="flex flex-row gap-6 overflow-x-auto scrollbar-hide py-2 -mx-[22px] px-[22px]">
        <ExpertsCard
          src="/images/p11-lg.png"
          name="Mulatu Astatke"
          price={20000}
          isVerified={true}
          description="World renowned hair artist. Father of Ethio Jazz 1 Million monthly listeners"
        />
        <ExpertsCard
          src="/images/p15-lg.png"
          name="Girum Ermias"
          isVerified={true}
          price={15000}
          description="CEO, celebrity stylist, author, and television show creator"
        />
      </div>
    </>
  )
}

export default CreativeAndMedia
