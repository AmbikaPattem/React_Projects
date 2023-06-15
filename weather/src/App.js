import React, { useEffect, useState } from 'react'
import WeatherData from './components/weather/WeatherData';

function App() {
    const apiKey="7c25cdc410066005c8a3697ec7a1c656";
    const [lat,setLat]=useState("");
    const [lon,setLon]=useState("");
    const [data,setData]=useState("");

  useEffect(()=>{
    const fetchData=async()=>
    {
      navigator.geolocation.getCurrentPosition(function(position){
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
    const result=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`,{method:"GET"});
            let final=await result.json();
            setData(final);
            console.log(final);
    }
    fetchData();
  },[lat,lon]);
  return (
    <div className="Details">
        {
          (typeof data.main!='undefined')?(<WeatherData data={data}/>):(<div></div>)
        }
    </div>
  )
}

export default App