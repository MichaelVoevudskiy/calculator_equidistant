import React, { useState } from 'react';
import '../eq/Eq.css'


const Eq = () => {
  const [val, setVal] = useState('kontur')
  const [mustBe, setMustBe] = useState(0)
  const [exists, setExists] = useState(0)
  const [eqv, setEqv] = useState(0)
  const [res, setRes] = useState(0)

  let getOption = (el) => { setVal(el.target.value) }
  let getMustBe = (el) => { setMustBe(el.target.value) }
  let getExists = (el) => { setExists(el.target.value) }
  let getEqv = (el) => { setEqv(el.target.value) }

  let calc = () => {
    if (val === 'kontur') {
      let a = ((((Number(mustBe) - Number(exists))) + Number(eqv)) * 10) / 10
      a = a.toFixed(2)
      setRes(a);
    }

    else {
      let a = ((((Number(mustBe) - Number(exists))) - Number(eqv)) * 10) / 10
      a = a.toFixed(2)
      if (a < 0) a = a * (-1)
      setRes(a);
    }
  }

  return (
    <div>
      <div className='title'>Калькулятор еквідистанти</div>
      <div className='info'>Введіть данні чотирьох параметрів:</div>
      <div className='info'>1.Для чого розрахувати розмір (отвори чи контур)</div>      
      <div className='info'>2.Розмір має бути по кресленню</div>      
      <div className='info'>3.Розмір який отримали</div>      
      <div className='info'>4.Еквідистанта на якій робили тест</div>      
      <div className='opt'>
        <div className='divinp'>1. Для чого:</div>
        <select onChange={getOption}>
          <option value={'kontur'}>Для контура</option>
          <option value={'otverst'}>Для отворів</option>
        </select>
      </div>
      <div className="box">
      <div className='divinp'>
        2. Розмір по кресленню <input type="number" onChange={getMustBe} ></input>
      </div>

      <div className='divinp'>
        3. Розмір який отримали <input type="number" onChange={getExists} ></input>
      </div>

      <div className='divinp'>
        4. Встановлена еквідистанта  <input type="number" onChange={getEqv} ></input>
      </div>
      </div>

      <button className='calcbutton' onClick={calc}>Calc</button>
      <div className='ans'>
        <div>Встановіть нове значення еквідистанти  = {res} mm</div>
      </div>
      
    </div>
  )
}

export default Eq