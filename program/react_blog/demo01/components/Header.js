import React from 'react';
import {AppleOutlined, CodeOutlined, CoffeeOutlined, BulbOutlined} from '@ant-design/icons'
import '../public/style/components/header.css'

import {Row,Col,Menu,Icon} from 'antd'

const Header = ()=>{
    return (
        <div>
            <div className="header">
                <Row type='flex' justify='center'>
                    <Col xs={24} sm={24} md={10} lg={10} xl={12}>
                        <span className="header-logo">Hannibal</span>
                        <span className="header-txt">前端新晋rookie</span>
                    </Col>
                    <Col xs={0} sm={0} md={14} lg={12} xl={10}>
                        <Menu mode="horizontal">
                            <Menu.Item key="home">
                                <AppleOutlined/>
                                主页
                            </Menu.Item>
                            <Menu.Item key="video">
                                <CodeOutlined/>
                                学习笔记
                            </Menu.Item>
                            <Menu.Item key="life">
                                <CoffeeOutlined/>
                                生活
                            </Menu.Item>
                            <Menu.Item key="help">
                                <BulbOutlined/>
                                帮助
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Header