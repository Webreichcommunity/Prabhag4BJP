import React from 'react'

const App = () => {
  return (
    <div className="m-10 ">
      {/* Background Image */}
      <img
        src="/whatsapp.jpeg" // Update this with your actual image filename
        alt="Full Screen Background"
        className="w-full h-full object-cover"
        loading="eager" // Load immediately without lazy loading
        decoding="async" // Async decoding for better performance
      />
      
      {/* Optional Overlay Content */}
      <div className="absolute inset-0 m-10 flex items-center justify-center">
        {/* <div className="text-center text-gray-900">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Jannetaa Election App
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-md">
            Empowering Democracy
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default App