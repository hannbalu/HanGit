import React ,{useState} from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import '../public/style/pages/index.css'

import {Col, Row, List} from 'antd'
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons'

import Header from '../components/Header'
import Author from '../components/Author'

export default function Home() {

  const [mylist,setMylist] = useState(
    [
      {"title":"To infinity and beyond","context":"记录前端学习的点滴，勤于思考，乐于创新，在前端开发的路上一往无前，我是Hannial，一个兴趣使然的前端新人"},
      {"title":"Selfintroduction","context":"注重web前端页面交互开发，学习完整构建个人博客中"},
      {"title":"Study Plan","context":"目前学习完整构建个人博客网站，接下来学习TypeScript，vue等"},
      {"title":"Hobby","context":"摄影、电子游戏、运动等"},
      {"title":"Goal","context":"爱烤，给阿蛋一个安稳的未来，买杨浦学区房，买特斯拉，争取成为全栈工程师"}
    ]
  )
  const [visitPeople,setVisitPeople] = useState(`1000+`)

  return (
    <div className={styles.container}>
      <Head>
        <title>HannibalBlog</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Header/>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List 
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={item=>(
              <List.Item>
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                  <span><CalendarOutlined/> 2020-10-26</span>
                  <span><FolderOutlined/> 项目情况及链接</span>
                  <span><FireOutlined/> {visitPeople}</span>
                </div>
            <div className="list-context">{item.context}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author/>
        </Col>
      </Row>
    </div>
  )
}
