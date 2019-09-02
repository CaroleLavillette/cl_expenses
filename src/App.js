import React from 'react';
import './App.css';
import Users from "./containers/Users";
import Expenses from "./containers/Expenses";
import NewExpense from "./containers/NewExpense";

function App() {
  return (
    <div className="App">
      <Users></Users>
      <Expenses></Expenses>
      <NewExpense></NewExpense>
    </div>
  );
}

export default App;
