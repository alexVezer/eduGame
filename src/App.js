import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux';
import StatusBar from './components/layout/StatusBar';
import Landing from './components/dashboard/landing';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
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
    <Router>

    <div className="App">
      {console.log(`user ${user}`)}
        <StatusBar user={user}/>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path='/elev' component={Dashboard}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
        </Switch>
             
      </div>
    </Router>
  );
}

export default App;
