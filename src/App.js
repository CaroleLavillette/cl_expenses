import React from 'react';
import './App.css';
import Users from "./containers/Users";
import Expenses from "./containers/Expenses";
import NewExpense from "./containers/NewExpense";


export default class App extends React.Component {
 
  render() {
    return (
    <div className="App">
      <div>
      <Users></Users>
      </div>
      <div>
      <Expenses></Expenses>
      </div>
      <div>
      <NewExpense></NewExpense>
      </div>
    </div>
  );
  }
}