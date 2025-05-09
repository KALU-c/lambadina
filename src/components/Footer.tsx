import {
  SiInstagram,
  SiX
} from '@icons-pack/react-simple-icons'
import { Separator } from './ui/separator'

const Footer = () => {
  return (
    <div className="bg-[#0C0C0C] text-white px-6 py-8 space-y-4">
      <div className='py-6'>
        <span className='text-2xl font-serif font-bold'>LAMBADINA</span>
        {/* <img
          src="/logo.png"
          alt="lambadina logo"
          className="h-6"
        /> */}
      </div>

      <p className='text-2xl font-extralight pr-10 text-[#E8E4DF]'>
        Book the most in-demand experts & get advice over a video call
      </p>

      <div className='flex flex-col gap-4 py-6'>
        <span className='font-semibold text-xl'>Follow us</span>
        <div className='flex flex-row gap-4 items-center'>
          <div className='p-3 rounded-full bg-white'>
            <SiInstagram color='#000000' />
          </div>
          <div className='p-3 rounded-full bg-white'>
            <SiX color='#000000' />
          </div>
        </div>
      </div>

      <Separator className='bg-[#D8D8D8]' />

      <div className='flex flex-col gap-4 py-4'>
        <p className='font-semibold text-xl'>Company</p>

        <div className='flex flex-col gap-3'>
          <span className='text-lg text-[#E8E4DF] font-light'>About</span>
          <span className='text-lg text-[#E8E4DF] font-light'>Careers</span>
          <span className='text-lg text-[#E8E4DF] font-light'>FAQ</span>
          <span className='text-lg text-[#E8E4DF] font-light'>Gift a session</span>
          <span className='text-lg text-[#E8E4DF] font-light'>Experts</span>
        </div>
      </div>

      <Separator className='bg-[#D8D8D8]' />

      <div className='flex flex-col gap-4 py-4'>
        <p className='font-semibold text-xl'>Support</p>

        <div className='flex flex-col gap-3'>
          <span className='text-lg text-[#E8E4DF] font-light'>Contact</span>
          <span className='text-lg text-[#E8E4DF] font-light'>Give us feedback & earn</span>
          <span className='text-lg text-[#E8E4DF] font-light'>Suggest a feature & earn</span>
          <span className='text-lg text-[#E8E4DF] font-light'>Suggest a new topic or export</span>
          <span className='text-lg text-[#E8E4DF] font-light'>Policy</span>
          <span className='text-lg text-[#E8E4DF] font-light'>Terms</span>
        </div>
      </div>

      <Separator className='bg-[#D8D8D8]' />

      <span className='text-sm font-light text-[#E8E4DF]'>
        @ Lambadina {new Date().getFullYear()}. All rights reserved
      </span>
    </div>
  )
}

export default Footer
