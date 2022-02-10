
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios';

const URL="https://covid-api.mmediagroup.fr/v1/cases"

function App() {
 const [COUNTRY, setCOUNTRY] = useState() 
 const [template, settemplate] = useState()
 const [countryname, setcountryname] = useState();
 const [confirmed, setconfirmed] = useState(0)
 const [deaths, setdeaths] = useState(0)
 const [population, setpopulation] = useState(0)
 const [update, setupdate] = useState()

  
 
 useEffect(() => {
  document.getElementById("output1").innerHTML=""
  document.getElementById("output2").innerHTML=""
  addCountry()
}, []);

function addCountry(){
  axios.get(URL).then((response)=>{
    settemplate(response.data.Finland.All)
  }).catch(error=>{
    alert(error)
  })
  
}


  function Button(){
    axios.get(URL)
    .then(()=>{
      setcountryname(template.country)
      setconfirmed(template.confirmed)
      setdeaths(template.deaths)
      setpopulation(template.population)
      setupdate(template.updated)
    })
}

  
  return(
    <div>
      <h1>Covid-19 data infosite</h1>
      <h4>By Pauli Haarnio</h4>
      <p>Please use english name of the country and the first letter should be in capital. Example Germany not germany.</p>
      <label>Country</label>
      <input id='country'></input> 
      <br/>
      <button onClick={addCountry,Button}>Print information</button><br/>
      Country:
      <output>
        {countryname}
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
      Survuval rate:
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
      <output>
        {}
      </output><br/>
    
    </div>
  )
}

export default App;
