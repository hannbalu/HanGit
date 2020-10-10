import Link from 'next/link'

export default ()=>(
    <div>
        <div>Hannibal-A page</div>
        <Link href='/'><a>返回首页</a></Link>{/* 框架要求 Link内 需要放入a标签 */}
    </div>
)