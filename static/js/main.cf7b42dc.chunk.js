(this.webpackJsonpproject_5=this.webpackJsonpproject_5||[]).push([[0],[,,,,,,function(e,t,a){e.exports={title:"Stock_title__2Yh_U",info:"Stock_info__1mza7",downPrice:"Stock_downPrice__2jF9G",openClosePrice:"Stock_openClosePrice__39caN",stockNewsBox:"Stock_stockNewsBox__3qGbc"}},function(e,t,a){e.exports={App:"App_App__16ZpL",AppHome:"App_AppHome__2MbBr",searchBox:"App_searchBox__2iZoU",searchBar:"App_searchBar__3OgeZ"}},function(e,t,a){e.exports={infoBox:"Home_infoBox__3oj_7",title:"Home_title__1ks5w",info:"Home_info__2unDC",news:"Home_news__3oYsE"}},,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(10),s=a.n(c),r=(a(16),a(1)),i=a(2),l=a(4),p=a(3),u=a(5),m=(a(17),a(7)),d=a.n(m),h=a(6),f=a.n(h),_=Object(n.createContext)({data:[],news:[]}),k=(_.Provider,_.Consumer),v=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={isLoaded:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.data,e.data}},{key:"componentDidMount",value:function(){console.log("mounted")}},{key:"render",value:function(){var e=this;return o.a.createElement(k,null,(function(t){t.data,t.news;return o.a.createElement("div",null,o.a.createElement("div",{className:f.a.title},o.a.createElement("h1",null,e.props.data.symbol),o.a.createElement("h5",null," ",e.props.data.companyName," ")),o.a.createElement("div",{className:f.a.info},o.a.createElement("h3",null,o.a.createElement("div",{className:e.props.data.iexRealtimePrice<e.props.data.open?f.a.downPrice:""},"$",null!==e.props.data.iexRealtimePrice&&0!==e.props.data.iexRealtimePrice?e.props.data.iexRealtimePrice:e.props.data.latestPrice)),o.a.createElement("h5",null,e.props.data.primaryExchange)),o.a.createElement("div",{className:f.a.openClosePrice},null!==e.props.data.open?o.a.createElement("h5",null,"Open: $",e.props.data.open):"",null!==e.props.data.close?o.a.createElement("h5",null,"Close: $",e.props.data.close):""),o.a.createElement("div",{className:f.a.stockNewsBox},o.a.createElement("h3",null,"News"),o.a.createElement("h4",null,e.props.news.title," "),o.a.createElement("p",null,e.props.news.description)))}))}}]),t}(n.Component),E=a(8),y=a.n(E),w=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={data:[],news:[],isLoaded:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cloud.iexapis.com/stable/stock/".concat(this.props.stockName,"/quote?token=").concat("pk_7271f8ad06ff45fd81d0fb214e0a3070")).then((function(e){return e.json()})).then((function(t){e.setState({data:t,isLoaded:!0})})),fetch("https://newsapi.org/v2/everything?q=".concat(this.props.stockName,"&apiKey=").concat("74795ff965de424ca0a448b202f0e8a5")).then((function(e){return e.json()})).then((function(t){e.setState({news:{title:t.articles[0].title,description:t.articles[0].description}})})),document.body.style.backgroundColor="#f67280"}},{key:"componentWillUnmount",value:function(){document.body.style.backgroundColor=null}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:y.a.infoBox},o.a.createElement("div",{className:!0===this.state.isLoaded?y.a.title:""},o.a.createElement("h3",null,this.state.data.symbol)),o.a.createElement("h4",null,o.a.createElement("div",{className:!0===this.state.isLoaded?y.a.info:""},o.a.createElement("p",null,this.state.data.companyName),o.a.createElement("p",null,"$".concat(this.state.data.latestPrice)),o.a.createElement("p",null,this.state.data.primaryExchange))),o.a.createElement("div",{className:!0===this.state.isLoaded?y.a.news:""},o.a.createElement("h1",null,this.state.news.title),o.a.createElement("p",null,this.state.news.description))))}}]),t}(n.Component),b=Object(n.createContext)({stockData:[],query:"",stockNews:[],isSearching:!1,isLoading:!1}),g=b.Provider,N=(b.Consumer,function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={stockData:[],query:"",stockNews:[],isSearching:!1,isLoading:!1},a.onChange=function(e){return a.setState({query:e.target.value})},a.search=function(e){"Enter"===e.key&&fetch("https://cloud.iexapis.com/stable/stock/".concat(a.state.query,"/quote?token=").concat("pk_7271f8ad06ff45fd81d0fb214e0a3070")).then((function(e){return e.json()})).then((function(e){a.setState({isLoading:!1,stockData:e,isSearching:!0}),fetch("https://newsapi.org/v2/everything?q=".concat(a.state.stockData.companyName,"&apiKey=").concat("74795ff965de424ca0a448b202f0e8a5")).then((function(e){return e.json()})).then((function(e){a.setState({stockNews:{title:e.articles[0].title,description:e.articles[0].description}})}))}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(g,{value:this.state},o.a.createElement("div",{className:!1===this.state.isSearching?d.a.AppHome:d.a.App},o.a.createElement("div",{className:d.a.searchBox},o.a.createElement("input",{type:"text",className:d.a.searchBar,placeholder:"Search for a stock symbol... ex: AAPL, TSLA, FB...",value:this.state.query,onKeyPress:this.search,onChange:this.onChange})),!1===this.state.isSearching?o.a.createElement("div",null,o.a.createElement(w,{stockName:"goog"}),o.a.createElement(w,{stockName:"fb"}),o.a.createElement(w,{stockName:"snap"})):"",!0===this.state.isSearching?o.a.createElement(v,{data:this.state.stockData,news:this.state.stockNews}):""))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.cf7b42dc.chunk.js.map