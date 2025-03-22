

export const spacingComponents = {
    // Margin
    margin: {
      title: "Margin",
      description: "Utilities for controlling the margin of an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-m-0", "margin: 0px"],
          ["E-m-1", "margin: 0.25rem"], // 4px
          ["E-m-2", "margin: 0.5rem"], // 8px
          ["E-m-4", "margin: 1rem"], // 16px
          ["E-m-8", "margin: 2rem"], // 32px
          ["...", "..."], 
          ["E-m-96", "margin: 24rem"],
          ["E-mt-0", "margin-top: 0"],
          ["...", "..."],
          ["E-mt-96", "margin-top: 24rem"],
          ["E-mb-0", "margin-bottom: 0"],
          ["...", "..."],
          ["E-mb-96", "margin-bottom: 24rem"],
          ["E-ml-0", "margin-left: 0"],
          ["...", "..."],
          ["E-ml-96", "margin-left: 24rem"],
          ["E-mr-0", "margin-right: 0"],
          ["...", "..."],
          ["E-mr-96", "margin-right: 24rem"],
          ["E-mx-0", "margin-left: 0; margin-right: 0"],
          ["...", "..."],
          ["E-mx-96", "margin-left: 24rem; margin-right: 24rem"],
          ["E-my-0", "margin-top: 0; margin-bottom: 0"],
          ["...", "..."],
          ["E-my-96", "margin-top: 24rem; margin-bottom: 24rem"],
        ],
      },
      usage: {
        description: "Use margin utilities to control the margin on one or more sides of an element.",
        example: {
       
          code: `
            <div class="E-mt-8 E-...">mt-8</div>
            <div class="E-mr-8 E-...">mr-8</div>
            <div class="E-mb-8 E-...">mb-8</div>
            <div class="E-ml-8 E-...">ml-8</div>
          `,
        },
      },
    },
  
    // Padding
    padding: {
      title: "Padding",
      description: "Utilities for controlling the padding of an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-p-0", "padding: 0px"],
          ["E-p-1", "padding: 0.25rem"], // 4px
          ["E-p-2", "padding: 0.5rem"], // 8px
          ["E-p-4", "padding: 1rem"], // 16px
          ["E-p-8", "padding: 2rem"], // 32px
          ["...", "..."], 
          ["E-p-96", "padding: 24rem"],
          ["E-pt-0", "padding-top: 0"],
          ["...", "..."],
          ["E-pt-96", "padding-top: 24rem"],
          ["E-pb-0", "padding-bottom: 0"],
          ["...", "..."],
          ["E-pb-96", "padding-bottom: 24rem"],
          ["E-pl-0", "padding-left: 0"],
          ["...", "..."],
          ["E-pl-96", "padding-left: 24rem"],
          ["E-pr-0", "padding-right: 0"],
          ["...", "..."],
          ["E-pr-96", "padding-right: 24rem"],
          ["E-px-0", "padding-left: 0;padding-right: 0"],
          ["...", "..."],
          ["E-px-96", "padding-left: 24rem;padding-right: 24rem"],
          ["E-py-0", "padding-top: 0;padding-bottom: 0"],
          ["...", "..."],
          ["E-py-96", "padding-top: 24rem;padding-bottom: 24rem"],
          
        ],
      },
      usage: {
        description: "Use padding utilities to control the padding on one or more sides of an element.",
        example: {
          
          code: `
          <div class="E-pt-6 E-...">pt-6</div>
          <div class="E-pr-4 E-...">pr-4</div>
          <div class="E-pb-8 E-...">pb-8</div>
          <div class="E-pl-2 E-...">pl-2</div>
        `,
        },
      },
    },
  
    // Space Between
    spaceBetween: {
      title: "Space Between",
      description: "Utilities for controlling the space between child elements.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["space-x-0", "margin-left: 0px to all children except first child"],
          ["space-x-1", "margin-left: 0.25rem to all children except first child"],
          ["space-x-2", "margin-left: 0.5rem to all children except first child"],
          ["space-x-4", "margin-left: 1rem to all children except first child"],
          ["space-x-8", "margin-left: 2rem to all children except first child"],
          ["...", "..."],
          ["space-x-96", "margin-left: 24rem to all children except first child"],
          ["space-y-0", "margin-top: 0px to all children except first child"],
          ["space-y-1", "margin-top: 0.25rem to all children except first child"],
          ["space-y-2", "margin-top: 0.5rem to all children except first child"],
          ["space-y-4", "margin-top: 1rem to all children except first child"],
          ["space-y-8", "margin-top: 2rem to all children except first child"],
          ["...", "..."],
          ["space-y-96", "margin-top: 24rem to all children except first child"],
          ["space-x-reverse", "reverse space-x direction"],
          ["space-y-reverse", "reverse space-y direction"],
        ],
      },
      usage: {
        description: "Use space-between utilities to control the space between child elements.",
        example: {

          code: `<div className="E-flex space-x-4">
    <div className="E-bg-purple-100 E-p-4">Item 1</div>
    <div className="E-bg-purple-100 E-p-4">Item 2</div>
    <div className="E-bg-purple-100 E-p-4">Item 3</div>
  </div>
  
  <div className="E-flex E-flex-col space-y-4 E-mt-8">
    <div className="E-bg-purple-100 E-p-4">Item 1</div>
    <div className="E-bg-purple-100 E-p-4">Item 2</div>
    <div className="E-bg-purple-100 E-p-4">Item 3</div>
  </div>`,
        },
      },
    },
  }
  
  export default spacingComponents
  
  