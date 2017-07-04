import React, { Component } from 'react';
import './Comment.css';

export default class CreateComment extends Component {
    render() {
        return (
            <div className="create-comment">
                <input type="text"/>
                <input type="submit"/>
            </div>
        )
    }
}