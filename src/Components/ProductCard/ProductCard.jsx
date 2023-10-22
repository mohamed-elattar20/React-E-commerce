import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../Redux/Slices/cartSlice";
const ProductCard = ({ product }) => {
  const { cartCounter } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();

  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-3">
        <div className="card border-0 shadow rounded-4 p-2">
          <Link to={`/products/${product.id}`} className="hover-container">
            <img
              style={{ height: "300px", objectFit: "contain" }}
              src={product.image}
              className="card-img-top  rounded-4 hover"
              alt="..."
            />
          </Link>
          <div className="card-body">
            <h5
              style={{ height: "3rem", overflow: "hidden" }}
              className="card-title"
            >
              {product.title}
            </h5>
            <p
              style={{ height: "4.8rem", overflow: "hidden" }}
              className="card-text"
            >
              {product.description}
            </p>
            <p className="card-text lead">${product.price}</p>
            <p
              className={`${
                product.rating.rate >= 3 ? "bg-success " : "bg-danger "
              }card-text lead rounded-pill w-25 text-center text-light `}
            >
              {product.rating.rate}
            </p>
            <button className="btn btn-dark me-2">Buy Now</button>
            <Link to={`/products/${product.id}`} className="btn btn-primary">
              Show Details
            </Link>
            <div className="mt-3">
              <button
                onClick={() => dispatch(decrement())}
                className="btn btn-danger me-2  "
              >
                Remove
              </button>
              <button
                onClick={() => dispatch(increment())}
                className="btn btn-warning"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
