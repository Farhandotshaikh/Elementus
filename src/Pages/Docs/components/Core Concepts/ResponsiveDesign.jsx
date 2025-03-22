import React from "react";



export default function ResponsiveDesign() {

  const breakpoints = [
    { BreakpointPrefix: "sm",MinimumWidth: "520px", CSS: "@media (min-width: 520px) { ... }" },
    { BreakpointPrefix: "md",MinimumWidth: "738px", CSS: "@media (min-width: 738px) { ... }" },
    { BreakpointPrefix: "lg",MinimumWidth: "1024px", CSS: "@media (min-width: 1024px) { ... }" },
    { BreakpointPrefix: "xl",MinimumWidth: "1240px", CSS: "@media (min-width: 1240px) { ... }" },
    { BreakpointPrefix: "2xl",MinimumWidth: "1524px", CSS: "@media (min-width: 1524px) { ... }" },

  ]

    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Responsive Design</h1>
        <p className="text-xl inter-var-s mb-4">Using responsive utility variants to build adaptive user interfaces.</p>

        <hr className="text-black bg-black" />

        <p className="text-xl inter-var-s mb-4 mt-4">Every utility class in Elementus can be applied conditionally at different breakpoints, which makes it a piece of cake to build complex responsive interfaces without ever leaving your HTML.</p>

        <table className="w-full mt-6 p-6 border border-black rounded">
          <thead className="bg-black text-white p-6 m-3 rounded-md">
            <tr>
              <th className="text-center">Breakpoint Prefix</th>
              <th className="text-center">Minimum Width</th>
              <th className="text-center">CSS</th>
            </tr>
          </thead>
          <tbody className="bg-black/70 text-cyan-300 p-6 m-3 rounded-md">
            {breakpoints.map((breakpoint) => (
              <tr  key={breakpoint.BreakpointPrefix}>
                <td className="text-center">{breakpoint.BreakpointPrefix}</td>
                <td className="text-center">{breakpoint.MinimumWidth}</td>
                <td className="text-center">{breakpoint.CSS}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="text-xl inter-var-s mb-4 mt-4">To add a utility but only have it take effect at a certain breakpoint, all you need to do is prefix the utility with the breakpoint name, followed by the : character:</p>

        <div className="bg-black text-purple-300 rounded-lg p-4 overflow-x-auto">
            <code className="text-sm">{'<!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->'}<br />
            {'<img class="E-w-16 md:w-32 lg:w-48" src="...">'}</code>
        </div>
      </div>
    )
  }
  
  