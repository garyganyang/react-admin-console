import {useRoutes, Navigate} from "react-router-dom";
import {lazy} from "react";

import LayoutComponent from "/src/layout/index";
import LoginComponent from "/src/pages/login/index";
import HomeComponent from "/src/pages/home/index";
import User from "/src/pages/user";
import Error404 from "/src/pages/404/error404";
//公共
import lazyLoad from "./lazyLoad";

// eslint-disable-next-line react-refresh/only-export-components
export const routerItem: Array<object> = [
    {
        path: "/",
        key: "/",
        label: "首页",
        hidden: true, // 菜单隐藏
        element: <Navigate to="/layout/home"/>
    },
    {
        path: "/login",
        key: "login",
        label: "登录",
        element: <LoginComponent/>,
        meta: {
            noAuth: true    //不需要token检验
        }
    },
    {
        path: "/layout",
        key: "layout",
        label: "控制台",
        element: <LayoutComponent/>,
        children: [
            {
                path: "home",
                key: "home",
                label: "首页",
                element: lazyLoad(lazy(() => import("/src/pages/home/index"))),//这里是延迟加载
            },
            {
                path: "user",
                key: "user",
                label: "用户",
                element: <User/>,
                children: [
                    {
                        path: "home1",
                        key: "home1",
                        label: "首页1",
                        element: <HomeComponent/>
                    },
                    {
                        path: "user1",
                        key: "user1",
                        label: "用户1",
                        element: <User/>
                    },
                ],
            },
        ],
    },
    {
        path: "/404",
        hidden: true, // 菜单隐藏
        element: <Error404 />,
        meta: {
            noAuth: true    //不需要token检验
        }
    },
    {
        path: "*",
        hidden: true, // 菜单隐藏
        element: <Navigate to="/404" />
    },

];

function GetRoutes() {
    return useRoutes(routerItem);
}

export default GetRoutes;
