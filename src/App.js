import { useEffect, useState } from 'react';
import './App.css';
import ForeCast from './components/ForeCast';
import Inputs from './components/Inputs';
import TempAndDetails from './components/TempAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import getFormattedWeatherData from './services/weatherService';

function App() {
  const [query,setQuery] = useState({q:"mumbai"});
  const [units,setUnits] = useState('metric');
  const [weather,setWeather] = useState(null);

  useEffect(()=>{
    const fetchWeather = async() =>{
      await getFormattedWeatherData({...query,units})
      .then((data)=>{
        setWeather(data);
      })
    }
    fetchWeather();
  },[query,units])
  
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-300 to-blue-800 h-fit shadow-xl 
    shadow-gray-500'>
      <TopButtons />
      <Inputs />
        {weather && (
         <div>
            <TimeAndLocation weather={weather} />
            <TempAndDetails weather={weather} />
            <ForeCast title={'hourly forecast'} />
            <ForeCast title={'daily forecast'} />
         </div>
        )}
    </div>

  );
}

export default App;
