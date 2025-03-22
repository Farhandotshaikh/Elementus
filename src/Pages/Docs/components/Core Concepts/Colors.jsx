import ColorSwatch from "../ColorSwatch"
import DocsTable from "../DocsTable"

export default function Colors() {
  const colorUtilities = [
    { class: "E-text-{color}-{shade}", styles: "color: rgb(var(--color-{shade}));" },
    { class: "E-bg-{color}-{shade}", styles: "background-color: rgb(var(--color-{shade}));" },
    { class: "E-border-{color}-{shade}", styles: "border-color: rgb(var(--color-{shade}));" },
    { class: "E-ring-{color}-{shade}", styles: "ring-color: rgb(var(--color-{shade}));" },
  ]

  const colors = {
    red: {
      50: "#FEF2F2",100: "#FEE2E2",200: "#FECACA",300: "#FCA5A5",400: "#F87171",500: "#EF4444",600: "#DC2626",700: "#B91C1C",800: "#991B1B",900: "#7F1D1D",
    },
    purple: {
      50: "#F5F3FF", 100: "#EDE9FE", 200: "#DDD6FE", 300: "#C4B5FD", 400: "#A78BFA", 500: "#8B5CF6", 600: "#7C3AED", 700: "#6D28D9", 800: "#5B21B6", 900: "#4C1D95",
    },
    yellow: {
      50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 
    },
    indigo: {
      50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 
    },
    pink: {
      50: "#FDF2F8", 100: "#FCE7F3", 200: "#FBCFE8", 300: "#F9A8D4", 400: "#F472B6", 500: "#EC4899", 600: "#DB2777", 700: "#BE185D", 800: "#9D174D", 900: "#831843",
    },
    Blue: {
      50: "#EFF6FF", 100: "#DBEAFE", 200: "#BFDBFE", 300: "#93C5FD", 400: "#60A5FA", 500: "#3B82F6", 600: "#2563EB", 700: "#1D4ED8", 800: "#1E40AF", 900: "#1E3A8A",
    },

  }

  return (
    <div className="p-8">
      <h1 className="text-4xl inter-var mb-4">Colors</h1>

      <p className="inter-var-s mb-8">Using the color palette in Elementus projects.</p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl inter-var mb-4">Default Color Palette</h2>
          <p className="inter-var-s mb-8">
            Elementus includes a vast, beautiful color palette out of the box, carefully crafted by expert designers
            and suitable for a wide range of different design styles.
          </p>

          <div className="space-y-8 bg-black p-6 rounded-2xl">
            {Object.entries(colors).map(([colorName, shades]) => (
              <ColorSwatch
                key={colorName}
                colorName={colorName.charAt(0).toUpperCase() + colorName.slice(1)}
                shades={shades}
              />
            ))}
            
          </div>
        </section>

        <section>
          <h2 className="text-2xl inter-var mb-4">Color Utilities</h2>
          <p className="inter-var-s mb-6">Apply colors to various properties using these utility classes:</p>

          <DocsTable data={colorUtilities} />
        </section>

        
      </div>
    </div>
  )
}

