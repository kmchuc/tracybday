import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Homepage from './components/Home/Homepage';
import Content from './components/Content/Content';
import MessageForm from './components/Messages/MessageForm';

function App() {
  return(
    <HashRouter basename='/'>
      <div className='App'>
        <Route exact path='/' component={Homepage} />
        <Route path='/content' component={Content} />
        <Route path='/messageform' component={MessageForm} />
      </div>
    </HashRouter>
  );
}

export default App;