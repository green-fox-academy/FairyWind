import React from 'react';
import './App.css';
import bin from './bin.svg'
import tick from './tick.svg'

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'home',
      todo: ['Get up', 'Do some work']
    };
  }

  checkLength(input) {
    let minLength = 3;
    if (input.value.length < minLength) {
      alert("The input needs to be at least 3 character long.")
    }
  }

  addTodo() {
    let input = document.querySelector('input');
    if (input.value.length < 3) {
      alert("The input needs to be at least 3 character long.")
    } else {
      this.setState({
        todo: [input.value]
      })
    }
  }

  render() {
    return (
      <div>
        <h1 className="heading">TODOS</h1>
        <input type="text" defaultValue=""></input>
        <button className="button-text" onClick={this.addTodo}>Add</button>
        <ul className="todo-item">{this.state.todo.map(element => {
          return (
            <>
              <label><li key={element}></li>{element}</label>
              <span>
                <img src={bin} alt="bin" className="icon"></img>
                <img src={tick} alt="tick" className="icon"></img>
              </span>
            </>
          )
        })}</ul>
      </div>
    )
  }
}