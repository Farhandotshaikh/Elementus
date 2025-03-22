export const transitionAnComponents = {
    // Animation
    animation: {
      title: "Animation",
      description: "Utilities for animating elements with CSS animations.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-animate-none", "animation: none"],
          ["E-animate-spin", "animation: spin 1s linear infinite"],
          ["E-animate-ping", "animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite"],
          ["E-animate-pulse", "animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"],
          ["E-animate-bounce", "animation: bounce 1s infinite"],
          ["E-animate-fade-in", "animation: fade-in 0.5s ease-in-out"],
          ["E-animate-scale-pop", "animation: slide-up 0.6s ease-out"],
          ["E-animate-slide-up", "animation: scale-pop 0.5s ease-out"],
          ["E-animate-shake", "animation: shake 0.4s ease-in-out;"],
        ],
      },
      usage: {
        description: "Use animation utilities to apply CSS animations to elements.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-flex E-space-x-16 E-p-8">
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-w-12 E-h-12 E-rounded-full E-bg-blue-500 E-animate-spin"></div>
      <span className="E-mt-4 E-text-sm">animate-spin</span>
    </div>
    
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-relative">
        <div className="E-w-12 E-h-12 E-rounded-full E-bg-blue-500 E-opacity-75"></div>
        <div className="E-absolute E-top-0 E-left-0 E-w-12 E-h-12 E-rounded-full E-bg-blue-500 E-animate-ping"></div>
      </div>
      <span className="E-mt-4 E-text-sm">animate-ping</span>
    </div>
    
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-w-12 E-h-12 E-rounded-full E-bg-blue-500 E-animate-pulse"></div>
      <span className="E-mt-4 E-text-sm">animate-pulse</span>
    </div>
    
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-w-12 E-h-12 E-rounded-full E-bg-blue-500 E-animate-bounce"></div>
      <span className="E-mt-4 E-text-sm">animate-bounce</span>
    </div>
  </div>`,
        },
      },
    },
  
    // Transition Delay
    transitionDelay: {
      title: "Transition Delay",
      description: "Utilities for controlling the delay of CSS transitions.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-delay-0", "transition-delay: 0s"],
          ["E-delay-75", "transition-delay: 75ms"],
          ["E-delay-100", "transition-delay: 100ms"],
          ["E-delay-150", "transition-delay: 150ms"],
          ["E-delay-200", "transition-delay: 200ms"],
          ["E-delay-300", "transition-delay: 300ms"],
          ["E-delay-500", "transition-delay: 500ms"],
          ["E-delay-700", "transition-delay: 700ms"],
          ["E-delay-1000", "transition-delay: 1000ms"],
        ],
      },
      usage: {
        description: "Use transition delay utilities to control when transitions start.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-flex E-flex-col E-space-y-8 E-p-8">
    <div className="E-flex E-space-x-4">
      <button className="E-px-4 E-py-2 E-bg-blue-500 E-text-white E-rounded E-transition-colors E-hover:bg-blue-700 E-delay-0">
        Delay 0
      </button>
      
      <button className="E-px-4 E-py-2 E-bg-blue-500 E-text-white E-rounded E-transition-colors E-hover:bg-blue-700 E-delay-150">
        Delay 150ms
      </button>
      
      <button className="E-px-4 E-py-2 E-bg-blue-500 E-text-white E-rounded E-transition-colors E-hover:bg-blue-700 E-delay-300">
        Delay 300ms
      </button>
      
      <button className="E-px-4 E-py-2 E-bg-blue-500 E-text-white E-rounded E-transition-colors E-hover:bg-blue-700 E-delay-700">
        Delay 700ms
      </button>
    </div>
    
    <div className="E-flex E-space-x-4">
      <div className="E-group E-flex E-flex-col E-items-center">
        <div className="E-w-24 E-h-24 E-bg-blue-500 E-rounded-lg E-transition-all E-group-hover:bg-red-500 E-delay-0"></div>
        <span className="E-mt-2 E-text-sm">delay-0</span>
      </div>
      
      <div className="E-group E-flex E-flex-col E-items-center">
        <div className="E-w-24 E-h-24 E-bg-blue-500 E-rounded-lg E-transition-all E-group-hover:bg-red-500 E-delay-200"></div>
        <span className="E-mt-2 E-text-sm">delay-200</span>
      </div>
      
      <div className="E-group E-flex E-flex-col E-items-center">
        <div className="E-w-24 E-h-24 E-bg-blue-500 E-rounded-lg E-transition-all E-group-hover:bg-red-500 E-delay-500"></div>
        <span className="E-mt-2 E-text-sm">delay-500</span>
      </div>
      
      <div className="E-group E-flex E-flex-col E-items-center">
        <div className="E-w-24 E-h-24 E-bg-blue-500 E-rounded-lg E-transition-all E-group-hover:bg-red-500 E-delay-1000"></div>
        <span className="E-mt-2 E-text-sm">delay-1000</span>
      </div>
    </div>
  </div>`,
        },
      },
    },
  
    // Transition Duration
    transitionDuration: {
      title: "Transition Duration",
      description: "Utilities for controlling the duration of CSS transitions.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-duration-0", "transition-duration: 0s"],
          ["E-duration-75", "transition-duration: 75ms"],
          ["E-duration-100", "transition-duration: 100ms"],
          ["E-duration-150", "transition-duration: 150ms"],
          ["E-duration-200", "transition-duration: 200ms"],
          ["E-duration-300", "transition-duration: 300ms"],
          ["E-duration-500", "transition-duration: 500ms"],
          ["E-duration-700", "transition-duration: 700ms"],
          ["E-duration-1000", "transition-duration: 1000ms"],
        ],
      },
      usage: {
        description: "Use transition duration utilities to control how long transitions take to complete.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-flex E-space-x-4 E-p-8">
    <div className="E-group E-flex E-flex-col E-items-center">
      <div className="E-w-24 E-h-24 E-bg-blue-500 E-rounded-lg E-transition-all E-group-hover:bg-red-500 E-duration-150"></div>
      <span className="E-mt-2 E-text-sm">duration-150</span>
    </div>
    
    <div className="E-group E-flex E-flex-col E-items-center">
      <div className="E-w-24 E-h-24 E-bg-blue-500 E-rounded-lg E-transition-all E-group-hover:bg-red-500 E-duration-300"></div>
      <span className="E-mt-2 E-text-sm">duration-300</span>
    </div>
    
    <div className="E-group E-flex E-flex-col E-items-center">
      <div className="E-w-24 E-h-24 E-bg-blue-500 E-rounded-lg E-transition-all E-group-hover:bg-red-500 E-duration-700"></div>
      <span className="E-mt-2 E-text-sm">duration-700</span>
    </div>
    
    <div className="E-group E-flex E-flex-col E-items-center">
      <div className="E-w-24 E-h-24 E-bg-blue-500 E-rounded-lg E-transition-all E-group-hover:bg-red-500 E-duration-1000"></div>
      <span className="E-mt-2 E-text-sm">duration-1000</span>
    </div>
  </div>`,
        },
      },
    },
  
    // Transition Property
    transitionProperty: {
      title: "Transition Property",
      description: "Utilities for controlling which CSS properties transition.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-transition-none", "transition-property: none"],
          ["E-transition-all", "transition-property: all"],
          [
            "E-transition",
            "transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
          ],
          [
            "E-transition-colors",
            "transition-property: color, background-color, border-color, text-decoration-color, fill, stroke",
          ],
          ["E-transition-opacity", "transition-property: opacity"],
          ["E-transition-shadow", "transition-property: box-shadow"],
          ["E-transition-transform", "transition-property: transform"],
        ],
      },
      usage: {
        description: "Use transition property utilities to specify which properties should transition when they change.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-flex E-space-x-8 E-p-8">
    <div className="E-group E-flex E-flex-col E-items-center">
      <div className="E-w-32 E-h-32 E-bg-blue-500 E-rounded-lg E-hover:bg-red-500 E-hover:translate-y-4 E-transition-colors E-duration-300">
      </div>
      <span className="E-mt-4 E-text-sm">transition-colors</span>
    </div>
    
    <div className="E-group E-flex E-flex-col E-items-center">
      <div className="E-w-32 E-h-32 E-bg-blue-500 E-rounded-lg E-hover:bg-blue-500 E-hover:translate-y-4 E-transition-transform E-duration-300">
      </div>
      <span className="E-mt-4 E-text-sm">transition-transform</span>
    </div>
    
    <div className="E-group E-flex E-flex-col E-items-center">
      <div className="E-w-32 E-h-32 E-bg-blue-500 E-rounded-lg E-hover:bg-red-500 E-hover:translate-y-4 E-transition-all E-duration-300">
      </div>
      <span className="E-mt-4 E-text-sm">transition-all</span>
    </div>
  </div>`,
        },
      },
    },
  
    // Transition Timing Function
    transitionTimingFunction: {
      title: "Transition Timing Function",
      description: "Utilities for controlling the easing of CSS transitions.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-ease-linear", "transition-timing-function: linear"],
          ["E-ease-in", "transition-timing-function: cubic-bezier(0.4, 0, 1, 1)"],
          ["E-ease-out", "transition-timing-function: cubic-bezier(0, 0, 0.2, 1)"],
          ["E-ease-in-out", "transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)"],
        ],
      },
      usage: {
        description: "Use timing function utilities to control the easing of transitions.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-flex E-space-x-8 E-p-8">
    <div className="E-group E-flex E-flex-col E-items-center">
      <div className="E-w-32 E-h-32 E-bg-blue-500 E-rounded-lg E-hover:translate-y-8 E-transition-all E-duration-1000 E-ease-linear">
      </div>
      <span className="E-mt-4 E-text-sm">ease-linear</span>
    </div>
    
    <div className="E-group E-flex E-flex-col E-items-center">
      <div className="E-w-32 E-h-32 E-bg-blue-500 E-rounded-lg E-hover:translate-y-8 E-transition-all E-duration-1000 E-ease-in">
      </div>
      <span className="E-mt-4 E-text-sm">ease-in</span>
    </div>
    
    <div className="E-group E-flex E-flex-col E-items-center">
      <div className="E-w-32 E-h-32 E-bg-blue-500 E-rounded-lg E-hover:translate-y-8 E-transition-all E-duration-1000 E-ease-out">
      </div>
      <span className="E-mt-4 E-text-sm">ease-out</span>
    </div>
    
    <div className="E-group E-flex E-flex-col E-items-center">
      <div className="E-w-32 E-h-32 E-bg-blue-500 E-rounded-lg E-hover:translate-y-8 E-transition-all E-duration-1000 E-ease-in-out">
      </div>
      <span className="E-mt-4 E-text-sm">ease-in-out</span>
    </div>
  </div>`,
        },
      },
    },
  }
  
  export default transitionAnComponents
  
  