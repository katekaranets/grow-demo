import React, { Component } from 'react';
import Wall from './Wall';
import WALLS from '../../stubs/walls.json';


export default class Walls extends Component {
    render() {
        return (
            <div>
                <ol>{
                    WALLS.map((el, index)=>{
                        return <Wall name={el.name} index={index} key={index} />
                    })
                }
                </ol>
            </div>
        )
    }
}