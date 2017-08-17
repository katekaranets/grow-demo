import React, {Component} from 'react';
import Climber from './Climber';
import AddClimber from './AddClimber';
import './Climbers.css';
import ClimberService from '../../services/ClimbersService';

export default class Climbers extends Component {
    constructor() {
        super();
        this.state = {
            climbers: ClimberService.load(),
        };
    }

    sortClimbers(param, toBiggest) {
        if(toBiggest){
             this.setState({climbers: this.state.climbers.sort((a, b) => {return b[param]-a[param]})})
        }
        else {
            this.setState({climbers: this.state.climbers.sort((a, b) => {return a[param]-b[param]})})
        }
    };

    createNewClimber(climber){
        let climbers = this.state.climbers;
        climbers.unshift(climber);
        this.setState({climbers});
        ClimberService.save(climbers);
    }

    deleteClimber(id) {
        let climbers = this.state.climbers;
        var index;
        climbers.forEach((el, i, arr)=>{
            if(el.id == id){
                index = i;
                return index;
            }
        });
        climbers.splice(index ,1);
        this.setState({climbers});
        ClimberService.save(climbers);
    }

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
                    <div>Action</div>
                </div>
                <AddClimber onAdd={climber => this.createNewClimber(climber)}/>
                {
                    this.state.climbers.map((el, index)=> {
                        return <Climber climber={el} key={index} id={el.id} onDelete={id => this.deleteClimber(id)}/>
                    })
                }
            </div>
        );
    }
}