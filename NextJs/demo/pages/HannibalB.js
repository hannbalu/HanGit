import Link from 'next/link'

export default ()=>(
    <div>
        <div>Hannibal-B page</div>
        <Link href='/'>
            <a>
                <span>返回首页</span>
                <span>Icon</span>
            </a>
        </Link>{/* 框架要求 Link内 需要放入a标签 */}
    </div>
)