import React from 'react';
import './App.css';
import OnlineUsers from './components/online_users';
import OnlineUsersQuery from './components/online_users_query';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>rulemaker</h2>
      </header>
      <OnlineUsersQuery />
      <OnlineUsers />
    </div>
  );
}

export default App;
