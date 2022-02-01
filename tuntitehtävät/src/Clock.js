import React,{useState, useEffect, useRef} from 'react';
import Toggle from './Toggle';
export default function Clock() {

    const [time, setTime] = useState(new Date());
    const timerRef=useRef()
    useEffect(() => {
      start()
      return ()=>{stop()}
    }, []);
    
    const start =()=>{
        const id =setInterval(()=>{
            setTime(new Date())
        },1000)
        timerRef.current=id
    }

    const stop =()=>{
        clearInterval(timerRef.current)
    }

  return (
  <div> 
     <p>{time.toLocaleTimeString()}</p> 
      <Toggle start={start} stop={stop}/>
  </div>
  );
}
