import React from 'react';
import SearchBar from "./SearchBar"
import NavBar from "./NavBar"
import "./ProductListStyle.css"







class ProductCardMain extends React.Component{
    render(){
    return(
    <div className="Absolute">
        <div className="Navbar">
            <NavBar/>
        </div>
        <div className="TextArea">
            <SearchBar/>
        </div>
    </div>
    )

    }
}


export default ProductCardMain;
