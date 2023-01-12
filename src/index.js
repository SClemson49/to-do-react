import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';

const toDos=['Listen to Meshuggah', 'Drink beer', 'Procrastinate', 'Stop some pucks']

ReactDOM.render(
  <MyList theList={toDos}/>,
  document.getElementById('root')
)
