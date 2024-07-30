import React, { useState } from 'react';
import st from './Weight.module.css'


const Weight = () => {

    const [material, setMaterial] = useState();
    const [WeightMat, setWeightMat] = useState();
    const [LightMat, setLightMat] = useState();
    const [SMat, setSMat] = useState();
    const [result, setResult] = useState();
    // const [prosent, setProsent] = useState();

    const calc = () => {
            let ss = (WeightMat/1000) * (LightMat/1000)* SMat * material
            ss = Math.round(ss * 100) / 100
        setResult(ss)
    }

    return (
        <div>
            <div className={st.title}>
                Калькулятор ваги матеріалу
            </div>

            <div className={st.inptext}>
                Матеріал:

                <select onChange={event => setMaterial(event.target.value)}>
                    <option value={2.4}>Мармур</option>
                    <option value={2.6}>Граніт</option>
                    <option value={7.85}>Сталь</option>
                    <option value={7.74}>Нержавіюча сталь</option>
                    <option value={8.96}>Мідь</option>
                    <option value={8.73}>Латунь</option>
                    <option value={2.7}>Алюміній</option>
                </select>

            </div>
            <div className={st.inptext}>
                Довжина:
                <input type="number" onChange={event => setLightMat(event.target.value)} />
                mm
            </div>
            <div className={st.inptext}>
                Ширина:
                <input type="number" onChange={event => setWeightMat(event.target.value)} />
                mm
            </div>
            <div className={st.inptext}>
                Товщина:
                <input type="number" onChange={event => setSMat(event.target.value)} />
                mm
            </div>
            <div><button className={st.bt} onClick={calc}>Calc</button></div>
            <div className={st.ans}>Теоритична вага: {result} кг</div>
            
            {/* <div className={st.inptext2}>
                % використання:
                <input type="number" onChange={event => setProsent(event.target.value)} />
                %
            </div>
            <div className={st.text}>вага заготовки: {result} кг</div>
            <div className={st.text}>вага деталей:   {result} кг</div>
            <div className={st.text}>вага залишків:  {result} кг</div> */}
        </div>
    )
}

export default Weight