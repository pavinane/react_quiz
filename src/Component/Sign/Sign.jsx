import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Sign.scss";

const Sign = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    if (data) {
      return navigate("/ques1", { state: data });
    }
  };
  // watch input value by passing the name of it

  return (
    <div className="bg-dark user-login d-flex align-items-center">
      <div className="sign-form col-md-4 m-auto p-4 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex flex-column gap-3"
        >
          <input
            {...register("name", { required: "Name is Required" })}
            placeholder="Enter Name"
          />

          <p className="text-danger">{errors.name?.message}</p>

          <input
            {...register("mail", { required: "Email Address is required" })}
            placeholder="Enter Eamil"
          />
          <p className="text-danger">{errors.mail?.message}</p>

          <select {...register("gender")}>
            <option value="male">male</option>
            <option value="female">female</option>

            <option value="other">other</option>
          </select>

          <button type="submit" className="btn btn-danger mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sign;
