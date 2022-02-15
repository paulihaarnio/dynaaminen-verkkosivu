import './App.css'; import {useState, useEffect} from "react" 
import Weather from './components/Weather';
function App() { 
  const [lat, setLat] = useState(0) 
  const [lng, setLng] = useState(0) 
  const [isLoading, setIsLoading] = useState(true) 
  useEffect(() => { if(navigator.geolocation){ 
    navigator.geolocation.getCurrentPosition(position =>{ setLat(position.coords.latitude) 
      setLng(position.coords.longitude) 
      setIsLoading(false) },(error)=>{ alert(error) }) } 
      else { alert("Your browser does not support geolocation!") } }, []) 

    
       return (
  <div>
    <h3>Your position</h3>
    <p>
      {lat.toFixed(3)},{lng.toFixed(3)}
      <Weather lat={lat} lon={lng} />
    </p>
    </div>
  ); }
    export default App;