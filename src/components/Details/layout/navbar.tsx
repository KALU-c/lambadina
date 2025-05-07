import { ChevronLeft, Menu, Search } from "lucide-react"

const DetailsNavbar = () => {
  return (
    <div className="h-16 flex flex-row items-center justify-between">
      <div className="flex flex-row gap-1 items-center">
        <ChevronLeft size={28} strokeWidth={3} />
        <img
          src="/logo.png"
          alt="lambadina logo"
          className="h-7"
        />
      </div>

      <div className="flex flex-row gap-6">
        <Search size={28} strokeWidth={2} />
        <Menu size={28} strokeWidth={2} />
      </div>
    </div>
  )
}

export default DetailsNavbar
