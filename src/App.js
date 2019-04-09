import React, { Component } from 'react';
import './App.css';
import MainNavigation from './component/navbar/MainNavigation';
import ChatContent from './component/chat/ChatContent';

class App extends Component {
  render() {
    return (
      <div className="app">
        <MainNavigation />
        <ChatContent />
      </div>
    );
  }
}

export default App;
