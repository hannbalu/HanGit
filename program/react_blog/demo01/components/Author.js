import {Avatar, Divider} from 'antd'
import { GithubOutlined, WechatOutlined, TwitterOutlined } from '@ant-design/icons'

import '../public/style/components/author.css'

const Author =()=>{
    return(
        <div className="author-div comm-box">
            <div><Avatar size={100} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603737728125&di=05b338cd9941b5fd525d5a38b40d435d&imgtype=0&src=http%3A%2F%2Fpic.baiqi008.com%2Fuploads%2Fsceuettax.jpeg" /></div>
            <div className="author-name">Hannibal</div>
            <div className="author-introduction">
                得物App前端工程师，专注于Web和移动端开发，计划逐步成长为优质前端开发工程师并向全栈工程师努力
                <Divider>社交账号</Divider>
                <GithubOutlined className="account"/>
                <WechatOutlined className="account"/>
                <TwitterOutlined className="account"/>
            </div>
        </div>
    )
}

export default Author