import React, { Component } from 'react'
import Walls from './components/Walls/Walls';
import Climbers from './components/Climbers';
import Competitions from './components/Competitions';
import Questions from './components/Questions';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            route: window.location.hash.substr(1)
        }
    }
    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            })
        })
    }
    render() {
        let Child

        switch (this.state.route) {
            case '/walls': Child = Walls; break;
            case '/climbers': Child = Climbers; break;
            case '/competitions': Child = Competitions; break;
            case '/questions': Child = Questions; break;
            default: Child = Walls;
        }

        return (
            <div>
                <header>
                    <h1>Climbing</h1>
                    <ul className="header-navigation">
                        <li><a href='#/walls'>Walls</a></li>
                        <li><a href='#/climbers'>Climbers</a></li>
                        <li><a href='#/competitions'>Competitions</a></li>
                        <li><a href='#/questions'>Questions</a></li>
                    </ul>
                </header>
                <Child/>
            </div>
        )

    }
}