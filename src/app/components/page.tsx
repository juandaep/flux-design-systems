"use client"
import SideMenu from '@/components/SideMenu';
import React, { useState } from 'react';

const components: React.FC = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <div className="flex">
      <SideMenu isOpen={isSideMenuOpen} />
      <div className="flex-1 h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url("/your-background-image.jpg")' }}>
        <button onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}>Toggle Menu</button>
        {/* Content */}
      </div>
    </div>
  )
}

export default components