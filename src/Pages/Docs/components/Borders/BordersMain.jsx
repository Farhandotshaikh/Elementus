export const borderComponents = {
    // Border Color
    borderColor: {
      title: "Border Color",
      description: "Utilities for controlling the color of an element's borders.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-border-transparent", "border-color: transparent"],
          ["E-border-current", "border-color: currentColor"],
          ["E-border-{color}", "border-color: {color}"],
          ["E-border-white", "border-color: rgb(255 255 255)"],
          ["E-border-black", "border-color: rgb(0 0 0)"],
        ],
      },
      usage: {
        description: "Use border color utilities to set the color of an element's borders.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-2 E-gap-4">
    <div className="E-h-24 E-w-full E-border-2 E-border-primary E-rounded-lg"></div>
    <div className="E-h-24 E-w-full E-border-2 E-border-secondary E-rounded-lg"></div>
    <div className="E-h-24 E-w-full E-border-4 E-border-black E-rounded-lg"></div>
    <div className="E-h-24 E-w-full E-border-4 E-border-white E-bg-gray-900 E-rounded-lg"></div>
  </div>`,
        },
      },
    },
  
    // Border Opacity
    borderOpacity: {
      title: "Border Opacity",
      description: "Utilities for controlling the opacity of an element's borders.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-border-opacity-0", "border-opacity: 0"],
          ["E-border-opacity-25", "border-opacity: 0.25"],
          ["E-border-opacity-50", "border-opacity: 0.5"],
          ["E-border-opacity-75", "border-opacity: 0.75"],
          ["E-border-opacity-100", "border-opacity: 1"],
        ],
      },
      usage: {
        description: "Use border opacity utilities to control the opacity of an element's borders.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-2 E-gap-4">
    <div className="E-h-24 E-w-full E-border-4 E-border-blue-500 E-border-opacity-100 E-rounded-lg"></div>
    <div className="E-h-24 E-w-full E-border-4 E-border-blue-500 E-border-opacity-75 E-rounded-lg"></div>
    <div className="E-h-24 E-w-full E-border-4 E-border-blue-500 E-border-opacity-50 E-rounded-lg"></div>
    <div className="E-h-24 E-w-full E-border-4 E-border-blue-500 E-border-opacity-25 E-rounded-lg"></div>
  </div>`,
        },
      },
    },
  
    // Border Radius
    borderRadius: {
      title: "Border Radius",
      description: "Utilities for controlling the border radius of an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-rounded-none", "border-radius: 0"],
          ["E-rounded-sm", "border-radius: 0.125rem"],
          ["E-rounded", "border-radius: 0.25rem"],
          ["E-rounded-md", "border-radius: 0.375rem"],
          ["E-rounded-lg", "border-radius: 0.5rem"],
          ["E-rounded-xl", "border-radius: 0.75rem"],
          ["E-rounded-2xl", "border-radius: 1rem"],
          ["E-rounded-3xl", "border-radius: 1.5rem"],
          ["E-rounded-full", "border-radius: 9999px"],
        ],
      },
      usage: {
        description: "Use border radius utilities to control the border radius of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-3 E-gap-4">
    <div className="E-h-24 E-w-24 E-bg-blue-500 E-rounded-none"></div>
    <div className="E-h-24 E-w-24 E-bg-blue-500 E-rounded-lg"></div>
    <div className="E-h-24 E-w-24 E-bg-blue-500 E-rounded-full"></div>
  </div>`,
        },
      },
    },
  
    // Border Style
    borderStyle: {
      title: "Border Style",
      description: "Utilities for controlling the style of an element's borders.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-border-solid", "border-style: solid"],
          ["E-border-dashed", "border-style: dashed"],
          ["E-border-dotted", "border-style: dotted"],
          ["E-border-double", "border-style: double"],
          ["E-border-none", "border-style: none"],
        ],
      },
      usage: {
        description: "Use border style utilities to control the style of an element's borders.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-2 E-gap-4">
    <div className="E-h-24 E-w-full E-border-4 E-border-solid E-border-blue-500 E-rounded-lg"></div>
    <div className="E-h-24 E-w-full E-border-4 E-border-dashed E-border-blue-500 E-rounded-lg"></div>
    <div className="E-h-24 E-w-full E-border-4 E-border-dotted E-border-blue-500 E-rounded-lg"></div>
    <div className="E-h-24 E-w-full E-border-4 E-border-double E-border-blue-500 E-rounded-lg"></div>
  </div>`,
        },
      },
    },
  
    // Border Width
    borderWidth: {
      title: "Border Width",
      description: "Utilities for controlling the width of an element's borders.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-border-0", "border-width: 0px"],
          ["E-border", "border-width: 1px"],
          ["E-border-2", "border-width: 2px"],
          ["E-border-4", "border-width: 4px"],
          ["E-border-8", "border-width: 8px"],
          ["E-border-t", "border-top-width: 1px"],
          ["E-border-r", "border-right-width: 1px"],
          ["E-border-b", "border-bottom-width: 1px"],
          ["E-border-l", "border-left-width: 1px"],
        ],
      },
      usage: {
        description: "Use border width utilities to control the width of an element's borders.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-2 E-gap-4">
    <div className="E-h-24 E-w-full E-border E-border-blue-500 E-rounded-lg"></div>
    <div className="E-h-24 E-w-full E-border-2 E-border-blue-500 E-rounded-lg"></div>
    <div className="E-h-24 E-w-full E-border-4 E-border-blue-500 E-rounded-lg"></div>
    <div className="E-h-24 E-w-full E-border-8 E-border-blue-500 E-rounded-lg"></div>
  </div>`,
        },
      },
    },
  
    // Divide Color
    divideColor: {
      title: "Divide Color",
      description: "Utilities for controlling the border color between elements.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-divide-{color}", "border-color: {color}"],
          ["E-divide-transparent", "border-color: transparent"],
          ["E-divide-white", "border-color: rgb(255 255 255)"],
          ["E-divide-black", "border-color: rgb(0 0 0)"],
        ],
      },
      usage: {
        description: "Use divide color utilities to control the border color between elements.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-divide-y E-divide-blue-500">
    <div className="E-py-4">First item</div>
    <div className="E-py-4">Second item</div>
    <div className="E-py-4">Third item</div>
  </div>`,
        },
      },
    },
  
    // Divide Opacity
    divideOpacity: {
      title: "Divide Opacity",
      description: "Utilities for controlling the opacity of borders between elements.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-divide-opacity-0", "border-opacity: 0"],
          ["E-divide-opacity-25", "border-opacity: 0.25"],
          ["E-divide-opacity-50", "border-opacity: 0.5"],
          ["E-divide-opacity-75", "border-opacity: 0.75"],
          ["E-divide-opacity-100", "border-opacity: 1"],
        ],
      },
      usage: {
        description: "Use divide opacity utilities to control the opacity of borders between elements.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-space-y-4">
    <div className="E-divide-y E-divide-blue-500 E-divide-opacity-100">
      <div className="E-py-4">Full opacity</div>
      <div className="E-py-4">Divider</div>
    </div>
    <div className="E-divide-y E-divide-blue-500 E-divide-opacity-50">
      <div className="E-py-4">Half opacity</div>
      <div className="E-py-4">Divider</div>
    </div>
  </div>`,
        },
      },
    },
  
    // Divide Style
    divideStyle: {
      title: "Divide Style",
      description: "Utilities for controlling the border style between elements.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-divide-solid", "border-style: solid"],
          ["E-divide-dashed", "border-style: dashed"],
          ["E-divide-dotted", "border-style: dotted"],
          ["E-divide-double", "border-style: double"],
          ["E-divide-none", "border-style: none"],
        ],
      },
      usage: {
        description: "Use divide style utilities to control the border style between elements.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-space-y-4">
    <div className="E-divide-y E-divide-solid E-divide-blue-500">
      <div className="E-py-4">Solid divider</div>
      <div className="E-py-4">Between elements</div>
    </div>
    <div className="E-divide-y E-divide-dashed E-divide-blue-500">
      <div className="E-py-4">Dashed divider</div>
      <div className="E-py-4">Between elements</div>
    </div>
  </div>`,
        },
      },
    },
  
    // Divide Width
    divideWidth: {
      title: "Divide Width",
      description: "Utilities for controlling the width of borders between elements.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-divide-x-0", "border-left-width: 0px"],
          ["E-divide-x-2", "border-left-width: 2px"],
          ["E-divide-x-4", "border-left-width: 4px"],
          ["E-divide-x-8", "border-left-width: 8px"],
          ["E-divide-y-0", "border-top-width: 0px"],
          ["E-divide-y-2", "border-top-width: 2px"],
          ["E-divide-y-4", "border-top-width: 4px"],
          ["E-divide-y-8", "border-top-width: 8px"],
        ],
      },
      usage: {
        description: "Use divide width utilities to control the width of borders between elements.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-2 E-gap-4">
    <div className="E-divide-x E-divide-blue-500 E-flex">
      <div className="E-px-4">Left</div>
      <div className="E-px-4">Right</div>
    </div>
    <div className="E-divide-y-2 E-divide-blue-500">
      <div className="E-py-4">Top</div>
      <div className="E-py-4">Bottom</div>
    </div>
  </div>`,
        },
      },
    },
  
    // Ring Color
    ringColor: {
      title: "Ring Color",
      description: "Utilities for setting the color of focus rings.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-ring-{color}", "--tw-ring-color: 0 0 0 3px {color}"],
          ["E-ring-transparent", "--tw-ring-color: transparent"],
          ["E-ring-white", "--tw-ring-color: 0 0 0 3px rgb(255 255 255)"],
          ["E-ring-black", "--tw-ring-color: 0 0 0 3px rgb(0 0 0)"],
        ],
      },
      usage: {
        description: "Use ring color utilities to set the color of focus rings.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-2 E-gap-4">
    <button className="E-px-4 E-py-2 E-bg-white E-rounded-lg E-ring-2 E-ring-blue-500">
      Blue ring
    </button>
    <button className="E-px-4 E-py-2 E-bg-white E-rounded-lg E-ring-2 E-ring-red-500">
      Red ring
    </button>
  </div>`,
        },
      },
    },
  
    // Ring Offset Color
    ringOffsetColor: {
      title: "Ring Offset Color",
      description: "Utilities for setting the color of ring offsets.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-ring-offset-{color}", "box-shadow: 0 0 0 var(--ring-offset-width) {color}"],
          ["E-ring-offset-white", "box-shadow: 0 0 0 var(--ring-offset-width) rgb(255 255 255)"],
          ["E-ring-offset-black", "box-shadow: 0 0 0 var(--ring-offset-width) rgb(0 0 0)"],
        ],
      },
      usage: {
        description: "Use ring offset color utilities to set the color of ring offsets.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-space-x-4">
    <button className="E-px-4 E-py-2 E-bg-white E-rounded-lg E-ring-2 E-ring-blue-500 E-ring-offset-2 E-ring-offset-blue-100">
      Blue offset
    </button>
    <button className="E-px-4 E-py-2 E-bg-white E-rounded-lg E-ring-2 E-ring-red-500 E-ring-offset-2 E-ring-offset-red-100">
      Red offset
    </button>
  </div>`,
        },
      },
    },
  
    // Ring Offset Width
    ringOffsetWidth: {
      title: "Ring Offset Width",
      description: "Utilities for setting the width of ring offsets.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-ring-offset-0", "--ring-offset-width: 0px"],
          ["E-ring-offset-1", "--ring-offset-width: 1px"],
          ["E-ring-offset-2", "--ring-offset-width: 2px"],
          ["E-ring-offset-4", "--ring-offset-width: 4px"],
          ["E-ring-offset-8", "--ring-offset-width: 8px"],
        ],
      },
      usage: {
        description: "Use ring offset width utilities to set the width of ring offsets.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-space-x-4">
    <button className="E-px-4 E-py-2 E-bg-white E-rounded-lg E-ring-2 E-ring-blue-500 E-ring-offset-2">
      2px offset
    </button>
    <button className="E-px-4 E-py-2 E-bg-white E-rounded-lg E-ring-2 E-ring-blue-500 E-ring-offset-4">
      4px offset
    </button>
  </div>`,
        },
      },
    },
  
    // Ring Opacity
    ringOpacity: {
      title: "Ring Opacity",
      description: "Utilities for setting the opacity of focus rings.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-ring-opacity-0", "--ring-opacity: 0"],
          ["E-ring-opacity-25", "--ring-opacity: 0.25"],
          ["E-ring-opacity-50", "--ring-opacity: 0.5"],
          ["E-ring-opacity-75", "--ring-opacity: 0.75"],
          ["E-ring-opacity-100", "--ring-opacity: 1"],
        ],
      },
      usage: {
        description: "Use ring opacity utilities to set the opacity of focus rings.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-space-x-4">
    <button className="E-px-4 E-py-2 E-bg-white E-rounded-lg E-ring-2 E-ring-blue-500 E-ring-opacity-100">
      100% opacity
    </button>
    <button className="E-px-4 E-py-2 E-bg-white E-rounded-lg E-ring-2 E-ring-blue-500 E-ring-opacity-50">
      50% opacity
    </button>
  </div>`,
        },
      },
    },
  
    // Ring Width
    ringWidth: {
      title: "Ring Width",
      description: "Utilities for setting the width of focus rings.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-ring-0", "--ring-width: 0px"],
          ["E-ring-1", "--ring-width: 1px"],
          ["E-ring-2", "--ring-width: 2px"],
          ["E-ring-4", "--ring-width: 4px"],
          ["E-ring-8", "--ring-width: 8px"],
        ],
      },
      usage: {
        description: "Use ring width utilities to set the width of focus rings.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-space-x-4">
    <button className="E-px-4 E-py-2 E-bg-white E-rounded-lg E-ring-2 E-ring-blue-500">
      2px ring
    </button>
    <button className="E-px-4 E-py-2 E-bg-white E-rounded-lg E-ring-4 E-ring-blue-500">
      4px ring
    </button>
  </div>`,
        },
      },
    },
  }
  
  export default borderComponents
  
  