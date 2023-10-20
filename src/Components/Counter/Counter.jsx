import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter((prevState) => prevState + 1);
  };
  const decrement = () => {
    if (counter > 0) {
      setCounter((prevState) => prevState - 1);
    }
  };
  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 d-flex align-align-items-center justify-content-center align-content-center">
            <button onClick={decrement} className="btn btn-danger">
              Decrement
            </button>
            <h2 className="mx-5">{counter}</h2>
            <button onClick={increment} className="btn btn-primary">
              Increment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
