import { LogOut, Menu } from "lucide-react"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { useState } from "react"

const MenuSheet = () => {
  const [isLoggedIn] = useState(true);

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu size={28} strokeWidth={2} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="mt-10 gap-3">
            <Link to='/'>
              <Button variant={'secondary'} className="w-full justify-start">Find Mentor</Button>
            </Link>
            <Button variant={'secondary'} className="justify-start">Categories</Button>
            <Button variant={'secondary'} className="justify-start">About Us</Button>
          </SheetHeader>
          <SheetFooter>
            {isLoggedIn ? (
              <>
                <Link to="/login">
                  {/* TODO - delete token from ls */}
                  <Button className="w-full" size={'lg'}>
                    <LogOut />
                    Logout
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to={'/login'}>
                  <Button variant={'secondary'} className="w-full">
                    Login
                  </Button>
                </Link>
                <Link to={'/register'}>
                  <Button className="w-full">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MenuSheet
