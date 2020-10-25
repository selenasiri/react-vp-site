import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css';

//components
import Landing from './pages/Landing'
import About from './pages/About'

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
