//  React
// import { useEffect, useState } from "react";
// Components
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";
// Hooks
import useGetProducts from "../../Hooks/useProducts";

const Products = () => {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");
  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       let { data } = await axios.get("https://fakestoreapi.com/products");
  //       setProducts((prevState) => [...prevState, ...data]);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error.message);
  //       setLoading(false);
  //     }
  //   };
  //   getProducts();
  // }, []);
  const [products, loading, error] = useGetProducts();
  return (
    <>
      <div className="container my-5">
        {loading ? (
          <div className="row justify-content-center align-items-center vh-100">
            <Loading />
          </div>
        ) : !error ? (
          <div className="row g-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <h1 className="display-1">{error}</h1>
        )}
      </div>
    </>
  );
};

export default Products;
