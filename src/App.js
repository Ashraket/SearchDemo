import { Component } from "react"
import Search from "./components/Search"
import List from "./components/List"

import NEWSLIST from "./news.json"

export default class App extends Component{

    constructor(){
        super()
        this.state={
            newsList:NEWSLIST,
            filterList:NEWSLIST

        }
    }
    filtered=(keywords)=>{
        const filteredlist=this.state.newsList.filter((item)=>{return item.title.toLowerCase().includes(keywords.toLowerCase())})
        this.setState({filterList:filteredlist})

    }
    render(){
        return(
            <div>
                <h1 className="header"> List Search Demo</h1>
                <Search searchedkeyword={this.filtered}></Search>
                <List list={this.state.filterList}></List>
            </div>
        )
    }

}