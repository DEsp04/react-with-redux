//delay is like a setTimeOut()
import { delay } from "redux-saga/effects"
//takeEvery catches every action being dispatch
import { takeLatest, put } from 'redux-saga/effects'



//once you catch action just let go of another action
function* ageUpAsync() { 

  yield delay(4000);
  yield put({ type: 'AGE_UP_ASYNC', value: 1 });
}


//when we dispatch an action we need a watcher to catch in the middle or before getting to the reducer


//generator function-> makes mandatory for each line of code to be executed. If the line of code isnt executed then it will block the following line of code.
export function* watchAgeUp() { 
  //I want to observe every single action that being dispatch
  //Once the particular action catched, we will run the ageUpAsync function. ageUpAsync is going to create another action with type 'Age_UP_ASYNC'
  yield takeLatest('AGE_UP', ageUpAsync)
}