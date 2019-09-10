import React from "react";
import axios from "axios";

export default class ListUsers extends React.Component {
    state={
        dataExpense:[],
        }     
    
    render() {
  let datas = this.state.dataExpense
        let total = datas.reduce(function(prev, cur) {
      return prev + cur.amount
  },0 )
     
    const liste = Object.keys(this.state.dataExpense).map(id => (
        <div className="divSubTitle" style={{display:"flex", flexDirection:"row", borderBottom:"1px solid lightgrey"}}>
            <p
            style={{flex:1, paddingLeft:2}}
            className={id%2===0 ? "list1" : "list"}>{this.state.dataExpense[id].user.userName}</p>
            <p
            style={{flex:3}}
            className={id%2===0 ? "list1" : "list"}>{this.state.dataExpense[id].description}
            </p>
            <p
            style={{flex:1.5,  textAlign:"right", paddingRight:2, fontWeight:900, fontSize:14}}
            className={id%2===0 ? "list1" : "list"} >
            {this.state.dataExpense[id].amount.toFixed(2).replace(".", ",") + " €"}
            </p>
        </div>
    ));


        return (
            <div>
           <div className="divList">{liste}</div> 
                <div className="divSubTitle">
                <p className="subTitle">TOTAL</p>
                <p className="subTitle">{total.toFixed(2).replace(".", ",") + " €"}</p>
                </div> 
            </div>
           )
    }
    async componentDidMount() {
            const response = await axios.get("http://localhost:3007/expense");
            this.setState({dataExpense: response.data})
           console.log(response.data)
        }
      } 