const API_KEY = "4cb9ebffc5de21ec973ca500024e6fbe";
const BASE_URL = "https://api.openweathermap.org/data/2.5"

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const getWeatherData = (infoType,searchParams) =>{

    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, 
        appid:API_KEY
    });

    return fetch(url)
        .then((res) => res.json());
};

const formatCurrentWeather = (data) =>{
    const {
        coord: {lat,lon},
        main: {temp,feels_like,temp_min,temp_max,humidity},
        name,
        dt,
        sys: {country,sunrise,sunset},
        weather,
        wind:{speed}
    } = data 

    const {
        main:details,
        icon
    } = weather[0];

    return {lat, lon,temp,feels_like,temp_min,temp_max,humidity,name,dt,country,sunrise,sunset,details,icon,speed};
}

const  formatForecastWeather = (data) =>{
    letp899uip8 { timezone, hourly, daily} = data;
    daily = daily.slice
}

const getFormattedWeatherData = async(searchParams) =>{
    const formattedCurrentWeather = await getWeatherData(
        'weather',searchParams)
        .then(formatCurrentWeather) 
    
    const {lat,lon} = formatCurrentWeather

const formattedForeCastWeather = await getWeatherData('onecall',{
        lat,
        lon,
        exclude:'current,minutely,alerts', 
        units: searchParams.units
    }).then(formatForecastWeather)


    return formattedCurrentWeather;
}

export default getFormattedWeatherData;