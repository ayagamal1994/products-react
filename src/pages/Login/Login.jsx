import React from 'react';
import "./Login.css";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import { useForm } from 'react-hook-form';
const Login = () => {
  const {handleSubmit, formState, register, setError} = useForm();

  console.log("state", formState);

  const onSubmit = (data) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const found = users.find(
    (u) => u.email === data.email && u.password === data.password
  );

  if (found) {
    localStorage.setItem("currentUser", JSON.stringify(found));
    window.location.href = "/";
  } else {
    setError("email", {
      type: "manual",
      message: "email is not correct",
    });
    setError("password", {
      type: "manual",
      message: "password is not correct",
    });
  }
};

  return (
    <>
      <Nav />

      <section className="login d-flex align-items-center justify-content-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className="form-control"
            type="text"
            placeholder="Your Email"
            {...register("email", {
              required: {
                value: true,
                message: "email is required",
              },
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "enter a valid email",
              }
            })}
          />
          {formState.errors.email? 
            <p className="error">{formState.errors.email.message}</p>: <p className="error"></p>
          }
          <input className="form-control"
            type="password"
            placeholder="Your Password"
            {...register("password", {
              required: {
                value: true,
                message: "password is required",
              },
            })}
          />
          {formState.errors.password?
            <p className="error">{formState.errors.password.message}</p>: <p className="error"></p>
          }
          <button className="btn btn-primary">login</button>
        </form>
      </section>

      <Footer />
    </>
  )
}

export default Login