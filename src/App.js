import './App.css';
import React, { useState } from 'react';

function App() {


  const [val, setVal]= useState('kontur')
  const [mustBe, setMustBe]= useState(0)
  const [exists, setExists]= useState(0)
  const [eqv, setEqv]= useState(0)
  const [res, setRes]= useState(0)

  let getOption = (el) =>{
    setVal(el.target.value)
  }

  let getMustBe = (el)=>{
    setMustBe(el.target.value)
  }

  let getExists = (el)=>{
    setExists(el.target.value)
  }

  let getEqv = (el)=>{
    setEqv(el.target.value)
  }

  let calc =()=>{

    console.log("mustBe: "+Number(mustBe))
    console.log("exists: "+Number(exists))
    console.log("eqv: "+Number(eqv))
    console.log("res: "+Number(res))

    if(val==='kontur' ){
      let a = ((((Number(mustBe)-Number(exists))/2)+Number(eqv))*10)/10
      a= a.toFixed(2)
      setRes(a);
    }

    else{
      let a = ((((Number(mustBe)-Number(exists))/2)-Number(eqv))*10)/10
      a= a.toFixed(2)
      if(a<0) a=a*(-1)
      setRes(a);
    }

  }



  return (
    <div className="App">
        <div className='title'> Калькулятор эквидистанты</div>
        
        <div className='opt'>
          <div className='divinp'>Для чего:</div>
          <select onChange={getOption}>
            <option value={'kontur'}>Контур</option>
            <option value={'otverst'}>Отверстие</option>
          </select>
        </div>

        <div className='divinp'>
          Должен быть <input type="number" onChange={getMustBe} ></input>
        </div>

        <div className='divinp'>
          Фактический <input type="number" onChange={getExists} ></input>
        </div>

        <div className='divinp'>
          Установ. экв. <input type="number" onChange={getEqv} ></input>
        </div>

        <button onClick={calc}>Calc</button>


        <div className='ans'>
          <div>Рассчитанная эквидистанта = {res} mm</div>
        </div>
    </div>
  );
}

export default App;
