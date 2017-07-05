import React, {Component} from 'react';
import Comment from '../Comments/Comment';
import COMMENTS from '../../stubs/comments.json';
import CreateComment from '../Comments/CreateComment';

export default class Wall extends Component {
    constructor() {
        super();
        this.state = {
            opened: false,
        };
    }
    toggleWallInfo(e) {
        e.target.parentNode.classList.toggle('wall-info-displayed');
    }
    render() {
        return (
            <li className="wall">
                <div>
                    <h4 className="wall-name" onClick={(e)=> this.toggleWallInfo(e)}>{this.props.name}</h4>
                    <div className="wall-info">
                        <div>
                            <span>City: <span>{this.props.wall.city}</span></span>
                            <span>Working hours: <span>{this.props.wall.startWork}
                                - {this.props.wall.finishWork}</span></span>
                            <span>Height of wall: <span>{this.props.wall.wallHeight}</span></span>
                            <span>Address: <span>{this.props.wall.address}</span></span>
                            <span>Cost: <span>{this.props.wall.cost}</span></span>
                        </div>
                        <p className="wall-description">{this.props.wall.description}</p>
                    </div>
                </div>
                {
                    COMMENTS.map((el, index)=> {
                        if (el.wallIndex === this.props.index) {
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