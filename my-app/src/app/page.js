'use client'
import { useState } from 'react'
import ColorDropdown from '../components/ColorDropdown'

export default function Home() {
  const [bgColor, setBgColor] = useState('white')

  return (
    <main className={`min-h-screen transition-colors duration-500`} style={{ backgroundColor: bgColor }}>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">انتخاب رنگ پس‌زمینه</h1>
        <ColorDropdown onColorChange={setBgColor} />
      </div>
    </main>
  )
}