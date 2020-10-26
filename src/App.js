import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css';

//components
import Landing from './pages/Landing'
import About from './pages/About'
import GreatDivas from './pages/GreatDivas'
import Repertoire from './pages/Repertoire'
import VocalHealth from './pages/VocalHealth'
import Resources from './pages/Resources'
import Feedback from './pages/Feedback'
import Contact from './pages/Contact'

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
            <Route exact path='/great-divas' component={GreatDivas} />
            <Route exact path='/repertoire' component={Repertoire} />
            <Route exact path='/vocal-health' component={VocalHealth} />
            <Route exact path='/resources' component={Resources} />
            <Route exact path='/feedback' component={Feedback} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
