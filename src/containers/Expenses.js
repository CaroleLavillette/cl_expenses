import React from "react";
import Title from "../components/title";
import ListExpenses from "../components/listExpenses";

export default class Expenses extends React.Component {
    
    render() {
        return (
            <div style={{display: "flex"}}>
                <div className="bloc">
                    <Title titre="Expenses"></Title>
                    <div className="divSubTitle">
                    <span 
                    className="subTitle"
                    style={{flex:1}}
                    >User</span>
                    <span 
                    className="subTitle"
                    style={{flex:3}}
                    >Decription</span>
                    <span
                    className="subTitle" 
                    style={{flex:1.5}}
                    >Amount</span>
                    </div>
                <div>
                    <ListExpenses datas ={this.props.datas}></ListExpenses>
                </div>
                </div>
                
                
            </div>
        )
    }
    }
      
      
      
      