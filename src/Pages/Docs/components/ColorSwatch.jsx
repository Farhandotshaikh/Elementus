export default function ColorSwatch({ colorName, shades }) {
    return (
      <div className="mb-8">
        <div className="flex items-center mb-3">
          <span className="text-lg font-medium text-gray-200">{colorName}</span>
        </div>
       
        <div className="grid grid-cols-5 gap-2">
          {Object.entries(shades).map(([shade, color]) => (
            <div key={shade} className="space-y-2">
              <div className="w-3/4 h-8 rounded-lg" style={{ backgroundColor: color }} />
              <div className="text-xs text-gray-400 text-left">{shade}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  