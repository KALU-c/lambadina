import {
  ChevronLeft,
} from "lucide-react"
import MenuSheet from "./menu-sheet"

const Navbar = () => {
  return (
    <div className="h-16 flex flex-row items-center justify-between">
      <div className="flex flex-row gap-1 items-center">
        <ChevronLeft size={28} strokeWidth={3} />
        <img
          src="/logo.png"
          alt="lambadina logo"
          className="h-6"
        />
      </div>

      <MenuSheet />
    </div>
  )
}

export default Navbar
