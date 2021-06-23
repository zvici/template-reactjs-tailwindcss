import React from 'react'
import { NavLink } from 'react-router-dom'

function AdminLayout({ children }) {
  return (
    <div>
      <div>
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <NavLink to="/">
                    <img
                      className="h-8 w-8"
                      src="https://pbs.twimg.com/profile_images/528176871687471104/v_XJWDjM_400x400.png"
                      alt="Workflow"
                    />
                  </NavLink>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <NavLink
                      to="/"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/about"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      activeClassName="bg-gray-900 text-white"
                    >
                      About
                    </NavLink>
                    <NavLink
                      to="/settings"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      activeClassName="bg-gray-900 text-white"
                    >
                      Settings
                    </NavLink>
                    <NavLink
                      to="/login"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      activeClassName="bg-gray-900 text-white"
                    >
                      Logout
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
