import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

//components
import Landing from './components/Landing'

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Landing} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
