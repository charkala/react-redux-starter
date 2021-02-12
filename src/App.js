import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar, Main, Page, NotFound } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/page" component={Page} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
