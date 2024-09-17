import st from './Weight.module.css'
import { useState } from 'react'

const Usage = (props) => {

    const [vothod, setVOthod] = useState()
    const [vdetali, setVdetali] = useState()
    const [proc, setProc] = useState()
    
    let result= props.result

    let calcv = () =>{
        let a = result*(proc/100);
        let b = result-a;
        a = Math.round(a * 100) / 100
        b = Math.round(b * 100) / 100
        setVdetali(a);
        setVOthod(b);
        console.log("vdetali:" + vdetali + "; vothod:" + vothod );
    }
    

    return (
        <div>
            <div className={st.inptext}>Розрахунок використання</div>
            <div className={st.inptext}>
                <div>% викор-ння</div>
                <div><input type="number" onChange={event => setProc(event.target.value)}/></div>
                <div><button className={st.bt} onClick={calcv}> calc</button></div>
            </div>
            <div className={st.inptext}>Вага загальна: {props.result} кг</div>
            <div className={st.inptext}>Вага деталей: {vdetali} кг</div>
            <div className={st.inptext}>Вага залишків: {vothod} кг</div>
        </div>
    )
}

export default Usage