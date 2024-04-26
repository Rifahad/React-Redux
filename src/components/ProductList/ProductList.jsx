import products from "../../api/Products.json";
import  BeforeCart from "./CartButtons/BeforeCart";
import AfterCart from "./CartButtons/AfterCart";
import './Productlist.css'
import { useState } from "react";

function ProductList() {
   const [count, setCount]=useState(0);

   const addToCart =()=>{
      setCount(1)
   }
  return (
    <section className="container">
    {products?.map((product, key) => (
       <div className="product-container" key={key}>
          <img src={product?.image} alt="" />
          <h3>{product?.title}</h3>
          {count > 0 ? <AfterCart/> : <BeforeCart addToCart={addToCart}/>}
          
       </div>
    ))}
 </section>
  )
}

export default ProductList
