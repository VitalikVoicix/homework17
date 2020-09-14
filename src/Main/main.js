import React,{useState,useRef} from "react"
import "./main.css"

const  Main =()=>{
function padTime(time){
    return time.toString().padStart(2,"0");
}

const[timeLeft,setTimeLeft]=useState(30);
const intervalRef = useRef(null);
const minutes=padTime(Math.floor(timeLeft/60));
const seconds=padTime(timeLeft-minutes*60);
function startTimer(){
       intervalRef.current= setInterval(()=>{
       setTimeLeft(timeLeft => {
            if(timeLeft >= 1)return timeLeft -1;
            return 0;
        });
    },1000)
}
function stopTimer(){
clearInterval(intervalRef.current)
}
 return(
  <div className="main">
     <div className="span">
         <span>{minutes}</span>
         <span>:</span>
         <span>{seconds}</span>
     </div>
     <div className="btn">
         <button onClick={startTimer}>Start</button>
         <button onClick={stopTimer}>Stop</button>
    </div>
     <div className="line"style={{ width: `calc(${timeLeft} * (100% / ${useState(30)}))` }}></div>
  </div>
   )
}
export default Main


