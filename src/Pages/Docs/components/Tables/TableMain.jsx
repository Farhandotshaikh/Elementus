export const tablesComponents = {
    // Border Collapse
    borderCollapse: {
      title: "Border Collapse",
      description: "Utilities for controlling whether table borders should collapse or be separated.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-border-collapse", "border-collapse: collapse"],
          ["E-border-separate", "border-collapse: separate"],
        ],
      },
      usage: {
        description: "Use border-collapse utilities to control whether table borders should collapse or be separated.",
        example: {
          
          code: `
    <div>
      <h3 class="E-mb-2">border-collapse</h3>
      <table class="E-border-collapse E-border E-border-gray-300">
        <thead>
          <tr>
            <th class="E-border E-border-gray-300 E-p-2">Name</th>
            <th class="E-border E-border-gray-300 E-p-2">Age</th>
            <th class="E-border E-border-gray-300 E-p-2">Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="E-border E-border-gray-300 E-p-2">John Doe</td>
            <td class="E-border E-border-gray-300 E-p-2">30</td>
            <td class="E-border E-border-gray-300 E-p-2">New York</td>
          </tr>
          <tr>
            <td class="E-border E-border-gray-300 E-p-2">Jane Smith</td>
            <td class="E-border E-border-gray-300 E-p-2">25</td>
            <td class="E-border E-border-gray-300 E-p-2">San Francisco</td>
          </tr>
        </tbody>
      </table>
    </div>
`,
        },
      },
    },
  
    // Table Layout
    tableLayout: {
      title: "Table Layout",
      description: "Utilities for controlling the table layout algorithm.",
      table: {
        headers: ["Class", "Properties"],
        rows: [
          ["E-table-auto", "table-layout: auto"],
          ["E-table-fixed", "table-layout: fixed"],
        ],
      },
      usage: {
        description:
          "Use table layout utilities to control the algorithm used for laying out table cells, rows, and columns.",
        example: {
          
          code: `
    <div>
      <h3 class="E-mb-2">table-auto</h3>
      <table class="E-table-auto E-border-collapse E-border E-border-gray-300 E-w-full">
        <thead>
          <tr>
            <th class="E-border E-border-gray-300 E-p-2">Name</th>
            <th class="E-border E-border-gray-300 E-p-2">Age</th>
            <th class="E-border E-border-gray-300 E-p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="E-border E-border-gray-300 E-p-2">John Doe</td>
            <td class="E-border E-border-gray-300 E-p-2">30</td>
            <td class="E-border E-border-gray-300 E-p-2">This is a very long description that will expand the cell width based on content.</td>
          </tr>
          <tr>
            <td class="E-border E-border-gray-300 E-p-2">Jane Smith</td>
            <td class="E-border E-border-gray-300 E-p-2">25</td>
            <td class="E-border E-border-gray-300 E-p-2">Short description.</td>
          </tr>
        </tbody>
      </table>
    </div>
`,
        },
      },
    },
  }
  
  export default tablesComponents
  
  