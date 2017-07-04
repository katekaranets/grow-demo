import React, { Component } from 'react';
import Wall from './Wall';
import WALLS from '../../stubs/walls.json';
import './Walls.css';

export default class Walls extends Component {
    render() {
        return (
            <div className="walls">
                <input className="search-wall" type="text"/>
                <ol>{
                    WALLS.map((el, index)=>{
                        return <Wall name={el.name}
                                     wall={el}
                                     index={index}
                                     key={index} />
                    })
                }
                </ol>
            </div>
        )
    }
}