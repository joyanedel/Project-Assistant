import React from 'react';
import { connect } from 'react-redux';
import { addClient, removeClient, updateClient } from './redux/actions/clientAction';
import Navigation from './view/menu/Navigation';
import ClientMenu from './view/clientlist/ClientMenu';
import DeveloperMenu from './view/developerlist/DeveloperMenu';
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
          <Navigation data={this.props.data} addClient={this.props.addClient}/>
          <Switch>
            <Route path="/home">
              <MenuMenu />
            </Route>
            <Route path="/clientes">
              <ClientMenu data={this.props.data} removeClient={this.props.removeClient} updateClient={this.props.updateClient}/>
            </Route>
            <Route path="/desarrolladores">
              <DeveloperMenu />
            </Route>
            <Route path="/cotizaciones">
              <h3>Próximamente</h3>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addClient: (form) => dispatch(addClient(form)),
    removeClient: (id) => dispatch(removeClient(id)),
    updateClient: (id, form) => dispatch(updateClient(id, form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
