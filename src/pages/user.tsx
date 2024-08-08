import {Component} from 'react'
import { useNavigate } from "react-router-dom";
import {Button} from 'antd';

interface Props {
    // title: string;
}

interface State {
    // count: number;
}

class User extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            // count: 0
        };
    }

    handleClick = () => {
        // this.setState({count: this.state.count + 1})
    }

    render() {
        // const {title} = this.props;
        // const {count} = this.state;

        return (
            <>
                <div>
                    <Button type="primary">User with me</Button>

                </div>

            </>
        );
    }
}

export default User
