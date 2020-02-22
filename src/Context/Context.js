import React from 'react'

export default React.createContext({
    stockData: [],
    query: '',
    stockNews: [],
    isSearching: false,
    isLoading: false,
})