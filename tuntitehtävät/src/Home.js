import React from "react";
import {Link} from 'react-router-dom'
export default function Home(){
    return(
        <div>
            <p>Home</p>
            <Link to="/about">About</Link>
        </div>
    )
}