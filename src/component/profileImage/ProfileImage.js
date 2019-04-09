import React, { Component } from 'react';
import './profileImage.css';

class ProfileImage extends Component {
  render() {
    return (
      <img className="mol-profile-image"
        src="http://patriksafar.cz/profile.png" alt="profile" />
    );
  }
}

export default ProfileImage;
