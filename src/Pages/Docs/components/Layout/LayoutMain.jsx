
// import BoxDeco from "./img/BoxDeco.png"

export const layoutComponents = {
    // Box Decoration Break
    boxDecoration: {
      title: "Box Decoration Break",
      description:
        "Utilities for controlling how element fragments should be rendered across multiple lines, columns, or pages.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-box-decoration-clone", "box-decoration-break: clone"],
          ["E-box-decoration-slice", "box-decoration-break: slice"],
        ],
      },
      usage: {
        description: "Use box decoration break utilities to control how element fragments should be rendered.",
        example: {
          image: "./img/BoxDeco.png",
          
          code: `<span class="E-decoration-clone E-bg-gradient-to-b E-from-yellow-400 E-to-red-500 E-text-transparent ...">
  Hello<br>
  World
</span>
          `,
        },
      },
    },
  
    // Box Sizing
    boxSizing: {
      title: "Box Sizing",
      description: "Utilities for controlling how the browser should calculate an element's total size.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-box-border", "box-sizing: border-box"],
          ["E-box-content", "box-sizing: content-box"],
        ],
      },
      usage: {
        description: "Use box sizing utilities to control how the browser should calculate an element's total size.",
        example: {
          
          code: `<div className="E-grid E-grid-cols-2 E-gap-4">
    <div className="E-box-border E-bg-blue-500 E-p-4 E-h-32 E-w-32">
      box-border
    </div>
    <div className="E-box-content E-bg-blue-500 E-p-4 E-h-32 E-w-32">
      box-content
    </div>
  </div>`,
        },
      },
    },
  
    // Clear
    clear: {
      title: "Clear",
      description: "Utilities for controlling the wrapping of content around floating elements.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-clear-left", "clear: left"],
          ["E-clear-right", "clear: right"],
          ["E-clear-both", "clear: both"],
          ["E-clear-none", "clear: none"],
        ],
      },
      usage: {
        description: "Use clear utilities to control wrapping of content around floating elements.",
        example: {
          
          code: `<div className="E-space-y-4">
    <div>
      <div className="E-float-left E-bg-blue-500 E-p-4">Float left</div>
      <div className="E-clear-left E-bg-red-500 E-p-4">Clear left</div>
    </div>
    
    <div>
      <div className="E-float-right E-bg-blue-500 E-p-4">Float right</div>
      <div className="E-clear-right E-bg-red-500 E-p-4">Clear right</div>
    </div>
  </div>`,
        },
      },
    },
  
    // Container
    container: {
      title: "Container",
      description: "A component for fixing an element's width to the current breakpoint.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-container", "width: 100%"],
          ["E-sm:container", "max-width: 520px"],
          ["E-md:container", "max-width: 738px"],
          ["E-lg:container", "max-width: 1024px"],
          ["E-xl:container", "max-width: 1240px"],
          ["2xl: container", "max-width: 1524px"],
        ],
      },
      usage: {
        description: "Use container to constrain an element's width to the current breakpoint.",
        example: {
          
          code: `<div className="E-container E-mx-auto E-p-4">
    <div className="E-bg-blue-500 E-p-4 E-text-white E-text-center">
      Responsive container
    </div>
  </div>`,
        },
      },
    },
  
    // Display
    display: {
      title: "Display",
      description: "Utilities for controlling the display box type of an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-block", "display: block"],
          ["E-inline-block", "display: inline-block"],
          ["E-inline", "display: inline"],
          ["E-flex", "display: flex"],
          ["E-inline-flex", "display: inline-flex"],
          ["E-grid", "display: grid"],
          ["E-inline-grid", "display: inline-grid"],
          ["E-hidden", "display: none"],
        ],
      },
      usage: {
        description: "Use display utilities to control the display type of an element.",
        example: {
          
          code: `<div className="space-y-4">
    <div className="E-block E-bg-blue-500 E-p-4">Block</div>
    <div>
      <div className="E-inline-block E-bg-blue-500 E-p-4 E-mr-2">Inline Block 1</div>
      <div className="E-inline-block E-bg-blue-500 E-p-4">Inline Block 2</div>
    </div>
    <div className="E-flex space-x-4">
      <div className="E-bg-blue-500 E-p-4">Flex 1</div>
      <div className="E-bg-blue-500 E-p-4">Flex 2</div>
    </div>
  </div>`,
        },
      },
    },
  
    // Floats
    floats: {
      title: "Floats",
      description: "Utilities for controlling the wrapping of content around an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-float-right", "float: right"],
          ["E-float-left", "float: left"],
          ["E-float-none", "float: none"],
        ],
      },
      usage: {
        description: "Use float utilities to control the wrapping of content around an element.",
        example: {
          
          code: `<div className="E-clearfix">
    <div className="E-float-left E-bg-blue-500 E-p-4 E-mr-4">
      Float left
    </div>
    <div className="E-float-right E-bg-blue-500 E-p-4 E-ml-4">
      Float right
    </div>
    <p>
      This is some text that will wrap around the floated elements.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>`,
        },
      },
    },
  
    // Isolation
    isolation: {
      title: "Isolation",
      description: "Utilities for controlling whether an element should create a new stacking context.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-isolate", "isolation: isolate"],
          ["E-isolation-auto", "isolation: auto"],
        ],
      },
      usage: {
        description: "Use isolation utilities to create new stacking contexts.",
        example: {
          
          code: `<div className="E-relative E-space-y-4">
    <div className="E-isolate E-bg-blue-500 E-p-4 E-z-10">
      Isolated element
    </div>
    <div className="E-isolation-auto E-bg-red-500 E-p-4 E-z-20">
      Auto isolation
    </div>
  </div>`,
        },
      },
    },
  
    // Object Fit
    objectFit: {
      title: "Object Fit",
      description: "Utilities for controlling how a replaced element's content should be resized.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-object-contain", "object-fit: contain"],
          ["E-object-cover", "object-fit: cover"],
          ["E-object-fill", "object-fit: fill"],
          ["E-object-none", "object-fit: none"],
          ["E-object-scale-down", "object-fit: scale-down"],
        ],
      },
      usage: {
        description: "Use object fit utilities to control how a replaced element's content should be resized.",
        example: {
          
          code: `<div className="E-grid E-grid-cols-2 E-gap-4">
    <div>
      <img className="E-object-contain E-h-48 E-w-full E-bg-gray-100" src="/placeholder.svg?height=200&width=200" alt="Object Contain" />
    </div>
    <div>
      <img className="E-object-cover E-h-48 E-w-full E-bg-gray-100" src="/placeholder.svg?height=200&width=200" alt="Object Cover" />
    </div>
  </div>`,
        },
      },
    },
  
    // Object Position
    objectPosition: {
      title: "Object Position",
      description:
        "Utilities for controlling how a replaced element's content should be positioned within its container.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-object-bottom", "object-position: bottom"],
          ["E-object-center", "object-position: center"],
          ["E-object-left", "object-position: left"],
          ["E-object-right", "object-position: right"],
          ["E-object-top", "object-position: top"],
        ],
      },
      usage: {
        description: "Use object position utilities to control how a replaced element's content should be positioned.",
        example: {
          
          code: `<div className="E-grid E-grid-cols-3 E-gap-4">
    <img className="E-object-cover E-object-top E-h-48 E-w-full" src="/placeholder.svg?height=200&width=200" alt="Top" />
    <img className="E-object-cover E-object-center E-h-48 E-w-full" src="/placeholder.svg?height=200&width=200" alt="Center" />
    <img className="E-object-cover E-object-bottom E-h-48 E-w-full" src="/placeholder.svg?height=200&width=200" alt="Bottom" />
  </div>`,
        },
      },
    },
  
    // Overflow
    overflow: {
      title: "Overflow",
      description: "Utilities for controlling how an element handles content that is too large for the container.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-overflow-auto", "overflow: auto"],
          ["E-overflow-hidden", "overflow: hidden"],
          ["E-overflow-visible", "overflow: visible"],
          ["E-overflow-scroll", "overflow: scroll"],
          ["E-overflow-x-auto", "overflow-x: auto"],
          ["E-overflow-y-auto", "overflow-y: auto"],
        ],
      },
      usage: {
        description: "Use overflow utilities to control how an element handles overflow content.",
        example: {
          
          code: `<div className="E-grid E-grid-cols-2 E-gap-4">
    <div className="E-overflow-auto E-h-32 E-bg-gray-100 E-p-4">
      <p>Long scrollable content that overflows...</p>
    </div>
    <div className="E-overflow-hidden E-h-32 E-bg-gray-100 E-p-4">
      <p>Content that will be clipped when it overflows...</p>
    </div>
  </div>`,
        },
      },
    },
  
    // Overscroll
    overscroll: {
      title: "Overscroll",
      description:
        "Utilities for controlling how the browser behaves when scrolling past the boundary of a scrolling area.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-overscroll-auto", "overscroll-behavior: auto"],
          ["E-overscroll-contain", "overscroll-behavior: contain"],
          ["E-overscroll-none", "overscroll-behavior: none"],
        ],
      },
      usage: {
        description:
          "Use overscroll utilities to control the browser's scroll behavior when reaching the boundary of a scrolling area.",
        example: {
          
          code: `<div className="E-grid E-grid-cols-2 E-gap-4">
    <div className="E-overscroll-auto E-h-32 E-overflow-auto E-bg-gray-100 E-p-4">
      <p>Content with normal overscroll behavior...</p>
    </div>
    <div className="E-overscroll-contain E-h-32 E-overflow-auto E-bg-gray-100 E-p-4">
      <p>Content with contained overscroll behavior...</p>
    </div>
  </div>`,
        },
      },
    },
  
    // Position
    position: {
      title: "Position",
      description: "Utilities for controlling how an element is positioned in the DOM.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-static", "position: static"],
          ["E-fixed", "position: fixed"],
          ["E-absolute", "position: absolute"],
          ["E-relative", "position: relative"],
          ["E-sticky", "position: sticky"],
        ],
      },
      usage: {
        description: "Use position utilities to control how an element is positioned.",
        example: {
          
          code: `<div className="E-relative E-h-32 E-bg-gray-200">
    <div className="E-absolute E-top-0 E-right-0 E-bg-blue-500 E-p-2">
      Absolute
    </div>
    <div className="E-relative E-bg-red-500 E-p-2 E-mt-4">
      Relative
    </div>
  </div>`,
        },
      },
    },
  
    // Top/Bottom/Left/Right (TBLR)
    tblr: {
      title: "Top/Bottom/Left/Right",
      description: "Utilities for controlling the placement of positioned elements.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-top-0", "top: 0px"],
          ["E-right-0", "right: 0px"],
          ["E-bottom-0", "bottom: 0px"],
          ["E-left-0", "left: 0px"],
          ["E-inset-0", "top: 0px; right: 0px; bottom: 0px; left: 0px"],
        ],
      },
      usage: {
        description: "Use placement utilities to control the position of absolutely positioned elements.",
        example: {
          
          code: `<div className="E-relative E-h-32 E-w-32 E-bg-gray-200">
    <div className="E-absolute E-top-0 E-left-0 E-bg-blue-500 E-p-2">
      Top Left
    </div>
    <div className="E-absolute E-bottom-0 E-right-0 E-bg-red-500 E-p-2">
      Bottom Right
    </div>
  </div>`,
        },
      },
    },
  
    // Visibility
    visibility: {
      title: "Visibility",
      description: "Utilities for controlling the visibility of an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-visible", "visibility: visible"],
          ["E-invisible", "visibility: hidden"],
        ],
      },
      usage: {
        description: "Use visibility utilities to control the visibility of an element.",
        example: {
          
          code: `<div className="E-space-y-4">
    <div className="E-visible E-bg-blue-500 E-p-4">
      Visible element
    </div>
    <div className="E-invisible E-bg-red-500 E-p-4">
      Invisible element
    </div>
  </div>`,
        },
      },
    },
  
    // Z-Index
    zIndex: {
      title: "Z-Index",
      description: "Utilities for controlling the stack order of an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-z-0", "z-index: 0"],
          ["E-z-10", "z-index: 10"],
          ["E-z-20", "z-index: 20"],
          ["E-z-30", "z-index: 30"],
          ["E-z-40", "z-index: 40"],
          ["E-z-50", "z-index: 50"],
          ["E-z-auto", "z-index: auto"],
        ],
      },
      usage: {
        description: "Use z-index utilities to control the stack order of elements.",
        example: {
          
          code: `<div className="E-relative E-h-32">
    <div className="E-absolute E-inset-0 E-bg-blue-500 E-z-10">
      z-10
    </div>
    <div className="E-absolute E-inset-0 E-mt-4 E-ml-4 E-bg-red-500 E-z-20">
      z-20
    </div>
    <div className="E-absolute E-inset-0 E-mt-8 E-ml-8 E-bg-green-500 E-z-30">
      z-30
    </div>
  </div>`,
        },
      },
    },
  }
  
  export default layoutComponents
  
  