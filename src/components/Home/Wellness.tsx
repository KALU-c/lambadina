import ExpertsCard from "./layout/experts-card"
import SectionIndicator from "./layout/section-indicator"

const Wellness = () => {
  return (
    <>
      <SectionIndicator
        mainText="Wellness"
        text="Connect with nutritionist, trainers, & more about living healthier life"
      />

      <div className="flex flex-row gap-6 overflow-x-auto scrollbar-hide py-2 -mx-[22px] px-[22px]">
        <ExpertsCard
          src="/images/p14-lg.png"
          name="Dr Helina Yohannes"
          price={2500}
          description="Health And Wellness Coach - Platinum Health and Fitness"
        />
        <ExpertsCard
          src="/images/p6-lg.png"
          name="Teshome Tesfaye"
          price={5000}
          description="Founder & Lead Instructor of Forma Pilates, mamdkoa dkdeajdwa doija"
        />
      </div>
    </>
  )
}

export default Wellness
