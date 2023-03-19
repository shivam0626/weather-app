import './App.css';
import ForeCast from './components/ForeCast';
import Inputs from './components/Inputs';
import TempAndDetails from './components/TempAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import getFormattedWeatherData from './services/weatherService';

function App() {
  
  const fetchWeather = async() =>{
    const data = await getFormattedWeatherData({q:"london"});
    console.log(data);
  }
  
  fetchWeather();
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-300 to-blue-800 h-fit shadow-xl 
    shadow-gray-500'>
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TempAndDetails />
      <ForeCast title={'hourly forecast'} />
      <ForeCast title={'daily forecast'} />
    </div>

  );
}

export default App;
