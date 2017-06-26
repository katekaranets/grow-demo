import React, { Component } from 'react';

export default class Comment extends Component {
    render() {
        return (
            <div>
                <b>{this.props.author}</b>
                <i>{this.props.content}</i>
            </div>
        )
    }
}