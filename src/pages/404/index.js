import React from 'react'
import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <p className="text-9xl">404</p>
      <NavLink to="/">Return to Home page</NavLink>
    </div>
  )
}

export default NotFound
