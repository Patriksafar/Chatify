import React, { Component } from 'react';
import ImageStatusIndicator from '../../imageStatusIndicator/ImageStatusIndicator';
import './historyCell.css';

class HistoryCell extends Component {
  render() {
    return (
      <div className="mol-history-cell">
        <ImageStatusIndicator />
        { this.__renderContentOfChannel() }
      </div>
    );
  }

  __renderContentOfChannel() {
    return (
      <div className="mol-history-cell__content-wrapper">
        <div className="mol-history-cell__content-header" >
          <h2 className="mol-history-cell__name-of-user" >Patrik Šafář</h2>
          <div className = "mol-history-cell__time-ago" > 14m ago </div>
        </div>
        <p className="mol-history-cell__old-message" > nějaká stará zpráva </p>
      </div>
    )
  }
}

export default HistoryCell;
