import React from 'react';
import './App.css';
import OnlineUsers from './components/online_users/online_users';
import ListRules from './components/rules/list_rules';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>rulemaker</h2>
      </header>
      <OnlineUsers />
      <ListRules />
    </div>
  );
}

export default App;
