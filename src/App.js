import React from 'react';
import StatusBar from './components/StatusBar';
import WordMaker from './containers/WordMaker';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>eduGame</h1>
        <p>Invata ca o joaca!</p>
      </header>
      <StatusBar/>
      <WordMaker/>
       
    </div>
  );
}

export default App;
