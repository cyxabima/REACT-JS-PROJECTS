import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const { name } = useParams()
    return (
        <div className='bg-orange-400 h-30 text-center text-4xl pt-4 text-red-600 rounded-xl w-100 m-auto my-12'>User: {name}</div>
    )
}

export default User