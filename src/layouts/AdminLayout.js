import React from 'react'

function AdminLayout({children}) {
  return (
    <div>
      <p className="text-9xl">This is AdminLayout</p>
      <div>{children}</div>
    </div>
  )
}

export default AdminLayout
