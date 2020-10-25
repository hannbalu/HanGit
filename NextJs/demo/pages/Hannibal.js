import {useState} from 'react'

function Hannibal(){
    const [color,setColor]=useState('blue')
    const changeColor = ()=>{
        setColor(color=='blue'?'red':'blue')
    }
    return (
        <div>
            <div>CSS引入测试</div>
            <button onClick={changeColor}>change</button>
            <style jsx>
                {`
                    div{color:${color};}
                `}
            </style>
        </div>
    )
}

export default Hannibal