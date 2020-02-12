import React, { useState} from 'react';
import './App.css';
import Stock from './components/Stock'
import Home from './components/Home'
import config from './config'
console.log(process.env.REACT_APP_STOCK_KEY)

class App extends React.Component {
  stockkey = config.STOCK_KEY
  state = {
    stockData: [],
    query: '',
    stockNews: [],
    isSearching: false,
    isLoaded: false
  }
  onChange = (e) => this.setState({ query: e.target.value });
  search = evt => {
    if( evt.key === "Enter"){
      fetch(`https://cloud.iexapis.com/stable/stock/${this.state.query}/quote?token=${process.env.REACT_APP_STOCK_KEY}`)
        .then(res => res.json())
        .then(result => {
          this.setState({
            isLoaded: true,
            stockData: result,
            isSearching: true
          })
          fetch(`https://newsapi.org/v2/everything?q=${this.state.stockData.companyName}&apiKey=${process.env.REACT_APP_NEWS_KEY}`)
            .then(res => res.json())
            .then(result => {
              this.setState({
                stockNews: {
                title: result.articles[0].title,
                description: result.articles[0].description
              }
              })
            });
        });
    }
  }

  render(){
    return (
      <div className={this.state.isSearching === false ? "App home" : "App"}>
          <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search for a stock symbol... ex: AAPL, TSLA, FB..."
            value={this.state.query}
            onKeyPress={this.search}
            onChange={this.onChange}
          />
          </div>
          {this.state.isSearching === false ? 
          <Home /> 
          : ''}
          {this.state.isSearching === true ? 
          <Stock data={this.state.stockData} news={this.state.stockNews}/> 
          : ''}
      </div>
    );
  }
}


export default App;
