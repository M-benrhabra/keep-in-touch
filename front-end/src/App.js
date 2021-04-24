import React from 'react';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom'; 
import Header from './components/layout/Header';
import Contact from './components/Contact';
import Dashbord from './components/Dashbord';
import Response from './components/Response';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <Router>
      <div >
        < Header title = "Keep In Touch" />
        <div className='container' >
          <Switch>
            <Route exact path= '/contact' component={Contact} />
            <Route path='/dashboard' component={Dashbord} />
            <Route path='/response/:id' component={Response} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
