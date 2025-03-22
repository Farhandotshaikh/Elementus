import { useState } from "react"
import { Link } from 'react-router-dom';
import React from 'react';
import AnimationShowcase from "./AnimationShowcase";
import logo from '../assets/logo1.png'

export default function LP() {
  const [windowWidth, setWindowWidth] = useState(400) // Default width
  const breakpoints = {
    sm: 520,
    md: 738,
    lg: 1024,
    xl: 1240,

  }

  const handleBreakpointClick = (width) => {
    setWindowWidth(width)
  }


  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-cyan-400 from-40% via-blue-600 via-60% to-blue-700 to-100% flex flex-col invert-0">
        {/* Glassmorphism Header */}
        <header className="sticky top-0 bg-white/10 backdrop-blur-md border-b border-white/20 z-50 flex items-center flex-wrap justify-center sm:justify-between px-6 py-4">
          <div className="flex justify-start items-center gap-3 mx-3">
            <img
              src={logo}
              alt="Elementus Logo"
              className="w-8 h-10 md:w-10 md:h-14 invert-0"
            />
            <a href="#" className="flex items-center space-x-2">
              <div className="text-3xl font-semibold">Elementus</div>
            </a>
          </div>
          <nav className="flex justify-end items-center gap-3">
            <Link to="/Docs" className="hover:text-black/80 text-lg mx-3">
              Docs
            </Link>
            <Link to="/Blog" className="hover:text-black/80 text-lg mx-3">
              Blog
            </Link>
            <a href="https://elementusui.netlify.app" target="_blank" className="hover:text-black/80 text-lg mx-2">
              Components
            </a>
            <hr className="border-l-2 border-white/60 h-10 mx-2" />
            <a href="https://github.com/Farhandotshaikh/Elementus" className="sm:mx-2 transition-colors duration-300 text-gray-300 hover:text-blue-400" aria-label="Github">
              <svg className="w-10 h-10 my-2 fill-black" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                </path>
              </svg>
            </a>
          </nav>
        </header>

        <main className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] text-center">
            <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
              Design without limits,{" "}
              <span className="block">Code without complexity</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl">
              A Modern CSS Framework which is a combination of utility classes and
              components
            </p>
            <Link to="/Docs">
              <button
                size="lg"
                className="mt-10 bg-gray-900 text-white hover:bg-gray-800 rounded-full px-6 sm:px-8 py-0.5 sm:py-6 text-base sm:text-lg font-medium border-2 border-white"
              >
                GET STARTED
              </button>
            </Link>

          </div>
          <section className="mt-20 pb-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col items-center">
                  <div className="bg-purple-600/20 p-4 rounded-full mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-black"
                    >
                      <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                      <path d="M17 2h-1a4 4 0 0 0-4 4" />
                      <path d="M7 2h1a4 4 0 0 1 4 4" />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-black mb-4">Mobile-first</span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Responsive everything.</h2>
                  <p className="text-base sm:text-lg opacity-80 mb-4 max-w-3xl">
                    Wrestling with a bunch of complex media queries in your CSS sucks, so Elementus lets you build
                    responsive designs right in your HTML instead.
                  </p>
                  <p className="text-base sm:text-lg opacity-80 mb-8 max-w-3xl">
                    Throw a screen size in front of literally any utility class and watch it magically apply at a specific
                    breakpoint.
                  </p>
                  <Link to="/Docs/Core%20Concepts/ResponsiveDesign">
                    <button
                      variant="secondary"
                      className="rounded-full px-4 sm:px-6 py-2 bg-gray-800/50 hover:bg-gray-800/70 text-white flex items-center  gap-2 text-sm sm:text-base"
                    >
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>
                  </Link>
                  
                    <div className="w-full h-full mt-8 bg-gray-900/80 rounded-lg p-4 sm:p-8 overflow-hidden">
                      <div className="relative">
                        {/* Breakpoint Buttons */}
                        <div className="absolute -top-8 right-0 flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
                          {Object.entries(breakpoints).map(([key, width]) => (
                            <button
                              key={key}
                              onClick={() => handleBreakpointClick(width)}
                              className={
                                `px-2 py-1 rounded transition-colors ${windowWidth === width
                                  ? "bg-purple-500 text-white"
                                  : "bg-purple-500/20 text-gray-400 hover:bg-purple-500/30"
                                }`
                              }
                            >
                              {key}
                            </button>
                          ))}
                        </div>

                        {/* Container */}
                        <div
                          className="rounded-lg overflow-hidden border border-gray-800 bg-gray-900 mx-auto"
                          style={{
                            width: `${windowWidth}px`,
                            maxWidth: "100%",
                          }}
                        >
                          {/* Header */}
                          <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                            <div className="flex gap-1.5">
                              <div className="w-3 h-3 rounded-full bg-red-500"></div>
                              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                              <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="flex-1 flex items-center justify-center">
                              <div className="bg-gray-700 rounded px-3 py-1 text-xs sm:text-sm text-gray-300 flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                Elementus.com
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <img
                                src="https://images.unsplash.com/photo-1433477303177-8270baa12c9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2glMjBob3VzZXxlbnwwfDB8MHx8fDA%3D"
                                alt="Beach house exterior"
                                className="rounded-lg w-full"
                              />
                              <img
                                src="https://images.unsplash.com/photo-1544143086-828f66ac3945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjBob3VzZXxlbnwwfDB8MHx8fDA%3D"
                                alt="Beach house interior"
                                className="rounded-lg w-full hidden sm:block"
                              />
                            </div>

                            <div className="mt-4">
                              <div className="text-xs sm:text-sm text-gray-400">Entire house</div>
                              <h3 className="text-base sm:text-xl font-semibold text-white mt-1">
                                Beach House in Collingwood
                              </h3>
                              <div className="flex items-center gap-2 mt-2">
                                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="text-purple-400 text-xs sm:text-sm">4.89</span>
                                <span className="text-gray-400 text-xs sm:text-sm">(128)</span>
                              </div>
                            </div>

                            {/* CTA Button */}
                            <button className="mt-4 bg-purple-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-purple-600 transition-colors text-xs sm:text-sm">
                              Check availability
                            </button>
                          </div>
                        </div>

                        {/* Window Width Display */}
                        <div className="absolute -bottom-6 right-0 text-xs sm:text-sm text-gray-400">
                          {windowWidth}px ({Object.entries(breakpoints).find(([_, width]) => width === windowWidth)?.[0] || "custom"})
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            
          
        </section>
        <AnimationShowcase />
      </main>
    </div >
  </>
    
  )
}