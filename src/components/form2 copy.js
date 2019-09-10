import React from "react";
import axios from "axios";

export default class FormExpense extends React.Component {
    state={
        datas:[],
        userId:"",
        description:"",
        amount:0
    }

    handleChange = event => {
        const name= event.target.name;
        const value = event.target.value;
        const statesToUpdate = {}
        statesToUpdate[name] = value
        this.setState(statesToUpdate);
        console.log(name, value)
    };

    render() {
        return(
            <form style={{display:"flex", flexDirection:"column"}}>
               
                <input 
                    className="input"
                    type="text" 
                    name="description" 
                    placeholder="Description"
                    minLength="25"
                    value={this.state.description}
                    onChange={this.handleChange}/>
                <input 
                    className="input"
                    type="number" 
                    name="amount" 
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.handleChange}
                    />
                <input
                    className="button"
                    type="submit"
                    name="addExpense"
                    value="ADD EXPENSE"
                    />

            </form>
        )
    }
    async componentDidMount() {
        const response = await axios.get("http://localhost:3007/expense");
      this.setState({datas: response.data})
     console.log(response.data)
  }
}