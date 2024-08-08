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
            <AutoRouter>
                <GetRoutes></GetRoutes>
            </AutoRouter>
        );
    }
}

export default App
