

export const interactivityComponents = {
    // Appearance
    appearance: {
      title: "Appearance",
      description: "Utilities for suppressing native form control styling.",
      table: {
        headers: ["Class", "Properties"],
        rows: [["E-appearance-none", "appearance: none"]],
      },
      usage: {
        description: "Use appearance-none to reset any browser-specific styling on an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-2 E-gap-4">
    {/* With browser styling */}
    <div>
      <label className="E-block">Default select</label>
      <select className="E-border E-border-gray-300 E-rounded-md">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
  
    {/* With appearance-none */}
    <div>
      <label className="E-block">Unstyled select</label>
      <select className="E-appearance-none E-border E-border-gray-300 E-rounded-md E-px-3 E-py-2">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
  </div>`,
        },
      },
    },
  
    // Cursor
    cursor: {
      title: "Cursor",
      description: "Utilities for controlling the cursor style when hovering over an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-cursor-auto", "cursor: auto"],
          ["E-cursor-default", "cursor: default"],
          ["E-cursor-pointer", "cursor: pointer"],
          ["E-cursor-wait", "cursor: wait"],
          ["E-cursor-text", "cursor: text"],
          ["E-cursor-move", "cursor: move"],
          ["E-cursor-help", "cursor: help"],
          ["E-cursor-not-allowed", "cursor: not-allowed"],
          ["E-cursor-none", "cursor: none"],
          ["E-cursor-progress", "cursor: progress"],
          ["E-cursor-grab", "cursor: grab"],
          ["E-cursor-grabbing", "cursor: grabbing"],
        ],
      },
      usage: {
        description: "Use the cursor utilities to change the cursor that is displayed when hovering over an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-2 E-gap-4">
    <button className="E-cursor-pointer E-p-4 E-bg-blue-500 E-text-white E-rounded">
      Clickable Button
    </button>
    <button className="E-cursor-not-allowed E-p-4 E-bg-gray-300 E-text-gray-500 E-rounded" disabled>
      Disabled Button
    </button>
    <div className="E-cursor-text E-p-4 E-bg-gray-100 E-rounded">
      Text Selection Area
    </div>
    <div className="E-cursor-move E-p-4 E-bg-gray-100 E-rounded">
      Draggable Element
    </div>
    <div className="E-cursor-grab E-p-4 E-bg-gray-100 E-rounded">
      Grabbable Element
    </div>
    <div className="E-cursor-wait E-p-4 E-bg-gray-100 E-rounded">
      Loading State
    </div>
  </div>`,
        },
      },
    },
  
    // Outline
    outline: {
      title: "Outline",
      description: "Utilities for controlling an element's outline.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-outline-none", "outline: 2px solid transparent; outline-offset: 2px"],
          ["E-outline", "outline-style: solid"],
          ["E-outline-dashed", "outline-style: dashed"],
          ["E-outline-dotted", "outline-style: dotted"],
          ["E-outline-double", "outline-style: double"],
        ],
      },
      usage: {
        description:
          "Use outline utilities to control an element's outline. Remember to maintain accessibility by providing alternative focus indicators when removing outlines.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-space-y-4">
    <button className="E-p-2 E-bg-blue-500 E-text-white E-rounded">
      Default Button
    </button>
    <button className="E-outline-none E-focus:ring-2 E-focus:ring-blue-500 E-p-2 E-bg-blue-500 E-text-white E-rounded">
      Custom Focus Button
    </button>
    <button className="E-outline-dashed E-outline-2 E-outline-blue-500 E-p-2 E-bg-white E-text-blue-500 E-rounded">
      Dashed Outline
    </button>
    <button className="E-outline-dotted E-outline-2 E-outline-blue-500 E-p-2 E-bg-white E-text-blue-500 E-rounded">
      Dotted Outline
    </button>
  </div>`,
        },
      },
    },
  
    // Pointer Events
    pointerEvents: {
      title: "Pointer Events",
      description: "Utilities for controlling whether an element responds to pointer events.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-pointer-events-none", "pointer-events: none"],
          ["E-pointer-events-auto", "pointer-events: auto"],
        ],
      },
      usage: {
        description: "Use pointer-events-{value} utilities to control whether an element responds to pointer events.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-space-y-4">
    <button className="E-pointer-events-none E-p-4 E-bg-gray-300 E-text-gray-500 E-rounded">
      Non-interactive Button
    </button>
    <div className="E-relative">
      <img 
        src="/placeholder.svg?height=100&width=300" 
        alt="Example image"
        className="E-w-full"
      />
      <div className="E-pointer-events-none E-absolute E-inset-0 E-flex E-items-center E-justify-center E-bg-black/50 E-text-white">
        Overlay Text
      </div>
    </div>
  </div>`,
        },
      },
    },
  
    // Resize
    resize: {
      title: "Resize",
      description: "Utilities for controlling how an element can be resized.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-resize-none", "resize: none"],
          ["E-resize", "resize: both"],
          ["E-resize-y", "resize: vertical"],
          ["E-resize-x", "resize: horizontal"],
        ],
      },
      usage: {
        description: "Use resize utilities to control how an element can be resized.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-space-y-4">
    <textarea className="E-resize-none E-border E-p-2 E-rounded" placeholder="Cannot be resized"></textarea>
    <textarea className="E-resize E-border E-p-2 E-rounded" placeholder="Can be resized both ways"></textarea>
    <textarea className="E-resize-y E-border E-p-2 E-rounded" placeholder="Can be resized vertically"></textarea>
    <textarea className="E-resize-x E-border E-p-2 E-rounded" placeholder="Can be resized horizontally"></textarea>
  </div>`,
        },
      },
    },
  
    // User Select
    userSelect: {
      title: "User Select",
      description: "Utilities for controlling whether the user can select text.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-select-none", "user-select: none"],
          ["E-select-text", "user-select: text"],
          ["E-select-all", "user-select: all"],
          ["E-select-auto", "user-select: auto"],
        ],
      },
      usage: {
        description: "Use the select utilities to control whether the user can select text in an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-space-y-4">
    <p className="E-select-none E-p-4 E-bg-gray-100 E-rounded">
      You cannot select this text
    </p>
    <p className="E-select-text E-p-4 E-bg-gray-100 E-rounded">
      You can select this text normally
    </p>
    <p className="E-select-all E-p-4 E-bg-gray-100 E-rounded">
      Clicking once selects all of this text
    </p>
    <p className="E-select-auto E-p-4 E-bg-gray-100 E-rounded">
      Browser default text selection
    </p>
  </div>`,
        },
      },
    },
  }
  
  export default interactivityComponents
  
  