import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'

function App() {

  return (
    <main className='pt-[10px] flex flex-col'>
      <div className='px-[22px] flex flex-col space-y-5 mb-10'>
        <Navbar />
        <Home />
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

export default App
