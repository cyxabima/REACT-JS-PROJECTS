import React from 'react'
import { useLoaderData } from 'react-router-dom'

const GitHub = () => {
    data = useLoaderData()

    return (
        <div>GitHub: {data.name}</div>
    )
}

export async function data() {
    const res = await fetch("https://api.github.com/users/hiteshchoudhary")
    return res.json()
}

export default GitHub