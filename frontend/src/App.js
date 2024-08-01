import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainString from "./MainString/MainString"
import ProductCardMain from "./ProductCard/ProductCardMain"
import ProductIndividual from "./ProductIndividual/ProductIndividual"






class App extends React.Component{


    render(){
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainString/>} />
        <Route path="product/" element={<ProductCardMain/>} />
        <Route path="ProductIndividual/" element={<ProductIndividual/>} />

      </Routes>
    </BrowserRouter>)

    }
}


export default App;
