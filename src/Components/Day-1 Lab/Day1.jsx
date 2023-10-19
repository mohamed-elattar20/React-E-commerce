import { useState } from "react";

const Day1 = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "mohamed", age: 24 },
    { id: 2, name: "Ali", age: 30 },
    { id: 3, name: "Ahmed", age: 28 },
  ]);
  //
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [counter, setCounter] = useState(3);
  //
  const addName = (e) => {
    setName(e.target.value);
  };
  const addAge = (e) => {
    setAge(e.target.value);
  };
  //
  const addUser = () => {
    if (name.length != 0 && age.length != 0) {
      setUsers([{ id: counter, name: name, age: age }, ...users]);
      setCounter(counter + 1);
    }
  };
  const deleteUser = (userName) => {
    setUsers(users.filter((user) => user.name !== userName));
  };
  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center ">
          <div className="col-12">
            <label className="lead mb-2">Name</label>
            <input
              className="form-control mb-3"
              type="text"
              onChange={(e) => addName(e)}
              placeholder="Enter Your Name"
            />
            <label className="lead mb-2">Age</label>
            <input
              className="form-control "
              type="text"
              onChange={(e) => addAge(e)}
              placeholder="Enter Your age"
            />
          </div>
        </div>
        <div className="row justify-content-center ">
          <button className="btn btn-primary w-25 my-4" onClick={addUser}>
            Add User
          </button>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#Id</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
              </tr>
            </thead>

            {users.map((user, index) => (
              <tbody key={index}>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>
                    <button
                      onClick={() => deleteUser(user.name)}
                      className="btn btn-danger "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default Day1;
