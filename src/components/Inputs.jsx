import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

const Inputs = ({setQuery,units,setUnits, handleLocationClick}) => {

    const[city,setCity] = useState("");

    const handleSearchClick =() =>{
        if(city !== ''){
            setQuery({q:city});
        }
    }

    const handleUnitsChange =(e)=>{
        const selectedUnit = e.currentTarget.name;
        if(units !== selectedUnit){
            setUnits(selectedUnit)
        }
    };

  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input 
                value={city}
                onChange={(e)=>setCity(e.currentTarget.value)}
                type='text'
                placeholder='Search for city...'
                className='text-lg p-1 w-full shadow-xl focus: outline-none capitalize placeholder:lowercase'
            />
            <UilSearch 
                size={30} 
                className='text-white cursor-pointer transition ease-out hover:scale-125'
                onClick={handleSearchClick}
            />
            <UilLocationPoint 
                size={30} 
                className='text-white cursor-pointer transition ease-out hover:scale-125'
                onClick={handleLocationClick}
            />
        </div>
        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button 
                name='metric' 
                className='text-xl text-white font-light transition ease-out hover:scale-125'
                onClick={handleUnitsChange}
            >
                °C
            </button>
            <p className='text-xl text-white mx-2'>|</p>
            <button 
                name='imperial' 
                className='text-xl text-white font-light transition ease-out hover:scale-125'
                onClick={handleUnitsChange}
            >
                °F
            </button>
        </div>
    </div>
  )
}

export default Inputs