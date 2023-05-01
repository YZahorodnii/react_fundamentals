import {Component} from "react";

class Comment extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {id, name, body} = this.props.comment;
        return (
            <div>
                <div>id:{id}</div>
                <div>name:{name}</div>
                <div>body:{body}</div>
                <br/>
            </div>
        )
    }
}

export {Comment}