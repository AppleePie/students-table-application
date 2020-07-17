import React from 'react';
import Header from './Header';
import UnderHeaderContainer from './UnderHeaderContainer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="body">
        <UnderHeaderContainer />
      </div>
    </div>
  );
}

export default App;
