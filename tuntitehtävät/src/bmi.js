
import './App.css';
import { useState } from 'react';

function App() {

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
