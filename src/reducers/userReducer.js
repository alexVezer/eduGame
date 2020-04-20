import { LOAD_USER_DATA, UPDATE_USER_DATA } from "../actions/types";


const initialState = {
  user: {}
};

//let user = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_USER_DATA':
      return {
      ...state,       
      user: action.payload
      }

    
    // case 'UPDATE_USER_DATA':
    //   return newState = {
    //     ...state,
    //     user.score : user.score + action.payload.user.score,
    //     // this.setState(user.lastRoundCompleted += 1) 
    //   };
       
    default:
      return state;
  }
}

export default userReducer;