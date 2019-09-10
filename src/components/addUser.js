import React from "react";
import axios from "axios";

export default class AddUser extends React.Component {
    state={
        userName:"",
        error:false,
        user:""
    }

       
    handleChange = async event => {
        event.preventDefault();
        this.setState({user: event.target.value})
    console.log(this.state.user) }
    
   /*  try { 
        const response = await axios.post("http://localhost:3007/user/create",
    {userName: this.state.userName})
            
    } catch (error) {
    this.setState({error: true})
    alert("a problem occured")
     } */
   
    
    render() {
    return (
        <form style={{display:"flex", flexDirection:"column"}}>
        <input
        className="input"
        type="text"
        name="addUser"
        placeholder="New user"
        minLength="15"
        value={this.state.user}
        onChange={this.handleChange}
        onEnded
        ></input></form>
    )
}}
