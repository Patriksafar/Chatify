import React, { Component } from 'react';
import ImageStatusIndicator from '../../imageStatusIndicator/ImageStatusIndicator';
import './navigationHeader.css';

class NavigationHeader extends Component {
  render() {
    return (
      <div className="mol-navigation-header">
        { this._renderInfo() }
        { this._renderSearch() }
      </div>
    );
  }

  _renderInfo() {
    return (
      <div className="mol-navigation-header__wrapper">
      <ImageStatusIndicator />

        <div className="status">
          <h1 className="mol-navigation-header__user-name">Patrik Šafář</h1>
          <div className=
            "mol-navigation-header__select-status clickable">
            Very busy
          </div>
        </div>
        <div className="mol-navigation-header__options-dot clickable">
          <div className="mol-navigation__dot" />
          <div className="mol-navigation__dot" />
          <div className="mol-navigation__dot" />
        </div>
      </div>
    );

  }

  _renderSearch() {
    return (
      <div className="mol-navigation-search">
        <input type="search" className="mol-navigation-search__input"  placeholder="Search for people"/>
      </div>
    );
  }

}

export default NavigationHeader;
