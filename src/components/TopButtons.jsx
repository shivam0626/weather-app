import React from 'react'

const TopButtons = () => {
    const cities = [
        {
            id:1,
            title:"Delhi"
        },
        {
            id:2,
            title:"Lucknow"
        },
        {
            id:3,
            title:"Kolkata"
        },
        {
            id:4,
            title:"Chennai"
        },
        {
            id:5,
            title:"Mumbai"
        },
    ]
  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city)=>(
            <button key={city.id} className='text-white text-lg font-medium'>{city.title}</button>
        ))}
    </div>
  )
}

export default TopButtons