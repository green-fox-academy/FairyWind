import React from 'react';
import './App.css';
import bin from './icon/bin.svg'
import tick from './icon/tick.svg'
import tickClicked from './icon/tick-clicked.svg'

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'home',
      todo: [],
      input: ''
    };

    this.completed = false;
  }

  checkLength(input) {
    let minLength = 3;
    if (input.value.length < minLength) {
      alert("The input needs to be at least 3 character long.")
      return false;
    }
    return true;
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  addTodo() {
    let input = document.querySelector('input');
    if (this.checkLength(input)) {
      this.setState({ todo: [...this.state.todo, {text: input.value}] });
    }
  }

  deleteTodo(e) {
    let tempArr = [...this.state.todo];
    let index = tempArr.indexOf(e.target.dataset.value);
    if (index !== -1) {
      tempArr.splice(index, 1);
      this.setState({ todo: tempArr });
    }
  }

  changeState(e) {
    if (!this.completed) {
      e.target.src = tickClicked;
      this.completed = true;
    } else {
      e.target.src = tick;
      this.completed = false;
    }
  }

  myFetch() {
    fetch("https://frozen-harbor-48788.herokuapp.com/api/todos")
      .then(response => response.json())
      .then(data => this.setState({ todo: data }))
  }

  componentDidMount() {
    this.myFetch();
  }

  render() {
    return (
      <div>
        <h1 className="heading">TODOS</h1>
        <input type="text" onChange={this.handleChange.bind(this)} defaultValue={this.state.input}></input>
        <button className="button-text" onClick={this.addTodo.bind(this)}>Add</button>
        <ul className="todo-item">{this.state.todo.map((element) => {
          return (
            <li>
              <label><p key={element}></p>{element.text}</label>
              <span>
                <img src={bin} alt="bin" className="icon" onClick={this.deleteTodo.bind(this)} data-value={element}></img>
                <img src={tick} alt="tick" className="icon" onClick={this.changeState.bind(this)} data-value={element}></img>
              </span>
            </li>
          )
        })}</ul>
      </div>
    )
  }
}