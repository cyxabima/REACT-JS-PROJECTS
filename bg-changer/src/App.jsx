import React, { useState } from 'react'
import Button from './Button';
const colors =
  ["black",
    "white",
    "gray",
    "red",
    "green",
    "teal",
    "cyan",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "orange",
  ]

const App = () => {
  const [bgColor, setBgColor] = useState("Black");
  return (
    <div className=' w-screen h-screen block ' style={{ backgroundColor: bgColor }}>
      <div className='fixed bg-white  bottom-2 flex gap-1 flex-wrap justify-center border-yellow-500 border-4 rounded-3xl p-2 box-border'>
        {colors.map((col) => <Button key={col} color={col} setBgColor={setBgColor} />)}



      </div>
    </div>
  )
}

export default App