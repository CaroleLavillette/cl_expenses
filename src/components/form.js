import React from "react";
import axios from "axios";

export default class Form extends React.Component {
state={
    data:[],
    error:false
}
submitFormHandler = event => {
    event.preventDefault()}

    render() {
let datas = this.state.data
    const users = Object.keys(datas).map(id => ( <option>{datas[id].userName}</option>))

    
        return(
            <form onSubmit={this.submitFormHandler}>
            <select>{users}</select>
            </form>
        )
    }
async componentDidMount() {
    const response = await axios.get("http://localhost:3007/user");
    this.setState({data: response.data});
    console.log(response.data)
}
}