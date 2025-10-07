





"use client"
import React from 'react'
import Image from 'next/image'
import { Video } from 'lucide-react'

export default function page() {
  return (
    <div className=' bg-amber-50 w-full min-h-screen flex items-center justify-center'>
      <div className='min-h-screen min-w-1.5 py-24 px-10'>
        <h1 className='text-4xl font-bold mb-2'>
          <span className='text-blue-900'>Learning</span> Made Smart with Codeyaan
        </h1>
        <p className='text-lg mb-6'>Codeyaan is your personalized online learning platform where you can master coding, explore new technologies, and build your dream career with expert guidance.</p>

        <div className='flex space-x-4 font-medium'>
          <button className=' bg-gradient-to-b  to-blue-600 from-purple-800 text-white md:text-lg px-6 py-4  rounded-xl hover:bg-blue-800 hover:scale-105 transition'>Get Started</button>
          <button className='bg-white text-blue-900 border border-blue-900 px-6 py-4  md:text-lg  rounded-xl hover:bg-gray-100 transition hover:scale-105  '>
            <Video className='w-5 h-5 inline-block mr-2' />
            Watch how it works</button>
      </div>
      </div>

      <div className='text-center min-h-screen w-2/5 py-0 px-0 '>
        <Image src="/student.svg" width={500} height={500} alt="contactus" />
      </div>
    </div>

  )
}




