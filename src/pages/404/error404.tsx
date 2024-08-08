import {FunctionComponent} from 'react'
import {useNavigate} from "react-router-dom";
import {Button} from 'antd';
import "./css/style.css"
import svg404 from "./images/404.svg"
import svgMeteor from "./images/meteor.svg"
import svgAstronaut from "./images/astronaut.svg"
import svgSpaceship from "./images/spaceship.svg"

interface Props {
    // title: string;
}

interface State {
    // count: number;
}

const Error404: FunctionComponent<Props> = () => {
    const navigate = useNavigate()

    return (
        <div className="body">
            <div className="mars"></div>
            <img src={svg404} className="logo-404" />
            <img src={svgMeteor} className="meteor" />
            <p className="title">Oh no!!</p>
            <p className="subtitle">
                页面未找到<br/>要么请求一个不再在这里的页面。
            </p>
            <div align="center">
                <Button ghost type="" onClick={() => navigate(-1)}>返回上一页</Button>
                {/*<a className="btn-back" onClick={() => navigate(-1)}>返回上一页</a>*/}
            </div>
            <img src={svgAstronaut} className="astronaut" />
            <img src={svgSpaceship} className="spaceship" />
        </div>
    );
}

export default Error404
