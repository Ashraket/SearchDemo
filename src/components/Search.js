import { Component } from "react";

export default class Search extends Component{

    constructor(props){
        super(props)
        this.state={
            keywords:''
        }
    }
    keywordchanged=(e)=>{
        this.setState({keywords:e.target.value})
        this.props.searchedkeyword(e.target.value)
    }
    render(){
        return(
            <div className="search-comp">
                <input type='text' value={this.state.keywords} onChange={this.keywordchanged} placeholder="search"></input>
                <p>Keywords:{this.state.keywords}</p>
                
            </div>
        )
    }
}