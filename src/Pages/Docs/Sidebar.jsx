import React from "react"
import { Link, useLocation } from "react-router-dom"
import  NavItems  from "./components/NavItems"
 


const Sidebar = ({ isOpen }) => {
  const location = useLocation()
  const currentPath = location.pathname



  // Helper function to check if a path is active
  const isActivePath = (path) => {
    return currentPath.endsWith(path.split("/").slice(-2).join("/"))
  }

  return (
    <aside
    className={`${isOpen ? "translate-x-0" : "-translate-x-full"} fixed md:relative md:translate-x-0 transition-transform duration-300 flex flex-col w-64 h-full px-0 py-8 overflow-y-auto border bg-black m-4 rounded-2xl border-white z-30 `}
    >

      <div className="flex flex-col justify-between flex-1">
        <nav className="space-y-6">
          {Object.entries(NavItems).map(([section, items]) => (
            <div key={section} className="space-y-3">
              <label className="px-6 text-xs uppercase text-gray-100">{section}</label>
              <hr className="w-4/5 mx-auto " />
                
              {items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative flex items-center px-6 py-2 transition-colors duration-300 text-gray-400 hover:text-white ${
                    isActivePath(item.path) ? "font-medium" : ""
                  }`}
                >
                  <span className="text-sm">{item.name}</span>
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
}

// Updated offset calculation

export default Sidebar

