import { LOAD_USER_DATA, UPDATE_USER_DATA } from "../actions/types";
import { users } from '../users.js';

export const loadUser = (name) => dispatch => {
    let user = users.filter(user => users.name===name); 
    return (
    {type: LOAD_USER_DATA,
      payload: user
        
    }
    );
  }
