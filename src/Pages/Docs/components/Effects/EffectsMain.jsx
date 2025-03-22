export const effectsComponents = {

    backgroundBlendMode: {
    title: "Background Blend Mode",
    description: "Utilities for controlling how an element's background images should blend with its background color.",
    table: {
      headers: ["Class", "Properties"],
      rows: [
        ["E-bg-blend-normal", "background-blend-mode: normal"],
        ["E-bg-blend-multiply", "background-blend-mode: multiply"],
        ["E-bg-blend-screen", "background-blend-mode: screen"],
        ["E-bg-blend-overlay", "background-blend-mode: overlay"],
        ["E-bg-blend-darken", "background-blend-mode: darken"],
        ["E-bg-blend-lighten", "background-blend-mode: lighten"],
        ["E-bg-blend-color-dodge", "background-blend-mode: color-dodge"],
        ["E-bg-blend-color-burn", "background-blend-mode: color-burn"],
        ["E-bg-blend-hard-light", "background-blend-mode: hard-light"],
        ["E-bg-blend-soft-light", "background-blend-mode: soft-light"],
        ["E-bg-blend-difference", "background-blend-mode: difference"],
        ["E-bg-blend-exclusion", "background-blend-mode: exclusion"],
        ["E-bg-blend-hue", "background-blend-mode: hue"],
        ["E-bg-blend-saturation", "background-blend-mode: saturation"],
        ["E-bg-blend-color", "background-blend-mode: color"],
        ["E-bg-blend-luminosity", "background-blend-mode: luminosity"],
      ],
    },
    usage: {
      description:
        "Use the bg-blend-{mode} utilities to control how an element’s background image should be blended its background color.",
      example: {
        
        code: `
        <div class="E-bg-blend-multiply E-...">
          <!-- ... -->
        </div>
  `,
      },
    },
  },
  
  boxShadow: {
    title: "Box Shadow",
    description: "Utilities for controlling the box shadow of an element.",
    table: {
      headers: ["Class", "Properties"],
      rows: [
        ["E-shadow-sm", "box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)"],
        ["E-shadow", "box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"],
        ["E-shadow-md", "box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"],
        ["E-shadow-lg", "box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"],
        ["E-shadow-xl", "box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"],
        ["E-shadow-2xl", "box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25)"],
        ["E-shadow-inner", "box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05)"],
        ["E-shadow-none", "box-shadow: 0 0 #0000"],
      ],
    },
    usage: {
      description: "Use box shadow utilities to apply different shadow styles to an element.",
      example: {
        image: "./img/BoxShadow.png",
        code: `
          <div class="E-shadow-sm E-..."></div>
          <div class="E-shadow E-..."></div>
          <div class="E-shadow-md E-..."></div>
          <div class="E-shadow-lg E-..."></div>
          <div class="E-shadow-xl E-..."></div>
          <div class="E-shadow-2xl E-..."></div>
        `,
      },
    },
  },

  mixBlendMode: {
    title: "Mix Blend Mode",
    description: "Utilities for controlling how an element should blend with the content behind it.",
    table: {
      headers: ["Class", "Properties"],
      rows: [
        ["E-mix-blend-normal", "mix-blend-mode: normal"],
        ["E-mix-blend-multiply", "mix-blend-mode: multiply"],
        ["E-mix-blend-screen", "mix-blend-mode: screen"],
        ["E-mix-blend-overlay", "mix-blend-mode: overlay"],
        ["E-mix-blend-darken", "mix-blend-mode: darken"],
        ["E-mix-blend-lighten", "mix-blend-mode: lighten"],
        ["E-mix-blend-color-dodge", "mix-blend-mode: color-dodge"],
        ["E-mix-blend-color-burn", "mix-blend-mode: color-burn"],
        ["E-mix-blend-hard-light", "mix-blend-mode: hard-light"],
        ["E-mix-blend-soft-light", "mix-blend-mode: soft-light"],
        ["E-mix-blend-difference", "mix-blend-mode: difference"],
        ["E-mix-blend-exclusion", "mix-blend-mode: exclusion"],
        ["E-mix-blend-hue", "mix-blend-mode: hue"],
        ["E-mix-blend-saturation", "mix-blend-mode: saturation"],
        ["E-mix-blend-color", "mix-blend-mode: color"],
        ["E-mix-blend-luminosity", "mix-blend-mode: luminosity"],
        
      ],
    },
    usage: {
      description: "Use mix blend mode utilities to control how an element should blend with the content behind it.",
      example: {
        image: "./img/MixBlend.png",
        code: `
          <div class="E-bg-green-300 E-...">
            <div class="E-mix-blend-multiply E-bg-amber-300 E-..."></div>
          </div>
        `,
      },
    },
  },

  opacity: {
    title: "Opacity",
    description: "Utilities for controlling the opacity of an element.",
    table: {
      headers: ["Class", "Properties"],
      rows: [
        ["E-opacity-0", "opacity: 0"],
        ["E-opacity-5", "opacity: 0.05"],
        ["E-opacity-10", "opacity: 0.1"],
        ["E-opacity-20", "opacity: 0.2"],
        ["E-opacity-25", "opacity: 0.25"],
        ["E-opacity-30", "opacity: 0.3"],
        ["E-opacity-40", "opacity: 0.4"],
        ["E-opacity-50", "opacity: 0.5"],
        ["E-opacity-60", "opacity: 0.6"],
        ["E-opacity-70", "opacity: 0.7"],
        ["E-opacity-75", "opacity: 0.75"],
        ["E-opacity-80", "opacity: 0.8"],
        ["E-opacity-90", "opacity: 0.9"],
        ["E-opacity-95", "opacity: 0.95"],
        ["E-opacity-100", "opacity: 1"],
      ],
    },
    usage: {
      description: "Use opacity utilities to control the opacity of an element.",
      example: {
        image: "./img/Opacity.png",
        code: `
          <div class="E-bg-blue-300 E-opacity-100 E-..."></div>
          <div class="E-bg-blue-300 E-opacity-75 E-..."></div>
          <div class="E-bg-blue-300 E-opacity-50 E-..."></div>
          <div class="E-bg-blue-300 E-opacity-25 E-..."></div>
          <div class="E-bg-blue-300 E-opacity-0 E-..."></div>
        `,
      },
    },
  },
}

export default effectsComponents;