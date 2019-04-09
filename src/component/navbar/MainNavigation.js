import React, { Component } from 'react';
import NavigationHeader from '../navbar/header/NavigationHeader';
import './mainNavigation.css';

class MainNavigation extends Component {
  render() {
    return (
      <div className="ogm-main-navigation">
        <NavigationHeader />
      </div>
    );
  }
}

export default MainNavigation;
