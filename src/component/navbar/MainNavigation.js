import React, { Component } from 'react';
import NavigationHeader from './header/NavigationHeader';
import HistoryCell from './historyCell/HistoryCell';

import './mainNavigation.css';

class MainNavigation extends Component {
  render() {
    return (
      <div className="ogm-main-navigation">
        <NavigationHeader />
        { this.__renderHistory() }
      </div>
    );
  }

  __renderHistory() {
    let historyList = [];

    for (var i = 0; i < 10; i++) {
      historyList[i] = ( <HistoryCell key={i} /> );
    }

    return historyList.map((item, index) => (
      <HistoryCell key={index} />
    ));

  }
}

export default MainNavigation;
