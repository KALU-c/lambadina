import { ChevronLeft, User2 } from "lucide-react"

const Navbar = () => {
  return (
    <div className="h-16 flex flex-row items-center justify-between">
      <div className="flex flex-row gap-1 items-center">
        <ChevronLeft size={28} strokeWidth={3} />
        <img
          src="/logo.svg"
          alt="lambadina logo"
          className="h-12 bg-red-200"
        />
      </div>

      <User2 size={28} strokeWidth={2} />
    </div>
  )
}

export default Navbar
