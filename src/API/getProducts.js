import axios from "axios";

const getProducts = async () => {
  try {
    let { data } = await axios.get("https://fakestoreapi.com/products");
    return data;
  } catch (error) {
    throw new Error("Error in getting Data");
  }
};

export default getProducts;
