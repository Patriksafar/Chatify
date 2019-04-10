import React, { Component } from 'react';
import Message from '../message/Message';
import './chatContent.css';

class ChatContent extends Component {
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    return (
      <div className="ogm-content">
        { this.__renderHeader() }
        { this.__renderChatContent() }
      </div>
    );
  }

  scrollToBottom() {
    console.log(this.messagesEnd);
    this.messagesEnd.scrollIntoView({block: "end"});
  }

  __renderHeader() {
    return(
      <div className="ogm-content__header">
        <h2 className="ogm-content__name-of-host">Patrik Šafář</h2>
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
      <div className="ogm-content__chat-input">
        <textarea className="ogm-content__textarea" placeholder="Just send a message..." />
      </div>
    );
  }

  __renderMessages() {
    return (
      <div className="ogm-content__message-section">
        <Message type="me" text="hi there!"/>
        <Message type="incoming" text="hello there Elon!"/>
        <Message type="me" text="Dobrý den, mám dotaz ohledně ukradeného náramku, který jsem ztratil 14. 5. Náramek jsem si již zablokoval. Dobrý den, mám dotaz ohledně ukradeného náramku, který jsem ztratil 14. 5. Náramek jsem si již zablokoval"/>
        <Message type="incoming" text="hello there Elon!"/>
        <Message type="incoming" text="hello there Elon!"/>
        <Message type="incoming" text="Dobrý den, mám dotaz ohledně ukradeného náramku, který jsem ztratil 14. 5. Náramek jsem si již zablokoval. Dobrý den, mám dotaz ohledně ukradeného náramku, který jsem ztratil 14. 5. Náramek jsem si již zablokoval"/>
        <Message type="me" text="hi there!"/>
        <Message type="incoming" text="hello there Elon!"/>
        <Message type="incoming" text="hello there Elon!"/>
        <Message type="incoming" text="hello there Elon!"/>
        <Message type="incoming" text="hello there Elon!"/>
        <Message type="incoming" text="Dobrý den, mám dotaz ohledně ukradeného náramku, který jsem ztratil 14. 5. Náramek jsem si již zablokoval. Dobrý den, mám dotaz ohledně ukradeného náramku, který jsem ztratil 14. 5. Náramek jsem si již zablokoval"/>
        <Message type="me" text="hi there!"/>
        <Message type="incoming" text="hello there Elon!"/>
        <Message type="incoming" text="hello there Elon!"/>
        <Message type="incoming" text="hello there Elon!"/>
        <Message type="incoming" text="hello there Elon!"/>
        <Message type="incoming" text="Dobrý den, mám dotaz ohledně ukradeného náramku, který jsem ztratil 14. 5. Náramek jsem si již zablokoval. Dobrý den, mám dotaz ohledně ukradeného náramku, který jsem ztratil 14. 5. Náramek jsem si již zablokoval"/>
        <Message type="me" text="hi there!"/>
        <Message type="incoming" text="hello there Elon!"/>
        <Message type="incoming" text="hello there Elon!"/>
        <div ref={(el) => { this.messagesEnd = el; }} />
      </div>
    );
  }

}

export default ChatContent;
