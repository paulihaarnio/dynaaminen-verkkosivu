import './App.css';
import { useEffect, useState } from 'react';
import Item from './tuote';
import uuid from 'react-uuid';
function App() {
    const [tuotteet, settuotteet] = useState([]);

    useEffect(()=>{const tuotelista=Array()
    tuotelista.push(new Item('Kahvi', 10));
    tuotelista.push(new Item('tee', 6));
    tuotelista.push(new Item('limu', 4));
    tuotelista.push(new Item('lounas', 8));
    settuotteet(tuotelista)
    },[]);

   return(
       <div>
           <h3>Ostoslista</h3>
           <table>
               <thead>
               <tr>
                   <th>Nimi</th>
                   <th>Hinta</th>
               </tr>
               </thead>
               <tbody>
                   {
                       tuotteet.map(tuote=>(
                           
                           <tr key={uuid()}>
                               <td>
                                   {tuote.name}
                               </td>
                               <td>
                                   {tuote.amount}
                               </td>
                           </tr>
                       ))
                   }
               </tbody>
           </table>
       </div>
   )
}
export default App;


