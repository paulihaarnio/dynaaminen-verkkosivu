
import './App.css';
import { useState } from 'react';

function App() {

/*const [eurot, setEurot] = useState(0)
const[punnat, setPunnat] = useState(0)
function calculate(e){
  e.preventDefault();
  const tulos=eurot*0.9;
  setPunnat(tulos);
}

  return (
    <form onSubmit={calculate}>
      <h3>Valuuttalaskuri</h3>
      <div>
        <label>Eur</label>
        <input type="number" value={eurot} onChange={e => setEurot(e.target.value)} />
        </div>

        <div>
          <label>Punnat</label>
        <output>{punnat}</output>
      </div>
      <button>Laske</button>
    </form>
  );*/

/*
  const [weight, setweight] = useState(0)
  const [height, setheight] = useState(0)
  const [bmi, setbmi] = useState(0)
  
  function calculate(e){
    e.preventDefault();
    const bmi=weight/(height*height) 
    setbmi(bmi)
  }
return(
  <form onSubmit={calculate}><h3>bmi laskuri</h3>
  <label>weigth</label>
  <input type="number" value={weight}  onChange={e=> setweight(e.target.value)}/>
  <br />
  <label>heigth</label>
  <input type="number" value={height} onChange={e=> setheight(e.target.value)}/>
  <br />
  <button>Laske</button>
  <br />
  <output>
  {bmi.toFixed(1)}
  </output>
  </form>
)
}
export default App;
*/
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
