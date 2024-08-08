// import "./index.scss";
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from '@ant-design/icons';
import {Layout, theme} from 'antd';
import {Outlet} from "react-router-dom";
import {FunctionComponent} from "react";
import Aside from "./aside"
import "/src/layout/index.scss"

// 使用 React.FunctionComponent 定义 函数组件 的类型
// 使用 React.Component         定义   类组件 的类型
const MyLayout: FunctionComponent = () => {
    const {Header, Content, Footer, Sider} = Layout;

    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();


    return ( //多行箭头函数返回 使用()
        <Layout>
            <Sider breakpoint="lg"
                   collapsedWidth="0"
                   onBreakpoint={(broken) => {
                       console.log(broken);
                   }}
                   onCollapse={(collapsed, type) => {
                       console.log(collapsed, type);
                   }}>
                <div className="demo-logo-vertical"/>
                <Aside/>
            </Sider>
            <Layout>
                <Header style={{padding: 0, background: colorBgContainer}}/>
                <Content style={{margin: '16px 16px 0', padding: 16, height: 'calc(100vh - 64px - 69px - 16px)', borderRadius: '8px', background: colorBgContainer}}>
                    <Outlet></Outlet>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
}

export default MyLayout;
