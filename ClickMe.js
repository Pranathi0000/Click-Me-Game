import React,{useState,useEffect} from 'react'
import './Styless.css'

function ClickMe() {
    const [score,setScore]=useState(0);
    const [time,setTime]=useState(10);

    useEffect(()=>
    {
            if(time>0)
            setInterval(tick,1000);   
    })

   const tick=()=>
    {
        
        setTime(time-1);
    }
   
    const incrementCount=()=>
    {
        if(time>0)
        {
            setScore(score+1);
        }
    }
  return (
    <div>
      <h1>Click the below picture as many times as you can before thr countdown ends: {time}</h1>
      <img src='https://cdn.dribbble.com/users/1385479/screenshots/6827259/shot_4x.png' alt='iamge' onClick={incrementCount}></img>
      <h1>Score: {score}</h1>
      <button onClick={()=>{
             setTime(10);
             setScore(0);
        }}>Restart</button>
    </div>
  )
}

export default ClickMe
