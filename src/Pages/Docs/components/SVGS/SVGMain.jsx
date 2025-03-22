

export const svgsComponents = {
    // Fill
    fill: {
      title: "SVG Fill",
      description: "Utilities for styling the fill of SVG elements.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-fill-current", "fill: currentColor"],

        ],
      },
      usage: {
        description: "Use fill-current to set the fill color of an SVG to the current text color. This makes it easy to set an element’s fill color by combining this class with an existing text color utility.",
        example: {
          
          code: `
              <svg class="E-fill-current E-text-green-600 E-..."></svg>
          `,
        },
      },
    },
  
    // Stroke
    stroke: {
      title: "SVG Stroke",
      description: "Utilities for styling the stroke of SVG elements.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-stroke-current", "stroke: currentColor"],

        ],
      },
      usage: {
        description: "Use stroke-current to set the stroke color of an SVG to the current text color. This makes it easy to set an element’s stroke color by combining this class with an existing text color utility.",
        example: {
          
          code: `
              <svg class="E-stroke-current E-text-purple-600 E-..."></svg>

          `,
        },
      },
    },
  
    // Stroke Width
    strokeWidth: {
      title: "SVG Stroke Width",
      description: "Utilities for styling the stroke width of SVG elements.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-stroke-0", "stroke-width: 0"],
          ["E-stroke-1", "stroke-width: 1"],
          ["E-stroke-2", "stroke-width: 2"],

        ],
      },
      usage: {
        description: "Use the stroke-{width} utilities to set the stroke width of an SVG.",
        example: {
          
          code: `
              <svg class="E-stroke-current E-stroke-1 E-text-green-600 E-..."></svg>
              <svg class="E-stroke-current E-stroke-2 E-text-green-600 E-..."></svg>
          `,
        },
      },
    },
  }
  
  export default svgsComponents
  
  