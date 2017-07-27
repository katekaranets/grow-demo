import React, {Component} from 'react';
import Climber from './Climber';
import './Climbers.css';

export default class AddClimber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            city: '',
            age: undefined,
            numberOfAwards: undefined
        };
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    addClimber() {
        let newClimber = {
            name: this.state.name,
            city: this.state.city,
            age: this.state.age,
            numberOfAwards: this.state.numberOfAwards
        }

        this.props.climbers.push(newClimber);
        // localStorage.setItem('climbers', JSON.stringify(this.state.climbers));
    }

    render() {
        return (
            <div className="add-climber">
                <form>
                    <input type="text" name="name" placeholder="name" value={this.state.name} onChange={(e) => {
                        this.handleChange(e)
                    }}/>
                    <input type="text" name="city" placeholder="city" value={this.state.city} onChange={(e) => {
                        this.handleChange(e)
                    }}/>
                    <input type="number" name="age" placeholder="age" value={this.state.age} onChange={(e) => {
                        this.handleChange(e)
                    }}/>
                    <input type="number" name="numberOfAwards" placeholder="number of awards"
                           value={this.state.numberOfAwards} onChange={(e) => {
                        this.handleChange(e)
                    }}/>
                    <button onClick={() => {
                        this.addClimber()
                    }}></button>
                </form>
            </div>
        );
    }
}