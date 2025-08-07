export default function HeroSection() {
  return (
    <div className="relative z-10 flex items-center justify-between px-8 py-12 max-w-7xl mx-auto">
      {/* Left Side - Text Content */}
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <h1 className="text-6xl font-bold text-white mb-4">
            HELLO I'M{' '}
            <span className="inline-block animate-bounce">👋</span>
          </h1>
          <h2 className="text-6xl font-bold text-white mb-6">
            ARPIT RANJAN
          </h2>
          
          {/* Decorative Line */}
          <div className="absolute -top-4 left-32">
            <svg width="120" height="40" viewBox="0 0 120 40" className="text-white">
              <path d="M0,20 Q30,10 60,20 T120,20" stroke="white" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
              <polygon points="115,15 120,20 115,25" fill="white"/>
            </svg>
          </div>
        </div>

        <p className="text-xl text-white mb-8 max-w-lg">
          I focus on making digital experiences that are easy to use, enjoyable, and get the job done.
        </p>

        <button className="border border-red-500 text-white px-8 py-3 rounded-lg flex items-center space-x-2 hover:bg-red-500 transition-colors">
          <span>How I Work</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        {/* Geometric Shapes */}
        <div className="absolute top-20 left-96 opacity-30">
          <div className="w-8 h-8 border-2 border-purple-400 transform rotate-45"></div>
        </div>
        <div className="absolute top-40 left-80 opacity-30">
          <div className="w-6 h-6 border-2 border-purple-400 transform rotate-12"></div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 flex justify-center">
        <div className="relative">
          {/* Placeholder for the person image */}
          <div className="w-80 h-96 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-red-600/20"></div>
            <div className="relative z-10 text-center text-white">
              <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <p className="text-lg font-semibold">Arpit Ranjan</p>
              <p className="text-sm opacity-80">Portfolio Image</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
