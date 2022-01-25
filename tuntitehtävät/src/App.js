import './App.css';
import { useEffect, useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import reactDom from 'react-dom';
import Home from './Home'
import About from './About'

function App() {
   return(
       <Routes>
           <Route path="/" element={Home()} exact/>
           <Route path="/about" element={About()} />
       </Routes>
   )
   
}
export default App;