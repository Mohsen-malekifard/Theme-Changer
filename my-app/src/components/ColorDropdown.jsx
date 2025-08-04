'use client'
import { useState } from 'react'

const colors = {
  سفید: 'white',
  آبی: 'skyblue',
  سبز: 'lightgreen',
  زرد: 'khaki',
  خاکستری: 'lightgray',
  صورتی: 'pink',
  مشکی: 'black',
  قرمز: 'red'
}

export default function ColorDropdown({ onColorChange }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative w-60">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-gray-200 text-black px-4 py-2 rounded shadow"
      >
        انتخاب رنگ
      </button>
      {open && (
        <ul className="absolute mt-2 w-full bg-white border rounded shadow z-10">
          {Object.entries(colors).map(([name, value]) => (
            <li
              key={name}
              onClick={() => {
                onColorChange(value)
                setOpen(false)
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}