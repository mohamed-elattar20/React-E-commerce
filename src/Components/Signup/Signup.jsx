import Select from "react-select";
import { Controller, useForm } from "react-hook-form";
const Signup = () => {
  const options1 = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];
  const options2 = [
    { value: "reading", label: "Reading" },
    { value: "video Games", label: "Video Games" },
    { value: "fishing", label: "Fishing" },
    { value: "fishing", label: "Fishing" },
    { value: "traveling", label: "Traveling" },
  ];
  //
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    control,
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
            Register
          </h1>
          <div className="col-12">
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              {/* Username */}
              <div className="mb-3">
                <label htmlFor="exampleInputUsername1" className="form-label">
                  Username
                </label>
                <input
                  autoComplete="off"
                  {...register("username", {
                    required: "Username is req",
                    minLength: {
                      value: 5,
                      message: "Username minimum Length is 5",
                    },
                  })}
                  type="email"
                  className="form-control"
                  id="exampleInputUsername1"
                  aria-describedby="usernameHelp"
                />
                {errors.username && (
                  <span className="text-danger mt-2">
                    {errors.username.message}
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  autoComplete="off"
                  {...register("email", {
                    required: "Email is req",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
                      message: "Email must be like m@m",
                    },
                  })}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                {errors.email && (
                  <span className="text-danger mt-2">
                    {errors.email.message}
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "Password is req",
                    minLength: {
                      value: 6,
                      message: "Password min Length is 6",
                    },
                  })}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
                {errors.password && (
                  <span className="text-danger mt-2">
                    {errors.password.message}
                  </span>
                )}
              </div>
              {/* Check Password */}
              <div className="mb-3">
                <label
                  htmlFor="exampleInputConfirmPassword1"
                  className="form-label"
                >
                  Confirm Password
                </label>
                <input
                  {...register("ConfirmPassword", {
                    required: "Confirm your password",
                  })}
                  type="password"
                  className="form-control"
                  id="exampleInputConfirmPassword1"
                />
                {errors.ConfirmPassword && (
                  <span className="text-danger mt-2">
                    {errors.ConfirmPassword.message}
                  </span>
                )}
                {watch("ConfirmPassword") !== watch("password") &&
                getValues("ConfirmPassword") ? (
                  <span className="text-danger mt-2">password not match</span>
                ) : null}
              </div>
              {/* Gender */}
              <div className="mb-3">
                <label htmlFor="exampleInputGender1" className="form-label">
                  Choose Gender
                </label>
                <Controller
                  rules={{ required: "gender is req" }}
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <Select {...field} options={options1} />
                  )}
                />
                {errors.gender && (
                  <span className="text-danger mt-2">
                    {errors.gender.message}
                  </span>
                )}
              </div>
              {/* Hobbies */}
              <div className="mb-3">
                <label htmlFor="exampleInputHobbies1" className="form-label">
                  Choose Hobbies
                </label>
                <Controller
                  rules={{ required: "At Least on Hobby is req" }}
                  name="hobbies"
                  control={control}
                  render={({ field }) => (
                    <Select isMulti {...field} options={options2} />
                  )}
                />
                {errors.hobbies && (
                  <span className="text-danger mt-2">
                    {errors.hobbies.message}
                  </span>
                )}
              </div>
              {/* Terms and conditions */}
              <div className="mb-3 form-check">
                <input
                  {...register("terms", {
                    required: "Req",
                  })}
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  agree terms and conditions
                </label>
                {errors.terms && (
                  <span className="text-danger mt-2 ms-2  fw-bold">
                    {errors.terms.message}
                  </span>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
