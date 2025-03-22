

export const flexGridComponents = {
    // Align Content
    alignContent: {
      title: "Align Content",
      description: "Utilities for controlling how rows are positioned in multi-row flex and grid containers.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-content-center", "align-content: center"],
          ["E-content-start", "align-content: flex-start"],
          ["E-content-end", "align-content: flex-end"],
          ["E-content-between", "align-content: space-between"],
          ["E-content-around", "align-content: space-around"],
          ["E-content-evenly", "align-content: space-evenly"],
        ],
      },
      usage: {
        description:
          "Use align-content utilities to control how rows are positioned in multi-row flex and grid containers.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-h-48 E-flex E-flex-wrap E-content-between E-bg-gray-200 E-p-4">
    <div className="E-w-1/3 E-p-2 E-bg-blue-500 E-text-white">1</div>
    <div className="E-w-1/3 E-p-2 E-bg-blue-500 E-text-white">2</div>
    <div className="E-w-1/3 E-p-2 E-bg-blue-500 E-text-white">3</div>
    <div className="E-w-1/3 E-p-2 E-bg-blue-500 E-text-white">4</div>
  </div>`,
        },
      },
    },
  
    // Align Items
    alignItems: {
      title: "Align Items",
      description: "Utilities for controlling how flex and grid items are positioned along a container's cross axis.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-items-start", "align-items: flex-start"],
          ["E-items-end", "align-items: flex-end"],
          ["E-items-center", "align-items: center"],
          ["E-items-baseline", "align-items: baseline"],
          ["E-items-stretch", "align-items: stretch"],
        ],
      },
      usage: {
        description:
          "Use align-items utilities to control how flex and grid items are positioned along a container's cross axis.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-flex E-items-center E-h-24 E-bg-gray-200 E-p-4">
    <div className="E-h-8 E-p-2 E-bg-blue-500 E-text-white">Short</div>
    <div className="E-h-16 E-p-2 E-bg-blue-500 E-text-white">Medium</div>
    <div className="E-h-12 E-p-2 E-bg-blue-500 E-text-white">Tall</div>
  </div>`,
        },
      },
    },
  
    // Align Self
    alignSelf: {
      title: "Align Self",
      description:
        "Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-self-auto", "align-self: auto"],
          ["E-self-start", "align-self: flex-start"],
          ["E-self-end", "align-self: flex-end"],
          ["E-self-center", "align-self: center"],
          ["E-self-stretch", "align-self: stretch"],
          ["E-self-baseline", "align-self: baseline"],
        ],
      },
      usage: {
        description:
          "Use align-self utilities to control how an individual flex or grid item is positioned along its container's cross axis.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-flex E-items-stretch E-h-24 E-bg-gray-200 E-p-4">
    <div className="E-p-2 E-bg-blue-500 E-text-white">Default</div>
    <div className="E-self-start E-p-2 E-bg-blue-500 E-text-white">Start</div>
    <div className="E-self-center E-p-2 E-bg-blue-500 E-text-white">Center</div>
    <div className="E-self-end E-p-2 E-bg-blue-500 E-text-white">End</div>
  </div>`,
        },
      },
    },
  
    // Flex
    flex: {
      title: "Flex",
      description: "Utilities for controlling how flex items both grow and shrink.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-flex-1", "flex: 1 1 0%"],
          ["E-flex-auto", "flex: 1 1 auto"],
          ["E-flex-initial", "flex: 0 1 auto"],
          ["E-flex-none", "flex: none"],
        ],
      },
      usage: {
        description: "Use flex utilities to control how flex items both grow and shrink.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-flex E-gap-4">
    <div className="E-flex-none E-w-14 E-h-14 E-bg-blue-500"></div>
    <div className="E-flex-1 E-h-14 E-bg-blue-500"></div>
    <div className="E-flex-1 E-h-14 E-bg-blue-500"></div>
  </div>`,
        },
      },
    },
  
    // Flex Direction
    flexDirection: {
      title: "Flex Direction",
      description: "Utilities for controlling the direction of flex items.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-flex-row", "flex-direction: row"],
          ["E-flex-row-reverse", "flex-direction: row-reverse"],
          ["E-flex-col", "flex-direction: column"],
          ["E-flex-col-reverse", "flex-direction: column-reverse"],
        ],
      },
      usage: {
        description: "Use flex direction utilities to control the direction of flex items.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-flex E-flex-col E-space-y-4">
    <div className="E-p-2 E-bg-blue-500 E-text-white">1</div>
    <div className="E-p-2 E-bg-blue-500 E-text-white">2</div>
    <div className="E-p-2 E-bg-blue-500 E-text-white">3</div>
  </div>`,
        },
      },
    },
  
    // Flex Grow
    flexGrow: {
      title: "Flex Grow",
      description: "Utilities for controlling how flex items grow.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-flex-grow-0", "flex-grow: 0"],
          ["E-flex-grow", "flex-grow: 1"],
        ],
      },
      usage: {
        description: "Use flex grow utilities to control how flex items grow.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-flex">
    <div className="E-flex-grow-0 E-w-20 E-p-2 E-bg-blue-500 E-text-white">Fixed</div>
    <div className="E-flex-grow E-p-2 E-bg-green-500 E-text-white">Grow</div>
  </div>`,
        },
      },
    },
  
    // Flex Shrink
    flexShrink: {
      title: "Flex Shrink",
      description: "Utilities for controlling how flex items shrink.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-flex-shrink-0", "flex-shrink: 0"],
          ["E-flex-shrink", "flex-shrink: 1"],
        ],
      },
      usage: {
        description: "Use flex shrink utilities to control how flex items shrink.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-flex E-w-full">
    <div className="E-flex-shrink-0 E-w-40 E-p-2 E-bg-blue-500 E-text-white">Can't shrink</div>
    <div className="E-flex-shrink E-w-full E-p-2 E-bg-green-500 E-text-white">Can shrink</div>
  </div>`,
        },
      },
    },
  
    // Flex Wrap
    flexWrap: {
      title: "Flex Wrap",
      description: "Utilities for controlling how flex items wrap.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-flex-wrap", "flex-wrap: wrap"],
          ["E-flex-wrap-reverse", "flex-wrap: wrap-reverse"],
          ["E-flex-nowrap", "flex-wrap: nowrap"],
        ],
      },
      usage: {
        description: "Use flex wrap utilities to control how flex items wrap.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-flex E-flex-wrap E-w-full">
    <div className="E-w-1/3 E-p-2 E-bg-blue-500 E-text-white">1</div>
    <div className="E-w-1/3 E-p-2 E-bg-blue-500 E-text-white">2</div>
    <div className="E-w-1/3 E-p-2 E-bg-blue-500 E-text-white">3</div>
    <div className="E-w-1/3 E-p-2 E-bg-blue-500 E-text-white">4</div>
  </div>`,
        },
      },
    },
  
    // Gap
    gap: {
      title: "Gap",
      description: "Utilities for controlling gutters between grid and flexbox items.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-gap-0", "gap: 0"],
          ["E-gap-1", "gap: 0.25rem"],
          ["E-gap-2", "gap: 0.5rem"],
          ["E-gap-4", "gap: 1rem"],
          ["E-gap-x-4", "column-gap: 1rem"],
          ["E-gap-y-4", "row-gap: 1rem"],
        ],
      },
      usage: {
        description: "Use gap utilities to control spacing between grid and flexbox items.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-2 E-gap-4">
    <div className="E-p-4 E-bg-blue-500 E-text-white">1</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">2</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">3</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">4</div>
  </div>`,
        },
      },
    },
  
    // Grid Auto Columns
    gridAutoColumns: {
      title: "Grid Auto Columns",
      description: "Utilities for controlling the size of implicitly-created grid columns.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-auto-cols-auto", "grid-auto-columns: auto"],
          ["E-auto-cols-min", "grid-auto-columns: min-content"],
          ["E-auto-cols-max", "grid-auto-columns: max-content"],
          ["E-auto-cols-fr", "grid-auto-columns: minmax(0, 1fr)"],
        ],
      },
      usage: {
        description: "Use grid auto columns utilities to control the size of implicitly-created grid columns.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-auto-cols-max E-grid-flow-col E-gap-4">
    <div className="E-p-4 E-bg-blue-500 E-text-white">Short</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">Medium length</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">Longer content</div>
  </div>`,
        },
      },
    },
  
    // Grid Auto Flow
    gridAutoFlow: {
      title: "Grid Auto Flow",
      description: "Utilities for controlling how elements in a grid are auto-placed.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-grid-flow-row", "grid-auto-flow: row"],
          ["E-grid-flow-col", "grid-auto-flow: column"],
          ["E-grid-flow-row-dense", "grid-auto-flow: row dense"],
          ["E-grid-flow-col-dense", "grid-auto-flow: column dense"],
        ],
      },
      usage: {
        description: "Use grid auto flow utilities to control how the auto-placement algorithm works for a grid layout.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-flow-col E-grid-rows-3 E-gap-4">
    <div className="E-p-4 E-bg-blue-500 E-text-white">1</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">2</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">3</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">4</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">5</div>
  </div>`,
        },
      },
    },
  
    // Grid Auto Rows
    gridAutoRows: {
      title: "Grid Auto Rows",
      description: "Utilities for controlling the size of implicitly-created grid rows.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-auto-rows-auto", "grid-auto-rows: auto"],
          ["E-auto-rows-min", "grid-auto-rows: min-content"],
          ['E  "grid-auto-rows: auto'],
          ["E-auto-rows-min", "grid-auto-rows: min-content"],
          ["E-auto-rows-max", "grid-auto-rows: max-content"],
          ["E-auto-rows-fr", "grid-auto-rows: minmax(0, 1fr)"],
        ],
      },
      usage: {
        description: "Use grid auto rows utilities to control the size of implicitly-created grid rows.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-auto-rows-max E-grid-flow-row E-gap-4">
    <div className="E-p-4 E-bg-blue-500 E-text-white">Short</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">Medium height content</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">Taller content in this cell</div>
  </div>`,
        },
      },
    },
  
    // Grid Column Start/End
    gridColumnStartEnd: {
      title: "Grid Column Start/End",
      description: "Utilities for controlling how elements are sized and placed across grid columns.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-col-auto", "grid-column: auto"],
          ["E-col-span-1", "grid-column: span 1 / span 1"],
          ["E-col-span-2", "grid-column: span 2 / span 2"],
          ["E-col-span-3", "grid-column: span 3 / span 3"],
          ["E-col-start-1", "grid-column-start: 1"],
          ["E-col-start-2", "grid-column-start: 2"],
          ["E-col-end-3", "grid-column-end: 3"],
          ["E-col-end-4", "grid-column-end: 4"],
        ],
      },
      usage: {
        description: "Use column start/end utilities to control how elements are sized and placed across grid columns.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-3 E-gap-4">
    <div className="E-col-span-2 E-p-4 E-bg-blue-500 E-text-white">Span 2</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">1</div>
    <div className="E-col-start-2 E-col-span-2 E-p-4 E-bg-blue-500 E-text-white">Start 2, Span 2</div>
  </div>`,
        },
      },
    },
  
    // Grid Row Start/End
    gridRowStartEnd: {
      title: "Grid Row Start/End",
      description: "Utilities for controlling how elements are sized and placed across grid rows.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-row-auto", "grid-row: auto"],
          ["E-row-span-1", "grid-row: span 1 / span 1"],
          ["E-row-span-2", "grid-row: span 2 / span 2"],
          ["E-row-span-3", "grid-row: span 3 / span 3"],
          ["E-row-start-1", "grid-row-start: 1"],
          ["E-row-start-2", "grid-row-start: 2"],
          ["E-row-end-3", "grid-row-end: 3"],
          ["E-row-end-4", "grid-row-end: 4"],
        ],
      },
      usage: {
        description: "Use row start/end utilities to control how elements are sized and placed across grid rows.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-rows-3 E-grid-flow-col E-gap-4">
    <div className="E-row-span-2 E-p-4 E-bg-blue-500 E-text-white">Span 2</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">1</div>
    <div className="E-row-start-2 E-row-span-2 E-p-4 E-bg-blue-500 E-text-white">Start 2, Span 2</div>
  </div>`,
        },
      },
    },
  
    // Grid Template Columns
    gridTemplateColumns: {
      title: "Grid Template Columns",
      description: "Utilities for specifying the columns in a grid layout.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-grid-cols-1", "grid-template-columns: repeat(1, minmax(0, 1fr))"],
          ["E-grid-cols-2", "grid-template-columns: repeat(2, minmax(0, 1fr))"],
          ["E-grid-cols-3", "grid-template-columns: repeat(3, minmax(0, 1fr))"],
          ["E-grid-cols-4", "grid-template-columns: repeat(4, minmax(0, 1fr))"],
          ["E-grid-cols-none", "grid-template-columns: none"],
        ],
      },
      usage: {
        description: "Use grid-template-column utilities to define the columns of your grid layout.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-3 E-gap-4">
    <div className="E-p-4 E-bg-blue-500 E-text-white">1</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">2</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">3</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">4</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">5</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">6</div>
  </div>`,
        },
      },
    },
  
    // Grid Template Rows
    gridTemplateRows: {
      title: "Grid Template Rows",
      description: "Utilities for specifying the rows in a grid layout.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-grid-rows-1", "grid-template-rows: repeat(1, minmax(0, 1fr))"],
          ["E-grid-rows-2", "grid-template-rows: repeat(2, minmax(0, 1fr))"],
          ["E-grid-rows-3", "grid-template-rows: repeat(3, minmax(0, 1fr))"],
          ["E-grid-rows-4", "grid-template-rows: repeat(4, minmax(0, 1fr))"],
          ["E-grid-rows-none", "grid-template-rows: none"],
        ],
      },
      usage: {
        description: "Use grid-template-row utilities to define the rows of your grid layout.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-rows-3 E-grid-flow-col E-gap-4">
    <div className="E-p-4 E-bg-blue-500 E-text-white">1</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">2</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">3</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">4</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">5</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">6</div>
  </div>`,
        },
      },
    },
  
    // Justify Content
    justifyContent: {
      title: "Justify Content",
      description: "Utilities for controlling how flex and grid items are positioned along a container's main axis.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-justify-start", "justify-content: flex-start"],
          ["E-justify-end", "justify-content: flex-end"],
          ["E-justify-center", "justify-content: center"],
          ["E-justify-between", "justify-content: space-between"],
          ["E-justify-around", "justify-content: space-around"],
          ["E-justify-evenly", "justify-content: space-evenly"],
        ],
      },
      usage: {
        description:
          "Use justify-content utilities to control how flex and grid items are positioned along a container's main axis.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-flex E-justify-between">
    <div className="E-p-4 E-bg-blue-500 E-text-white">1</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">2</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">3</div>
  </div>`,
        },
      },
    },
  
    // Justify Items
    justifyItems: {
      title: "Justify Items",
      description: "Utilities for controlling how grid items are aligned along their inline axis.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-justify-items-start", "justify-items: start"],
          ["E-justify-items-end", "justify-items: end"],
          ["E-justify-items-center", "justify-items: center"],
          ["E-justify-items-stretch", "justify-items: stretch"],
        ],
      },
      usage: {
        description: "Use justify-items utilities to control how grid items are aligned along their inline axis.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-3 E-justify-items-center E-gap-4">
    <div className="E-p-4 E-bg-blue-500 E-text-white">1</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">2</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">3</div>
  </div>`,
        },
      },
    },
  
    // Justify Self
    justifySelf: {
      title: "Justify Self",
      description: "Utilities for controlling how an individual grid item is aligned along its inline axis.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-justify-self-auto", "justify-self: auto"],
          ["E-justify-self-start", "justify-self: start"],
          ["E-justify-self-end", "justify-self: end"],
          ["E-justify-self-center", "justify-self: center"],
          ["E-justify-self-stretch", "justify-self: stretch"],
        ],
      },
      usage: {
        description:
          "Use justify-self utilities to control how an individual grid item is aligned along its inline axis.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-3 E-gap-4">
    <div className="E-justify-self-start E-p-4 E-bg-blue-500 E-text-white">Start</div>
    <div className="E-justify-self-center E-p-4 E-bg-blue-500 E-text-white">Center</div>
    <div className="E-justify-self-end E-p-4 E-bg-blue-500 E-text-white">End</div>
  </div>`,
        },
      },
    },
  
    // Order
    order: {
      title: "Order",
      description: "Utilities for controlling the order of flex and grid items.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-order-1", "order: 1"],
          ["E-order-2", "order: 2"],
          ["E-order-3", "order: 3"],
          ["E-order-first", "order: -9999"],
          ["E-order-last", "order: 9999"],
          ["E-order-none", "order: 0"],
        ],
      },
      usage: {
        description: "Use order utilities to control the order of flex and grid items.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-flex">
    <div className="E-order-3 E-p-4 E-bg-blue-500 E-text-white">1</div>
    <div className="E-order-2 E-p-4 E-bg-green-500 E-text-white">2</div>
    <div className="E-order-1 E-p-4 E-bg-red-500 E-text-white">3</div>
  </div>`,
        },
      },
    },
  
    // Place Content
    placeContent: {
      title: "Place Content",
      description: "Utilities for controlling how content is justified and aligned at the same time.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-place-content-center", "place-content: center"],
          ["E-place-content-start", "place-content: start"],
          ["E-place-content-end", "place-content: end"],
          ["E-place-content-between", "place-content: space-between"],
          ["E-place-content-around", "place-content: space-around"],
          ["E-place-content-evenly", "place-content: space-evenly"],
          ["E-place-content-stretch", "place-content: stretch"],
        ],
      },
      usage: {
        description: "Use place-content utilities to control how content is justified and aligned at the same time.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-3 E-place-content-center E-h-48 E-bg-gray-200">
    <div className="E-p-4 E-bg-blue-500 E-text-white">1</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">2</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">3</div>
  </div>`,
        },
      },
    },
  
    // Place Items
    placeItems: {
      title: "Place Items",
      description: "Utilities for controlling how items are justified and aligned at the same time.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-place-items-start", "place-items: start"],
          ["E-place-items-end", "place-items: end"],
          ["E-place-items-center", "place-items: center"],
          ["E-place-items-stretch", "place-items: stretch"],
        ],
      },
      usage: {
        description: "Use place-items utilities to control how grid items are aligned in both dimensions at once.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-3 E-place-items-center E-gap-4 E-h-48">
    <div className="E-p-4 E-bg-blue-500 E-text-white">1</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">2</div>
    <div className="E-p-4 E-bg-blue-500 E-text-white">3</div>
  </div>`,
        },
      },
    },
  
    // Place Self
    placeSelf: {
      title: "Place Self",
      description: "Utilities for controlling how an individual item is justified and aligned at the same time.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-place-self-auto", "place-self: auto"],
          ["E-place-self-start", "place-self: start"],
          ["E-place-self-end", "place-self: end"],
          ["E-place-self-center", "place-self: center"],
          ["E-place-self-stretch", "place-self: stretch"],
        ],
      },
      usage: {
        description: "Use place-self utilities to control how an individual grid item is aligned in both dimensions.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-3 E-gap-4 E-h-48">
    <div className="E-place-self-center E-p-4 E-bg-blue-500 E-text-white">1</div>
    <div className="E-place-self-start E-p-4 E-bg-blue-500 E-text-white">2</div>
    <div className="E-place-self-end E-p-4 E-bg-blue-500 E-text-white">3</div>
  </div>`,
        },
      },
    },
  }
  
  export default flexGridComponents
  
  