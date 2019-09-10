import React from 'react';
import './App.css';
import Users from "./containers/Users";
import Expenses from "./containers/Expenses";
import NewExpense from "./containers/NewExpense";
import axios from "axios";


export default class App extends React.Component {
 state = {
   datas:[]
 }
  render() {
    return (
    <div className="App">
      <div>
      <Users datas={this.state.datas}></Users>
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
        const response = await axios.get("http://localhost:3007/expense");
      this.setState({datas: response.data})
     console.log(response.data)
  }}