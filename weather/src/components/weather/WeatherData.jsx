import React from 'react'
import "./weatherData.css"
function WeatherData({data}) {
   const k=273;
  return(
    <div className='main'>
        <div className='city'>Location:{data.name}</div>
        <div className='icon'>Location:<img src={data.weather[0].icon}></img></div>
        <div className='temp'>Weather:{Math.floor(data.main.temp-k)+" °C"} <span>{data.weather[0].main}</span></div>
        <div className='humidity'>Humidity:{data.main.humidity+"%"}</div>
        <div className='wind'>Wind:{data.wind.speed+"km/h"}</div>

    </div>
  
)}

export default WeatherData