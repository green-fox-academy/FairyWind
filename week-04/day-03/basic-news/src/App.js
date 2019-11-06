import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch("http://slowwy.greenfox.academy/delay/3000/url/https://newsapi.org/v2/top-headlines?country=cn&apiKey=f5bdda68a887445bb4d26831177a0efc")
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

  render() {
    if (this.state.loading) {
      return <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    }
    return (
      <ul>{this.state.news.map((element) => {
        return (
          <label><li key={element}></li>{element}</label>
        )
      })}</ul>
    )
  }
}


export default App;
