

export const accessibilityComponents = {
    
    screenReader: {
      title: "Screen Reader Only",
      description: "Utilities for visually hiding an element but keeping it accessible to screen readers.",
      
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-sr-only", "position: absolute;\nwidth: 1px\nheight: 1px;\npadding: 0;\nmargin: -1px;\noverflow: hidden;\nclip: rect(0, 0, 0, 0);\nwhite-space: nowrap;\nborder-width: 0;"],
          ["E-not-sr-only", "	position: static;\nwidth: auto;\nheight: auto;\npadding: 0;\nmargin: 0;\noverflow: visible;\nclip: auto;\nwhite-space: normal;"],

        ],
      },
      usage: {
        description: "Use sr-only  to hide an element visually without hiding it from screen readers and not-sr-only to show the element again.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `
          <a href="#">
            <svg><!-- ... --></svg>
            <span class="E-sr-only E-sm:not-sr-only">Settings</span>
          </a>
          `,
        },
      },
    },
  
  }
  
  export default accessibilityComponents
  
  