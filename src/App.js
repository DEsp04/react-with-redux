import React from 'react';
import './App.css';
import { connect } from "react-redux";


function App(props) {


  return (
    <div className="App">
      <div className="ageLabel">
          Your age: <span>{props.age}</span>
      </div>
      <button onClick={props.onAgeUp}>Age Up</button>
      <button onClick={props.onAgeDown}>Age Down</button> 
    </div>
  );
}

const mapStateToProps = (state) => { 
  return {
    age: state.age
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 })
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(App);


//Redux saga allows you to send or dispatch your action normally. Then there this watcher that will catch the action and prevents it from going or dispatching to the reducer directly. Once the watcher catches the action, it will first execute the asynchronous task (saving the data in the server), and once its finish with the task, it will release this action to the reducer. must install it with yarn add redux-saga