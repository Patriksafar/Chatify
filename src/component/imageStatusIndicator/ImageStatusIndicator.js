import React, { Component } from 'react';
import ProfileImage from '../profileImage/ProfileImage';
import './imageStatusIndicator.css';

class ImageStatusIndicator extends Component {
  render() {
    return (
      <div className="mol-image-status-indicator">
        <ProfileImage />
        <div className="mol-image-status-indicator-circle mol-image-status-indicator-circle--busy" />
      </div>
    );
  }
}

export default ImageStatusIndicator;
