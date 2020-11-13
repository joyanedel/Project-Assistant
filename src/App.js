import React from 'react';
import Navigation from './view/menu/Navigation';
import ClientMenu from './view/clientlist/ClientMenu';
import DeveloperMenu from './view/developerview/DeveloperMenu';
import MenuMenu from './view/menu/MenuMenu';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route path="/home">
              <MenuMenu />
            </Route>
            <Route path="/clientes">
              <ClientMenu />
            </Route>
            <Route path="/desarrolladores">
              <DeveloperMenu />
            </Route>
            <Route path="/cotizaciones">
              <h3>Jóvenes</h3>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
