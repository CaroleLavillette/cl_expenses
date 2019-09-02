import React from "react";
import Title from "../components/title"

export default class Users extends React.Component {
    render() {
        return (
            <div style={{display: "flex"}}>
                <div className="bloc">
                    <Title titre="Users"></Title>
                </div>
            </div>
        )
    }
}