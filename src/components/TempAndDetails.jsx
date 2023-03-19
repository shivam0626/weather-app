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
import { formatToLocalTime, iconUrl } from '../services/weatherService';

const TempAndDetails = ({weather:{details,temp,icon,temp_min,temp_max,sunrise,sunset,speed,humidity,feels_like,timezone}}) => {
  return (
    <div>
        <div className='flex items-center justify-center py-2 text-xl text-cyan-300'>
            <p>{details}</p>
        </div>
        <div className='flex flex-row items-center justify-between text-white py-1'>
            <img 
                src={iconUrl(icon)}
                alt='img'
                className='w-25'
            />
            <p className='text-4xl'>{`${temp.toFixed()}°`}</p>
            <div className='flex flex-col space-y-2'>
                <div className='flex font-light items-center justify-center text-sm'>
                    <UilTemperature size={18} className='mr-1' />
                    Feels Like :
                    <span className='font-medium ml-1'>{`${feels_like.toFixed()}°`}</span>
                </div>
                <div className='flex font-light items-center justify-center text-sm'>
                    <UilTear size={18} className='mr-1' />
                    Humidity :
                    <span className='font-medium ml-1'>{`${humidity.toFixed()}%`}</span>
                </div>
                <div className='flex font-light items-center justify-center text-sm'>
                    <UilWind size={18} className='mr-1' />
                    Wind :
                    <span className='font-medium ml-1'>{`${speed.toFixed()} km/h`}</span>
                </div>
            </div>
        </div>
        <div className='flex flex-row items-center justify-center space-x-2 text-white text-small py-2'>
            <UilSun />
            <p className='font-light text-sm'>
                Rise: <span className='font-medium text-xs'>{formatToLocalTime(sunrise,timezone,'hh:mm a')}</span>
            </p>
            <p className='font-light'>|</p>
            <UilSunset />
            <p className='font-light text-sm'>
                Set: <span className='font-medium text-xs'>{formatToLocalTime(sunset,timezone,'hh:mm a')}</span>
            </p>
            <p className='font-light'>|</p>
            <UilArrowUp />
            <p className='font-light text-sm'>
                High: <span className='font-medium text-xs'>{`${temp_max.toFixed()}°`}</span>
            </p>
            <p className='font-light'>|</p>
            <UilArrowDown />
            <p className='font-light text-sm'>
                Low: <span className='font-medium text-xs'>{`${temp_min.toFixed()}°`}</span>
            </p>
        </div>
    </div>
  )
}

export default TempAndDetails