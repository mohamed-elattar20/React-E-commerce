import { Route, Routes } from "react-router-dom";
// Components
import Day1 from "./Components/Day-1 Lab/Day1";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Login from "./Components/Login/Login";
import About from "./Components/About/About";
import NotFound from "./Components/Not-found/NotFound";
import Counter from "./Components/Counter/Counter";
import ToDo from "./Components/ToDo/ToDo";
import Signup from "./Components/Signup/Signup";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/day1-lab" element={<Day1 />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/to-do" element={<ToDo />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
