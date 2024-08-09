import {FunctionComponent} from 'react'
// import {useNavigate} from "react-router-dom";
import store, {HomeComponentReducerActionType} from "../../redux/reduxStore";
import {Button} from 'antd';
import {getInfo2} from "../../http/api";

interface Props {
    title: string;
}

// interface State {
// count: number;
// }

const HomeComponent: FunctionComponent<Props> = ({title}) => {
    title = title || "Home"
    // const navigate = useNavigate()
    for (let i = 0; i < 999; i++) { // 用于测试懒加载
        console.log(i * i)
    }

    const updateCount = () => {
        store.dispatch({type: HomeComponentReducerActionType.UPDATE_NAME, name: "其实我是想搞区块链全栈开发的,不得不把react学一学", payload: ""});
    }
    const callGetInfo2 = () => {
        getInfo2().then((res: unknown) => {
            console.log(res)
        })
    }

    return (
        <div>
            <div className="font-bold text-lg">我我我</div>
            <h1 className="text-6xl">我我我</h1>
            <Button type="primary" onClick={updateCount}>通过Redux改变数据 {title}</Button>
            <Button type="primary" onClick={callGetInfo2}>call http api</Button>
        </div>
    );
}

export default HomeComponent
