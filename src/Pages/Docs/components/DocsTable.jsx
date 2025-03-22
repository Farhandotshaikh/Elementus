import { useState } from "react"

export default function DocsTable({ data, initialVisibleRows = 2 }) {
  const [showAll, setShowAll] = useState(false)

  const visibleData = showAll ? data : data.slice(0, initialVisibleRows)

  return (
    <div className="w-full max-w-3xl">
      <div className="overflow-hidden">
        <table  className="w-full E- text-center">
          <thead>
            <tr>
              <th className="text-left py-3 px-4 bg-black text-white border-b border-black">Class</th>
              <th className="text-left py-3 px-4 bg-black text-white border-b border-black">Styles</th>
            </tr>
          </thead>
          <tbody className="bg-black/80">
            {visibleData.map((item, index) => (
              <tr key={index} className="border-b last:border-b-0 border-white/20">
                <td className="py-3 px-4 font-mono text-sm text-blue-500">{item.class}</td>
                <td className="py-3 px-4 font-mono text-sm text-cyan-300">{item.styles}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {data.length > initialVisibleRows && (
        <div className="E- text-center bg-black">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            {showAll ? "SHOW LESS" : "SHOW MORE"}
          </button>
        </div>
      )}
    </div>
  )
}

