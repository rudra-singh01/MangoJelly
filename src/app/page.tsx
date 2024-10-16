import SideBar from '@/components/SideBar'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex flex-grow">
        <SideBar/>
      </div>
    </div>
  )
}

export default page