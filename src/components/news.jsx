import React from 'react';
import NewsData from '../assets/data/Newzdata.json';
import '../css/news.css';
import Toggle from 'react-toggle'
import '../css/toggle.css';
import PositiveIndicator from "../assets/media/indicator/positive.png";
import NegativeIndicator from "../assets/media/indicator/negative.png";

export default class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = { search: '', ipoToggle: false,industry:null, filteredData: NewsData, timePeriod:'all',
      tradingTime : "", spacNews : false, upward : "", fiveUp : "", primeNews : "", recentChange : ""
    };
    this.handleIPO = this.handleIPO.bind(this);
  }
  
  onchange = (e) => {
    this.setState({ search: e.target.value });
  };
  handleIPO = event => {
    this.setState({
      ipoToggle: !this.state.ipoToggle      
    })
  };
  handleSPAC = event => {
    this.setState({
      spacNews: !this.state.spacNews      
    })
  };
  handleIndustryChange = event => {
    this.setState({ industry: event.target.value });
  };
  handleChangeTimePeriod = event => {
    this.setState({ timePeriod : event.target.id })
  };
  handleChangeTradingTime = event => {
    this.setState({ tradingTime : event.target.id })
  };
  handleUpwardMoment = event => {
    this.setState({
      upward: !this.state.upward      
    })
  };
  handleFiveUpChange = event => {
    this.setState({
      fiveUp: !this.state.fiveUp      
    })
  };
  handlePrime = event => {
    this.setState({
      primeNews: !this.state.primeNews      
    })
  };
  handleRecentChange = event => {
    this.setState({
      recentChange: !this.state.recentChange      
    })
  };
  getUnique(arr, comp) {
    const unique = arr
      //store the comparison values in array
      .map(e => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter(e => arr[e])
      .map(e => arr[e]);

    return unique;
  };
  componentDidMount() {} 

  render() {
    //const { search } = this.state.search;
    //const uniqueIndustry = this.getUnique(NewsData, "Sector");
    let filteredData = NewsData;
    if(this.state.search){
        filteredData = filteredData.filter((data) => {
          return (
            data.CompanyName.toLocaleLowerCase().indexOf( 
              this.state.search.toLocaleLowerCase()
            ) !== -1
          );
        });
    }
    if(this.state.ipoToggle){
      filteredData = filteredData.filter((data) => {
        return (
          data.isIPO===true
        );
      });
    }else{
      filteredData = filteredData.filter((data) => {
        return (
          data
        );
      });
    }
    if(this.state.spacNews){
      filteredData = filteredData.filter((data) => {
        return (
          data.Industry==="Shell companies"
        );
      });
    }else{
      filteredData = filteredData.filter((data) => {
        return (
          data
        );
      });
    }
    if(this.state.timePeriod != null){
      var date = new Date();
      var today = date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear();
      if(this.state.timePeriod === "all"){
        filteredData = filteredData.filter((data) => {
          return (
            data
          );
        }); 
      }else {
        filteredData = filteredData.filter((data) => {          
            return (
              data.PubDate.split(" ")[0] === today
            );
        });
      }
    }
    if(this.state.industry !== null && this.state.industry !== ''){
      filteredData = filteredData.filter((data) => {
        return (
        data.Industry === this.state.industry
        );
      });
    }

    if(this.state.upward){
      filteredData = filteredData.filter((data) => {
        return (
          data.PercentChange > 0
        );
      });
    }

    if(this.state.fiveUp){
      filteredData = filteredData.filter((data) => {
        return (
          data.PercentChange > 5
        );
      });
    }
    if(this.state.primeNews){
      filteredData = filteredData.filter((data) => {
        return (
          data.HotKeyword != null
        );
      });
    }

    if(this.state.recentChange){
      filteredData = filteredData.filter((data) => {
        return (
          data.PercentChangeSinceLast > 0 && Math.sign(data.PercentChangeSinceLast)
        );
      });
    }

    return (
      <div className='container'>
        <div>
          <div>
          <input
              type='text' 
              className="input form-control filters filterMargin" 
              style = {{width:200}}
              placeholder='Search'
              onChange={this.onchange}
            />
          </div>
          <div className='form-inline'>
            {
            // Radio button for Time Period
            }
            <label className = "filters filterMarginSmall">All</label>
            <input type="radio" id="all"className="filters filterMarginSmall" value={this.state.timePeriod} onChange={this.handleChangeTimePeriod} name="time-period" />
            <label className = "filters filterMarginSmall">Today</label>
            <input type="radio" id="today"className="filters filterMarginSmall" value={this.state.timePeriod} onChange={this.handleChangeTimePeriod} name="time-period" />

            {
            // Radio button for Trading Time
            }
            <label className = "filters filterMargin">After Hours</label>
            <input type="radio" id="after"className="filters filterMarginSmall" value={this.state.tradingTime} onChange={this.handleChangeTradingTime} name="tradingTime" />
            <label className = "filters filterMarginSmall">Trading Hours</label>
            <input type="radio" id="trading"className="filters filterMarginSmall" value={this.state.tradingTime} onChange={this.handleChangeTradingTime} name="tradingTime" />

            {
            // Toggle button for Upward
            }
             <label html-for="upward"><span className = "filters filterMargin">Upward</span></label>
            <Toggle
              id='upward'
              className = "filters filterMarginSmall"
              onChange={this.handleUpwardMoment} />

            
            {
            // Toggle button for 5% Up
            }
            <label html-for="five-up"><span className = "filters filterMargin">5% Up</span></label>
            <Toggle
              id='five-up'
              className = "filters filterMarginSmall"
              onChange={this.handleFiveUpChange} />

            {
              // Toggle button for Prime
            }
            <label html-for="prime"><span className = "filters filterMargin">Prime</span></label>
            <Toggle
              id='prime'
              className = "filters filterMarginSmall"
              onChange={this.handlePrime} />
            
            {
              // Toggle button for Recent Change
            }
            <label html-for="recent-change"><span className = "filters filterMargin">Recent Change</span></label>
            <Toggle
              id='recent-change'
              className = "filters filterMarginSmall"
              onChange={this.handleRecentChange} />

            {
            // Toggle button for IPO News
            }
            <label html-for="ipo-status"><span className = "filters filterMargin">IPO Only</span></label>
            <Toggle
              id='ipo-status'
              className = "filters filterMarginSmall"
              onChange={this.handleIPO} />

            {
            // Toggle button for SPAC News
            }
            <label html-for="spac-news"><span className = "filters filterMargin">SPAC News</span></label>
            <Toggle
              id='spac-news'
              className = "filters filterMarginSmall"
              onChange={this.handleSPAC} />
          </div>
        </div>
        <div>
          {filteredData.map((data) => (
            <div className='card news'>
              <span>
              <a href={data.WatchUri} target='_blank' rel="noopener noreferrer" >
                  {data.Symbol}
                </a> - <b>{data.CompanyName}</b>
              </span>
              <p>
                <a href={data.Link} target='_blank' rel="noopener noreferrer" >
                  {data.Title}
                </a>
              </p>
              <div class="row">
                <span className ="filterMargin">{data.PubDate}</span>
                <span className ="filterMargin"> Market Cap : {data.MarketCap} </span>
                <span className ="filterMargin"> 
                  Trading Hours : 
                  {data.PercentChangeInTradingHours === 0 ? "" :<img src= {data.PercentChangeInTradingHours > 0 ? PositiveIndicator: NegativeIndicator} alt="" className ="filterMarginSmall" width="10" height="12"/>}
                  <span className="filterMarginSmall">{data.PercentChangeInTradingHours} %</span>
                </span>
                <span className ="filterMargin"> After Hours  : 
                  {data.PercentChangeOutTradingHours === 0 ? "" :<img src= {data.PercentChangeOutTradingHours > 0 ? PositiveIndicator: NegativeIndicator} alt="" className ="filterMarginSmall" width="10" height="12"/>}
                  <span className="filterMarginSmall">{data.PercentChangeOutTradingHours} %</span>
                </span>
                <span className ="filterMargin"> Total Change  : 
                  {data.PercentChange === 0 ? "" : <img src= {data.PercentChange > 0 ? PositiveIndicator: NegativeIndicator} alt="" className ="filterMarginSmall" width="10" height="12"/>}
                  <span className="filterMarginSmall">{data.PercentChange} %</span>
                </span>
                <span className ="filterMargin"> Last Change  : 
                  {data.PercentChangeSinceLast === 0 ? "" : <img src= {data.PercentChangeSinceLast > 0 ? PositiveIndicator: NegativeIndicator} alt="" className ="filterMarginSmall" width="10" height="12"/>}
                  <span className="filterMarginSmall">{data.PercentChangeSinceLast} %</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
