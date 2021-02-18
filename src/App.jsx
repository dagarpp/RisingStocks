import React, { Component } from 'react';
import './App.css';
// import Navigation from './components/navigation';
import Header from './components/header';
import TabNav from './components/TabNav';
import Tab from './components/Tab';
import News from './components/news';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Rising News'
    }
  }
  setSelected = (tab) => {
    this.setState({ selected: tab });
  }

  render() {
    return (
      <div>
        {/* <Navigation/> */}
        <Header/>
        <TabNav tabs={['Rising News', 'Favorites']} selected={ this.state.selected } setSelected={ this.setSelected }>
          <Tab isSelected={ this.state.selected === 'Rising News' }>
            <News />
          </Tab>
          <Tab isSelected={ this.state.selected === 'IPO News' }>            
          </Tab>
        </TabNav>
      
      </div>
    )
  }
}

export default App;
