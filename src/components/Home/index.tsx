import Navbar from '../Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Footer from '../Footer'
import HomeLayout from './HomeLayout'

const Home = () => {
  return (
    <main className='pt-[10px] flex flex-col'>
      <div className='px-[22px] flex flex-col space-y-5 mb-10'>
        <Navbar />
        <HomeLayout />
      </div>
      <div className="flex flex-col justify-center gap-6 bg-[url('/bg.jpg')] h-[380px] w-full px-10">
        <p className="text-3xl text-center text-white">Sign up free as a client or advisor</p>

        <div className="flex flex-col gap-3">
          <Input className='bg-white h-16 focus-visible:right-0 shadow-none' placeholder='Enter your email' type='email' />
          <Button className='h-14 bg-[#FFB000] text-lg'>
            Submit
          </Button>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Home
