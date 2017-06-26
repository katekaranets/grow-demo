import React, {Component} from 'react';
import Comment from '../Comments/Comment';
import COMMENTS from '../../stubs/comments.json';
import CreateComment from '../Comments/CreateComment';

export default class Wall extends Component {
    render() {
        return (
            <li>
                <div>{this.props.name}</div>
                {
                    COMMENTS.map((el, index)=> {
                        if (el.wallIndex == this.props.index) {
                            return (
                                <div>
                                    <Comment content={el.content} author={el.author} key={index}/>
                                </div>
                            )
                        }
                    })
                }
                <CreateComment />
            </li>
        )
    }
}