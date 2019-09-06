import React from "react";
import axios from "axios";

export default class ListUsers extends React.Component {
    state={
        dataUser:"",
    }     
      
    render() {
   
    const liste = Object.keys(this.state.dataUser).map(id => (
        <p
        className={id%2===0 ? "list1" : "list"}>{this.state.dataUser[id].userName}</p>
    ))
console.log(liste)


        return (
           <div className="divList">{liste}</div> 
        )
    }
    async componentDidMount() {
        try {
            const response = await axios.get("http://localhost:3007/user");
            this.setState({dataUser: response.data})
           console.log(response.data)
        } catch (error) { this.setState({ error: true})
      
        }
      }}  