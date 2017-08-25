import React, { Component } from 'react';
import Search from './Search/Search';
import WALLS from '../../stubs/walls.json';
import './Walls.css';

export default class Walls extends Component {
    render() {
        var walls = WALLS;
        return (
            <div>
                <Search items={walls}/>
            </div>
        )
    }
}