import React from "react";
import axios from "axios";
import AddUser from "./addUser";

export default class Form extends React.Component {
    state={
        datas: [],
        value:"",
    }
    handleChange = (event) => {
        this.setState({value: event.target.value});
      }
    add = () => {  if (this.state.value === "new") {
           return <AddUser></AddUser>
         }}

      render() {
        
        let users = Object.keys(this.state.datas).map(item => (
           <option value={this.state.datas[item]._id}>{this.state.datas[item].userName}</option>
         ))
    
console.log(this.state.value)
 
        return(
            <form style={{display:"flex", flexDirection:"column"}}>
                <select 
                    value={this.state.value}
                    onChange={this.handleChange}
                    className="input"
                    name="user" 
                    placeholder="User"
                >
                 {users} 
                 <option selected value="new">New user</option>  
                </select>
             <div>{this.add()}</div> 
            

            </form>
        )
    }
    async componentDidMount() {
        const response = await axios.get("http://localhost:3007/user");
      this.setState({datas: response.data})
     console.log(response.data)
  }
}