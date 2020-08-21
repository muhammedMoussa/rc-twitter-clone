import React from 'react';

import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';

function App() {
  return (
    <div className="App">
      Twitter Clone
      { /* SIDEBAR */ }
      <Sidebar/>

      { /* FEED */ }
      <Feed/>
      
      { /* WIDETS */ }
      <Widgets/>
    </div>
  );
}

export default App;
