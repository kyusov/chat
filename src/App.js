import React from 'react';
import { Route } from 'react-router-dom';

import { Auth, Register } from './pages';

function App() {
  return (
    <div className="wrapper">
      <Route exact path="/" component={Auth}/>
      <Route exact path="/register" component={Register}/>
    </div>
  );
}

export default App;
