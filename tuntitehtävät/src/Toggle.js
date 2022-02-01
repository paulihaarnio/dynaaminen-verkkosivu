
import React,{useState} from 'react';

export default function Toggle(props){
    const [isToggleOn, setIsToggleOn] = useState(true);

    const handleClick=()=>{
        if(isToggleOn){
            props.stop()
        }else{
            props.start()
        }
        setIsToggleOn(!isToggleOn)
        
    }


    return(
        <div>
            <button onClick={handleClick}>
        {isToggleOn ? 'Stop' : 'Start'}
            </button>
        </div>
    );
}



