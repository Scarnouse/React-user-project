import React from 'react';
import Reflux from 'reflux';

import '../styles/Home.css';
import AppStore from '../stores/AppStore';
import Actions from '../actions/Actions';
import Card from '../components/Card';

class Home extends Reflux.Component {
  constructor () {
    super ();

    this.state = {};
    this.store = AppStore;
    // variable de estado que se va a estar compartiendo 
    // entre Home y AppStore
    this.storeKeys = ['data'];
    this.showUsers = this.showUsers.bind(this);
  }

  showUsers (event) {
    Actions.getUsers();
  }

  render () {
    let people = this.state.data.map((currentValue, index, array) => {
      return (
        <Card 
          key={index}
          id={currentValue.id}
          firstName={currentValue.first_name}
          lastName={currentValue.last_name}
          avatar={currentValue.avatar}
        />
      )
    });

    return(
      <div className="Home">
        <div className="Home-header-box">
          <h2 className="Home-header-title">Bienvenido</h2>
          <button className="Home-header-button" onClick={this.showUsers}>Mostrar usuarios</button>
        </div>
        <div className="Home-body">
          { people }
        </div>
      </div>
    )
  }
}

export default Home;