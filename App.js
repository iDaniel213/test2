import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';



function App() {
  const handleMinus=() => {
    if(counter>0)
      setCounter(counter-1)
  
    else
      setCounter(0)
  }
  const handleHappy=() => {
    console.log(isHappy)
    isHappy=='💚' ? setisHappy('💙') : setisHappy('💙')
  }
  const [counter,setCounter]=useState(0)
  const [isHappy,setisHappy]=
  const nev="Gulya"
  const piros={color:"red"}
  const zold={color:"green"}
  return (
    <div className="container">
      <h1>Első React projekt</h1>
      <h4>Üdv {nev} !</h4>
      <div style={counter<10? piros : zold}>Számlaló:🤣😢 {counter}</div>
      <button className="btn btn-primary m-2" onClick={()=>setCounter(counter+1)}>+</button>
      <Button variant="danger" onClick={handleMinus}>-</Button>
      <p>{counter>10 ? '❤' : '🖤'}</p>
      <button onClick={}>Kapcsoló</button>
      <div className="Happy">{isHappy}</div>
    </div>
  );
}

export default App;