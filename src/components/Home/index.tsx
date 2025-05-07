import { Search } from "lucide-react"
import { Input } from "../ui/input"
import { Avatar, AvatarImage } from "../ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"

const Home = () => {
  return (
    <div className="flex flex-col space-y-2">
      {/* Search input */}
      <div className="flex items-center bg-[#e5e7eb] px-2 pr-4 h-12 rounded-full">
        <Input
          placeholder="Search an expert"
          className="border-0 focus-visible:ring-0 shadow-none"
        />
        <Search />
      </div>

      {/* Experts image carousel */}
      <div className="flex flex-col gap-3 py-2">
        <span className="text-muted-foreground text-3xl">Ethiopia’s Top Freelance Advisors at Your Fingertips!</span>

        <div className="flex flex-row gap-6 overflow-x-auto scrollbar-hide py-2 -mx-[22px] px-[22px]">
          <Avatar className="h-[96px] w-[96px]">
            <AvatarImage
              src="/images/p2.png"
              alt="@shadcn"
            />
            {/* <AvatarFallback>CN</AvatarFallback> */}
          </Avatar>

          <Avatar className="h-[96px] w-[96px]">
            <AvatarImage
              src="/images/p3.png"
              alt="@shadcn"
            />
            {/* <AvatarFallback>CN</AvatarFallback> */}
          </Avatar>

          <Avatar className="h-[96px] w-[96px]">
            <AvatarImage
              src="/images/p1.png"
              alt="@shadcn"
            />
            {/* <AvatarFallback>CN</AvatarFallback> */}
          </Avatar>

          <Avatar className="h-[96px] w-[96px]">
            <AvatarImage
              src="/images/p2.png"
              alt="@shadcn"
            />
            {/* <AvatarFallback>CN</AvatarFallback> */}
          </Avatar>
        </div>
      </div>

      {/* Experts Tab */}
      <div>
        <Tabs defaultValue="all-experts" className="w-full">
          <TabsList className="bg-transparent">
            <TabsTrigger value="all-experts">All Experts</TabsTrigger>
            <TabsTrigger value="top-experts">Top Experts</TabsTrigger>
            <TabsTrigger value="business-experts">Business Experts</TabsTrigger>
          </TabsList>
          {/* <TabsContent value="all-experts">All experts</TabsContent>
          <TabsContent value="top-experts">Top Experts</TabsContent>
          <TabsContent value="business-experts">Business Experts</TabsContent> */}
        </Tabs>

      </div>
    </div>
  )
}

export default Home
