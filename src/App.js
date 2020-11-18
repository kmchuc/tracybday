import React from 'react';
import { HashRouter, Route, Router, Switch, Link } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Content from './components/Content';

function App() {
  return(
    <HashRouter basename='/'>
      <div className='App'>
        <Route exact path='/' component={Homepage} />
        <Route path='/content' component={Content} />
      </div>
    </HashRouter>
  );
}

export default App;
