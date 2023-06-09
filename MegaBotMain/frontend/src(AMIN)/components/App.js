import React from 'react';
import Message from './Message';
import MessageArea from './MessageArea';
import UserInput from './UserInput';
import Header from './Header';
import ChatBot from './ChatBot';

const App = () => {
  return (
    <div>
        <Header />
        <ChatBot />
        <Message/>
        <MessageArea/>
        <UserInput/>
    </div>
  );
};

export default App;