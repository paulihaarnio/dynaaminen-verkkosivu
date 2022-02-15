import axios from 'axios';
import React ,{useState, useEffect} from 'react'

const API="https://api.openweathermap.org/data/2.5/weather?";
const ICON_URL="https://openweathermap.org/img/wn/";
const API_KEY="31835fd983be87311d17d421408cf6b5"

export default function Weather({lat, lon}) {
  const [temp, settemp] = useState(0)
  const [speed, setspeed] = useState(0)
  const [direction, setdirection] = useState(0)
  const [description, setdescription] = useState("")
  const [icon, seticon] = useState("")

  useEffect(() => {
    const address=API+
    "lat="+lat+
    "&lon=24.000"+lon+
    "&units=metric"+
    "&appid="+API_KEY
    //console.log(address);

    axios.get(address)
    .then((response)=>{
      console.log(response.data);
      settemp(response.data.main.temp)
      setspeed(response.data.wind.speed)
      setdirection(response.data.wind.deg)
      setdescription(response.data.weather[0].description)
      seticon(ICON_URL+response.data.weather[0].icon+"@2x.png")
    }).catch(error=>{alert(error)
    })

  }, [])
  
  
  return (
    <>
    <h3>Weather at your location</h3>
    <p>{temp} C&#176;</p>
    <p>{speed} m/s {direction} degrees</p>
    <p>{description}</p>
    <img src={icon} alt="weather icon"/>
    </>

  )
}
