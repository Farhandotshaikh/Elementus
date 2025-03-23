export const filterComponents = {
    // Backdrop Blur
    backdropBlur: {
      title: "Backdrop Blur",
      description: "Utilities for applying backdrop blur filters to an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-backdrop-blur-none", "backdrop-filter: blur(0)"],
          ["E-backdrop-blur-sm", "backdrop-filter: blur(4px)"],
          ["E-backdrop-blur", "backdrop-filter: blur(8px)"],
          ["E-backdrop-blur-md", "backdrop-filter: blur(12px)"],
          ["E-backdrop-blur-lg", "backdrop-filter: blur(16px)"],
          ["E-backdrop-blur-xl", "backdrop-filter: blur(24px)"],
          ["E-backdrop-blur-2xl", "backdrop-filter: blur(40px)"],
          ["E-backdrop-blur-3xl", "backdrop-filter: blur(64px)"],
        ],
      },
      usage: {
        description: "Use backdrop blur utilities to apply a blur filter to the backdrop of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-2 E-gap-4">
    <div className="E-relative E-h-48">
      <img src="/placeholder.svg?height=200&width=200" className="E-absolute E-inset-0 E-w-full E-h-full E-object-cover" />
      <div className="E-absolute E-inset-0 E-backdrop-blur-sm E-bg-white/30">
        backdrop-blur-sm
      </div>
    </div>
    <div className="E-relative E-h-48">
      <img src="/placeholder.svg?height=200&width=200" className="E-absolute E-inset-0 E-w-full E-h-full E-object-cover" />
      <div className="E-absolute E-inset-0 E-backdrop-blur-xl E-bg-white/30">
        backdrop-blur-xl
      </div>
    </div>
  </div>`,
        },
      },
    },
  
    // Backdrop Brightness
    backdropBrightness: {
      title: "Backdrop Brightness",
      description: "Utilities for applying backdrop brightness filters to an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-backdrop-brightness-0", "backdrop-filter: brightness(0)"],
          ["E-backdrop-brightness-50", "backdrop-filter: brightness(.5)"],
          ["E-backdrop-brightness-75", "backdrop-filter: brightness(.75)"],
          ["E-backdrop-brightness-90", "backdrop-filter: brightness(.9)"],
          ["E-backdrop-brightness-100", "backdrop-filter: brightness(1)"],
          ["E-backdrop-brightness-105", "backdrop-filter: brightness(1.05)"],
          ["E-backdrop-brightness-110", "backdrop-filter: brightness(1.1)"],
          ["E-backdrop-brightness-125", "backdrop-filter: brightness(1.25)"],
          ["E-backdrop-brightness-150", "backdrop-filter: brightness(1.5)"],
          ["E-backdrop-brightness-200", "backdrop-filter: brightness(2)"],
        ],
      },
      usage: {
        description: "Use backdrop brightness utilities to adjust the brightness of the backdrop of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-3 E-gap-4">
    <div className="E-relative E-h-32">
      <img src="/placeholder.svg?height=200&width=200" className="E-absolute E-inset-0 E-w-full E-h-full E-object-cover" />
      <div className="E-absolute E-inset-0 E-backdrop-brightness-50 E-bg-white/30">
        50%
      </div>
    </div>
    <div className="E-relative E-h-32">
      <img src="/placeholder.svg?height=200&width=200" className="E-absolute E-inset-0 E-w-full E-h-full E-object-cover" />
      <div className="E-absolute E-inset-0 E-backdrop-brightness-100 E-bg-white/30">
        100%
      </div>
    </div>
    <div className="E-relative E-h-32">
      <img src="/placeholder.svg?height=200&width=200" className="E-absolute E-inset-0 E-w-full E-h-full E-object-cover" />
      <div className="E-absolute E-inset-0 E-backdrop-brightness-150 E-bg-white/30">
        150%
      </div>
    </div>
  </div>`,
        },
      },
    },
  
    // Backdrop Contrast
    backdropContrast: {
      title: "Backdrop Contrast",
      description: "Utilities for applying backdrop contrast filters to an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-backdrop-contrast-0", "backdrop-filter: contrast(0)"],
          ["E-backdrop-contrast-50", "backdrop-filter: contrast(.5)"],
          ["E-backdrop-contrast-75", "backdrop-filter: contrast(.75)"],
          ["E-backdrop-contrast-100", "backdrop-filter: contrast(1)"],
          ["E-backdrop-contrast-125", "backdrop-filter: contrast(1.25)"],
          ["E-backdrop-contrast-150", "backdrop-filter: contrast(1.5)"],
          ["E-backdrop-contrast-200", "backdrop-filter: contrast(2)"],
        ],
      },
      usage: {
        description: "Use backdrop contrast utilities to adjust the contrast of the backdrop of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-3 E-gap-4">
    <div className="E-relative E-h-32">
      <img src="/placeholder.svg?height=200&width=200" className="E-absolute E-inset-0 E-w-full E-h-full E-object-cover" />
      <div className="E-absolute E-inset-0 E-backdrop-contrast-50 E-bg-white/30">
        50%
      </div>
    </div>
    <div className="E-relative E-h-32">
      <img src="/placeholder.svg?height=200&width=200" className="E-absolute E-inset-0 E-w-full E-h-full E-object-cover" />
      <div className="E-absolute E-inset-0 E-backdrop-contrast-100 E-bg-white/30">
        100%
      </div>
    </div>
    <div className="E-relative E-h-32">
      <img src="/placeholder.svg?height=200&width=200" className="E-absolute E-inset-0 E-w-full E-h-full E-object-cover" />
      <div className="E-absolute E-inset-0 E-backdrop-contrast-200 E-bg-white/30">
        200%
      </div>
    </div>
  </div>`,
        },
      },
    },
    backdropFilter: {
      title: "Backdrop Filter",
      description: "Utilities for enabling and disabling backdrop filters on an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-backdrop-filter", "backdrop-filter: var(--tw-backdrop-blur) \nvar(--tw-backdrop-brightness) \nvar(--tw-backdrop-contrast) \nvar(--tw-backdrop-grayscale) \nvar(--tw-backdrop-hue-rotate) \nvar(--tw-backdrop-invert) \nvar(--tw-backdrop-opacity) \nvar(--tw-backdrop-saturate) \nvar(--tw-backdrop-sepia)"],
          ["E-backdrop-filter-none", "backdrop-filter: none"],
          
        ],
      },
      usage: {
        description: "Use backdrop contrast utilities to adjust the contrast of the backdrop of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div class="backdrop-filter backdrop-grayscale backdrop-blur-md backdrop-contrast-200 ...">
  <!-- ... -->
</div>
                `,
        },
      },
    },
  
    // Backdrop Grayscale
    backdropGrayscale: {
      title: "Backdrop Grayscale",
      description: "Utilities for applying backdrop grayscale filters to an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-backdrop-grayscale-0", "backdrop-filter: grayscale(0)"],
          ["E-backdrop-grayscale", "backdrop-filter: grayscale(100%)"],
        ],
      },
      usage: {
        description: "Use backdrop grayscale utilities to adjust the grayscale filter of the backdrop of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-2 E-gap-4">
    <div className="E-relative E-h-48">
      <img src="/placeholder.svg?height=200&width=200" className="E-absolute E-inset-0 E-w-full E-h-full E-object-cover" />
      <div className="E-absolute E-inset-0 E-backdrop-grayscale-0 E-bg-white/30">
        grayscale-0
      </div>
    </div>
    <div className="E-relative E-h-48">
      <img src="/placeholder.svg?height=200&width=200" className="E-absolute E-inset-0 E-w-full E-h-full E-object-cover" />
      <div className="E-absolute E-inset-0 E-backdrop-grayscale E-bg-white/30">
        grayscale
      </div>
    </div>
  </div>`,
        },
      },
    },
  
    // Backdrop Hue Rotate
    backdropHueRotate: {
      title: "Backdrop Hue Rotate",
      description: "Utilities for applying backdrop hue-rotate filters to an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-backdrop-hue-rotate-0", "backdrop-filter: hue-rotate(0deg)"],
          ["E-backdrop-hue-rotate-15", "backdrop-filter: hue-rotate(15deg)"],
          ["E-backdrop-hue-rotate-30", "backdrop-filter: hue-rotate(30deg)"],
          ["E-backdrop-hue-rotate-60", "backdrop-filter: hue-rotate(60deg)"],
          ["E-backdrop-hue-rotate-90", "backdrop-filter: hue-rotate(90deg)"],
          ["E-backdrop-hue-rotate-180", "backdrop-filter: hue-rotate(180deg)"],
        ],
      },
      usage: {
        description: "Use backdrop hue-rotate utilities to rotate the hue of the backdrop of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-3 E-gap-4">
    <div className="E-relative E-h-32">
      <img src="/placeholder.svg?height=200&width=200" className="E-absolute E-inset-0 E-w-full E-h-full E-object-cover" />
      <div className="E-absolute E-inset-0 E-backdrop-hue-rotate-30 E-bg-white/30">
        30deg
      </div>
    </div>
    <div className="E-relative E-h-32">
      <img src="/placeholder.svg?height=200&width=200" className="E-absolute E-inset-0 E-w-full E-h-full E-object-cover" />
      <div className="E-absolute E-inset-0 E-backdrop-hue-rotate-90 E-bg-white/30">
        90deg
      </div>
    </div>
    <div className="E-relative E-h-32">
      <img src="/placeholder.svg?height=200&width=200" className="E-absolute E-inset-0 E-w-full E-h-full E-object-cover" />
      <div className="E-absolute E-inset-0 E-backdrop-hue-rotate-180 E-bg-white/30">
        180deg
      </div>
    </div>
  </div>`,
        },
      },
    },
  
    // Backdrop Invert
    backdropInvert: {
      title: "Backdrop Invert",
      description: "Utilities for applying backdrop invert filters to an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-backdrop-invert-0", "backdrop-filter: invert(0)"],
          ["E-backdrop-invert", "backdrop-filter: invert(100%)"],
        ],
      },
      usage: {
        description: "Use backdrop invert utilities to invert the colors of the backdrop of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-2 E-gap-4">
    <div className="E-relative E-h-48">
      <img src="/placeholder.svg?height=200&width=200" className="E-absolute E-inset-0 E-w-full E-h-full E-object-cover" />
      <div className="E-absolute E-inset-0 E-backdrop-invert-0 E-bg-white/30">
        invert-0
      </div>
    </div>
    <div className="E-relative E-h-48">
      <img src="/placeholder.svg?height=200&width=200" className="E-absolute E-inset-0 E-w-full E-h-full E-object-cover" />
      <div className="E-absolute E-inset-0 E-backdrop-invert E-bg-white/30">
        invert
      </div>
    </div>
  </div>`,
        },
      },
    },
  
    // Backdrop Opacity
    backdropOpacity: {
      title: "Backdrop Opacity",
      description: "Utilities for applying backdrop opacity filters to an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-backdrop-opacity-0", "backdrop-filter: opacity(0)"],
          ["E-backdrop-opacity-25", "backdrop-filter: opacity(0.25)"],
          ["E-backdrop-opacity-50", "backdrop-filter: opacity(0.5)"],
          ["E-backdrop-opacity-75", "backdrop-filter: opacity(0.75)"],
          ["E-backdrop-opacity-100", "backdrop-filter: opacity(1)"],
        ],
      },
      usage: {
        description: "Use backdrop opacity utilities to control the opacity of the backdrop of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-4 E-gap-4">
    <div className="E-relative E-h-32">
      <img src="/placeholder.svg?height=200&width=200" className="E-absolute E-inset-0 E-w-full E-h-full E-object-cover" />
      <div className="E-absolute E-inset-0 E-backdrop-opacity-25 E-bg-white">
        25%
      </div>
    </div>
    <div className="E-relative E-h-32">
      <img src="/placeholder.svg?height=200&width=200" className="E-absolute E-inset-0 E-w-full E-h-full E-object-cover" />
      <div className="E-absolute E-inset-0 E-backdrop-opacity-50 E-bg-white">
        50%
      </div>
    </div>
    <div className="E-relative E-h-32">
      <img src="/placeholder.svg?height=200&width=200" className="E-absolute E-inset-0 E-w-full E-h-full E-object-cover" />
      <div className="E-absolute E-inset-0 E-backdrop-opacity-75 E-bg-white">
        75%
      </div>
    </div>
    <div className="E-relative E-h-32">
      <img src="/placeholder.svg?height=200&width=200" className="E-absolute E-inset-0 E-w-full E-h-full E-object-cover" />
      <div className="E-absolute E-inset-0 E-backdrop-opacity-100 E-bg-white">
        100%
      </div>
    </div>
  </div>`,
        },
      },
    },
  
    // Backdrop Saturate
    backdropSaturate: {
      title: "Backdrop Saturate",
      description: "Utilities for applying backdrop saturation filters to an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-backdrop-saturate-0", "backdrop-filter: saturate(0)"],
          ["E-backdrop-saturate-50", "backdrop-filter: saturate(.5)"],
          ["E-backdrop-saturate-100", "backdrop-filter: saturate(1)"],
          ["E-backdrop-saturate-150", "backdrop-filter: saturate(1.5)"],
          ["E-backdrop-saturate-200", "backdrop-filter: saturate(2)"],
        ],
      },
      usage: {
        description: "Use backdrop saturate utilities to control the saturation of the backdrop of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-3 E-gap-4">
    <div className="E-relative E-h-32">
      <img src="/placeholder.svg?height=200&width=200" className="E-absolute E-inset-0 E-w-full E-h-full E-object-cover" />
      <div className="E-absolute E-inset-0 E-backdrop-saturate-50 E-bg-white/30">
        50%
      </div>
    </div>
    <div className="E-relative E-h-32">
      <img src="/placeholder.svg?height=200&width=200" className="E-absolute E-inset-0 E-w-full E-h-full E-object-cover" />
      <div className="E-absolute E-inset-0 E-backdrop-saturate-100 E-bg-white/30">
        100%
      </div>
    </div>
    <div className="E-relative E-h-32">
      <img src="/placeholder.svg?height=200&width=200" className="E-absolute E-inset-0 E-w-full E-h-full E-object-cover" />
      <div className="E-absolute E-inset-0 E-backdrop-saturate-200 E-bg-white/30">
        200%
      </div>
    </div>
  </div>`,
        },
      },
    },
  
    // Backdrop Sepia
    backdropSepia: {
      title: "Backdrop Sepia",
      description: "Utilities for applying backdrop sepia filters to an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-backdrop-sepia-0", "backdrop-filter: sepia(0)"],
          ["E-backdrop-sepia", "backdrop-filter: sepia(100%)"],
        ],
      },
      usage: {
        description: "Use backdrop sepia utilities to apply a sepia filter to the backdrop of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-2 E-gap-4">
    <div className="E-relative E-h-48">
      <img src="/placeholder.svg?height=200&width=200" className="E-absolute E-inset-0 E-w-full E-h-full E-object-cover" />
      <div className="E-absolute E-inset-0 E-backdrop-sepia-0 E-bg-white/30">
        sepia-0
      </div>
    </div>
    <div className="E-relative E-h-48">
      <img src="/placeholder.svg?height=200&width=200" className="E-absolute E-inset-0 E-w-full E-h-full E-object-cover" />
      <div className="E-absolute E-inset-0 E-backdrop-sepia E-bg-white/30">
        sepia
      </div>
    </div>
  </div>`,
        },
      },
    },
  
    // Blur
    blur: {
      title: "Blur",
      description: "Utilities for applying blur filters to an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-blur-none", "filter: blur(0)"],
          ["E-blur-sm", "filter: blur(4px)"],
          ["E-blur", "filter: blur(8px)"],
          ["E-blur-md", "filter: blur(12px)"],
          ["E-blur-lg", "filter: blur(16px)"],
          ["E-blur-xl", "filter: blur(24px)"],
          ["E-blur-2xl", "filter: blur(40px)"],
          ["E-blur-3xl", "filter: blur(64px)"],
        ],
      },
      usage: {
        description: "Use blur utilities to apply a blur filter to an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-3 E-gap-4">
    <img className="E-blur-none" src="/placeholder.svg?height=100&width=100" alt="None" />
    <img className="E-blur-md" src="/placeholder.svg?height=100&width=100" alt="Medium" />
    <img className="E-blur-3xl" src="/placeholder.svg?height=100&width=100" alt="3XL" />
  </div>`,
        },
      },
    },
  
    // Brightness
    brightness: {
      title: "Brightness",
      description: "Utilities for applying brightness filters to an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-brightness-0", "filter: brightness(0)"],
          ["E-brightness-50", "filter: brightness(.5)"],
          ["E-brightness-75", "filter: brightness(.75)"],
          ["E-brightness-90", "filter: brightness(.9)"],
          ["E-brightness-100", "filter: brightness(1)"],
          ["E-brightness-105", "filter: brightness(1.05)"],
          ["E-brightness-110", "filter: brightness(1.1)"],
          ["E-brightness-125", "filter: brightness(1.25)"],
          ["E-brightness-150", "filter: brightness(1.5)"],
          ["E-brightness-200", "filter: brightness(2)"],
        ],
      },
      usage: {
        description: "Use brightness utilities to adjust the brightness of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-5 E-gap-4">
    <img className="E-brightness-50" src="/placeholder.svg?height=100&width=100" alt="50%" />
    <img className="E-brightness-75" src="/placeholder.svg?height=100&width=100" alt="75%" />
    <img className="E-brightness-100" src="/placeholder.svg?height=100&width=100" alt="100%" />
    <img className="E-brightness-125" src="/placeholder.svg?height=100&width=100" alt="125%" />
    <img className="E-brightness-200" src="/placeholder.svg?height=100&width=100" alt="200%" />
  </div>`,
        },
      },
    },
  
    // Contrast
    contrast: {
      title: "Contrast",
      description: "Utilities for applying contrast filters to an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-contrast-0", "filter: contrast(0)"],
          ["E-contrast-50", "filter: contrast(.5)"],
          ["E-contrast-75", "filter: contrast(.75)"],
          ["E-contrast-100", "filter: contrast(1)"],
          ["E-contrast-125", "filter: contrast(1.25)"],
          ["E-contrast-150", "filter: contrast(1.5)"],
          ["E-contrast-200", "filter: contrast(2)"],
        ],
      },
      usage: {
        description: "Use contrast utilities to adjust the contrast of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-4 E-gap-4">
    <img className="E-contrast-50" src="/placeholder.svg?height=100&width=100" alt="50%" />
    <img className="E-contrast-100" src="/placeholder.svg?height=100&width=100" alt="100%" />
    <img className="E-contrast-150" src="/placeholder.svg?height=100&width=100" alt="150%" />
    <img className="E-contrast-200" src="/placeholder.svg?height=100&width=100" alt="200%" />
  </div>`,
        },
      },
    },
  
    // Drop Shadow
    dropShadow: {
      title: "Drop Shadow",
      description: "Utilities for applying drop-shadow filters to an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-drop-shadow-sm", "filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))"],
          ["E-drop-shadow", "filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))"],
          [
            "E-drop-shadow-md",
            "filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
          ],
          [
            "E-drop-shadow-lg",
            "filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
          ],
          [
            "E-drop-shadow-xl",
            "filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))",
          ],
          ["E-drop-shadow-2xl", "filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))"],
          ["E-drop-shadow-none", "filter: drop-shadow(0 0 #0000)"],
        ],
      },
      usage: {
        description: "Use drop-shadow utilities to apply a drop shadow filter to an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-3 E-gap-8">
    <div className="E-drop-shadow-sm E-bg-white E-p-4 E-rounded">
      shadow-sm
    </div>
    <div className="E-drop-shadow-md E-bg-white E-p-4 E-rounded">
      shadow-md
    </div>
    <div className="E-drop-shadow-xl E-bg-white E-p-4 E-rounded">
      shadow-xl
    </div>
  </div>`,
        },
      },
    },

    filter: {
      title: "Filter",
      description: "Utilities for enabling and disabling filters on an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-filter", "filter: filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);"],
          ["E-filter-none", "filter: none"],
          
        ],
      },
      usage: {
        description: "Use the filter utility to enable filters (in combination with other filter utilities like blur or grayscale), and the filter-none utility to remove filters.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `
<div class="filter grayscale blur-md contrast-200 ...">
  <!-- ... -->
</div>    
          `,
        },
      },
    },
  
    // Grayscale
    grayscale: {
      title: "Grayscale",
      description: "Utilities for applying grayscale filters to an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-grayscale-0", "filter: grayscale(0)"],
          ["E-grayscale", "filter: grayscale(100%)"],
        ],
      },
      usage: {
        description: "Use grayscale utilities to apply a grayscale filter to an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-2 E-gap-4">
    <img className="E-grayscale-0" src="/placeholder.svg?height=100&width=100" alt="Original" />
    <img className="E-grayscale" src="/placeholder.svg?height=100&width=100" alt="Grayscale" />
  </div>`,
        },
      },
    },
  
    // Hue Rotate
    hueRotate: {
      title: "Hue Rotate",
      description: "Utilities for applying hue-rotate filters to an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-hue-rotate-0", "filter: hue-rotate(0deg)"],
          ["E-hue-rotate-15", "filter: hue-rotate(15deg)"],
          ["E-hue-rotate-30", "filter: hue-rotate(30deg)"],
          ["E-hue-rotate-60", "filter: hue-rotate(60deg)"],
          ["E-hue-rotate-90", "filter: hue-rotate(90deg)"],
          ["E-hue-rotate-180", "filter: hue-rotate(180deg)"],
        ],
      },
      usage: {
        description: "Use hue-rotate utilities to rotate the hue of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-3 E-gap-4">
    <img className="E-hue-rotate-30" src="/placeholder.svg?height=100&width=100" alt="30deg" />
    <img className="E-hue-rotate-90" src="/placeholder.svg?height=100&width=100" alt="90deg" />
    <img className="E-hue-rotate-180" src="/placeholder.svg?height=100&width=100" alt="180deg" />
  </div>`,
        },
      },
    },
  
    // Invert
    invert: {
      title: "Invert",
      description: "Utilities for applying invert filters to an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-invert-0", "filter: invert(0)"],
          ["E-invert", "filter: invert(100%)"],
        ],
      },
      usage: {
        description: "Use invert utilities to invert the colors of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-2 E-gap-4">
    <img className="E-invert-0" src="/placeholder.svg?height=100&width=100" alt="Original" />
    <img className="E-invert" src="/placeholder.svg?height=100&width=100" alt="Inverted" />
  </div>`,
        },
      },
    },
  
    // Saturate
    saturate: {
      title: "Saturate",
      description: "Utilities for applying saturation filters to an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-saturate-0", "filter: saturate(0)"],
          ["E-saturate-50", "filter: saturate(.5)"],
          ["E-saturate-100", "filter: saturate(1)"],
          ['saturate        "filter: saturate(.5)'],
          ["E-saturate-100", "filter: saturate(1)"],
          ["E-saturate-150", "filter: saturate(1.5)"],
          ["E-saturate-200", "filter: saturate(2)"],
        ],
      },
      usage: {
        description: "Use saturate utilities to adjust the saturation of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-5 E-gap-4">
    <img className="E-saturate-0" src="/placeholder.svg?height=100&width=100" alt="0%" />
    <img className="E-saturate-50" src="/placeholder.svg?height=100&width=100" alt="50%" />
    <img className="E-saturate-100" src="/placeholder.svg?height=100&width=100" alt="100%" />
    <img className="E-saturate-150" src="/placeholder.svg?height=100&width=100" alt="150%" />
    <img className="E-saturate-200" src="/placeholder.svg?height=100&width=100" alt="200%" />
  </div>`,
        },
      },
    },
  
    // Sepia
    sepia: {
      title: "Sepia",
      description: "Utilities for applying sepia filters to an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-sepia-0", "filter: sepia(0)"],
          ["E-sepia", "filter: sepia(100%)"],
        ],
      },
      usage: {
        description: "Use sepia utilities to apply a sepia filter to an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<div className="E-grid E-grid-cols-2 E-gap-4">
    <img className="E-sepia-0" src="/placeholder.svg?height=100&width=100" alt="Original" />
    <img className="E-sepia" src="/placeholder.svg?height=100&width=100" alt="Sepia" />
  </div>`,
        },
      },
    },
  }
  
  export default filterComponents
  
  