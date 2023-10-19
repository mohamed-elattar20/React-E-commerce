import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="container my-5">
        {!loading ? (
          <div className="row g-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="row justify-content-center align-items-center vh-100">
            <div class="spinner-border" role="status">
              <span class="visually-hidden ">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
