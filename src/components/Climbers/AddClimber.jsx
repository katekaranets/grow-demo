import React, {Component} from 'react';
import './Climbers.css';

export default class AddClimber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            city: '',
            age: '',
            numberOfPrise: ''
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
            numberOfPrise: this.state.numberOfPrise
        };
        this.props.onAdd && this.props.onAdd(newClimber);
    }

    render() {
        return (
            <div className="add-climber">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.addClimber(e);
                }}>
                    <div>
                        <input className="new-climber-name" type="text" name="name" placeholder="name" value={this.state.name} onChange={(e) => {
                            this.handleChange(e)
                        }}/>
                        <input className="new-climber-city" type="text" name="city" placeholder="city" value={this.state.city} onChange={(e) => {
                            this.handleChange(e)
                        }}/>
                        <input className="new-climber-age" type="text" name="age" placeholder="age" value={this.state.age} onChange={(e) => {
                            this.handleChange(e)
                        }}/>
                        <input className="new-climber-prises" type="text" name="numberOfPrise" placeholder="number of awards"
                               value={this.state.numberOfPrise} onChange={(e) => {
                            this.handleChange(e)
                        }}/>
                    </div>
                    <div>
                        <button className="add-climber-button">Add</button>
                    </div>
                </form>
            </div>
        );
    }
}