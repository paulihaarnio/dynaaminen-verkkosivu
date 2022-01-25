import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const [rivit, setrivit]= useState([]);
    
useEffect(()=> {
const nimet=['Pauli', 'Enna', 'Pinja']
setrivit[nimet]
},[])

return(
    <div style={{margin:'20px'}}>
        <h3>Nimet</h3>
        <ul>
            <li>Pauli</li>
            <li>Enna</li>
            <li>Pinja</li>
        </ul>
    </div>
);




}
export default App;