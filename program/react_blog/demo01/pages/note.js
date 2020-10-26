import Head from 'next/head'
import styles from '../styles/Home.module.css'

import {Col, Row} from 'antd'

import Header from '../components/Header'

export default function Note() {
  return (
    <div className={styles.container}>
      <Head>
        <title>学习笔记</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Header/>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}></Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}></Col>
      </Row>
    </div>
  )
}
