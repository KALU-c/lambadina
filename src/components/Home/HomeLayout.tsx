import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import ExpertsCard from "./layout/experts-card"
import SectionIndicator from "./layout/section-indicator"
import SearchExperts from "./layout/search-experts"
import ExpertsCarousel from "./layout/experts-carousel"
import { Separator } from "@/components/ui/separator"
import CTA from "./CTA"
import { Suspense, useState, useMemo } from "react"
import ExpertsCardSkeleton from "./layout/experts-card-skeleton"
import { CATEGORIES, MENTORS } from "@/constants/mentors"

const HomeLayout = () => {
  const [search, setSearch] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('all-experts');

  // Filter mentors based on search query and active tab
  const filteredMentors = useMemo(() => {
    let results = MENTORS;

    // Apply tab filter first
    if (activeTab === 'top-experts') {
      results = results.filter(mentor => parseFloat(mentor.rating) >= 4.5);
    } else if (activeTab === 'business-experts') {
      results = results.filter(mentor =>
        mentor.categories.some(category =>
          category.name.toLowerCase().includes('business')
        )
      );
    } else if (activeTab !== 'all-experts') {
      // Handle category tabs
      const categoryName = activeTab.split('-').join(' ');
      results = results.filter(mentor =>
        mentor.categories.some(category =>
          category.name.toLowerCase() === categoryName.toLowerCase()
        )
      );
    }

    // Then apply search filter if exists
    if (search.trim()) {
      const searchLower = search.toLowerCase();
      results = results.filter(mentor =>
        mentor.user.first_name.toLowerCase().includes(searchLower) ||
        mentor.user.last_name.toLowerCase().includes(searchLower) ||
        mentor.bio.toLowerCase().includes(searchLower) ||
        mentor.categories.some(category =>
          category.name.toLowerCase().includes(searchLower))
      );
    }

    return results;
  }, [search, activeTab]);

  // Group mentors by their primary category (first category listed)
  const groupedMentors = useMemo(() => {
    const groups: Record<string, typeof MENTORS> = {};

    CATEGORIES.forEach(category => {
      const categoryMentors = MENTORS.filter(mentor =>
        mentor.categories[0]?.name === category.name
      );
      if (categoryMentors.length > 0) {
        groups[category.name] = categoryMentors;
      }
    });

    return groups;
  }, []);

  const renderMentorsGrid = (mentors: typeof MENTORS) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {mentors.map(mentor => (
        <Suspense key={mentor.id} fallback={<ExpertsCardSkeleton />}>
          <ExpertsCard mentor={mentor} />
        </Suspense>
      ))}
    </div>
  );

  const renderMentorsList = (mentors: typeof MENTORS) => (
    <div className="flex flex-row gap-6 overflow-x-auto scrollbar-hide py-2 -mx-[22px] px-[22px]">
      {mentors.map(mentor => (
        <Suspense key={mentor.id} fallback={<ExpertsCardSkeleton />}>
          <ExpertsCard mentor={mentor} />
        </Suspense>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col space-y-4">
      <SearchExperts
        search={search}
        setSearch={setSearch}
      />

      {(!search || search.trim() === "") ? (
        <>
          <ExpertsCarousel />

          {/* Main Experts Tab */}
          <div>
            <Tabs
              defaultValue="all-experts"
              className="w-full"
              onValueChange={(value) => setActiveTab(value)}
            >
              <TabsList className="bg-transparent overflow-x-scroll max-w-full scrollbar-thin">
                <TabsTrigger value="all-experts">All Experts</TabsTrigger>
                <TabsTrigger value="top-experts">Top Experts</TabsTrigger>
                <TabsTrigger value="business-experts">Business</TabsTrigger>
              </TabsList>

              <TabsContent value="all-experts">
                <SectionIndicator
                  highlightMainText={false}
                  mainText="All Experts."
                  text="Browse through our diverse pool of experts"
                />
                {renderMentorsList(MENTORS)}
              </TabsContent>

              <TabsContent value="top-experts">
                <SectionIndicator
                  highlightMainText={false}
                  mainText="Top Rated Experts."
                  text="Highly rated by our community"
                />
                {renderMentorsList(MENTORS.filter(mentor => parseFloat(mentor.rating) >= 4.5))}
              </TabsContent>

              <TabsContent value="business-experts">
                <SectionIndicator
                  highlightMainText={false}
                  mainText="Business Experts."
                  text="Experts in business strategy and growth"
                />
                {renderMentorsList(MENTORS.filter(mentor =>
                  mentor.categories.some(category =>
                    category.name.toLowerCase().includes('business')
                  )
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Category Sections */}
          {Object.entries(groupedMentors).map(([categoryName, mentors]) => (
            <div key={categoryName}>
              <SectionIndicator
                highlightMainText={false}
                mainText={categoryName}
                text={CATEGORIES.find(c => c.name === categoryName)?.description || ''}
              />
              <div className="flex flex-row gap-6 overflow-x-auto scrollbar-hide py-2 -mx-[22px] px-[22px]">
                {mentors.map(mentor => (
                  <Suspense key={mentor.id} fallback={<ExpertsCardSkeleton />}>
                    <ExpertsCard mentor={mentor} />
                  </Suspense>
                ))}
              </div>
            </div>
          ))}

          <Separator orientation="horizontal" className="border" />

          <CTA />
        </>
      ) : (
        <div className="py-4">
          {filteredMentors.length > 0 ? (
            <>
              <SectionIndicator
                className="pb-6"
                highlightMainText={false}
                mainText="Search Results."
                text={`Found ${filteredMentors.length} mentors matching "${search}"`}
              />
              {renderMentorsGrid(filteredMentors)}
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-lg text-gray-500">No mentors found matching your search.</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default HomeLayout