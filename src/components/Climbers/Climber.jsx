import React, {Component} from 'react';
import './Climbers.css';

export default class Climber extends Component {
    constructor(props) {
        super(props);
    }
    delete(){
        this.props.onDelete && this.props.onDelete(this.props.id);
    }
    render() {
        var item = this.props.climber;

        return (
            <div className="climber">
                <div>{item.name} </div>
                <div>{item.city}</div>
                <div>{item.age}</div>
                <div>{item.numberOfPrise}</div>
                <div><button onClick={(e) => {this.delete(e)}}>Delete</button></div>
            </div>
        )
    }
}