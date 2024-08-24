import React from 'react';
import FotoArea from "./FotoArea"
import Description from "./Description"
import axios from "axios"
import "./ProductIndividualStyle.css"




class ProductIndividual extends React.Component{
    constructor(props){
    super(props)
    this.state={api:[],id:[]}
    const searchParams = new URLSearchParams(window.location.search);
    const paramValue = searchParams.get('id');
    this.setState({id:paramValue})
    const baseurl="http://127.0.0.1:8000/API/OneFlatAPI/"
    axios.get(baseurl+paramValue).then(res=>this.setState({api:res.data}))

    }


    render(){
    return(
<div>
    <div className="Description">
          <Description info={this.state.api.description} price={this.state.api.price+"$"} name={this.state.api.name}/>
    </div>
    <div>
        <FotoArea url={this.state.api.img}/>
        <p className="Date">Дата создания: {this.state.api.date}</p>
        <p className="Members"> Количество мест: {this.state.api.members}</p>
        <p className="Members"> Местоположение: {this.state.api.location}</p>
    </div>


</div>
    )
    }

}


export default ProductIndividual;
