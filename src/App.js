import React, { Component } from 'react'; 
import MainPage from './Components/MainPage';
import Issue from './Components/Issue'
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;


class App extends Component {
    render() {
      return(
        <Router>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={MainPage} />
              <Route exact path='/Issue/:id' component={Issue} />
              <Route render={function () {
                return <p>Not Found Bruh</p>
              }} />
            </Switch>
          </div>
        </Router> 
      )}
}

export default App;
