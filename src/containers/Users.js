import React from "react";
import Title from "../components/title";
import SubTitle from "../components/subTitle";
import axios from "axios";

export default class Users extends React.Component {
    state={
        dataUser:""
      }     
      
    render() {

    const liste = Object.keys(this.state.dataUser).map(id => (
        <p>{this.state.dataUser[id].userName}</p>
    ))
console.log(liste)



        return (
            <div style={{display: "flex"}}>
                <div className="bloc">
                    <Title titre="Users"></Title>
                    <SubTitle subTitle="User"></SubTitle>
                 <div className="list">
                    {liste}
                 </div>
                
                </div>
                
            </div>
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