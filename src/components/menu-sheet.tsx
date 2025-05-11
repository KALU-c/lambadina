import { BadgeInfo, Blend, Languages, LogOut, Menu, User2, UserRoundSearch } from "lucide-react"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetClose
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { useAuth } from "@/hooks/useAuth"
import i18n from "@/lib/i18n"
import { toast } from "sonner"
import { playNotificationSound } from "@/lib/utils"

const MenuSheet = () => {
  const { isAuthenticated, logout } = useAuth();

  const changeLanguage = () => {
    toast.success(`Language changed to ${i18n.language === 'en' ? 'Amharic' : 'English'}`)
    playNotificationSound();
    return i18n.language === 'en' ? i18n.changeLanguage('am') : i18n.changeLanguage('en')
  }

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
            {isAuthenticated && (
              <Link to={"/profile"}>
                <Button variant={'secondary'} className="justify-start items-center py-6 w-full">
                  <User2 className="mr-2" />
                  Profile
                </Button>
              </Link>
            )}
            <Button variant={'secondary'} className="justify-start items-center py-6" disabled>
              <Blend className="mr-2" />
              Categories
            </Button>
            <Button variant={'secondary'} className="justify-start items-center py-6" disabled>
              <BadgeInfo className="mr-2" />
              About Us
            </Button>
          </SheetHeader>
          <SheetFooter>
            <SheetClose>
              <Button variant={'secondary'} className="justify-start items-center w-full" onClick={changeLanguage}>
                <Languages className="mr-2" />
                Change Language
              </Button>
            </SheetClose>
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
