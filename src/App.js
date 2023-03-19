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

function App() {
  const [query,setQuery] = useState({q:'lucknow'});
  const [units,setUnits] = useState('metric');
  const [weather,setWeather] = useState(null);

  const formatBackground =()=>{
    if(!weather){
      return "from-cyan-300 to-blue-800"
    }
    const threshold = units === 'metric'? 25 : 60;
    if(weather.temp <=threshold){
      return "from-cyan-200 to-blue-800"
    }
    return "from-yellow-100 to-red-700"
  }

//   const handleLocationClick = () =>{
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition((position)=>{
//             let lat = position.coords.latitude;
//             let lon = position.coords.longitude;

//             setQuery({
//                 lat,lon
//             });
//         })
        
//     }
// }
  // useEffect(()=>{
  //   handleLocationClick();
  // },[]);

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
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-500 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} toast={toast} />

        {weather && (
         <div>
            <TimeAndLocation weather={weather} />
            <TempAndDetails weather={weather} />
            <ForeCast title={'hourly forecast'} items={weather.hourly} />
            <ForeCast title={'daily forecast'} items={weather.daily} />
         </div>
        )}
        <ToastContainer autoClose={5000} theme='colored' newestOnTop={true} />
    </div>

  );
}

export default App;
