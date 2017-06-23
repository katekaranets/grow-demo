import React, { Component } from 'react';
import Item from './Item';
import './List.css';

class List extends Component {

  constructor (props){
    super(props);
    this.state = {items: []};
  }
   shouldComponentUpdate(nextProps, nextState) {
    if (this.props.items.length !== nextProps.items.length) {
      return true;
    }
    if (this.state.items.length !== nextState.items.length) {
      return true;
    }
    return false;
  }

  componentWillReceiveProps(nextProps){
    this.state = {items: nextProps.items};
  }

  handleChange = (event) => {
    let query = event.target.value.toLowerCase();
    let filteredItems = this.props.items.filter(
      (element)=>
        {
          return element.name.toLowerCase().indexOf(query) !== -1
        }
      );
      
    this.setState({items: filteredItems});
  }

  renderItems () {
    let items = this.state.items;

    if(items.length !== 0) {
      return items.map(item => 
              <Item  
                image={item.avatar} 
                area={item.subject}
                key={item._id}
              >
                {item.name}
              </Item>
            )
    }
    else {
      return (<div>There are no items to display</div>);
    }
  }

  render() {
    return (
        <div className="speaker-list">
        
        <input name="speakerName" id="searchField" onChange={this.handleChange} placeholder="Start typing" type="text" />

          {
            this.renderItems()
          }

        </div>
    );
  }
}

export default List;
