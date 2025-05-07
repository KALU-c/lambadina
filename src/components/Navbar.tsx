import {
  ChevronLeft,
  Menu,
  // User2 
} from "lucide-react"
import {
  Sheet,
  SheetTrigger,
  // SheetDescription,
  SheetContent,
  SheetHeader,
  // SheetTitle,
  SheetFooter
} from "@/components/ui/sheet"
import { Button } from "./ui/button"

const Navbar = () => {
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

      {/* <User2 size={28} strokeWidth={2} /> */}
      <Sheet>
        <SheetTrigger>
          <Menu size={28} strokeWidth={2} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="mt-10 gap-3">
            <Button variant={'secondary'}>Find Mentor</Button>
            <Button variant={'secondary'}>Categories</Button>
            <Button variant={'secondary'}>About Us</Button>
          </SheetHeader>
          <SheetFooter>
            <Button variant={'secondary'}>
              Login
            </Button>
            <Button>
              Sign Up
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Navbar
