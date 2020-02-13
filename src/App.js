import React, { useState} from 'react';
import './App.css';
import Stock from './components/Stock'
import Home from './components/Home'

class App extends React.Component {
// Set default states
  state = {
    stockData: [],
    query: '',
    stockNews: [],
    isSearching: false,
    isLoading: false,
  }
  // Function to set text entered into the search box to the query state
  onChange = (e) => this.setState({ query: e.target.value });
  search = evt => {
    // Checks if "enter" button has been pressed from search box
    if( evt.key === "Enter"){
      // Fetches stock data from Iexcloud API using the query state
      fetch(`https://cloud.iexapis.com/stable/stock/${this.state.query}/quote?token=${process.env.REACT_APP_STOCK_KEY}`)
        .then(res => res.json())
        .then(result => {
          // Sets the stockdata into state
          this.setState({
            isLoading: true,
            stockData: result,
            isSearching: true,
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
          <div>
            <Home stockName="goog" />
            <Home stockName="fb" />
            <Home stockName="snap" /> 
          </div>
          : ''}
          {this.state.isSearching === true ? 
          <Stock data={this.state.stockData} news={this.state.stockNews}/> 
          : ''}
      </div>
    );
  }
}


export default App;
