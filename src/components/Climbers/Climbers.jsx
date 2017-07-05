import React, {Component} from 'react';
import Climber from './Climber';
import CLIMBERS from '../../stubs/climbers.json';
import './Climbers.css';

export default class Climbers extends Component {
    sort(param, toBiggest) {
        var climbers = CLIMBERS;

        switch(param) {
            case "age": {
                if(toBiggest === true){
                    // return climbers.sort((a, b)=> {return a.age - b.age })
                } else {
                    console.log('false');
                }
                break;
            }
            case "awards": {
                if(toBiggest === true){
                    console.log('true');
                } else {
                    console.log('false');
                }
                break;
            }
            default: {
                return climbers;
                break;
            }
        }
    };

    render() {

        var climbers = this.sort();

        return (
            <div className="climbers">
                <div className="climbers-table-header">
                    <div>Name</div>
                    <div>City</div>
                    <div>
                        <span>Age</span>
                        <button onClick={() => this.sort('age', false)}>^</button>
                        <button onClick={() => this.sort('age', true)}>v</button>
                    </div>
                    <div>
                        <span>Number of awards</span>
                        <button onClick={() => this.sort('awards', false)}>^</button>
                        <button onClick={() => this.sort('awards', true)}>v</button>
                    </div>
                </div>
                {
                    climbers.map((el, index)=> {
                        return <Climber climber={el} key={index}/>
                    })
                }

            </div>
        );
    }
}