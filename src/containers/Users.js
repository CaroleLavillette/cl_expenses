import React from "react";
import Title from "../components/title";
import SubTitle from "../components/subTitle";

export default class Users extends React.Component {
   
    render() {
console.log(this.props.datas)
let result = [];
this.props.datas.reduce(function(res, value) {
    if (!res[value.user.userName]) {
        res[value.user.userName] = {user: value.user.userName, amount:0};
        result.push(res[value.user.userName])
    }
    res[value.user.userName].amount += value.amount;
    return res;
}, {});

const liste = Object.keys(result).map(id => (
    <div className="divSubTitle" style={{display:"flex", flexDirection:"row", borderTop:"1px solid lightgrey"}}>
        <p style={{flex:1, paddingLeft:2}}
            className={id%2===0 ? "list1" : "list"}>{result[id].user}</p>
        <p style={{flex:1, textAlign:"right", paddingRight:2, fontWeight:900, fontSize:14}}
            className={id%2===0 ? "list1" : "list"}>{result[id].amount.toFixed(2).replace(".", ",") + " €"}</p>
    </div>))
   
        return (
            <div style={{display: "flex"}}>
                <div className="bloc">
                    <Title titre="Users"></Title>
                    <div className="divSubTitle">
                    <SubTitle subTitle="User"></SubTitle>
                    <SubTitle subTitle="Expenses"></SubTitle>
                    </div>
                        <div style={{borderBottom:"1px solid lightgrey"}}>
                            {liste}
                        </div>
                </div>
                
            </div>
        )
    }
   }      