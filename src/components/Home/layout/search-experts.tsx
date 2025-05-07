import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const SearchExperts = () => {
  return (
    <div className="flex items-center bg-[#e5e7eb] px-2 pr-4 h-12 rounded-full">
      <Input
        placeholder="Search an expert"
        className="border-0 focus-visible:ring-0 shadow-none"
      />
      <Search />
    </div>
  )
}

export default SearchExperts
