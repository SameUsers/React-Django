
import React from 'react';








class Description extends React.Component{
    render(){
    return(
<div>
  <div className="CardIndividual">
        <div className="Card"class="card">
  <div class="card-header">
    {this.props.price}
  </div>
    <div className="Name">
        <p>{this.props.name}</p>
    </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>{this.props.info}</p>
    </blockquote>
  </div>
</div>
    </div>
</div>
    )

    }
}


export default Description;




