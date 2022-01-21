import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [weight, setweight] = useState(0)
  const [bottles, setbottles] = useState(1)
  const [time, settime] = useState(1)
  const [gender, setgender] = useState("male")
  const [result, setresult] = useState(0)
  


  function calculate(e){
    e.preventDefault()
    let litres=bottles*0.33
    let grams=litres*8*4.5
    let burning=weight/10
    let gramsLeft=grams-(burning*time)
    let result=0

    
      if(gender=="male"){
         result=gramsLeft/(weight*0.7)
       
      }
        else{
           result=gramsLeft/(weight*0.6)
          
        }
        if(result<0){
          result=0
        }
        setresult(result)
    
    
   
  }

  return (
    <div>
    <h1>Alcometer by Pauli Haarnio</h1>
    <form onSubmit={calculate}>
      <label>Weight</label>
      <input type="number" value={weight} onChange={e=> setweight(e.target.value)}  /> <br />
      <label>Bottles</label>
      <select name="" id="" value={bottles} onChange={e=> setbottles(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select> <br />
      <label>Time</label>
      <select name="" id="" value={time} onChange={e=> settime(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select> <br />
      <label>Gender</label>
      <input type="radio" value="male" name="gender" onChange={e=>setgender(e.target.value)} />
      <label>Male</label>
      <input type="radio" name="gender" value="female" onChange={e=>setgender(e.target.value)}/>
      <label>Female</label> <br />
      <button type="submit">Calculate</button>
      <output>{result.toFixed(2)}</output>
    </form>
    </div>
  );
}

export default App;
