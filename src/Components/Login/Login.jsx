import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <h1 className="text-center mb-3 display-2 bg-secondary p-5 rounded-4 w-50 fw-medium bg-opacity-50 ">
            Login
          </h1>
          <div className="col-9">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="mb-3">
                <label htmlFor="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  {...register("username", {
                    required: "Username is req",
                    minLength: {
                      value: 5,
                      message: "Username minimum Length is 5",
                    },
                  })}
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                {errors.username && (
                  <span className="text-danger mt-2">
                    {errors.username.message}
                  </span>
                )}
              </div>
              <div class="mb-3">
                <label htmlFor="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "Password is req",
                    minLength: {
                      value: 5,
                      message: "password minimum Length is 5",
                    },
                  })}
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
                {errors.password && (
                  <span className="text-danger mt-2">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
