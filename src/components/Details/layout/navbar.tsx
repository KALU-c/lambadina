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
        <Sheet>
          <SheetTrigger>
            <Menu size={28} strokeWidth={2} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              {/* <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </SheetDescription> */}
            </SheetHeader>
            <SheetFooter>
              <Button>
                Logout
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

export default DetailsNavbar
