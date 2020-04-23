export const addChild = (child) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async call to database
  const firestore= getFirestore();
    firestore.collection('children').add({
      ...child,
      
    }).then(()=> {
      dispatch({type:'ADD_CHILD', child :child });
    }).catch((err) => {
        dispatch({type:'ADD_CHILD_ERR', err})
    })
    
  }
};