import ExpertsCard from "./layout/experts-card"
import SectionIndicator from "./layout/section-indicator"

const LegalAndCompliance = () => {
  return (
    <>
      <SectionIndicator
        mainText="Legal & Compliance"
        text="Stay compliant, avoid risks - legal help made simple."
      />

      <div className="flex flex-row gap-6 overflow-x-auto scrollbar-hide py-2 -mx-[22px] px-[22px]">
        <ExpertsCard
          src="/images/p9-lg.png"
          name="Tibebe Zewdu"
          price={2000}
          description="licensed to practice law at all levels of federal courts and has more than two decades of experience"
        />
        <ExpertsCard
          src="/images/p13-lg.png"
          name="Dr. Taddese Lencho"
          isVerified={true}
          price={500}
          description="He has advised, assisted and represented clients in corporate, investment, tax, M & A, private equity, and financing of investments and infrastructure developments in Ethiopia."
        />
      </div>
    </>
  )
}

export default LegalAndCompliance
