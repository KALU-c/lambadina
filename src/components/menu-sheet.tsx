import { BadgeInfo, Blend, LogOut, Menu, User2, UserRoundSearch } from "lucide-react"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { useAuth } from "@/hooks/useAuth"

const MenuSheet = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu size={28} strokeWidth={2} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="mt-10 gap-3">
            <Link to='/'>
              <Button variant={'secondary'} className="w-full justify-start items-center py-6">
                <UserRoundSearch className="mr-2" />
                Find Mentor
              </Button>
            </Link>
            <Button variant={'secondary'} className="justify-start items-center py-6" disabled>
              <Blend className="mr-2" />
              Categories
            </Button>
            <Link to={"/profile"}>
              <Button variant={'secondary'} className="justify-start items-center py-6 w-full">
                <User2 className="mr-2" />
                Profile
              </Button>
            </Link>
            <Button variant={'secondary'} className="justify-start items-center py-6" disabled>
              <BadgeInfo className="mr-2" />
              About Us
            </Button>
          </SheetHeader>
          <SheetFooter>
            {isAuthenticated ? (
              <>
                <Button className="w-full" size={'lg'} onClick={logout}>
                  <LogOut />
                  Logout
                </Button>
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
