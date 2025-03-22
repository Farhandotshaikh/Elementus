import transformComponents from "./TransformMain"

export default function Rotate() {
  // Get the component info from the central file
  const componentInfo = transformComponents.rotate

  return (
    <div className="transform-component">
      <div className="component-header">
        <h1 className="inter-var text-3xl m-4">{componentInfo.title}</h1>
        <p className="inter-var-s text-xl m-2">{componentInfo.description}</p>
      </div>

      <div className="component-table">
        
        <table  className="w-full border-collapse text-center">
          <thead>
            <tr>
              {componentInfo.table.headers.map((header, index) => (
                <th key={index} className="E- p-2 bg-black text-white">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-black/70 E-">
            {componentInfo.table.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="text-purple-300 p-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="component-usage mt-8">
        <h2 className="inter-var text-2xl m-2">Usage</h2>
        <p className="inter-var-s text-xl m-2">{componentInfo.usage.description}</p>

        <div className="usage-example mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="example-code bg-black p-4 rounded E-">
            <pre className="text-sm text-cyan-300 overflow-x-auto">
              <code>{componentInfo.usage.example.code}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}



