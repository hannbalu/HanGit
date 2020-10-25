import Head from 'next/head'
import '../static/test.css'
import {Button} from 'antd'

function Header(){
    return(
        <div className='container'>
            <Head>
                <title>食肉汉尼拔</title>
                <meta charSet='utf-8'/>
            </Head>
            <div>Hannibalu.com</div>
            <div><Button>Click</Button></div>
        </div>
    )
}

export default Header