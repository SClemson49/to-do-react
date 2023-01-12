
import React, { Component } from 'react';
import './App.css'
import ListItem from './ListItem';

class MyList extends Component {
  state={
    taskArray: this.props.theList,
    newItem: '',
  }
  handleChange = e => {
    this.setState({
      newItem: e.target.value
    })
  }
  addItem = e => {
    e.preventDefault()
    this.setState(prevState => {
      return{
        taskArray: [
          ...prevState.taskArray, prevState.newItem
        ],
        newItem:''
      }
    })
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
      <form onSubmit={this.addItem}>
        <label htmlFor='newItem'>New Item:</label>
        <input 
        type='type'
        placeholder='New Item...'
        onChange={this.handleChange}
        value={this.state.newItem}
        />
        <button type='submit'>Submit</button>
      </form>
      <ul>
        {todoItems}
      </ul>
      <button onClick={this.clearList}>Finished the List</button>
    </div>
    )
  }
}

export default MyList
