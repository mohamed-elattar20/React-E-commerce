// import axios from "axios";
import { useEffect, useState } from "react";
import getProducts from "../API/getProducts";
const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    // const getProducts = async () => {
    //   try {
    //     let { data } = await axios.get("https://fakestoreapi.com/products");
    //     setProducts((prevState) => [...prevState, ...data]);
    //     setLoading(false);
    //   } catch (error) {
    //     setError(error.message);
    //     setLoading(false);
    //   }
    // };
    getProducts()
      .then((res) => {
        setProducts((prevState) => [...prevState, ...res]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  return [products, loading, error];
};
export default useGetProducts;
