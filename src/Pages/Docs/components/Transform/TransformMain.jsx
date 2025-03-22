export const transformComponents = {
    // Rotate
    rotate: {
      title: "Rotate",
      description: "Utilities for rotating elements with transform.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-rotate-0", "transform: rotate(0deg)"],
          ["E-rotate-1", "transform: rotate(1deg)"],
          ["E-rotate-2", "transform: rotate(2deg)"],
          ["E-rotate-3", "transform: rotate(3deg)"],
          ["E-rotate-6", "transform: rotate(6deg)"],
          ["E-rotate-12", "transform: rotate(12deg)"],
          ["E-rotate-45", "transform: rotate(45deg)"],
          ["E-rotate-90", "transform: rotate(90deg)"],
          ["E-rotate-180", "transform: rotate(180deg)"],
          ["E--rotate-1", "transform: rotate(-1deg)"],
          ["E--rotate-2", "transform: rotate(-2deg)"],
          ["E--rotate-3", "transform: rotate(-3deg)"],
          ["E--rotate-6", "transform: rotate(-6deg)"],
          ["E--rotate-12", "transform: rotate(-12deg)"],
          ["E--rotate-45", "transform: rotate(-45deg)"],
          ["E--rotate-90", "transform: rotate(-90deg)"],
          ["E--rotate-180", "transform: rotate(-180deg)"],
        ],
      },
      usage: {
        description: "Use rotate utilities to rotate elements.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-flex E-flex-wrap E-gap-8 E-p-8">
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-w-16 E-h-16 E-bg-blue-500 E-rotate-0"></div>
      <span className="E-mt-2 E-text-sm">rotate-0</span>
    </div>
    
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-w-16 E-h-16 E-bg-blue-500 E-rotate-45"></div>
      <span className="E-mt-2 E-text-sm">rotate-45</span>
    </div>
    
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-w-16 E-h-16 E-bg-blue-500 E-rotate-90"></div>
      <span className="E-mt-2 E-text-sm">rotate-90</span>
    </div>
    
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-w-16 E-h-16 E-bg-blue-500 E-rotate-180"></div>
      <span className="E-mt-2 E-text-sm">rotate-180</span>
    </div>
    
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-w-16 E-h-16 E-bg-blue-500 E--rotate-45"></div>
      <span className="E-mt-2 E-text-sm">-rotate-45</span>
    </div>
  </div>`,
        },
      },
    },
  
    // Scale
    scale: {
      title: "Scale",
      description: "Utilities for scaling elements with transform.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-scale-0", "transform: scale(0)"],
          ["E-scale-50", "transform: scale(0.5)"],
          ["E-scale-75", "transform: scale(0.75)"],
          ["E-scale-90", "transform: scale(0.9)"],
          ["E-scale-95", "transform: scale(0.95)"],
          ["E-scale-100", "transform: scale(1)"],
          ["E-scale-105", "transform: scale(1.05)"],
          ["E-scale-110", "transform: scale(1.1)"],
          ["E-scale-125", "transform: scale(1.25)"],
          ["E-scale-150", "transform: scale(1.5)"],
          ["E-scale-x-0", "transform: scaleX(0)"],
          ["E-scale-x-50", "transform: scaleX(0.5)"],
          ["E-scale-x-100", "transform: scaleX(1)"],
          ["E-scale-x-150", "transform: scaleX(1.5)"],
          ["E-scale-y-0", "transform: scaleY(0)"],
          ["E-scale-y-50", "transform: scaleY(0.5)"],
          ["E-scale-y-100", "transform: scaleY(1)"],
          ["E-scale-y-150", "transform: scaleY(1.5)"],
        ],
      },
      usage: {
        description: "Use scale utilities to scale elements.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-flex E-flex-wrap E-gap-8 E-p-8">
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-w-16 E-h-16 E-bg-blue-500 E-scale-50"></div>
      <span className="E-mt-2 E-text-sm">scale-50</span>
    </div>
    
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-w-16 E-h-16 E-bg-blue-500 E-scale-100"></div>
      <span className="E-mt-2 E-text-sm">scale-100</span>
    </div>
    
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-w-16 E-h-16 E-bg-blue-500 E-scale-150"></div>
      <span className="E-mt-2 E-text-sm">scale-150</span>
    </div>
    
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-w-16 E-h-16 E-bg-blue-500 E-scale-x-50"></div>
      <span className="E-mt-2 E-text-sm">scale-x-50</span>
    </div>
    
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-w-16 E-h-16 E-bg-blue-500 E-scale-y-50"></div>
      <span className="E-mt-2 E-text-sm">scale-y-50</span>
    </div>
  </div>`,
        },
      },
    },
  
    // Skew
    skew: {
      title: "Skew",
      description: "Utilities for skewing elements with transform.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-skew-x-0", "transform: skewX(0deg)"],
          ["E-skew-x-1", "transform: skewX(1deg)"],
          ["E-skew-x-2", "transform: skewX(2deg)"],
          ["E-skew-x-3", "transform: skewX(3deg)"],
          ["E-skew-x-6", "transform: skewX(6deg)"],
          ["E-skew-x-12", "transform: skewX(12deg)"],
          ["E--skew-x-1", "transform: skewX(-1deg)"],
          ["E--skew-x-2", "transform: skewX(-2deg)"],
          ["E--skew-x-3", "transform: skewX(-3deg)"],
          ["E--skew-x-6", "transform: skewX(-6deg)"],
          ["E--skew-x-12", "transform: skewX(-12deg)"],
          ["E-skew-y-0", "transform: skewY(0deg)"],
          ["E-skew-y-1", "transform: skewY(1deg)"],
          ["E-skew-y-2", "transform: skewY(2deg)"],
          ["E-skew-y-3", "transform: skewY(3deg)"],
          ["E-skew-y-6", "transform: skewY(6deg)"],
          ["E-skew-y-12", "transform: skewY(12deg)"],
          ["E--skew-y-1", "transform: skewY(-1deg)"],
          ["E--skew-y-2", "transform: skewY(-2deg)"],
          ["E--skew-y-3", "transform: skewY(-3deg)"],
          ["E--skew-y-6", "transform: skewY(-6deg)"],
          ["E--skew-y-12", "transform: skewY(-12deg)"],
        ],
      },
      usage: {
        description: "Use skew utilities to skew elements.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-flex E-flex-wrap E-gap-8 E-p-8">
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-w-16 E-h-16 E-bg-blue-500 E-skew-x-0"></div>
      <span className="E-mt-2 E-text-sm">skew-x-0</span>
    </div>
    
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-w-16 E-h-16 E-bg-blue-500 E-skew-x-6"></div>
      <span className="E-mt-2 E-text-sm">skew-x-6</span>
    </div>
    
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-w-16 E-h-16 E-bg-blue-500 E-skew-x-12"></div>
      <span className="E-mt-2 E-text-sm">skew-x-12</span>
    </div>
    
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-w-16 E-h-16 E-bg-blue-500 E-skew-y-6"></div>
      <span className="E-mt-2 E-text-sm">skew-y-6</span>
    </div>
    
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-w-16 E-h-16 E-bg-blue-500 E-skew-y-12"></div>
      <span className="E-mt-2 E-text-sm">skew-y-12</span>
    </div>
  </div>`,
        },
      },
    },
  
    // Transform
    transform: {
      title: "Transform",
      description: "Utilities for controlling transform behavior.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-transform", "transform: translateX(0) translateY(0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1)"],
          ["E-transform-gpu", "transform: translate3d(0, 0, 0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1)"],
          ["E-transform-none", "transform: none"],
        ],
      },
      usage: {
        description: "Use transform utilities to control how elements are transformed.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-flex E-space-x-8 E-p-8">
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-w-24 E-h-24 E-bg-blue-500 E-hover:rotate-45 E-hover:scale-110 E-transform E-transition-all E-duration-300"></div>
      <span className="E-mt-4 E-text-sm">transform</span>
    </div>
    
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-w-24 E-h-24 E-bg-blue-500 E-hover:rotate-45 E-hover:scale-110 E-transform-gpu E-transition-all E-duration-300"></div>
      <span className="E-mt-4 E-text-sm">transform-gpu</span>
    </div>
    
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-w-24 E-h-24 E-bg-blue-500 E-hover:rotate-45 E-hover:scale-110 E-transform-none E-transition-all E-duration-300"></div>
      <span className="E-mt-4 E-text-sm">transform-none</span>
    </div>
  </div>`,
        },
      },
    },
  
    // Transform Origin
    transformOrigin: {
      title: "Transform Origin",
      description: "Utilities for specifying the origin for an element's transformations.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-origin-center", "transform-origin: center"],
          ["E-origin-top", "transform-origin: top"],
          ["E-origin-top-right", "transform-origin: top right"],
          ["E-origin-right", "transform-origin: right"],
          ["E-origin-bottom-right", "transform-origin: bottom right"],
          ["E-origin-bottom", "transform-origin: bottom"],
          ["E-origin-bottom-left", "transform-origin: bottom left"],
          ["E-origin-left", "transform-origin: left"],
          ["E-origin-top-left", "transform-origin: top left"],
        ],
      },
      usage: {
        description: "Use transform origin utilities to specify the origin point for an element's transformations.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-flex E-flex-wrap E-gap-8 E-p-8">
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-w-16 E-h-16 E-bg-blue-500 E-origin-center E-hover:rotate-45 E-transition-all E-duration-300"></div>
      <span className="E-mt-2 E-text-sm">origin-center</span>
    </div>
    
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-w-16 E-h-16 E-bg-blue-500 E-origin-top-left E-hover:rotate-45 E-transition-all E-duration-300"></div>
      <span className="E-mt-2 E-text-sm">origin-top-left</span>
    </div>
    
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-w-16 E-h-16 E-bg-blue-500 E-origin-top-right E-hover:rotate-45 E-transition-all E-duration-300"></div>
      <span className="E-mt-2 E-text-sm">origin-top-right</span>
    </div>
    
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-w-16 E-h-16 E-bg-blue-500 E-origin-bottom-left E-hover:rotate-45 E-transition-all E-duration-300"></div>
      <span className="E-mt-2 E-text-sm">origin-bottom-left</span>
    </div>
    
    <div className="E-flex E-flex-col E-items-center">
      <div className="E-w-16 E-h-16 E-bg-blue-500 E-origin-bottom-right E-hover:rotate-45 E-transition-all E-duration-300"></div>
      <span className="E-mt-2 E-text-sm">origin-bottom-right</span>
    </div>
  </div>`,
        },
      },
    },
  
    // Translate
    translate: {
      title: "Translate",
      description: "Utilities for translating elements with transform.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-translate-x-0", "transform: translateX(0px)"],
          ["E-translate-x-1", "transform: translateX(0.25rem)"],
          ["E-translate-x-2", "transform: translateX(0.5rem)"],
          ["E-translate-x-4", "transform: translateX(1rem)"],
          ["E-translate-x-8", "transform: translateX(2rem)"],
          ["E-translate-x-px", "transform: translateX(1px)"],
          ["E-translate-x-1/2", "transform: translateX(50%)"],
          ["E-translate-x-full", "transform: translateX(100%)"],
          ["E--translate-x-1", "transform: translateX(-0.25rem)"],
          ["E--translate-x-2", "transform: translateX(-0.5rem)"],
          ["E--translate-x-4", "transform: translateX(-1rem)"],
          ["E--translate-x-8", "transform: translateX(-2rem)"],
          ["E--translate-x-px", "transform: translateX(-1px)"],
          ["-translate-x-1/2", "transform: translateX(-50%)"],
          ["E--translate-x-full", "transform: translateX(-100%)"],
          ["E-translate-y-0", "transform: translateY(0px)"],
          ["E-translate-y-1", "transform: translateY(0.25rem)"],
          ["E-translate-y-2", "transform: translateY(0.5rem)"],
          ["E-translate-y-4", "transform: translateY(1rem)"],
          ["E-translate-y-8", "transform: translateY(2rem)"],
          ["E-translate-y-px", "transform: translateY(1px)"],
          ["E-translate-y-1/2", "transform: translateY(50%)"],
          ["E-translate-y-full", "transform: translateY(100%)"],
          ["E--translate-y-1", "transform: translateY(-0.25rem)"],
          ["E--translate-y-2", "transform: translateY(-0.5rem)"],
          ["E--translate-y-4", "transform: translateY(-1rem)"],
          ["E--translate-y-8", "transform: translateY(-2rem)"],
          ["E--translate-y-px", "transform: translateY(-1px)"],
          ["-translate-y-1/2", "transform: translateY(-50%)"],
          ["E--translate-y-full", "transform: translateY(-100%)"],
        ],
      },
      usage: {
        description: "Use translate utilities to move elements.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-flex E-flex-wrap E-gap-8 E-p-8">
    <div className="E-relative E-h-32 E-w-32 E-bg-gray-200 E-flex E-items-center E-justify-center">
      <div className="E-absolute E-w-16 E-h-16 E-bg-blue-500 E-translate-x-4 E-translate-y-4"></div>
      <span className="E-relative E-z-10 E-text-xs">translate-x-4 translate-y-4</span>
    </div>
    
    <div className="E-relative E-h-32 E-w-32 E-bg-gray-200 E-flex E-items-center E-justify-center">
      <div className="E-absolute E-w-16 E-h-16 E-bg-blue-500 E--translate-x-4 E--translate-y-4"></div>
      <span className="E-relative E-z-10 E-text-xs">-translate-x-4 -translate-y-4</span>
    </div>
    
    <div className="E-relative E-h-32 E-w-32 E-bg-gray-200 E-flex E-items-center E-justify-center">
      <div className="E-absolute E-w-16 E-h-16 E-bg-blue-500 E-translate-x-1/2 E-translate-y-1/2"></div>
      <span className="E-relative E-z-10 E-text-xs">translate-x-1/2 translate-y-1/2</span>
    </div>
    
    <div className="E-relative E-h-32 E-w-32 E-bg-gray-200 E-flex E-items-center E-justify-center">
      <div className="E-absolute E-w-16 E-h-16 E-bg-blue-500 E-translate-x-full E-translate-y-full"></div>
      <span className="E-relative E-z-10 E-text-xs">translate-x-full translate-y-full</span>
    </div>
  </div>`,
        },
      },
    },
  }
  
  export default transformComponents
  
  