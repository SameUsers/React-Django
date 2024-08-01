import React from 'react';
import ProductCard from "./ProductCard"
import axios from "axios"


class SearchBar extends React.Component{
    constructor(props){
    super(props)
    this.state={api:[],searchbar:[],nextApi:'', baseurl:"http://127.0.0.1:8000/API/FlatsAPI/?limit=10"}
    this.searching=this.searching.bind(this)
    this.next=this.next.bind(this)
    axios.get(this.state.baseurl).then(res=>this.setState({nextApi:res.data.next}))
    axios.get(this.state.baseurl).then(res=>this.setState({api:res.data.results}))
    }


    render(){
    return(
<div className="MainAreaProductList">
    <form className="SearchBar">
        <label htmlFor="Search" >Поиск по цене</label>
            <input type ="text" class ="Search"placeholder="800.00" onChange={(e)=>this.setState({searchbar:e.target.value})}/>
            <button type="button" onClick={this.searching}>Подтвердить</button>
            <button type="submit">Сбросить фильтр</button>
    </form>
    <div className="Card">
        <ProductCard apivalue={this.state.api}/>
    <div className="Next">
        <input type="button" onClick={this.next} value="Next"/>
    </div>

    </div>

</div>



    )

    }
      searching(event){

        this.setState({api : this.state.api.filter(el => el.price === (this.state.searchbar))})
        }

        next(){
            this.setState({baseurl:this.state.nextApi})
            axios.get(this.state.baseurl).then(res=>this.setState({api:res.data.results}))
            axios.get(this.state.baseurl).then(res=>this.setState({nextApi:res.data.next}))
            console.log(this.state.nextApi)
        }


    }




export default SearchBar;
