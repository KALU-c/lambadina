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
import { changeLanguage } from "@/lib/utils"
import { useTranslation } from "react-i18next"

const MenuSheet = () => {
  const { t } = useTranslation();
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
                {t('find_mentor')}
              </Button>
            </Link>
            {isAuthenticated && (
              <Link to={"/profile"}>
                <Button variant={'secondary'} className="justify-start items-center py-6 w-full">
                  <User2 className="mr-2" />
                  {t('profile')}
                </Button>
              </Link>
            )}
            <Button variant={'secondary'} className="justify-start items-center py-6" disabled>
              <Blend className="mr-2" />
              {t('categories')}
            </Button>
            <Button variant={'secondary'} className="justify-start items-center py-6" disabled>
              <BadgeInfo className="mr-2" />
              {t('about_us')}
            </Button>
          </SheetHeader>
          <SheetFooter>
            <SheetClose>
              <Button variant={'secondary'} className="justify-start items-center w-full" onClick={changeLanguage}>
                <Languages className="mr-2" />
                {t('change_language')}
              </Button>
            </SheetClose>
            {isAuthenticated ? (
              <>
                <Button className="w-full" size={'lg'} onClick={logout}>
                  <LogOut />
                  {t('logout')}
                </Button>
              </>
            ) : (
              <>
                <Link to={'/login'}>
                  <Button variant={'secondary'} className="w-full">
                    {t('login')}
                  </Button>
                </Link>
                <Link to={'/register'}>
                  <Button className="w-full">
                    {t('sign_up')}
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
