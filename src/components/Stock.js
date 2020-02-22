import React, { Component } from 'react'
import styles from './Stock.module.css'
import Context from '../Context/Context'
export function Stock() {    
        return (
            <Context.Consumer>
                {context => (
                <div>
                    <div className={styles.title}>   
                            <h1>
                            {context.stockData.symbol}
                            </h1>
                            <h5> { context.stockData.companyName } </h5>
                        </div>
                        <div className={styles.info}>
                            <h3>
                                <div className={context.stockData.iexRealtimePrice < context.stockData.open ? styles.downPrice : ''}> 
                                    ${context.stockData.iexRealtimePrice !== null && context.stockData.iexRealtimePrice !== 0 ? context.stockData.iexRealtimePrice : context.stockData.latestPrice}
                                </div>
                            </h3>
                            <h5>{ context.stockData.primaryExchange }</h5>
                        </div>
                        <div className={styles.openClosePrice}>
                            { context.stockData.open !== null ? 
                            <h5>Open: ${ context.stockData.open}</h5> : 
                            ''}
                            { context.stockData.close !== null ? 
                            <h5>Close: ${ context.stockData.close}</h5> : 
                            ''}
                        </div>
                        <div className={styles.stockNewsBox}>
                            <h3>News</h3>
                            <h4>{ context.stockNews.title} </h4>
                            <p>{ context.stockNews.description}</p>
                    </div>
                </div>
                )}
            </Context.Consumer>
    )
}

export default Stock
