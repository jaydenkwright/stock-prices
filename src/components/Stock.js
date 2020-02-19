import React, { Component } from 'react'
import styles from './Stock.module.css'
export class Stock extends Component {
    state = {
        isLoaded: false
    }
    
    componentDidUpdate(prevProps){
        if(this.props.data !== prevProps.data){
            
        }
    }

    componentDidMount(){
        console.log('mounted')
    }
    render() {
        return (
                <div>
                <div className={styles.title}>   
                        <h1>
                        {this.props.data.symbol}
                        </h1>
                        <h5> { this.props.data.companyName } </h5>
                    </div>
                    <div className={styles.info}>
                        <h3>
                            <div className={this.props.data.iexRealtimePrice < this.props.data.open ? styles.downPrice : ''}> 
                                ${this.props.data.iexRealtimePrice !== null && this.props.data.iexRealtimePrice !== 0 ? this.props.data.iexRealtimePrice : this.props.data.latestPrice}
                            </div>
                        </h3>
                        <h5>{ this.props.data.primaryExchange }</h5>
                    </div>
                    <div className={styles.openClosePrice}>
                        { this.props.data.open !== null ? 
                        <h5>Open: ${ this.props.data.open}</h5> : 
                        ''}
                        { this.props.data.close !== null ? 
                        <h5>Close: ${ this.props.data.close}</h5> : 
                        ''}
                    </div>
                    <div className={styles.stockNewsBox}>
                        <h3>News</h3>
                        <h4>{ this.props.news.title} </h4>
                        <p>{ this.props.news.description}</p>
                    </div>
            </div>
        )
    }
}

export default Stock
