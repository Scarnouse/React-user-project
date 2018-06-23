import Reflux from 'reflux';

import Actions from '../actions/Actions';
import * as HTTP from '../services/Http';

class AppStore extends Reflux.Store {
  constructor () {
    super();
    this.listenables = Actions;
    this.state = {
      data: []
    }

    this.getUsers = this.getUsers.bind(this);
  }

  getUsers () {
    HTTP.get('https://reqres.in/api/users?page=2')
      .then((response) => {
        this.setState({ data : response.data });
    });
  }
}

export default AppStore;