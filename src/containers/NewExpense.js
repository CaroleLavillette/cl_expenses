import React from "react";
import Title from "../components/title";
import Form from "../components/form1";
import FormExpense from "../components/form2"

export default class NewExpense extends React.Component {
    state={
           userId:"",
           description:"",
           amount:""
       
      }    
      handleSubmit = e => {
          console.log(this.state);
          e.preventDefault()
      }
    
     render() {
        return (
            <div style={{display: "flex"}}>
                <div className="bloc">
                    <Title titre="New expense"></Title>
                   <form onSubmit={this.handleSubmit} style={{display:"flex", flexDirection:"column"}}>
                       <Form userId={this.state.userId}></Form>
                       <FormExpense description={this.state.description} amount={this.state.amount}></FormExpense>
                       <input
                    className="button"
                    type="submit"
                    name="addExpense"
                    value="ADD EXPENSE"
                    />
                    </form>
                </div>
            </div>
        )
    }
}