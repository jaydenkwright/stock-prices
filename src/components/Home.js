import React, { Component } from 'react'

class Home extends Component {
    state = {
        data: [],
        news: []
    }
    componentDidMount(){
        fetch(`https://cloud.iexapis.com/stable/stock/goog/quote?token=${process.env.REACT_APP_STOCK_KEY}`)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    data: result
                })
            });
        fetch(`https://newsapi.org/v2/everything?q=Google&apiKey=${process.env.REACT_APP_NEWS_KEY}`)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    news: {
                        title: result.articles[0].title,
                        description: result.articles[0].description
                    }
                })
            });
        
    }
render(){
        return (
            <div>
                <div className="title home">
                    <h3>Hot Stocks</h3>
                </div>
                <div className="infoBox home">
                    <div className="title home">
                        <h3>{this.state.data.symbol}</h3>
                    </div>
                    <h4>
                        <div className="info home">
                            <p>{this.state.data.companyName}</p>
                            <p>${this.state.data.latestPrice}</p>
                            <p>{this.state.data.primaryExchange}</p>
                        </div>
                    </h4>
                    <div className="news home">
                        <h1>{this.state.news.title}</h1>
                        <p>{this.state.news.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Home