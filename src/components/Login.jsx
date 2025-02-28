import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router-dom";
import './Login.css'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <div className="input-group">
            <div className="title-box">
                <h2>Login</h2>
            </div>
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="input-group">
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>

        <Button type="submit" buttonText="Login" />

        <p>
          Don't have an account? <Link to="/sign-up">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
