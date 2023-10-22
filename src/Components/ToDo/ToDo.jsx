import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../../Redux/Slices/toDoSlice";

const ToDo = () => {
  const { toDoArr } = useSelector((state) => state.toDoSlice);
  const dispatch = useDispatch();
  const inputToDo = useRef(null);
  const [inputVal, setInputVal] = useState("");
  const addToDoToSlice = () => {
    dispatch(addToDo(inputVal));
    setInputVal("");
    inputToDo.current.focus();
  };
  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-6">
            <label className="lead mb-2">ToDo</label>
            <input
              ref={inputToDo}
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Enter task"
              type="text"
              className="form-control"
            />
            <button onClick={addToDoToSlice} className="btn btn-primary my-4">
              Add Task
            </button>
            <ul>
              {toDoArr.map((toDo, index) => (
                <li
                  key={index}
                  className="list-unstyled lead bg-secondary p-4 rounded-2  fs-4 mb-2 bg-opacity-25"
                >
                  {toDo}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
