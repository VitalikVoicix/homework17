import React,{useState,useRef,useEffect} from "react"
import "./main.css"
import { useTimer,useStopwatch } from 'react-timer-hook';


{/*const  Main =()=>{
function padTime(time){
    return time.toString().padStart(2,"0");
}

const[timeLeft,setTimeLeft]=useState(30);

const [pause, setPause] = useState(true);
const intervalRef = useRef(null);
const minutes=padTime(Math.floor(timeLeft/60));
const seconds=padTime(timeLeft-minutes*60);

const buttonPress = () => {
    setPause(!pause);
}
useEffect(() => {
    const cleanTimer = (event) => {
        setPause(false);
    }
})


const {
   pausee,
    isRunning,
    start,
  } = useTimer()



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
*/ }
function MyStopwatch() {
    const {
      seconds,
      minutes,
      isRunning,
      start,
      pause,
      } = useStopwatch({avtostart:true});

    
  
    return (
      <div style={{textAlign: 'center'}}>
        <div style={{fontSize: '50px'}}>
         <span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <p>{isRunning ? 'Running' : 'Not running'}</p>
      
        <button onClick={start}>Start</button> 
        
        <button onClick={pause}>Pause</button>
      
        <div className="line"style={{ width: `calc(${seconds} * (100% / ${useState(30)}))` }}></div>
      </div>
    );
  }
  
  export default function Main() {
    //const time = new Date();
    //time.setSeconds(time.getSeconds() + 30); 
    return (
      <div>
        <MyStopwatch />
      </div>
    );
  }
///


