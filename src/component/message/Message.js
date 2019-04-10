import React, { Component } from 'react';
import ProfileImage from '../profileImage/ProfileImage';
import './message.css';

class Message extends Component {
  render() {
    let { type } = this.props;

    return (
      <div className={ `ogm-message ogm-message--${type}` }>
        { this.__renderMessageBox() }
      </div>
    );
  }

  __renderMessageBox() {
    let { type } = this.props;

    if (type === "me" ) {
      return (
        <div className='ogm-message__cell'>
          { this.__renderMessageTextCell() }
          <ProfileImage />
        </div>
      );
    }

    return (
      <div className='ogm-message__cell'>
        <ProfileImage />
        { this.__renderMessageTextCell() }
      </div>
    );
  }

  __renderMessageTextCell() {
    let { text } = this.props;

    return (
      <div className="ogm-message__content">
        <div className="ogm-message__text">
          <p> { text } </p>
        </div>
        <div className="ogm-message__date">
          14m ago
        </div>
      </div>
    );
  }

}

export default Message;
