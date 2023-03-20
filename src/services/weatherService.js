import { DateTime } from "luxon";

const BASE_URL = "https://api.openweathermap.org/data/2.5"

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const getWeatherData = (infoType,searchParams) =>{
   
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, 
        appid:process.env.REACT_APP_API_KEY
    });

    return fetch(url)
        .then((res) => res.json())
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
    let { timezone, hourly, daily} = data;
    daily = daily.slice(1,7).map(d =>{
        return {
            title: formatToLocalTime(d.dt,timezone,'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon 
        }
    });
    hourly = hourly.slice(1,7).map(d =>{
        return {
            title: formatToLocalTime(d.dt,timezone,'hh:mm a'),
            temp: d.temp,
            icon: d.weather[0].icon
        }
    });

    return { timezone, daily, hourly };
}

const getFormattedWeatherData = async(searchParams) =>{
    const formattedCurrentWeather = await getWeatherData(
        'weather',searchParams)
        .then(formatCurrentWeather)
    
    const {lat,lon} = formattedCurrentWeather;

    const formattedForeCastWeather = await getWeatherData("onecall",{
        lat,
        lon,
        exclude:'current,minutely,alerts', 
        units: searchParams.units
    }).then(formatForecastWeather)

    return {...formattedCurrentWeather, ...formattedForeCastWeather};


}
const formatToLocalTime = (secs,zone,format = "ccc, dd LLL yyyy' | Local time: 'hh:mm a") => 
    DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrl = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrl };