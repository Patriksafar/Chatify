import React, { Component } from 'react';
import Message from '../message/Message';
import './chatContent.css';

class ChatContent extends Component {
  constructor(props) {
    super(props);
    this.state = {messages: [], newMessage: null};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({newMessage: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();    
    var joined = this.state.messages && this.state.messages.concat(this.state.newMessage);
    this.setState({ messages: joined, newMessage: null })
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      this.handleSubmit(e)
    }
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView({block: "end"});
  }


  render() {
    return (
      <div className="ogm-content">
        <div className="ogm-content__header">
          <h2 className="ogm-content__name-of-host">Patrik Šafář</h2>
        </div>
        { this.__renderChatContent() }
      </div>
    );
  }

  __renderChatContent() {
    return (
      <div className="ogm-content__content">
        { this.__renderMessages() }
        { this.__renderMessageInput() }
      </div>
    );
  }

  __renderMessageInput() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="ogm-content__chat-input">
          <textarea className="ogm-content__textarea"
           placeholder="Just send a message..."
           value={this.state.newMessage || ''} 
           onChange={this.handleChange}
           onKeyDown={this.handleKeyDown }/>
        </div>
      </form>
    );
  }

  __renderMessages() {
    return (
      <div className="ogm-content__message-section">
        <Message type="incoming" text="hello there Elon!"/>
        {this.state.messages && this.state.messages.map((message, index) => 
          <Message key={index} type="me" text={message} />
        )}
        <div ref={(el) => { this.messagesEnd = el; }} />
      </div>
    );
  }

}

export default ChatContent;
