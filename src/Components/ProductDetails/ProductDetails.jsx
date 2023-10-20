import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProduct(data);
        setLoading(true);
      });
  }, []);
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {loading ? (
            <div className="card mb-3 border-0 shadow-lg p-5 rounded-4 ">
              <div className="row g-4">
                <div className="col-md-4">
                  <img
                    style={{ height: "400px", objectFit: "cover" }}
                    src={product.image}
                    className="img-fluid rounded-4"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fs-1 mb-3">{product.title}</h5>
                    <p className="card-text lead ">{product.description}</p>

                    <p
                      className={`${
                        product.rating?.rate >= 3 ? "bg-success " : "bg-danger "
                      }card-text lead rounded-pill w-25 text-center text-light `}
                    >
                      Rate : {product.rating?.rate}
                    </p>
                    <p className="card-text">
                      <small className="text-muted fs-3 fw-bold ">
                        ${product.price}
                      </small>
                    </p>
                    <Link to="/" className="btn btn-dark">
                      Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="row justify-content-center align-items-center vh-100">
              <div className="spinner-border" role="status">
                <span className="visually-hidden ">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
