
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios';

 
function App() {

 const [url, setUrl] = useState()
 const [countryName, setCountryName] = useState("");
 const [confirmed, setConfirmed] = useState(0)
 const [deaths, setDeaths] = useState(0)
 const [population, setPopulation] = useState(0)
 const [update, setUpdate] = useState("")

 useEffect(() => {
  setUrl("https://covid-api.mmediagroup.fr/v1/cases?country=")
  document.getElementById("output1").innerHTML=""
  document.getElementById("output2").innerHTML=""
  
}, []);
  
 function showData(){
  axios.get(url+document.getElementById("country").value).then((response)=>{
  setCountryName(response.data.All.country)
  setConfirmed(response.data.All.confirmed)
  setDeaths(response.data.All.deaths)
  setPopulation(response.data.All.population)
  setUpdate(response.data.All.updated)    
  })
  
}


  
  return(
    <div>
      <h1>Covid-19 data infosite🦠</h1>
      <h4>By Pauli Haarnio</h4>
      <p>Please use english name of the country and the first letter should be in capital. Example Germany not germany.</p>
      <label>Country:</label>
      <input id='country' onChange={showData}></input> 
      <br/>
      Country:
      <output>
        {countryName}
      </output><br/>
      Population:
      <output>
        {population}
      </output><br/>
      Confirmed cases:
      <output>
        {confirmed}
      </output><br/>
      Total deaths:
      <output>
        {deaths}
      </output><br/>
      Survival rate:
      <output id='output1'>
        {((confirmed-deaths)/confirmed).toFixed(4)*100+"%"}
      </output><br/>
      Death rate:
      <output id='output2' >
        {(deaths/confirmed).toFixed(4)*100+"%"}
      </output><br/>
      Data updated:
      <output>
        {update}
      </output><br/>
    </div>
  )
}

export default App;
