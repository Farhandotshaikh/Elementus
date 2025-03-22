import React, { useState } from "react"
import { Link } from "react-router-dom"
import  Logo  from "./components/logo1.png"

export default function Header({ toggleSidebar }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <div className="bg-black text-white h-16 rounded-2xl border border-white flex items-center justify-between px-4">
          {/* Left - Hamburger */}
          <button onClick={toggleSidebar} className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Center - Title */}
          <div className="flex items-center gap-2">
            <Link to="/">
              <img className="w-8 h-10 md:w-10 md:h-14" src={Logo} alt="Elementus Logo" />
            </Link>
           
            <div className="font-normal text-2xl">Elementus</div>
          </div>
          

          {/* Right - Three dots menu */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 justify-center">
            <a href="https://elementusui.netlify.app" target="_blank" className="text-white font-medium mx-6">
              Components
            </a>
            <Link to="/Blog" className="text-white font-medium mx-6">
              Blogs
            </Link>
            <a
              href="https://github.com/Farhandotshaikh/Elementus"
              className="transition-colors duration-300 text-gray-300 hover:text-blue-400 mx-12"
              aria-label="Github"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 md:hidden">
          <div className="pt-24 px-6 space-y-6">
            <a href="https://elementusui.netlify.app" target="_blank" className="block text-white text-lg">
              Components
            </a>
            <Link to="/Blog" className="block text-white text-lg">
              Blogs
            </Link>
            <a href="https://github.com/Farhandotshaikh/Elementus" className="block text-white text-lg">
              GitHub
            </a>
          </div>
        </div>
      )}
    </>
  )
}

