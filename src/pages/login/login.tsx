import {FunctionComponent} from 'react'
import "./login.scss";
import reactIcon from "/src/assets/react.svg";

import {Button, Checkbox, Form, Input, message} from 'antd';
import {UserOutlined, LockOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const styles = {
    login: {
        background: `linear-gradient(blue, pink)`,
        width: "100vw",
        height: "100vh",
    }
};

interface loginData {
    username: string;
    password: string;
    remember: string;
}

interface Props {
    title: string;
}

interface State {
    // count: number;
}

const Login: FunctionComponent<Props> = ({title}) => {
    title = title || "aaaaaaa"
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();

    const onFinish = (values: loginData) => {
        messageApi.open({
            type: 'loading',
            content: '正在登录..',
            duration: 0,
        });

        setTimeout(() => {
            messageApi.destroy();
            //默认请求延时
            if (values.username != "admin") {
                messageApi.open({
                    type: 'error',
                    content: '登录失败!',
                });
                return;
            }
            messageApi.open({
                type: 'success',
                content: '登录成功!',
                duration: 1,
                onClose() {
                    localStorage.setItem("token", "我是一个token啊");    //----登录成功后，设置token
                    navigate("/layout/home", {replace: true});
                }
            });
        }, 500);
    };

    const onFinishFailed = (errorInfo: any) => {
        // console.log('Failed:', errorInfo);
    };

    return (
        <div className="login_container" style={styles.login}>
            {contextHolder}
            <div className="title_big">React Admin Console <img src={reactIcon} style={{marginLeft: "5px"}}/></div>
            <div className="login_panel">
                <Form name="basic"
                      labelCol={{span: 0}}
                      wrapperCol={{span: 24}}
                      style={{maxWidth: 600}}
                      initialValues={{remember: true}}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                >
                    <Form.Item name="username"
                               rules={[
                                   {required: true, message: '请输入用户名!'},
                                   ({getFieldValue}) => ({
                                       validator(_, value) {
                                           if (value === "admin") {
                                               return Promise.resolve();
                                           }
                                           return Promise.reject(new Error('用户名不存在!'));
                                       },
                                   }),
                               ]}
                    >
                        <Input prefix={<UserOutlined/>} placeholder="用户名" autoComplete="off"/>
                    </Form.Item>

                    <Form.Item name="password" rules={[{required: true, message: '请输入密码!'}]}>
                        <Input.Password prefix={<LockOutlined/>} placeholder="密码"/>
                    </Form.Item>

                    <Form.Item wrapperCol={{span: 24}} name="remember" valuePropName="checked">
                        <Checkbox>记住密码</Checkbox>
                        {/* <Button type="link" htmlType="button" style={{ float: "right" }}>
                            忘记密码？
                        </Button> */}
                    </Form.Item>

                    <Form.Item wrapperCol={{span: 24}}>
                        <Button type="primary" htmlType="submit" block> 登录 </Button>
                    </Form.Item>
                </Form>
            </div>
            <div style={{marginTop:12}}>
                <img src="https://img.shields.io/badge/node-v20.16.0-green" alt="npm package"/>
                <span> </span>
                <img src="https://img.shields.io/badge/npm-v10.8.1-blue" alt="npm package"/>
                <span> </span>
                <img src="https://img.shields.io/badge/vite-^5.3.4-yellow" alt="npm package"/>
                <span> </span>
                <img src="https://img.shields.io/badge/react-^18.3.1-green" alt="react package"/>
                <span> </span>
                <img src="https://img.shields.io/badge/AntDesign-^5.20.0-blue" alt="AntDesign package"/>
                <span> </span>
                <img src="https://img.shields.io/badge/AntDesign-^5.20.0-yellow" alt="AntDesign package"/>
            </div>
        </div>
    );
}

export default Login
