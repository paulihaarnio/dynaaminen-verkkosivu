import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const [rivit, setrivit]= useState([]);
    
useEffect(()=> {
const nimet=['Pauli', 'Enna', 'Pinja','Riku']
setrivit(nimet)
console.log('useEffect');
console.log(nimet);
},[])

return(
    <div style={{margin:'20px'}}>
        <h3>Nimet</h3>
        <ul>
           {
               rivit.map(rivi=>(
                   <li key={rivi}>{rivi}</li>
               ))
           }
        </ul>
    </div>
);




}
export default App;