import { Menu } from "lucide-react"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"

const MenuSheet = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu size={28} strokeWidth={2} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="mt-10 gap-3">
            <Link to='/'>
              <Button variant={'secondary'} className="w-full">Find Mentor</Button>
            </Link>
            <Button variant={'secondary'}>Categories</Button>
            <Button variant={'secondary'}>About Us</Button>
          </SheetHeader>
          <SheetFooter>
            <Link to={'login'}>
              <Button variant={'secondary'} className="w-full">
                Login
              </Button>
            </Link>
            <Link to={'/register'}>
              <Button className="w-full">
                Sign Up
              </Button>
            </Link>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MenuSheet
