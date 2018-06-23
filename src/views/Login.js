import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SweetAlert from 'sweetalert-react';

import '../styles/Login.css';

class Login extends Component {
  constructor () {
    super();

    this.state = {
      username : '',
      password : '',
      isLogged : false,
      show: false
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (event) {
    event.preventDefault ();
    if (this.state.username === "admin" && this.state.password === "1212") {
      this.setState({isLogged : true});
    } else {
      this.setState({username : '', password : '', show : true});
    };
  }

  render () {
    return(
      <div className="Login">
        {this.state.isLogged ? 
          <Redirect to="/home"/> :
          <div className="Login-box">
          <form onSubmit={this.onSubmit}>
            <div className="Login-box-formbox">
              <label className="Login-box-username">Username</label>
              <input 
                type="text"
                className="Login-username-input"
                value={this.state.username}
                onChange={ (event) => { this.setState({ username : event.target.value })} }
              />
            </div>
            
            <div className="Login-box-formbox">
              <label className="Login-box-password">Password</label>
              <input 
                type="password"
                className="Login-password-input"
                value={this.state.password}
                onChange={ (event) => { this.setState({ password : event.target.value })} }
              />
            </div>

            <button type="submit" className="Login-submit">Entrar</button>
          </form>
          <SweetAlert
            show={this.state.show}
            title="LOGIN"
            text="Login incorrecto"
            onConfirm={() => this.setState({show : false})}
          />
        </div>
      }
      </div>        
    )
  }
}

export default Login;