import React, { Component } from 'react'

export class Stock extends Component {

    stockTitle = {
        paddingTop: "0em",
        fontFamily: 'Montserrat',
        fontSize: "3em",
        color: "#e0e0e0",
        transition: "0.4s ease-in",
        marginBottom: "1em",
    }

    stockInfo = {
        fontFamily: 'Montserrat',
        fontSize: "3em",
        color: "#e0e0e0",
        margin: "0em"
    }

    stockNewsBox = {
        margin: "1em",
        backgroundColor: "#39c9a0",
        borderRadius: "8px 8px 8px 8px",
        color: "#e0e0e0",
        padding: "0.5em",
        transition: "0.9s ease-out"
    }

    openClosePrice = {
        padding: "1em",
        fontFamily: 'Montserrat',
        fontSize: "2em",
        color: "#e0e0e0",
        margin: "0em"
    }

    render() {
        return (
            <div>
                <div className="title">
                        <h1>{this.props.data.symbol}</h1>
                        <h5> { this.props.data.companyName } </h5>
                    </div>
                    <div className="info">
                        <h3>
                            <div className={this.props.data.iexRealtimePrice < this.props.data.open ? 'downPrice' : ''}> 
                                ${this.props.data.iexRealtimePrice !== 0 ? this.props.data.iexRealtimePrice : this.props.data.latestPrice}
                            </div>
                        </h3>
                        <h5>{ this.props.data.primaryExchange }</h5>
                    </div>
                    <div style={ this.openClosePrice }>
                        { this.props.data.open !== null ? 
                        <h5>Open: ${ this.props.data.open}</h5> : 
                        ''}
                        { this.props.data.close !== null ? 
                        <h5>Close: ${ this.props.data.close}</h5> : 
                        ''}
                    </div>
                    <div style={this.stockNewsBox}>
                        <h3>News</h3>
                        <h4>{ this.props.news.title} </h4>
                        <p>{ this.props.news.description}</p>
                    </div>
            </div>
        )
    }
}

export default Stock
