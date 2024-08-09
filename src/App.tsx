import {Component} from 'react'
import GetRoutes from "/src/routes/index";
import AutoRouter from "/src/components/AutoRouter";
import './App.scss'

interface Props {
    // title: string;
}

interface State {
}

class App extends Component<Props, State> {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            // AutoRouter作为父组件，包裹所有子组件
            // react目前不支持类似vue中的<keep-alive>组件,推荐以下三种方案：
            // 1.将需要保存状态组件的state提升至父组件中保存。
            // 2.使用css visible属性来控制需要保存状态组件的渲染，而不是使用if/else，避免React将其卸载。
            // 3.将数据保存在本地LocalStorage
            // https://react.docschina.org/learn/preserving-and-resetting-state#preserving-state-for-removed-components
            <AutoRouter>
                <GetRoutes/>
            </AutoRouter>
        );
    }
}

export default App
