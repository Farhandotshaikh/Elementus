"use client"

import { Link } from "react-router-dom"

import { useState } from "react"
// import { CodeBlock } from "./CodeBlock"

export default function AnimationShowcase() {
  const [activeAnimation, setActiveAnimation] = useState(null)

  const animations = [
    {
      name: "fade-in",
      title: "Fade In",
      description: "Smoothly fade in elements with a subtle transition",
      code: `.E-animate-fade-in {
  animation: fade-in 0.5s ease-in-out;
}`,
      demo: "E-animate-fade-in",
    },
    {
      name: "slide-up",
      title: "Slide Up",
      description: "Elements gracefully slide up into view",
      code: `.E-animate-slide-up {
  animation: slide-up 0.6s ease-out;
}`,
      demo: "E-animate-slide-up",
    },
    {
      name: "scale-pop",
      title: "Scale Pop",
      description: "Pop elements into view with a scaling effect",
      code: `.E-animate-scale-pop {
  animation: scale-pop 0.5s ease-out;
}`,
      demo: "E-animate-scale-pop",
    },
    {
      name: "shake",
      title: "Shake",
      description: "Add attention-grabbing shake animations",
      code: `.E-animate-shake {
  animation: shake 0.4s ease-in-out;
}`,
      demo: "E-animate-shake",
    },
  ]

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stunning Animations</h2>
            <p className="text-lg opacity-80">Add life to your UI with our newly added animations</p>
          </div>
          <div className="flex justify-center">
            <Link to="/Docs/TransitionAn/Animation">
              <button
                variant="secondary"
                className="rounded-full px-4 sm:px-6 py-2 bg-gray-800/50 mb-6 hover:bg-gray-800/70 text-white flex items-center  gap-2 text-sm sm:text-base"
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
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {animations.map((animation, index) => (
              <div
                key={animation.name}
                className="group relative bg-gray-900/80 rounded-lg p-6 hover:bg-gray-900/90 transition-all duration-300"
                onMouseEnter={() => setActiveAnimation(animation.name)}
                onMouseLeave={() => setActiveAnimation(null)}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
                data-animate="true"
              >
                <div className="mb-4">
                  <h3 className="text-xl text-white font-semibold mb-2">{animation.title}</h3>
                  <p className="text-sm text-gray-400">{animation.description}</p>
                </div>

                <div className="relative h-32 bg-black rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <div
                    className={`w-16 h-16 bg-purple-500 rounded-lg ${activeAnimation === animation.name ? animation.demo : ""
                      }`}
                  />
                </div>


              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

