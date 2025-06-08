import { useState } from 'react'
import Code from "./Component/Code"
import Review from "./Component/Review"

import './App.css'
import HeroSection from './Component/HeroSection'

function App() {

  return (
    <div className="text-white gap-3 flex-col items-center justify-center sm:gap-1
     bg-[radial-gradient(circle_at_center,_#007BFF_0%,_#111_40%,_#000_100%)] sm:min-w-screen
overflow-x-hidden w-[100%]">
      <header className='p-2 text-yellow-500 font-extrabold'>SnipAI</header>
      <HeroSection />
      <div className='overflow-x-hidden w-[100vw]'><Code /></div>
    </div>

  )
}

export default App
