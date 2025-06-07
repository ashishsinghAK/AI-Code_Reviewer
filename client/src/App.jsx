import { useState } from 'react'
import Code from "./Component/Code"
import Review from "./Component/Review"

import './App.css'

function App() {

  return (
    <div className="text-white flex flex-col sm:flex-row justify-around gap-3 sm:gap-1 bg-gray-800">
      <Code />
      <Review />
    </div>

  )
}

export default App
