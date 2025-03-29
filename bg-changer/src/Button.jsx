import React from 'react'

const Button = ({ color, setBgColor }) => {

    return (
        <button onClick={() => setBgColor(color)} className={`flex rounded-2xl border-${color}-950 border-2  py-2 text-white text-center shadow-md min-w-32 justify-center`} style={{ backgroundColor: color }}>{color}</button>
    )
}

export default Button   