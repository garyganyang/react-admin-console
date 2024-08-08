import {FunctionComponent} from 'react'
import {useNavigate} from "react-router-dom";
import {Button} from 'antd';

interface Props {
    // title: string;
}

interface State {
    // count: number;
}

const Home: FunctionComponent<Props> = ({title}) => {
    title = title || "Home"
    const navigate = useNavigate()
    for (let i = 0; i < 999; i++) {
        console.log(i * i)
    }

    return (
        <div>
            <Button type="primary">Login with me {title}</Button>

        </div>
    );
}

export default Home
