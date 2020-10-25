import React from 'react';

import Link from 'next/link'/* 标签跳转 */
import Router from 'next/router'/* 编程跳转 */ 

//query传递参数 query？id 或者react-router中 path ：id=1 next框架仅支持query传递参数

const Home=()=>{

  //route生命周期
  //routeChangeStart 路由发生变化之前
  //routeChangeComplete 路由器结束变化
  //beforeHistroyChange 
  //routeChangeError
  //hashChangeStart
  //hashChangeComplete

  Router.events.on('routeChangeStart',(...args)=>{
    console.log('routeChangeStart-->路由开始变化',args)
  })
  Router.events.on('routeChangeStart',(...args)=>{
    console.log('routeChangeComplete-->路由结束变化',args)
  })
  Router.events.on('beforeHistoryChange',(...args)=>{
    console.log('beforeHistoryChange-->路由结束变化',args)
  })
  Router.events.on('hashChangeStart',(...args)=>{
    console.log('hashChangeStart-->哈希路由转换',args)
  })
  Router.events.on('hashChangeComplete',(...args)=>{
    console.log('hashChangeComplete-->哈希路由结束',args)
  })

  let goToA = ()=>{Router.push('/HannibalA')};
  let goToB = ()=>{Router.push('/HannibalB')};
  let gotoGame = ()=>{
    let game = inputGame.value;
    Router.push({
      pathname:'/HannibalGame',
      query:{name:game}
    })
  }

  return(
    <div>
      <h3>首页</h3>
      <div><Link href='/HannibalA'><a>go A页面</a></Link></div>
      <div><Link href='/HannibalB'><a>go B页面</a></Link></div>
      <div><Link href='/HannibalGame?name=Monster Hunter'><a>go MH</a></Link></div>
      <div><Link href='/HannibalGame?name=Pokemon'><a>go Pokemon</a></Link></div>
      <div><Link href={{pathname:'HannibalGame',query:{name:'Civil'}}}><a>go Civil</a></Link></div>
      <div>
        <button onClick={goToA}>HannibalA</button>
        <button onClick={goToB}>HannibalB</button><br/>
        <input type='text' id='inputGame'/>
        <button onClick={gotoGame}>输入游戏</button>
      </div>
      <div>
        <Link href='#HannibalA'>hash to A</Link>
      </div>
      <div><Link href='/Hannibal'><a>Hannibal Css test</a></Link></div>
    </div>
    
  )
}

export default Home