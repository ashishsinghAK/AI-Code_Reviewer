// App.jsx
import { useState } from 'react'
import Code from "./Component/Code"
import Review from "./Component/Review"
import './App.css'
import HeroSection from './Component/HeroSection'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden">
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            SnipAI
          </h1>
          
        </div>
      </header>
      
      <main className="container mx-auto px-4">
        <HeroSection />
        <Code />
      </main>
      
      <footer className="bg-gray-900/50 border-t border-gray-800 py-8 mt-12">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2025 SnipAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App