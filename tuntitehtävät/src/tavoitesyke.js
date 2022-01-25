
import './App.css';
import { useState } from 'react';

function App() {


  const [age, setage] = useState(0)
  const [upper, setupper] = useState(0)
  const [lower, setlower] = useState(0)
 
  function calculate(e){
    e.preventDefault();
    const lower=(220-age)*0.65
    setlower(lower)
    const upper=(220-age)*0.85
    setupper(upper)
    
  }
return(
  <form onSubmit={calculate}><h3>tavoitesyke</h3>
  <label>age</label>
  <input type="number" value={age}  onChange={e=> setage(e.target.value)}/>
  <br />
  <label>heart rate limits</label>
  <output>
  {lower.toFixed(1)} - {upper.toFixed(1)}
  </output>
  <br />
  <button>Laske</button>
  <br />
  
  </form>
)
}
export default App;
