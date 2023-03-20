import { useEffect, useState } from 'react';
import './App.css';
import ForeCast from './components/ForeCast';
import Inputs from './components/Inputs';
import TempAndDetails from './components/TempAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import getFormattedWeatherData from './services/weatherService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Map from './components/Map';

function App() {
  const [query,setQuery] = useState({q:'lucknow'});
  const [units,setUnits] = useState('metric');
  const [weather,setWeather] = useState(null);

  const formatBackground =()=>{
    if(!weather){
      return "from-cyan-200 to-blue-600";
    }
    const threshold = units === 'metric'? 25 : 77;
    if(weather.temp < threshold){
      return "from-cyan-200 to-blue-800"
    }
    return "from-yellow-200 to-orange-600"
  }

  const handleLocationClick = () =>{
        if(navigator.geolocation){
            toast.info("Fetching user's location");
            navigator.geolocation.getCurrentPosition((position)=>{
                toast.success("Location fetched");
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat,lon
                });
            })
            
        }
    }

  useEffect(()=>{
    const fetchWeather = async() =>{
      const message =  query.q ? query.q : 'current location';

      toast.info('Fetching weather for ' + message);
      await getFormattedWeatherData({...query,units})
      .then((data)=>{
        toast.success(`Successfully fetched weather for ${data.name}, ${data.country}`);
        setWeather(data);
      })
    }
    fetchWeather();
  },[query,units])
  
  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-10 bg-gradient-to-br h-fit shadow-xl shadow-gray-500 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} handleLocationClick={handleLocationClick} />

        {weather && (
         <div>
            <TimeAndLocation weather={weather} />
            <TempAndDetails weather={weather} />
            <Map weather={weather} />
            <ForeCast title={'hourly forecast'} items={weather.hourly} />
            <ForeCast title={'daily forecast'} items={weather.daily} />
         </div>
        )}
        <ToastContainer autoClose={3000} theme='colored' newestOnTop={true} />
        <hr className='mt-10' />
        <p className='flex items-center justify-center text-white mt-6 text-xs '>Made with ❤ by Shivam</p>
    </div>

  );
}

export default App;
