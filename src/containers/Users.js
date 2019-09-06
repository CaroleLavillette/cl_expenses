import React from "react";
import Title from "../components/title";
import SubTitle from "../components/subTitle";
import ListUsers from "../components/listUsers"
import axios from "axios";

export default class Users extends React.Component {
   
    render() {

   
        return (
            <div style={{display: "flex"}}>
                <div className="bloc">
                    <Title titre="Users"></Title>
                    <div className="divSubTitle">
                    <SubTitle subTitle="User"></SubTitle>
                    <SubTitle subTitle="Expenses"></SubTitle>
                    </div>
                 <div>
                     <ListUsers className="list"></ListUsers>
                 </div>
                
                </div>
                
            </div>
        )
    }
   }      