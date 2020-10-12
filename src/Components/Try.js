import React, {useState } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";
import relax from '../assets/relax.png'
import success from '../assets/success.png'

let f = () =>{};
setInterval(() => {
  if (typeof f !== undefined) f();
}, 1000);

const Try = () => {
  const [timeLeft, setTimeLeft] = useState(120);
  const [successShow, setSuccessShow] = useState(false)
  const [show, setShow] = useState(false);

  f = () => {
    if(timeLeft> 0){
      setTimeLeft(timeLeft - 1);
    }else{
      setSuccessShow(true)
    }
  }

  const formatTime = (time) => ({
    minutes: Math.floor(time / 60),
    seconds: Math.floor(time % 60),
  });
  return (
<div onMouseMove={()=>{
  setShow(true);
  setTimeout(() => {
            setTimeLeft(120);
            setShow(false);
          }, 2000);
 }}>
    {
      successShow ? <img className="success" src={success} alt="success"/> : (
        <>
        <div className="timer">
      {show && (
        <p
          style={{
            color: show ? "red" : "blue",
            fontWeight: "bold",
            fontSize: "30px",
            padding: "0",
            margin: "0",
          }}
        >
          try again
        </p>
      )}
      <p
        style={{
          color: show ? "#d43131" : "#1a3059",
          fontSize: "30px",
          padding: "0",
          margin: "0",
        }}
      >
        {formatTime(timeLeft).minutes}:{formatTime(timeLeft).seconds}
      </p>
      <KeyboardEventHandler
        handleKeys={["all"]}
        onKeyEvent={(e) => {
          setShow(true);
          setTimeout(() => {
            setTimeLeft(120);
            setShow(false);
          }, 2000);
        }}
      />
    </div>   
    <div className="cont"> 
    <div className="like">
      <img src={relax} alt="relax"/>
    </div>
    </div>

    </>
      )
      }
    
    </div>
  );
};

export default Try;
