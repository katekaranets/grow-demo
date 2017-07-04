import React, { Component } from 'react';
import Wall from './Wall';
import WALLS from '../../stubs/walls.json';
import './Walls.css';

export default class Search extends Component {

    getInitialState(){
        return { searchString: '' };
    };

    handleChange(e){
        this.setState({searchString:e.target.value});
    };

    render() {

        var libraries = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase();


        if(searchString.length > 0){

            // We are searching. Filter the results.

            libraries = libraries.filter(function(l){
                return l.name.toLowerCase().match( searchString );
            });

        }

        return <div>
            <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />

            <ul>

                { libraries.map(function(l){
                    return <li>{l.name} <a href={l.url}>{l.url}</a></li>
                }) }

            </ul>

        </div>;

    };

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
    };
};
