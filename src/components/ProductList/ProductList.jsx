import products from "../../api/Products.json";

const ProductList = () => {

   return (
      <section className="container">
         {products?.map((product, key) => (
            <div className="product-container" key={key}>
               <img src={product?.image} alt="" />
               <h3>{product?.title}</h3>
            </div>
         ))}
      </section>
   );
};

export default ProductList;