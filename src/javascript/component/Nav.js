/**
 * Created by Administrator on 2017/9/18 0018.
 */
import React from 'react';
import { Layout, Menu,  Icon, Footer } from 'antd';
import { Link }  from 'react-router'
import 'antd/dist/antd.css';
import 'rc-banner-anim/assets/index.css';
const { Header, Content, Sider } = Layout;


export default class Nav extends React.Component{
    constructor(props) {
        super(props);
    }
    state = {
        collapsed: false,
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render(){
        return(
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo">
                        <img height={65} src="./images/logo.jpg" alt="晨涛汽车销售系统"/>
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
                        <Menu.Item key="1">
                            <Link to="/home">
                                <Icon type="pie-chart" />
                                <span>首页</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/car">
                                <Icon type="pie-chart" />
                                <span>车系</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/shopping">
                                <Icon type="pie-chart" />
                                <span>购物车</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/order">
                                <Icon type="pie-chart" />
                                <span>订单</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <div style={{width:50,height:"100%",float:"right"}}>登录</div>
                    </Header>
                    <Content style={{ margin: '16px' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 530 }}>
                            {this.props.children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        )
    };
}