import './App.css';
import Inputs from './components/Inputs';
import TempAndDetails from './components/TempAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';

function App() {
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-500 to-blue-700 h-fit shadow-xl 
    shadow-gray-400'>
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TempAndDetails />
    </div>

  );
}

export default App;
