import Footer from "../Footer"
import { Button } from "../ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { Input } from "../ui/input"
import AuthNavbar from "./AuthNavbar"
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const Register = () => {
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
              <p className="text-center text-2xl">Create Account</p>
              <span className="text-muted-foreground text-lg">Join the Ethiopian Top Freelance Platform</span>
            </div>
          </CardHeader>

          <CardContent className="py-2 flex flex-col space-y-4">
            <div className="flex flex-col gap-1">
              <Label className="text-lg font-light">Username</Label>
              <Input className="h-10 rounded-sm focus-visible:ring-[#FFB000] focus-visible:border-[#FFB000]" />
            </div>

            <div className="flex flex-col gap-1">
              <Label className="text-lg font-light">Email</Label>
              <Input className="h-10 rounded-sm focus-visible:ring-[#FFB000] focus-visible:border-[#FFB000]" />
            </div>

            <div className="flex flex-col gap-1">
              <Label className="text-lg font-light">Password</Label>
              <Input className="h-10 rounded-sm focus-visible:ring-[#FFB000] focus-visible:border-[#FFB000]" />
            </div>

            <div className="flex flex-col gap-1">
              <Label className="text-lg font-light">Confirm Password</Label>
              <Input className="h-10 rounded-sm focus-visible:ring-[#FFB000] focus-visible:border-[#FFB000]" />
            </div>

            <div className="flex flex-col gap-2 py-2">
              <span className="text-lg">I want to join as:</span>
              <RadioGroup defaultValue="option-one" className="flex flex-row gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    className="h-5 w-5 [&_svg]:h-3 [&_svg]:w-3"
                    id="size-large"
                    value="option-one"
                  />
                  <Label htmlFor="option-one" className="text-md font-light">Client</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    className="h-5 w-5 [&_svg]:h-3 [&_svg]:w-3"
                    value="option-two"
                    id="option-two"
                  />
                  <Label htmlFor="option-two" className="text-md font-light">Mentor</Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-1">
            <Button size={'lg'} className="w-full text-lg py-6">
              Create Account
            </Button>
            <p className="text-muted-foreground">
              Already have an account? {" "}
              <span className="underline underline-offset-1 text-[#FFB000]">Sign In</span>
            </p>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </>
  )
}

export default Register
