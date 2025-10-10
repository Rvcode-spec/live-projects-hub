"use client"
import React from 'react'
import Image from 'next/image'
import { Video } from 'lucide-react'

export default function page() {


  return (
    <div className='bg-amber-50 w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-16'>
      <div className='w-full md:min-w-1.5 py-16 md:py-20 flex flex-col justify-center'>
        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-center md:text-left leading-tight'>
          <span className='text-blue-900'>Learning</span> Made Smart with Codeyaan
        </h1>
        <p className="text-sm md:text-base mb-6 text-gray-600 text-center">
          Codeyaan helps you learn, grow, and build your career in tech.
          Log in to continue your journey or create a new account to get started!
        </p>

        <div className='flex flex-col sm:flex-row gap-4 font-medium justify-center md:justify-start'>
          <button className='bg-gradient-to-r from-blue-700 to-blue-500 text-white text-base md:text-lg px-6 py-3 md:py-3.5 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300'>
            Get Started
          </button>
          <button className='bg-white text-blue-900 border-2 border-blue-900 px-6 py-3 md:py-3.5 text-base md:text-lg rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2'>
            <Video className='w-5 h-5' />
            Watch how it works
          </button>
        </div>
      </div>

      <div className='w-full md:w-1/2 flex items-center justify-center py-8 md:py-0'>
        <Image
          src="/student.svg"
          width={600}
          height={600}
          alt="Student with books"
          className='w-full max-w-sm md:max-w-lg object-contain'
        />
      </div>
    </div>
  )
}
