export default function Header() {
  return (
    <header className="relative z-10 flex items-center justify-between px-8 py-6">
      {/* Logo */}
      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Myportfy
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-8">
        <a href="#" className="text-red-400 font-medium">Home</a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors">About</a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors">Services</a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors">Project</a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors">Blog</a>
      </nav>

      {/* CTA Button */}
      <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
        </svg>
        <span>Let's Talk</span>
      </button>
    </header>
  )
}
