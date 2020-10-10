import React from 'react';

import Link from 'next/link'/* 标签跳转 */
import Router from 'next/router'/* 编程跳转 */

const Home=()=>{
  return(
    <div>
      <h3>首页</h3>
      <div><Link href='/HannibalA'><a>go A页面</a></Link></div>
      <div><Link href='/HannibalB'><a>go B页面</a></Link></div>
      <div>
        <button onClick={()=>{Router.push('/HannibalA')}}>HannibalA</button>
      </div>
    </div>
  )
}

export default Home