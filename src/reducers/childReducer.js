const initialState = {
  children: [
  {id:2,
  nume: 'Alex',
  clr: 'Nivelul 2 75%',
  mate: 'Nivelul 1 95%',
  exRez: 15,
  scor: 4506
},
{id:3,
  nume: 'Alex',
  clr: 'Nivelul 2 75%',
  mate: 'Nivelul 1 95%',
  exRez: 15,
  scor: 4506

},
{
  id:4,
  nume: 'Alex',
  clr: 'Nivelul 2 75%',
  mate: 'Nivelul 1 95%',
  exRez: 15,
  scor: 4506
}



]
}

const childReducer = (state= initialState, action) => {
  switch(action.type){
    case 'ADD_CHILD':
      console.log('created project', action.child);
      return state;
    case 'ADD_CHILD_ERR':
      console.log(`add child error`, action.err);
      return state;
    default:
        return state;
    }
}

export default childReducer;