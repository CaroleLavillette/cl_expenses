import React from 'react';
import './App.css';
import Users from "./containers/Users";
import Expenses from "./containers/Expenses";
import NewExpense from "./containers/NewExpense";
import axios from "axios";

export default class App extends React.Component {
  state={
    data:""
  }
  
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
  async componentDidMount() {
  try {
      const response = await axios.get("https://cl-expenses-back.herokuapp.com/");
      this.setState({data: response.data})
     console.log(response.data)
  } catch (error) { this.setState({ error: true})

  }
}}



