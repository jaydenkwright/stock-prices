import React, { Component } from 'react'
import styles from './Home.module.css'

class Home extends Component {
    // Set initial states
    state = {
        data: [],
        news: [],
        isLoaded: false,
    }
    componentDidMount(){
        // Fetches the stock info from iex cloud API
        fetch(`https://cloud.iexapis.com/stable/stock/${this.props.stockName}/quote?token=${process.env.REACT_APP_STOCK_KEY}`)
            .then(res => res.json())
            .then(result => {
                // Sets data into state
                this.setState({
                    data: result,
                    isLoaded: true
                })
            });
        // Fetches data from News Api
        fetch(`https://newsapi.org/v2/everything?q=${this.props.stockName}&apiKey=${process.env.REACT_APP_NEWS_KEY}`)
            .then(res => res.json())
            .then(result => {
                // Sets data into state
                this.setState({
                    news: {
                        title: result.articles[0].title,
                        description: result.articles[0].description
                    }
                })
            });
                // Sets initial background color
                document.body.style.backgroundColor = "#f67280";
    }

    componentWillUnmount(){
        // Changes background to null when the component unmounts
        document.body.style.backgroundColor = null;
    }

render(){

        return (
            
            <div>
                <div className={styles.infoBox}>
                    <div className={this.state.isLoaded === true ? styles.title : ''}>
                        <h3>{this.state.data.symbol}</h3>
                    </div>
                    <h4>
                        <div className={this.state.isLoaded === true ? styles.info: ''}>
                            <p>{this.state.data.companyName}</p>
                            <p>{this.state.isLoaded === true ? `$${this.state.data.latestPrice}` : ''}</p>
                            <p>{this.state.data.primaryExchange}</p>
                        </div>
                    </h4>
                    <div className={this.state.isLoaded === true ? styles.news : ''}>
                        <h1>{this.state.news.title}</h1>
                        <p>{this.state.news.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Home