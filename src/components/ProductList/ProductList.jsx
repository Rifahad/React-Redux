import { useState } from "react";
import './Productlist.css'
import products from "../../api/Products.json";
import  BeforeCart from "./CartButtons/BeforeCart";
import AfterCart from "./CartButtons/AfterCart";
import { useSelector, useDispatch } from "react-redux";

function ProductList() {
   const {cartCount}=useSelector((state)=>state.cart)

  return (
    <section className="container">
    {products?.map((product, key) => (
       <div className="product-container" key={key}>
          <img src={product?.image} alt="" />
          <h3>{product?.title}</h3>
          {cartCount > 0 ? <AfterCart/> : <BeforeCart/>}
          
       </div>
    ))}
 </section>
  )
}

export default ProductList
