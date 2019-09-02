import React from "react";
import Title from "../components/title";
import Form from "../components/form"

export default class NewExpense extends React.Component {
    render() {
        return (
            <div style={{display: "flex"}}>
                <div className="bloc">
                    <Title titre="New expense"></Title>
                    <Form></Form>
                </div>
            </div>
        )
    }
}