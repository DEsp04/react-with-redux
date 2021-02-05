



const initialState = {
  age: 20
}


const reducer = (state = initialState, action) => { 
  const newState = { ...state };


  if (action.type === 'AGE_UP') { 
    // newState.age++;

    return {
      ...state,
      age: state.age + action.value,
    }

  }

  if (action.type === 'AGE_DOWN') { 
    // newState.age--;

    return {
      age: state.age - action.value,
    }
  }

  return newState;
}

export default reducer;