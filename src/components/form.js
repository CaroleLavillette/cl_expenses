import React from "react";

export default class Form extends React.Component {
    render() {
        return(
            <form style={{display:"flex", flexDirection:"column"}}>
                <input 
                    className="input"
                    type="text" 
                    name="user" 
                    placeholder="User"
                    minLength="15"/>
                <input 
                    className="input"
                    type="text" 
                    name="description" 
                    placeholder="Description"
                    minLength="25"/>
                <input 
                    className="input"
                    type="number" 
                    name="amount" 
                    placeholder="Amount"
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
}