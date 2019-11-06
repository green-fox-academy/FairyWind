import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      delay: 0,
      news: [],
      loading: true
    };
  }

  handleChange(e) {
    let val = e.target.value;
    if (val !== this.state.input) {
      this.setState({ input: val });
    }
  }

  search() {
    fetch(`https://newsapi.org/v2/top-headlines?q=${this.state.input}&apiKey=f5bdda68a887445bb4d26831177a0efc`)
      .then(response => response.json())
      .then(data => {
        let newsTitle = [];
        for (let i = 0; i < data.articles.length; i++) {
          newsTitle[i] = data.articles[i].title;
        }
        this.setState({
          news: newsTitle,
          loading: false
        })
      })
  }

  componentDidUpdate(prevState) {
    if (this.state.input !== prevState.input && this.state.input !== '') {
      this.search(this.state.input);
    }
  }

  render() {
    return (
      <>
        <input type="text" onChange={this.handleChange.bind(this)} defaultValue={this.state.input}></input>
        <ul>{this.state.news.map((element) => {
          return (
            <label><li key={element}></li>{element}</label>
          )
        })}</ul>
      </>
    )
  }
}


export default App;
