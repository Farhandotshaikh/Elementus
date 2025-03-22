export const backgroundComponents = {
    // Background Attachment
    backgroundAttachment: {
      title: "Background Attachment",
      description: "Utilities for controlling how a background image behaves when scrolling.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-bg-fixed", "background-attachment: fixed"],
          ["E-bg-local", "background-attachment: local"],
          ["E-bg-scroll", "background-attachment: scroll"],
        ],
      },
      usage: {
        description:
          "Use background attachment utilities to control how background images scroll when the content is scrolled.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-1 E-gap-8">
    <div className="E-h-64 E-overflow-y-scroll">
      <div 
        className="E-h-96 E-bg-fixed E-bg-center"
        style={{ backgroundImage: "url('/placeholder.svg?height=400&width=300')" }}
      >
        <div className="E-p-8">
          <div className="E-bg-white/50 E-backdrop-blur-sm E-p-4 E-rounded">
            <h3 className="E-font-bold">bg-fixed</h3>
            <p>This background image will stay fixed while you scroll</p>
          </div>
        </div>
      </div>
    </div>`,
        },
      },
    },
  
    // Background Clip
    backgroundClip: {
      title: "Background Clip",
      description: "Utilities for controlling the bounding box of an element's background.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-bg-clip-border", "background-clip: border-box"],
          ["E-bg-clip-padding", "background-clip: padding-box"],
          ["E-bg-clip-content", "background-clip: content-box"],
          ["E-bg-clip-text", "background-clip: text"],
        ],
      },
      usage: {
        description: "Use background clip utilities to control how an element's background extends beyond its bounds.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-2 E-gap-4">
    <div className="E-p-4">
      <div className="E-bg-blue-500 E-bg-clip-border E-p-6 E-border-4 E-border-dashed E-border-blue-800">
        bg-clip-border
      </div>
    </div>
    <div className="E-p-4">
      <div className="E-bg-blue-500 E-bg-clip-padding E-p-6 E-border-4 E-border-dashed E-border-blue-800">
        bg-clip-padding
      </div>
    </div>
    <div className="E-p-4">
      <div className="E-bg-blue-500 E-bg-clip-content E-p-6 E-border-4 E-border-dashed E-border-blue-800">
        bg-clip-content
      </div>
    </div>
    <div className="E-p-4">
      <div className="E-text-5xl E-font-extrabold E-bg-clip-text E-text-transparent E-bg-gradient-to-r E-from-blue-500 E-to-purple-500">
        bg-clip-text
      </div>
    </div>
  </div>`,
        },
      },
    },
  
    // Background Color
    backgroundColor: {
      title: "Background Color",
      description: "Utilities for controlling an element's background color.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-bg-transparent", "background-color: transparent"],
          ["E-bg-current", "background-color: currentColor"],
          ["E-bg-{color}", "background-color: {color}"],
          ["E-bg-white", "background-color: rgb(255 255 255)"],
          ["E-bg-black", "background-color: rgb(0 0 0)"],
        ],
      },
      usage: {
        description: "Use background color utilities to set the background color of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-2 E-gap-4">
    <div className="E-h-24 E-bg-{color} E-rounded-lg E-flex E-items-center E-justify-center E-text-white">
      bg-{color}
    </div>
    <div className="E-h-24 E-bg-white E-rounded-lg E-flex E-items-center E-justify-center E-border">
      bg-white
    </div>
    <div className="E-h-24 E-bg-black E-rounded-lg E-flex E-items-center E-justify-center E-text-white">
      bg-black
    </div>
  </div>`,
        },
      },
    },
  
    // Background Image
    backgroundImage: {
      title: "Background Image",
      description: "Utilities for controlling an element's background image.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-bg-none", "background-image: none"],
          ["E-bg-gradient-to-t", "background-image: linear-gradient(to top, var(--tw-gradient-stops))"],
          ["E-bg-gradient-to-tr", "background-image: linear-gradient(to top right, var(--tw-gradient-stops))"],
          ["E-bg-gradient-to-r", "background-image: linear-gradient(to right, var(--tw-gradient-stops))"],
          ["E-bg-gradient-to-br", "background-image: linear-gradient(to bottom right, var(--tw-gradient-stops))"],
          ["E-bg-gradient-to-b", "background-image: linear-gradient(to bottom, var(--tw-gradient-stops))"],
          ["E-bg-gradient-to-bl", "background-image: linear-gradient(to bottom left, var(--tw-gradient-stops))"],
          ["E-bg-gradient-to-l", "background-image: linear-gradient(to left, var(--tw-gradient-stops))"],
          ["E-bg-gradient-to-tl", "background-image: linear-gradient(to top left, var(--tw-gradient-stops))"],
        ],
      },
      usage: {
        description: "Use background image utilities to control the background image of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-2 E-gap-4">
    <div className="E-h-32 E-bg-gradient-to-r E-from-blue-500 E-to-purple-500 E-rounded-lg"></div>
    <div className="E-h-32 E-bg-gradient-to-br E-from-green-400 E-to-blue-500 E-rounded-lg"></div>
    <div 
      className="E-h-32 E-rounded-lg E-bg-cover E-bg-center"
      style={{ backgroundImage: "url('/placeholder.svg?height=200&width=200')" }}
    ></div>
    <div className="E-h-32 E-bg-gradient-to-tr E-from-pink-500 E-to-yellow-500 E-rounded-lg"></div>
  </div>`,
        },
      },
    },
  
    // Background Opacity
    backgroundOpacity: {
      title: "Background Opacity",
      description: "Utilities for controlling the opacity of an element's background color.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-bg-opacity-0", "background-color: rgb(0 0 0 / 0)"],
          ["E-bg-opacity-25", "background-color: rgb(0 0 0 / 0.25)"],
          ["E-bg-opacity-50", "background-color: rgb(0 0 0 / 0.5)"],
          ["E-bg-opacity-75", "background-color: rgb(0 0 0 / 0.75)"],
          ["E-bg-opacity-100", "background-color: rgb(0 0 0 / 1)"],
        ],
      },
      usage: {
        description: "Use background opacity utilities to control the opacity of an element's background color.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-2 E-gap-4 E-bg-checkered E-p-4">
    <div className="E-h-24 E-bg-blue-500 E-bg-opacity-100 E-rounded-lg E-flex E-items-center E-justify-center E-text-white">
      bg-opacity-100
    </div>
    <div className="E-h-24 E-bg-blue-500 E-bg-opacity-75 E-rounded-lg E-flex E-items-center E-justify-center E-text-white">
      bg-opacity-75
    </div>
    <div className="E-h-24 E-bg-blue-500 E-bg-opacity-50 E-rounded-lg E-flex E-items-center E-justify-center E-text-white">
      bg-opacity-50
    </div>
    <div className="E-h-24 E-bg-blue-500 E-bg-opacity-25 E-rounded-lg E-flex E-items-center E-justify-center E-text-white">
      bg-opacity-25
    </div>
  </div>`,
        },
      },
    },
  
    // Background Origin
    backgroundOrigin: {
      title: "Background Origin",
      description:
        "Utilities for controlling how an element's background is positioned relative to borders, padding, and content.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-bg-origin-border", "background-origin: border-box"],
          ["E-bg-origin-padding", "background-origin: padding-box"],
          ["E-bg-origin-content", "background-origin: content-box"],
        ],
      },
      usage: {
        description: "Use background origin utilities to control where an element's background is positioned.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-3 E-gap-4">
    <div 
      className="E-h-32 E-border-4 E-border-dashed E-border-blue-800 E-p-4 E-bg-origin-border E-bg-blue-500 E-bg-cover"
      style={{ backgroundImage: "url('/placeholder.svg?height=200&width=200')" }}
    >
      bg-origin-border
    </div>
    <div 
      className="E-h-32 E-border-4 E-border-dashed E-border-blue-800 E-p-4 E-bg-origin-padding E-bg-blue-500 E-bg-cover"
      style={{ backgroundImage: "url('/placeholder.svg?height=200&width=200')" }}
    >
      bg-origin-padding
    </div>
    <div 
      className="E-h-32 E-border-4 E-border-dashed E-border-blue-800 E-p-4 E-bg-origin-content E-bg-blue-500 E-bg-cover"
      style={{ backgroundImage: "url('/placeholder.svg?height=200&width=200')" }}
    >
      bg-origin-content
    </div>
  </div>`,
        },
      },
    },
  
    // Background Position
    backgroundPosition: {
      title: "Background Position",
      description: "Utilities for controlling the position of an element's background image.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-bg-bottom", "background-position: bottom"],
          ["E-bg-center", "background-position: center"],
          ["E-bg-left", "background-position: left"],
          ["E-bg-left-bottom", "background-position: left bottom"],
          ["E-bg-left-top", "background-position: left top"],
          ["E-bg-right", "background-position: right"],
          ["E-bg-right-bottom", "background-position: right bottom"],
          ["E-bg-right-top", "background-position: right top"],
          ["E-bg-top", "background-position: top"],
        ],
      },
      usage: {
        description: "Use background position utilities to control the position of an element's background image.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-3 E-gap-4">
    <div 
      className="E-h-32 E-bg-left-top E-bg-no-repeat E-border E-border-gray-300 E-rounded"
      style={{ backgroundImage: "url('/placeholder.svg?height=50&width=50')" }}
    >
      bg-left-top
    </div>
    <div 
      className="E-h-32 E-bg-center E-bg-no-repeat E-border E-border-gray-300 E-rounded"
      style={{ backgroundImage: "url('/placeholder.svg?height=50&width=50')" }}
    >
      bg-center
    </div>
    <div 
      className="E-h-32 E-bg-right-bottom E-bg-no-repeat E-border E-border-gray-300 E-rounded"
      style={{ backgroundImage: "url('/placeholder.svg?height=50&width=50')" }}
    >
      bg-right-bottom
    </div>
  </div>`,
        },
      },
    },
  
    // Background Repeat
    backgroundRepeat: {
      title: "Background Repeat",
      description: "Utilities for controlling the repetition of an element's background image.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-bg-repeat", "background-repeat: repeat"],
          ["E-bg-no-repeat", "background-repeat: no-repeat"],
          ["E-bg-repeat-x", "background-repeat: repeat-x"],
          ["E-bg-repeat-y", "background-repeat: repeat-y"],
          ["E-bg-repeat-round", "background-repeat: round"],
          ["E-bg-repeat-space", "background-repeat: space"],
        ],
      },
      usage: {
        description: "Use background repeat utilities to control how background images are repeated.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-2 E-gap-4">
    <div 
      className="E-h-48 E-bg-repeat E-border E-border-gray-300 E-rounded"
      style={{ backgroundImage: "url('/placeholder.svg?height=50&width=50')" }}
    >
      bg-repeat
    </div>
    <div 
      className="E-h-48 E-bg-no-repeat E-border E-border-gray-300 E-rounded"
      style={{ backgroundImage: "url('/placeholder.svg?height=50&width=50')" }}
    >
      bg-no-repeat
    </div>
    <div 
      className="E-h-48 E-bg-repeat-x E-border E-border-gray-300 E-rounded"
      style={{ backgroundImage: "url('/placeholder.svg?height=50&width=50')" }}
    >
      bg-repeat-x
    </div>
    <div 
      className="E-h-48 E-bg-repeat-y E-border E-border-gray-300 E-rounded"
      style={{ backgroundImage: "url('/placeholder.svg?height=50&width=50')" }}
    >
      bg-repeat-y
    </div>
  </div>`,
        },
      },
    },
  
    // Background Size
    backgroundSize: {
      title: "Background Size",
      description: "Utilities for controlling the background size of an element's background image.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-bg-auto", "background-size: auto"],
          ["E-bg-cover", "background-size: cover"],
          ["E-bg-contain", "background-size: contain"],
        ],
      },
      usage: {
        description: "Use background size utilities to control the size of background images.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-3 E-gap-4">
    <div 
      className="E-h-48 E-bg-auto E-bg-center E-bg-no-repeat E-border E-border-gray-300 E-rounded"
      style={{ backgroundImage: "url('/placeholder.svg?height=100&width=100')" }}
    >
      bg-auto
    </div>
    <div 
      className="E-h-48 E-bg-cover E-bg-center E-border E-border-gray-300 E-rounded"
      style={{ backgroundImage: "url('/placeholder.svg?height=100&width=100')" }}
    >
      bg-cover
    </div>
    <div 
      className="E-h-48 E-bg-contain E-bg-center E-bg-no-repeat E-border E-border-gray-300 E-rounded"
      style={{ backgroundImage: "url('/placeholder.svg?height=100&width=100')" }}
    >
      bg-contain
    </div>
  </div>`,
        },
      },
    },
  
    // Gradient Color Stops
    gradientColorStops: {
      title: "Gradient Color Stops",
      description: "Utilities for controlling the color stops in background gradients.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-from-{color}", "Sets the starting color stop for a gradient"],
          ["E-via-{color}", "Sets the middle color stop for a gradient"],
          ["E-to-{color}", "Sets the ending color stop for a gradient"],
        ],
      },
      usage: {
        description: "Use gradient color stop utilities to control the colors used in background gradients.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-gap-4">
    <div className="E-h-20 E-bg-gradient-to-r E-from-blue-500 E-to-purple-500 E-rounded-lg"></div>
    <div className="E-h-20 E-bg-gradient-to-r E-from-blue-500 E-via-green-500 E-to-purple-500 E-rounded-lg"></div>
    <div className="E-h-20 E-bg-gradient-to-r E-from-pink-500 E-via-yellow-500 E-to-blue-500 E-rounded-lg"></div>
    <div className="E-h-20 E-bg-gradient-to-tr E-from-red-500 E-to-blue-500 E-rounded-lg"></div>
  </div>`,
        },
      },
    },
  }
  
  export default backgroundComponents
  
  