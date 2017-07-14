import React, {Component} from 'react';
import Climber from './Climber';
import CLIMBERS from '../../stubs/climbers.json';
import './Climbers.css';

export default class Climbers extends Component {
    constructor() {
        super();
        this.state = {
            climbers: CLIMBERS,
        };
    }

    sortClimbers(param, toBiggest) {
        if(toBiggest == true){
             this.setState({climbers: this.state.climbers.sort((a, b) => {return b[param]-a[param]})})
        }
        else {
            this.setState({climbers: this.state.climbers.sort((a, b) => {return a[param]-b[param]})})
        }
    };

    render() {
        return (
            <div className="climbers">
                <div className="climbers-table-header">
                    <div>Name</div>
                    <div>City</div>
                    <div>
                        <span>Age</span>
                        <button onClick={() => this.sortClimbers('age', false)}>^</button>
                        <button onClick={() => this.sortClimbers('age', true)}>v</button>
                    </div>
                    <div>
                        <span>Number of awards</span>
                        <button onClick={() => this.sortClimbers('numberOfPrise', false)}>^</button>
                        <button onClick={() => this.sortClimbers('numberOfPrise', true)}>v</button>
                    </div>
                </div>
                {
                    this.state.climbers.map((el, index)=> {
                        return <Climber climber={el} key={index}/>
                    })
                }

            </div>
        );
    }
}