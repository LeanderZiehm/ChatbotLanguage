import React from 'react';
import ChatBot from './components/ChatBot';
import Header from './components/Header';
import Message from './components/Message';
import MessageArea from './components/MessageArea';
import UserInput from './components/UserInput';

const App = () => {
  return (
    <div className='container'>
        <Header />
        <ChatBot />
        <Message/>
        <MessageArea/>
        <UserInput/>
    </div>
  );
};

export default App;
