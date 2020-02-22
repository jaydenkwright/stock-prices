import React from 'react';
import './App.css';
import styles from './App.module.css'
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
            isLoading: false,
            stockData: result,
            isSearching: true,
          })
          // Fetches news data from newsapi.org based on the company name
          fetch(`https://newsapi.org/v2/everything?q=${this.state.stockData.companyName}&apiKey=${process.env.REACT_APP_NEWS_KEY}`)
            .then(res => res.json())
            .then(result => {
              // sets the news data into state
              this.setState({
                // news data object
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
      // class changes depending on weather the user is searching or not
          <div className={this.state.isSearching === false ? styles.AppHome : styles.App}>
            <div className={styles.searchBox}>
            <input 
              type="text"
              className={styles.searchBar}
              placeholder="Search for a stock symbol... ex: AAPL, TSLA, FB..."
              value={this.state.query}
              onKeyPress={this.search}
              onChange={this.onChange}
            />
            </div>
            {//  Detemines whether or not to mount the Home or Stock components   
            }
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
