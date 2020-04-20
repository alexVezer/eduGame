import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import StatusBar from './layout/StatusBar';
//import WordMaker from './containers/WordMaker';
import './App.css';

function App() {
  const dispatch = useDispatch();
  // const users = useSelector(state => state.users);
  
  // JSON.stringify(dispatch({type:'LOAD_USER_DATA', payload: 1}));
  const user = {};
  console.log(`user ${user}`);
  let uName='';

  return (
      <div className="App">
        <header className="App-header">
          <h1>eduGame</h1>
          <p>Invata ca o joaca!</p>
        </header>
        <label for="uName">Nume</label>
        <input type="text" name="uName" onChange={uName} value={uName}></input> 
        <button onClick={(() => dispatch({type: 'LOAD_USER_DATA', payload: {uName}}))}> Load user </button>
{console.log(`user ${user}`)}
        <StatusBar user={user}/>
              
        
      </div>
  );
}

export default App;
