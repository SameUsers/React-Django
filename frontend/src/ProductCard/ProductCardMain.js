import React from 'react';
import SearchBar from "./SearchBar"
import "./ProductListStyle.css"







class ProductCardMain extends React.Component{
    render(){
    return(
    <div className="Absolute">
        <div className="TextArea">
            <SearchBar/>
        </div>
    </div>
    )

    }
}


export default ProductCardMain;
