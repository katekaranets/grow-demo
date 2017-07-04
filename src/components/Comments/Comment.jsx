import React, { Component } from 'react';
import './Comment.css';

export default class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <div className="comment-author">
                    <b>{this.props.author}</b>
                </div>
                <div className="comment-content">
                    {this.props.content}
                </div>
            </div>
        )
    }
}