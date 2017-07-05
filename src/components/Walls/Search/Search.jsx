import React, {Component} from 'react';
import Wall from '../Wall';
import WALLS from '../../../stubs/walls.json';
import './../Walls.css';

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {searchString: ''};
    }

    handleChange(e) {
        this.setState({searchString: e.target.value});
    };

    render() {
        var items = this.props.items;
        var searchString = this.state.searchString.trim().toLowerCase();

        if (searchString.length > 0) {
            items = items.filter(function (el) {
                return el.name.toLowerCase().match(searchString);
            });
        }

        return (
            <div className="walls">
                <input className="search-wall" type="text" value={this.state.searchString} onChange={(e) => this.handleChange(e)} placeholder="Enter the name..."/>
                <ol>{
                    items.map((el, index)=> {
                        return <Wall name={el.name}
                                     wall={el}
                                     index={index}
                                     key={index}/>
                    })
                }
                </ol>
            </div>
        )
    };
};
