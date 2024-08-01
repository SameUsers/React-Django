import React from 'react';



class ProductCard extends React.Component{
    constructor(props){
    super(props)
    this.state={url:"http://localhost:3000/ProductIndividual?" }
    }

    render(){
    return(<div>
    {this.props.apivalue.map((el)=><div key={el.id}>
        <div class="card">
        <div class="card-body">
        <h5 class="card-title">{el.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{el.price}$</h6>
        <p class="card-text">{el.description}</p>
        <a href={this.state.url+"id="+el.id} class="card-link">Подробнее</a>
        </div>
        </div>
        </div>)}
       </div> )
    }
}
export default ProductCard;