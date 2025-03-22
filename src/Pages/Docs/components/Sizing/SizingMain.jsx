export const sizingComponents = {
    // Height
    height: {
      title: "Height",
      description: "Utilities for setting the height of an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-h-0", "height: 0px"],
          ["E-h-px", "height: 1px"],
          ["E-h-0.5", "height: 0.125rem"],
          ["E-h-1", "height: 0.25rem"],
          ["E-h-2", "height: 0.5rem"],
          ["E-h-4", "height: 1rem"],
          ["E-h-6", "height: 1.5rem"],
          ["E-h-8", "height: 2rem"],
          ["E-h-10", "height: 2.5rem"],
          ["E-h-12", "height: 3rem"],
          ["E-h-16", "height: 4rem"],
          ["E-h-20", "height: 5rem"],
          ["E-h-24", "height: 6rem"],
          ["E-h-32", "height: 8rem"],
          ["E-h-40", "height: 10rem"],
          ["E-h-48", "height: 12rem"],
          ["E-h-56", "height: 14rem"],
          ["E-h-64", "height: 16rem"],
          ["E-h-auto", "height: auto"],
          ["E-h-full", "height: 100%"],
          ["E-h-screen", "height: 100vh"],
        ],
      },
      usage: {
        description: "Use height utilities to set the height of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-flex E-items-end E-gap-4 E-h-48 E-bg-gray-100 E-p-4">
    <div className="E-w-16 E-bg-blue-500 E-h-full E-text-white E-flex E-items-center E-justify-center">
      h-full
    </div>
    <div className="E-w-16 E-bg-blue-500 E-h-48 E-text-white E-flex E-items-center E-justify-center">
      h-48
    </div>
    <div className="E-w-16 E-bg-blue-500 E-h-32 E-text-white E-flex E-items-center E-justify-center">
      h-32
    </div>
    <div className="E-w-16 E-bg-blue-500 E-h-16 E-text-white E-flex E-items-center E-justify-center">
      h-16
    </div>`,
        },
      },
    },
  
    // Max Height
    maxHeight: {
      title: "Max Height",
      description: "Utilities for setting the maximum height of an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-max-h-0", "max-height: 0px"],
          ["E-max-h-px", "max-height: 1px"],
          ["E-max-h-0.5", "max-height: 0.125rem"],
          ["E-max-h-1", "max-height: 0.25rem"],
          ["E-max-h-2", "max-height: 0.5rem"],
          ["E-max-h-4", "max-height: 1rem"],
          ["E-max-h-6", "max-height: 1.5rem"],
          ["E-max-h-8", "max-height: 2rem"],
          ["E-max-h-10", "max-height: 2.5rem"],
          ["E-max-h-12", "max-height: 3rem"],
          ["E-max-h-16", "max-height: 4rem"],
          ["E-max-h-20", "max-height: 5rem"],
          ["E-max-h-24", "max-height: 6rem"],
          ["E-max-h-32", "max-height: 8rem"],
          ["E-max-h-40", "max-height: 10rem"],
          ["E-max-h-48", "max-height: 12rem"],
          ["E-max-h-56", "max-height: 14rem"],
          ["E-max-h-64", "max-height: 16rem"],
          ["E-max-h-full", "max-height: 100%"],
          ["E-max-h-screen", "max-height: 100vh"],
        ],
      },
      usage: {
        description: "Use max-height utilities to set the maximum height of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-space-y-4">
    <div className="E-max-h-32 E-overflow-auto E-bg-gray-100 E-p-4 E-rounded">
      <p className="E-text-sm">
        This is a long content that will be constrained by max-h-32. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
    
    <div className="E-max-h-48 E-overflow-auto E-bg-gray-100 E-p-4 E-rounded">
      <p className="E-text-sm">
        This content has more space with max-h-48. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>`,
        },
      },
    },
  
    // Max Width
    maxWidth: {
      title: "Max Width",
      description: "Utilities for setting the maximum width of an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-max-w-0", "max-width: 0px"],
          ["E-max-w-none", "max-width: none"],
          ["E-max-w-xs", "max-width: 20rem"],
          ["E-max-w-sm", "max-width: 24rem"],
          ["E-max-w-md", "max-width: 28rem"],
          ["E-max-w-lg", "max-width: 32rem"],
          ["E-max-w-xl", "max-width: 36rem"],
          ["E-max-w-2xl", "max-width: 42rem"],
          ["E-max-w-3xl", "max-width: 48rem"],
          ["E-max-w-4xl", "max-width: 56rem"],
          ["E-max-w-5xl", "max-width: 64rem"],
          ["E-max-w-6xl", "max-width: 72rem"],
          ["E-max-w-7xl", "max-width: 80rem"],
          ["E-max-w-full", "max-width: 100%"],
          ["E-max-w-screen-sm", "max-width: 640px"],
          ["E-max-w-screen-md", "max-width: 768px"],
          ["E-max-w-screen-lg", "max-width: 1024px"],
          ["E-max-w-screen-xl", "max-width: 1280px"],
          ["E-max-w-screen-2xl", "max-width: 1536px"],
        ],
      },
      usage: {
        description: "Use max-width utilities to set the maximum width of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-space-y-4">
    <div className="E-max-w-sm E-bg-blue-100 E-mx-auto E-p-4 E-rounded">
      max-w-sm
    </div>
    
    <div className="E-max-w-md E-bg-blue-200 E-mx-auto E-p-4 E-rounded">
      max-w-md
    </div>
    
    <div className="E-max-w-lg E-bg-blue-300 E-mx-auto E-p-4 E-rounded">
      max-w-lg
    </div>
    
    <div className="E-max-w-xl E-bg-blue-400 E-mx-auto E-p-4 E-rounded">
      max-w-xl
    </div>
  </div>`,
        },
      },
    },
  
    // Min Height
    minHeight: {
      title: "Min Height",
      description: "Utilities for setting the minimum height of an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-min-h-0", "min-height: 0px"],
          ["E-min-h-full", "min-height: 100%"],
          ["E-min-h-screen", "min-height: 100vh"],
        ],
      },
      usage: {
        description: "Use min-height utilities to set the minimum height of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-3 E-gap-4">
    <div className="E-min-h-[200px] E-bg-blue-100 E-p-4 E-rounded">
      <div className="E-h-full E-bg-blue-500 E-rounded E-p-4 E-text-white">
        Content that grows with min-h-[200px]
      </div>
    </div>
    
    <div className="E-min-h-[150px] E-bg-blue-100 E-p-4 E-rounded">
      <div className="E-h-full E-bg-blue-500 E-rounded E-p-4 E-text-white">
        Shorter content
      </div>
    </div>
    
    <div className="E-min-h-[100px] E-bg-blue-100 E-p-4 E-rounded">
      <div className="E-h-full E-bg-blue-500 E-rounded E-p-4 E-text-white">
        min-h-[100px]
      </div>
    </div>
  </div>`,
        },
      },
    },
  
    // Min Width
    minWidth: {
      title: "Min Width",
      description: "Utilities for setting the minimum width of an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-min-w-0", "min-width: 0px"],
          ["E-min-w-full", "min-width: 100%"],
          ["E-min-w-min", "min-width: min-content"],
          ["E-min-w-max", "min-width: max-content"],
        ],
      },
      usage: {
        description: "Use min-width utilities to set the minimum width of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-flex E-flex-col E-space-y-4">
    <div className="E-flex E-space-x-4">
      <div className="E-min-w-[200px] E-bg-blue-500 E-p-4 E-rounded E-text-white">
        min-w-[200px]
      </div>
      <div className="E-min-w-[150px] E-bg-blue-500 E-p-4 E-rounded E-text-white">
        min-w-[150px]
      </div>
    </div>
    
    <div className="E-flex E-space-x-4">
      <div className="E-min-w-min E-bg-blue-500 E-p-4 E-rounded E-text-white">
        Short text
      </div>
      <div className="E-min-w-max E-bg-blue-500 E-p-4 E-rounded E-text-white">
        Longer text content here
      </div>
    </div>
  </div>`,
        },
      },
    },
  
    // Width
    width: {
      title: "Width",
      description: "Utilities for setting the width of an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-w-0", "width: 0px"],
          ["E-w-px", "width: 1px"],
          ["E-w-0.5", "width: 0.125rem"],
          ["E-w-1", "width: 0.25rem"],
          ["E-w-2", "width: 0.5rem"],
          ["E-w-4", "width: 1rem"],
          ["E-w-6", "width: 1.5rem"],
          ["E-w-8", "width: 2rem"],
          ["E-w-10", "width: 2.5rem"],
          ["E-w-12", "width: 3rem"],
          ["E-w-16", "width: 4rem"],
          ["E-w-20", "width: 5rem"],
          ["E-w-24", "width: 6rem"],
          ["E-w-32", "width: 8rem"],
          ["E-w-40", "width: 10rem"],
          ["E-w-48", "width: 12rem"],
          ["E-w-56", "width: 14rem"],
          ["E-w-64", "width: 16rem"],
          ["E-w-auto", "width: auto"],
          ["E-w-1/2", "width: 50%"],
          ["E-w-1/3", "width: 33.333333%"],
          ["E-w-2/3", "width: 66.666667%"],
          ["E-w-1/4", "width: 25%"],
          ["E-w-3/4", "width: 75%"],
          ["E-w-full", "width: 100%"],
          ["E-w-screen", "width: 100vw"],
        ],
      },
      usage: {
        description: "Use width utilities to set the width of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-space-y-4">
    <div className="E-w-full E-bg-blue-500 E-h-12 E-rounded"></div>
    <div className="E-w-3/4 E-bg-blue-500 E-h-12 E-rounded"></div>
    <div className="E-w-1/2 E-bg-blue-500 E-h-12 E-rounded"></div>
    <div className="E-w-1/4 E-bg-blue-500 E-h-12 E-rounded"></div>
    <div className="E-w-48 E-bg-blue-500 E-h-12 E-rounded"></div>
    <div className="E-w-32 E-bg-blue-500 E-h-12 E-rounded"></div>
    <div className="E-w-24 E-bg-blue-500 E-h-12 E-rounded"></div>
  </div>`,
        },
      },
    },
  }
  
  export default sizingComponents
  
  