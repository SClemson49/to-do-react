
import React, { Component } from 'react';
import './App.css'
import ListItem from './ListItem';

class MyList extends Component {
  state={
    taskArray: this.props.theList
  }
  clearList = () => {
    this.setState( {
      taskArray: []
    })
  }
  render() {
    const todoItems = this.state.taskArray.map((item, idx) => {
      return <ListItem task={item} key={idx} />
  })
    return (
      <div>
      <h1> Things I should stop procrastinating:</h1>
      <ul>
        {todoItems}
      </ul>
      <button onClick={this.clearList}>Finished the List</button>
    </div>
    )
  }
}

export default MyList
