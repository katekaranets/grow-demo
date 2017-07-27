import React, {Component} from 'react';
import './Climbers.css';

export default class Climber extends Component {
    render() {
        var item = this.props.climber;

        return (
            <div className="climber">
                <div>{item.name} </div>
                <div>{item.city}</div>
                <div>{item.age}</div>
                <div>{item.numberOfPrise}</div>
                <div><button>Delete</button></div>
            </div>
        )
    }
}