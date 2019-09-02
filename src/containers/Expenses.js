import React from "react";
import Title from "../components/title"

export default class Expenses extends React.Component {
    render() {
        return (
            <div style={{display: "flex"}}>
                <div className="bloc">
                    <Title titre="Expenses"></Title>
                </div>
            </div>
        )
    }
}