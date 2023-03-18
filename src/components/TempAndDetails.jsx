import React from 'react';
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset
    } from "@iconscout/react-unicons";

const TempAndDetails = () => {
  return (
    <div>
        <div className='flex items-center justify-center py-2 text-xl text-cyan-300'>
            <p>Cloudy</p>
        </div>
        <div className='flex flex-row items-center justify-between text-white py-1'>
            <img 
                src='http://openweathermap.org/img/wn/01d@2x.png'  
                alt='img'
                className='w-20'
            />
            <p className='text-4xl'>34°C</p>
            <div className='flex flex-col space-y-2'>
                <div className='flex font-light items-center justify-center text-sm'>
                    <UilTemperature size={18} className='mr-1' />
                    Real feel :
                    <span className='font-medium ml-1'>34°C</span>
                </div>
                <div className='flex font-light items-center justify-center text-sm'>
                    <UilTear size={18} className='mr-1' />
                    Humidity :
                    <span className='font-medium ml-1'>55%</span>
                </div>
                <div className='flex font-light items-center justify-center text-sm'>
                    <UilWind size={18} className='mr-1' />
                    Wind :
                    <span className='font-medium ml-1'>12 km/h</span>
                </div>
            </div>
        </div>
        <div className='flex flex-row items-center justify-center space-x-2 text-white text-small py-2'>
            <UilSun />
            <p className='font-light text-sm'>
                Rise: <span className='font-medium text-xs'>06:34 AM</span>
            </p>
            <p className='font-light'>|</p>
            <UilSunset />
            <p className='font-light text-sm'>
                Set: <span className='font-medium text-xs'>06:55 PM</span>
            </p>
            <p className='font-light'>|</p>
            <UilArrowUp />
            <p className='font-light text-sm'>
                High: <span className='font-medium text-xs'>34°C</span>
            </p>
            <p className='font-light'>|</p>
            <UilArrowDown />
            <p className='font-light text-sm'>
                Low: <span className='font-medium text-xs'>34°C</span>
            </p>
        </div>
    </div>
  )
}

export default TempAndDetails