import {withRouter} from 'next/router'//接收query数据
import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'


const Game = ({router,game})=>{
    return(
        <div>
            <Head>
                <title>hannibalGame</title>
                <meta charSet='utf-8'/>
            </Head>
            <div>
                Hannibal play {router.query.name}
            </div>
            <div>
                Game list:<br/>
                {game.map((item)=>`${item},`)}
            </div>
            <div><Link href='/'><a>返回首页</a></Link></div>
        </div>
    )
}
Game.getInitialProps = async ()=>{
    const promise = new Promise((resolve,reject)=>{
        axios('https://www.easy-mock.com/mock/5f93e927dc0cf25a6b30b383/nextJs/gameList').then(
            (res)=>{
                console.log('请求数据结果:',res)
                resolve(res.data.data)
            } 
        )
    });
    return await promise
}

export default withRouter(Game)//高阶组件 接收query参数`