import React,{useState} from 'react'
import dynamic from 'next/dynamic' //异步加载组件

import MyHeader from '../components/myHeader'
 
const One = dynamic(import('../components/one'))

function Time(){
    const [nowTime,setTime] = useState(Date.now())

    const timeChange = async ()=>{
        const moment = await import('moment')
        setTime(moment.default(Date.now()).format("MMM Do YY"))
    }

    return(
        <div>
            <MyHeader/>
            <div>当前时间为：{nowTime}</div>
            <One/>
            <div><button onClick={timeChange}>改变时间格式</button></div>
        </div>
    )
}

export default Time