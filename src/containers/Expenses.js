import React from "react";
import Title from "../components/title";
import axios from "axios";

export default class Expenses extends React.Component {
    state={
        dataExpense:""
      }
      
    render() {
        return (
            <div style={{display: "flex"}}>
                <div className="bloc">
                    <Title titre="Expenses"></Title>
                </div>
            </div>
        )
    }
    async componentDidMount() {
        try {
            const response = await axios.get("http://localhost:3007/expense");
            this.setState({dataExpense: response.data})
           console.log(response.data)
        } catch (error) { this.setState({ error: true})
      
        }
      }}
      
      
      
      