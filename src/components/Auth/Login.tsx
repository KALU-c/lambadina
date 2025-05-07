import { Link } from "react-router"
import Footer from "../Footer"
import { Button } from "../ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { Input } from "../ui/input"
import AuthNavbar from "./AuthNavbar"
import { Label } from '@/components/ui/label'

const Login = () => {
  return (
    <>
      <main className="px-[22px] pt-[10px] flex flex-col space-y-6 mb-14">
        <AuthNavbar />

        <Card>
          <CardHeader className="flex flex-col gap-8 items-center justify-center">
            <img
              src="/logo.png"
              alt="lambadina logo"
              className="h-8 text-center"
            />

            <div className="flex flex-col">
              <p className="text-center text-2xl">Welcome Back</p>
              <span className="text-muted-foreground text-lg">Sign in to continue to Lambadina</span>
            </div>
          </CardHeader>

          <CardContent className="py-2 flex flex-col space-y-4">
            <div className="flex flex-col gap-1">
              <Label className="text-lg font-light">Username</Label>
              <Input className="h-10 rounded-sm focus-visible:ring-[#FFB000] focus-visible:border-[#FFB000]" />
            </div>

            <div className="flex flex-col gap-1">
              <Label className="text-lg font-light">Password</Label>
              <Input className="h-10 rounded-sm focus-visible:ring-[#FFB000] focus-visible:border-[#FFB000]" />
            </div>

          </CardContent>
          <CardFooter className="flex flex-col gap-1">
            <Button size={'lg'} className="w-full text-lg py-6">
              Sign In
            </Button>
            <p className="text-muted-foreground">
              Don't have an account? {" "}
              <Link to={'/register'}>
                <span className="underline underline-offset-1 text-[#FFB000]">Register</span>
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </>
  )
}

export default Login
