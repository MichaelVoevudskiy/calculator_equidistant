// import st from './Weight.module.css'
import st from './Usage.module.css'
import { useState } from 'react'

const Usage = (props) => {

    const [vothod, setVOthod] = useState()
    const [vdetali, setVdetali] = useState()
    const [proc, setProc] = useState()
    const [kilcist, setKilcist] = useState(1)
 

    let result= props.result

    let calcv = () =>{
        
        let a = result*(proc/100);
        let b = result-a;
        a = Math.round(a * 100) / 100
        b = Math.round(b * 100) / 100
        setVdetali(a);
        setVOthod(b);
    }
    

    return (
        <div className={st.wrapper}>
            <div className={st.titletext}>Розрахунок використання</div>
            <div className={st.inptext}>% використання</div>
            <div className={st.inptext}><input type="number" onChange={event => setProc(event.target.value)}/></div>
            <div className={st.inptext}>%</div>

            <div className={st.inptext}>кількість</div>
            <div className={st.inptext}><input type="number" value={kilcist} onChange={event => setKilcist(event.target.value)}/></div>
            <div className={st.inptext}>шт</div>

            <div className={st.bt}><button onClick={calcv}>Розрахунок використання</button></div>
            <div className={st.result}>Вага загальна: {props.result*kilcist} кг</div>
            <div className={st.result}>Вага деталей: {Math.round(vdetali*kilcist*100)/100} кг</div>
            <div className={st.result}>Вага залишків: {Math.round(vothod*kilcist*100)/100} кг</div>
        </div>
    )
}

export default Usage