import React from "react";

export default class Form extends React.Component {
    render() {
        return(
            <form>
                <input 
                    type="text" 
                    name="user" 
                    placeholder="User"
                    minLength="15"/>
                <input 
                    type="text" 
                    name="description" 
                    placeholder="Description"
                    minLength="25"/>
                <input 
                    type="number" 
                    name="amount" 
                    placeholder="Amount"
                    />
            </form>
        )
    }
}