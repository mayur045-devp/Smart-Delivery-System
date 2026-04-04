import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)


return (
  <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-8 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          
          {/* Left Side - Delivery Truck Image */}
          <div className="flex-1 space-y-6">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 shadow-2xl">
                {/* Delivery Truck SVG Illustration */}
                <div className="flex justify-center items-center">
                  <svg className="w-64 h-64 text-white" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Truck Body */}
                    <rect x="20" y="50" width="120" height="60" rx="8" fill="white" fillOpacity="0.95" />
                    <rect x="20" y="50" width="120" height="60" rx="8" stroke="currentColor" strokeWidth="2" />
                    
                    {/* Truck Cargo Area */}
                    <rect x="25" y="55" width="80" height="50" rx="4" fill="currentColor" fillOpacity="0.2" />
                    
                    {/* Delivery Boxes */}
                    <rect x="35" y="65" width="20" height="15" rx="2" fill="currentColor" fillOpacity="0.8" />
                    <rect x="60" y="70" width="18" height="12" rx="2" fill="currentColor" fillOpacity="0.6" />
                    <rect x="45" y="85" width="22" height="14" rx="2" fill="currentColor" fillOpacity="0.7" />
                    
                    {/* Truck Cabin */}
                    <path d="M140 50 L140 30 L160 30 L170 45 L170 50 Z" fill="white" fillOpacity="0.95" stroke="currentColor" strokeWidth="2" />
                    
                    {/* Window */}
                    <path d="M145 35 L155 35 L162 45 L145 45 Z" fill="currentColor" fillOpacity="0.3" />
                    
                    {/* Wheels */}
                    <circle cx="45" cy="110" r="14" fill="white" stroke="currentColor" strokeWidth="2.5" />
                    <circle cx="45" cy="110" r="6" fill="currentColor" />
                    <circle cx="115" cy="110" r="14" fill="white" stroke="currentColor" strokeWidth="2.5" />
                    <circle cx="115" cy="110" r="6" fill="currentColor" />
                    
                    {/* Headlight */}
                    <circle cx="168" cy="55" r="3" fill="currentColor" />
                    
                    {/* Road Line */}
                    <line x1="20" y1="125" x2="180" y2="125" stroke="currentColor" strokeWidth="2" strokeDasharray="8 6" />
                    
                    {/* Speed Lines */}
                    <line x1="175" y1="65" x2="185" y2="65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="177" y1="70" x2="187" y2="70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="175" y1="75" x2="185" y2="75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                
                {/* Live Tracking Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex justify-between items-center text-white">
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                        <span className="text-sm font-medium">📍 Live Tracking</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium">On Time</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-2xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-gray-600">Delivery Success</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-2xl font-bold text-blue-600">30 min</div>
                <div className="text-sm text-gray-600">Avg Delivery Time</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-2xl font-bold text-blue-600">50k+</div>
                <div className="text-sm text-gray-600">Daily Deliveries</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content & Button */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-semibold">AI-Powered Logistics Platform</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-800">Smart </span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Delivery System
              </span>
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Transform your logistics with AI-optimized routes, 
              real-time tracking, and lightning-fast deliveries. 
              Join thousands of businesses already using our platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => window.open("https://delivery-go.base44.app/login?from_url=https%3A%2F%2Fdelivery-go.base44.app%2FHome", "_blank")}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
              >
                🚀 Launch Application
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              <button className="px-8 py-4 bg-white border-2 border-gray-300 rounded-full text-gray-700 font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                Watch Demo
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                Trusted by <span className="font-bold text-gray-800">10,000+</span> businesses
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

}

export default App