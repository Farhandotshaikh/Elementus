

export const typographyComponents = {
    // Font Family
    fontFamily: {
      title: "Font Family",
      description: "Utilities for controlling the font family of an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-font-sans", "font-family: ui-sans-serif, system-ui, sans-serif"],
          ["E-font-serif", "font-family: ui-serif, Georgia, serif"],
          ["E-font-mono", "font-family: ui-monospace, monospace"],
        ],
      },
      usage: {
        description: "Use font family utilities to control the font family of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<p className="E-font-sans">The quick brown fox jumps over the lazy dog.</p>
  <p className="E-font-serif">The quick brown fox jumps over the lazy dog.</p>
  <p className="E-font-mono">The quick brown fox jumps over the lazy dog.</p>`,
        },
      },
    },
  
    // Font Size
    fontSize: {
      title: "Font Size",
      description: "Utilities for controlling the font size of an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-text-xs", "font-size: 0.75rem; line-height: 1rem"],
          ["E-text-sm", "font-size: 0.875rem; line-height: 1.25rem"],
          ["E-text-base", "font-size: 1rem; line-height: 1.5rem"],
          ["E-text-lg", "font-size: 1.125rem; line-height: 1.75rem"],
          ["E-text-xl", "font-size: 1.25rem; line-height: 1.75rem"],
          ["E-text-2xl", "font-size: 1.5rem; line-height: 2rem"],
        ],
      },
      usage: {
        description: "Use font size utilities to control the font size of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<p className="E-text-xs">Extra small text</p>
  <p className="E-text-sm">Small text</p>
  <p className="E-text-base">Base text</p>
  <p className="E-text-lg">Large text</p>
  <p className="E-text-xl">Extra large text</p>
  <p className="E-text-2xl">2X large text</p>`,
        },
      },
    },
  
    // Font Smoothing
    fontSmoothing: {
      title: "Font Smoothing",
      description: "Utilities for controlling the font smoothing of an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-antialiased", "-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale"],
          ["E-subpixel-antialiased", "-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto"],
        ],
      },
      usage: {
        description: "Use the antialiased utility to render text using grayscale antialiasing.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<p className="E-antialiased">The quick brown fox jumps over the lazy dog.</p>
  <p className="E-subpixel-antialiased">The quick brown fox jumps over the lazy dog.</p>`,
        },
      },
    },
  
    // Font Style
    fontStyle: {
      title: "Font Style",
      description: "Utilities for controlling the style of text.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-italic", "font-style: italic"],
          ["E-not-italic", "font-style: normal"],
        ],
      },
      usage: {
        description: "Use the italic and not-italic utilities to control whether text should be italicized or not.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<p className="E-italic">The quick brown fox jumps over the lazy dog.</p>
  <p className="E-not-italic">The quick brown fox jumps over the lazy dog.</p>`,
        },
      },
    },
  
    // Font Variant Numeric
    fontVariantNumeric: {
      title: "Font Variant Numeric",
      description: "Utilities for controlling the variant of numbers.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-normal-nums", "font-variant-numeric: normal"],
          ["E-ordinal", "font-variant-numeric: ordinal"],
          ["E-slashed-zero", "font-variant-numeric: slashed-zero"],
          ["E-lining-nums", "font-variant-numeric: lining-nums"],
          ["E-oldstyle-nums", "font-variant-numeric: oldstyle-nums"],
          ["E-proportional-nums", "font-variant-numeric: proportional-nums"],
          ["E-tabular-nums", "font-variant-numeric: tabular-nums"],
          ["E-diagonal-fractions", "font-variant-numeric: diagonal-fractions"],
          ["E-stacked-fractions", "font-variant-numeric: stacked-fractions"],
        ],
      },
      usage: {
        description: "Use the font-variant-numeric utilities to control the variant of numbers.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<p className="E-normal-nums">1234567890</p>
  <p className="E-ordinal">1st, 2nd, 3rd, 4th</p>
  <p className="E-slashed-zero">0</p>
  <p className="E-lining-nums">1234567890</p>
  <p className="E-oldstyle-nums">1234567890</p>
  <p className="E-proportional-nums">1234567890</p>
  <p className="E-tabular-nums">1234567890</p>
  <p className="E-diagonal-fractions">1/2 3/4 5/6</p>
  <p className="E-stacked-fractions">1/2 3/4 5/6</p>`,
        },
      },
    },
  
    // Font Weight
    fontWeight: {
      title: "Font Weight",
      description: "Utilities for controlling the font weight of an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-font-thin", "font-weight: 100"],
          ["E-font-extralight", "font-weight: 200"],
          ["E-font-light", "font-weight: 300"],
          ["E-font-normal", "font-weight: 400"],
          ["E-font-medium", "font-weight: 500"],
          ["E-font-semibold", "font-weight: 600"],
          ["E-font-bold", "font-weight: 700"],
          ["E-font-extrabold", "font-weight: 800"],
          ["E-font-black", "font-weight: 900"],
        ],
      },
      usage: {
        description: "Use font weight utilities to control the font weight of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<p className="E-font-thin">The quick brown fox jumps over the lazy dog.</p>
  <p className="E-font-extralight">The quick brown fox jumps over the lazy dog.</p>
  <p className="E-font-light">The quick brown fox jumps over the lazy dog.</p>
  <p className="E-font-normal">The quick brown fox jumps over the lazy dog.</p>
  <p className="E-font-medium">The quick brown fox jumps over the lazy dog.</p>
  <p className="E-font-semibold">The quick brown fox jumps over the lazy dog.</p>
  <p className="E-font-bold">The quick brown fox jumps over the lazy dog.</p>
  <p className="E-font-extrabold">The quick brown fox jumps over the lazy dog.</p>
  <p className="E-font-black">The quick brown fox jumps over the lazy dog.</p>`,
        },
      },
    },
  
    // Letter Spacing
    letterSpacing: {
      title: "Letter Spacing",
      description: "Utilities for controlling the tracking (letter spacing) of an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-tracking-tighter", "letter-spacing: -0.05em"],
          ["E-tracking-tight", "letter-spacing: -0.025em"],
          ["E-tracking-normal", "letter-spacing: 0em"],
          ["E-tracking-wide", "letter-spacing: 0.025em"],
          ["E-tracking-wider", "letter-spacing: 0.05em"],
          ["E-tracking-widest", "letter-spacing: 0.1em"],
        ],
      },
      usage: {
        description: "Use tracking utilities to control the letter spacing of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<p className="E-tracking-tighter">The quick brown fox jumps over the lazy dog.</p>
  <p className="E-tracking-tight">The quick brown fox jumps over the lazy dog.</p>
  <p className="E-tracking-normal">The quick brown fox jumps over the lazy dog.</p>
  <p className="E-tracking-wide">The quick brown fox jumps over the lazy dog.</p>
  <p className="E-tracking-wider">The quick brown fox jumps over the lazy dog.</p>
  <p className="E-tracking-widest">The quick brown fox jumps over the lazy dog.</p>`,
        },
      },
    },
  
    // Line Height
    lineHeight: {
      title: "Line Height",
      description: "Utilities for controlling the leading (line height) of an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-leading-none", "line-height: 1"],
          ["E-leading-tight", "line-height: 1.25"],
          ["E-leading-snug", "line-height: 1.375"],
          ["E-leading-normal", "line-height: 1.5"],
          ["E-leading-relaxed", "line-height: 1.625"],
          ["E-leading-loose", "line-height: 2"],
        ],
      },
      usage: {
        description: "Use leading utilities to control the line height of an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<p className="E-leading-none">The quick brown fox jumps over the lazy dog.</p>
  <p className="E-leading-tight">The quick brown fox jumps over the lazy dog.</p>
  <p className="E-leading-snug">The quick brown fox jumps over the lazy dog.</p>
  <p className="E-leading-normal">The quick brown fox jumps over the lazy dog.</p>
  <p className="E-leading-relaxed">The quick brown fox jumps over the lazy dog.</p>
  <p className="E-leading-loose">The quick brown fox jumps over the lazy dog.</p>`,
        },
      },
    },
  
    // List Style Position
    listStylePosition: {
      title: "List Style Position",
      description: "Utilities for controlling the position of bullets/numbers in lists.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-list-inside", "list-style-position: inside"],
          ["E-list-outside", "list-style-position: outside"],
        ],
      },
      usage: {
        description:
          "Use the list-inside and list-outside utilities to control where the bullets/numbers appear in lists.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<ul className="E-list-inside E-list-disc">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>
  <ul className="E-list-outside E-list-disc">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>`,
        },
      },
    },
  
    // List Style Type
    listStyleType: {
      title: "List Style Type",
      description: "Utilities for controlling the bullet/number style of lists.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-list-none", "list-style-type: none"],
          ["E-list-disc", "list-style-type: disc"],
          ["E-list-decimal", "list-style-type: decimal"],
        ],
      },
      usage: {
        description: "Use the list style type utilities to control the style of bullets or numbers in lists.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<ul className="E-list-none">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>
  <ul className="E-list-disc">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>
  <ol className="E-list-decimal">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ol>`,
        },
      },
    },
  
    // Placeholder Color
    placeholderColor: {
      title: "Placeholder Color",
      description: "Utilities for controlling the color of placeholder text.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-placeholder-primary", "color: var(--primary)"],
          ["E-placeholder-secondary", "color: var(--secondary)"],
          ["E-placeholder-gray-400", "color: #9ca3af"],
          ["E-placeholder-red-500", "color: #ef4444"],
          ["E-placeholder-blue-500", "color: #3b82f6"],
        ],
      },
      usage: {
        description: "Use placeholder color utilities to control the color of placeholder text.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<input className="E-placeholder-primary" placeholder="Enter your name" />
  <input className="E-placeholder-secondary" placeholder="Enter your email" />
  <input className="E-placeholder-gray-400" placeholder="Enter your password" />
  <input className="E-placeholder-red-500" placeholder="Error state" />
  <input className="E-placeholder-blue-500" placeholder="Focus state" />`,
        },
      },
    },
  
    // Placeholder Opacity
    placeholderOpacity: {
      title: "Placeholder Opacity",
      description: "Utilities for controlling the opacity of placeholder text.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-placeholder-opacity-0", "opacity: 0"],
          ["E-placeholder-opacity-25", "opacity: 0.25"],
          ["E-placeholder-opacity-50", "opacity: 0.5"],
          ["E-placeholder-opacity-75", "opacity: 0.75"],
          ["E-placeholder-opacity-100", "opacity: 1"],
        ],
      },
      usage: {
        description: "Use placeholder opacity utilities to control the opacity of placeholder text.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<input className="E-placeholder-red-500 E-placeholder-opacity-100" placeholder="Opacity 100%" />
  <input className="E-placeholder-red-500 E-placeholder-opacity-75" placeholder="Opacity 75%" />
  <input className="E-placeholder-red-500 E-placeholder-opacity-50" placeholder="Opacity 50%" />
  <input className="E-placeholder-red-500 E-placeholder-opacity-25" placeholder="Opacity 25%" />
  <input className="E-placeholder-red-500 E-placeholder-opacity-0" placeholder="Opacity 0%" />`,
        },
      },
    },
  
    // Text Align
    textAlign: {
      title: "Text Align",
      description: "Utilities for controlling the alignment of text.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-text-left", "text-align: left"],
          ["E-text-center", "text-align: center"],
          ["E-text-right", "text-align: right"],
          ["E-text-justify", "text-align: justify"],
        ],
      },
      usage: {
        description: "Use text alignment utilities to control the alignment of text.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<p className="E-text-left">This text is left-aligned.</p>
  <p className="E-text-center">This text is centered.</p>
  <p className="E-text-right">This text is right-aligned.</p>
  <p className="E-text-justify">This text is justified. This text is justified. This text is justified. This text is justified. This text is justified. This text is justified.</p>`,
        },
      },
    },
  
    // Text Color
    textColor: {
      title: "Text Color",
      description: "Utilities for controlling the text color of an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-text-primary", "color: var(--primary)"],
          ["E-text-secondary", "color: var(--secondary)"],
          ["E-text-gray-500", "color: #6b7280"],
          ["E-text-red-500", "color: #ef4444"],
          ["E-text-blue-500", "color: #3b82f6"],
        ],
      },
      usage: {
        description: "Use text color utilities to control the color of text.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<p className="E-text-primary">Primary text color</p>
  <p className="E-text-secondary">Secondary text color</p>
  <p className="E-text-gray-500">Gray text color</p>
  <p className="E-text-red-500">Red text color</p>
  <p className="E-text-blue-500">Blue text color</p>`,
        },
      },
    },
  
    // Text Decoration
    textDecoration: {
      title: "Text Decoration",
      description: "Utilities for controlling the decoration of text.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-underline", "text-decoration: underline"],
          ["E-line-through", "text-decoration: line-through"],
          ["E-no-underline", "text-decoration: none"],
        ],
      },
      usage: {
        description: "Use text decoration utilities to control the decoration of text.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<p className="E-underline">This text has a line underneath it.</p>
  <p className="E-line-through">This text has a line through it.</p>
  <p className="E-no-underline">This text has no underline.</p>`,
        },
      },
    },
  
    // Text Opacity
    textOpacity: {
      title: "Text Opacity",
      description: "Utilities for controlling the opacity of text.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-text-opacity-0", "opacity: 0"],
          ["E-text-opacity-25", "opacity: 0.25"],
          ["E-text-opacity-50", "opacity: 0.5"],
          ["E-text-opacity-75", "opacity: 0.75"],
          ["E-text-opacity-100", "opacity: 1"],
        ],
      },
      usage: {
        description: "Use text opacity utilities to control the opacity of text.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<p className="E-text-blue-500 E-text-opacity-100">Opacity 100%</p>
  <p className="E-text-blue-500 E-text-opacity-75">Opacity 75%</p>
  <p className="E-text-blue-500 E-text-opacity-50">Opacity 50%</p>
  <p className="E-text-blue-500 E-text-opacity-25">Opacity 25%</p>
  <p className="E-text-blue-500 E-text-opacity-0">Opacity 0%</p>`,
        },
      },
    },
  
    // Text Overflow
    textOverflow: {
      title: "Text Overflow",
      description: "Utilities for controlling text overflow in an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-truncate", "overflow: hidden; text-overflow: ellipsis; white-space: nowrap"],
          ["E-overflow-ellipsis", "text-overflow: ellipsis"],
          ["E-overflow-clip", "text-overflow: clip"],
        ],
      },
      usage: {
        description: "Use text overflow utilities to control how overflowing text is displayed.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<p className="E-truncate E-w-48">This is a very long text that will be truncated when it reaches the width of the container.</p>
  <p className="E-overflow-ellipsis E-overflow-hidden E-w-48 E-whitespace-nowrap">This is a very long text that will be truncated with an ellipsis.</p>
  <p className="E-overflow-clip E-w-48 E-whitespace-nowrap">This is a very long text that will be clipped without an ellipsis.</p>`,
        },
      },
    },
  
    // Text Transform
    textTransform: {
      title: "Text Transform",
      description: "Utilities for controlling the transformation of text.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-uppercase", "text-transform: uppercase"],
          ["E-lowercase", "text-transform: lowercase"],
          ["E-capitalize", "text-transform: capitalize"],
          ["E-normal-case", "text-transform: none"],
        ],
      },
      usage: {
        description: "Use text transform utilities to control the capitalization of text.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<p className="E-uppercase">The quick brown fox jumps over the lazy dog.</p>
  <p className="E-lowercase">The quick brown fox jumps over the lazy dog.</p>
  <p className="E-capitalize">The quick brown fox jumps over the lazy dog.</p>
  <p className="E-normal-case">The quick brown fox jumps over the lazy dog.</p>`,
        },
      },
    },
  
    // Vertical Align
    verticalAlign: {
      title: "Vertical Align",
      description: "Utilities for controlling the vertical alignment of an inline or table-cell element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-align-baseline", "vertical-align: baseline"],
          ["E-align-top", "vertical-align: top"],
          ["E-align-middle", "vertical-align: middle"],
          ["E-align-bottom", "vertical-align: bottom"],
          ["E-align-text-top", "vertical-align: text-top"],
          ["E-align-text-bottom", "vertical-align: text-bottom"],
        ],
      },
      usage: {
        description:
          "Use vertical alignment utilities to control the vertical alignment of an inline or table-cell element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<span className="E-align-baseline">baseline</span>
  <span className="E-align-top">top</span>
  <span className="E-align-middle">middle</span>
  <span className="E-align-bottom">bottom</span>
  <span className="E-align-text-top">text-top</span>
  <span className="E-align-text-bottom">text-bottom</span>`,
        },
      },
    },
  
    // Whitespace
    whitespace: {
      title: "Whitespace",
      description: "Utilities for controlling how white space is handled in an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-whitespace-normal", "white-space: normal"],
          ["E-whitespace-nowrap", "white-space: nowrap"],
          ["E-whitespace-pre", "white-space: pre"],
          ["E-whitespace-pre-line", "white-space: pre-line"],
          ["E-whitespace-pre-wrap", "white-space: pre-wrap"],
        ],
      },
      usage: {
        description: "Use whitespace utilities to control how white space is handled in an element.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<p className="E-whitespace-normal">This text has normal white space handling.</p>
  <p className="E-whitespace-nowrap">This text will not wrap to a new line until a <br> tag is used.</p>
  <p className="E-whitespace-pre">This text
    preserves white space.
    Line breaks are preserved too.</p>
  <p className="E-whitespace-pre-line">This text
    preserves line breaks,
    but not spaces.</p>
  <p className="E-whitespace-pre-wrap">This text preserves white space and line breaks, and wraps if needed.</p>`,
        },
      },
    },
  
    // Word Break
    wordBreak: {
      title: "Word Break",
      description: "Utilities for controlling word breaks in an element.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-break-normal", "overflow-wrap: normal; word-break: normal"],
          ["E-break-words", "overflow-wrap: break-word"],
          ["E-break-all", "word-break: break-all"],
        ],
      },
      usage: {
        description: "Use word break utilities to control how words should break when reaching the end of a line.",
        example: {
          image: "/placeholder.svg?height=200&width=400",
          code: `<p className="E-break-normal E-w-48 E-border E-p-2">This is a long paragraph with normal word breaks. It will only break at normal word break points.</p>
  <p className="E-break-words E-w-48 E-border E-p-2">This is a long paragraph with break-words. Supercalifragilisticexpialidocious will break.</p>
  <p className="E-break-all E-w-48 E-border E-p-2">This is a long paragraph with break-all. All words will break at any character.</p>`,
        },
      },
    },
  }
  
  export default typographyComponents
  
  