import { createStore, applyMiddleware, compose} from 'redux';
import {createFirestoreInstance, getFirestore, reduxFirestore} from 'redux-firestore';
import {ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import fbConfig from './config/fbConfig';
import firebase from 'firebase/app';

const initialState = {};
 

const store = createStore(
  rootReducer, 
  initialState, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase})),
    reduxFirestore(firebase, fbConfig)
  )
);



export default store;