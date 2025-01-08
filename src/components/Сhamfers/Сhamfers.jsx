import React, { useState } from 'react';
import СhamfersImg from './Сhamfers.png';
import st from './Сhamfers.module.css'



const Сhamfers = () => {

    const [a, setA] = useState()
    const [b, setB] = useState()
    const [L, setL] = useState()
    // const [ans, setAns] = useState()

    const calc = () => {

        if (L === undefined || L === '') {
            let ang = b / a
            ang = (Math.atan(ang)) / 0.0174533
            ang = Math.round(ang * 100) / 100
            console.log("ans ang=" + ang)
            // setAns("ans ang=" + ang)
            setL(ang)
        }

        if (a === undefined || a === '') {
            let radians = L * (Math.PI / 180)
            let calcA = Math.tan(radians)
            calcA = Math.round(calcA * 100) / 100
            calcA = calcA * b
            console.log("ans A =" + calcA)
            // setAns("ans A =" + calcA)
            setA(calcA)
        }

        if (b === undefined || b === '') {
            let radians = L * (Math.PI / 180)
            let calcB = Math.tan(radians)
            calcB = Math.round(calcB * 100) / 100
            calcB = calcB * a
            console.log("ans B=" + calcB)
            // setAns("ans B=" + calcB)
            setB(calcB)
        }
    }

    return (
        <div>
            <div className='title'>Розрахунок фасок</div>
           
            <div className={st.inp}>
                <div className={st.dviimg}>
                    <img src={СhamfersImg} alt="" />
                </div>
                <div className={st.datatext}>
                    <div className={st.inpdata}>
                        <div>A</div>
                        <input type="number" value={a} className={st.inpdata} onChange={event => setA(event.target.value)} />
                    </div>
                    <div className={st.inpdata}>
                        <div>B</div>
                        <input type="number" value={b} className={st.inpdata} onChange={event => setB(event.target.value)} />
                    </div>
                    <div id='idl' className={st.inpdata}>
                        <div>L</div>
                        <input type="number" value={L} className={st.inpdata} onChange={event => setL(event.target.value)} />
                    </div>
                    <button className={st.bt} onClick={calc}>Calc</button>
                </div>
            </div>
            <div className={st.inpdata}> A = {a} mm</div>
            <div className={st.inpdata}> B = {b} mm</div>
            <div className={st.inpdata}> L = {L} град.</div>
        </div>
    )
}

export default Сhamfers