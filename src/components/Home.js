import React from 'react'

export default function Home() {
    let newsArray = []
    fetch(`https://newsapi.org/v2/everything?q=apple&apiKey=${process.env.REACT_APP_NEWS_KEY}`)
        .then(res => res.json())
        .then(result => {
          newsArray.keys(result)
        })
    console.log(newsArray.keys())
    return (
        <div>
                <div className="infoBox home">
                    <div className="title">
                        <h3>Facebook</h3>
                    </div>
                    <h4>
                        <div className="info">
                            $451.60
                        </div>
                    </h4>
                </div>
        
        </div>
    )
}
 