import { LOAD_ROUND, VERIFICA_CUVANTUL } from "../actions/types";

const initialState = {
  // userData
  //roundNr : 0,
  word : {}
};

const wordReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_ROUND':
      return {
        ...state,
        word : action.payload
      };
    
            
  
    default:
      return state;
  }
}

export default wordReducer;