import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { cartCounter } = useSelector((state) => state.cartSlice);
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg text-light sticky-top">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4 " to="/">
            Shopify
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link
                  className="nav-link nav active"
                  aria-current="page"
                  to="/products"
                >
                  home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/day1-lab">
                  Add Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/counter">
                  Counter
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/to-do">
                  ToDo
                </Link>
              </li>
              <li className="nav-item nav-link  ">CART : {cartCounter}</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
