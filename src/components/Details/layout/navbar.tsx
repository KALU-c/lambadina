import { ChevronLeft, Menu, Search } from "lucide-react"
import {
  Sheet,
  SheetTrigger,
  // SheetDescription,
  SheetContent,
  SheetHeader,
  // SheetTitle,
  SheetFooter
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"

const DetailsNavbar = () => {
  return (
    <div className="h-16 flex flex-row items-center justify-between">
      <Link to={"/"}>
        <div className="flex flex-row gap-1 items-center">
          <ChevronLeft size={28} strokeWidth={3} />
          <img
            src="/logo.png"
            alt="lambadina logo"
            className="h-7"
          />
        </div>
      </Link>

      <div className="flex flex-row gap-6">
        <Search size={28} strokeWidth={2} />
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
    </div>
  )
}

export default DetailsNavbar
