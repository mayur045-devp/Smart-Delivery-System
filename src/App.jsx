import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
    <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-10 text-center max-w-xl w-full">

      <h2 className="text-lg md:text-xl text-gray-600 mb-4 tracking-wide">
        Click below to enter the main application
      </h2>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Smart Delivery System
      </h1>

      <button
        onClick={() => window.open("https://delivery-go.base44.app/login?from_url=https%3A%2F%2Fdelivery-go.base44.app%2FHome", "_blank")}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
      >
        🚀 Launch App
      </button>

    </div>
  </div>
</>
  )
}

export default App
