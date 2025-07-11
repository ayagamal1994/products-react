import "./Register.css";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import { useForm } from 'react-hook-form';

const Register = () => {
  const {register, handleSubmit, formState, watch} = useForm();




  console.log("state", formState)
  const onSubmit = (data) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const existing = users.find((u) => u.email === data.email);
  if (existing) {
    alert("This email is already registered.");
    return;
  }

  users.push(data);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(data));
  alert("Registered successfully!");
  window.location.href = "/";

  console.log(users)
};


  return (
    <>
      <Nav />

      <section className="register d-flex justify-content-center align-items-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              
              
              <input className="form-control"
                type="text"
                placeholder="User Name"
                {...register("user", {
                  required: {
                    value: true,
                    message: "user name is required",
                  },
                  pattern: {
                    value: /^\S+$/,
                    message: "No spaces allowed"
                  }
                })}
              />
              {formState.errors.user? 
                <p className="error">{formState.errors.user.message}</p>: <p className="error"></p>
              }

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
                placeholder="Password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is required",
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=~`{}[\]|:;"'<>,.?/\\]).+$/,
                    message: "Password must contain at least 1 uppercase letter, 1 number, and 1 special character",
                  }
                })}
              />
              {formState.errors.password? 
                <p className="error">{formState.errors.password.message}</p>: <p className="error"></p>
              }

              <input className="form-control"
                type="password"
                placeholder="confirm Password"
                {...register("confirmpassword", {
                  required: {
                    value: true,
                    message: "password is required",
                  },
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match"
                })}
              />
              {formState.errors.password? 
                <p className="error">{formState.errors.confirmpassword.message}</p>: <p className="error"></p>
              }

              <input className="form-control" type="text" placeholder="address"/>
              <button className=" btn">register</button>
            </form>
      </section>

      <Footer />
    </>
  )
}

export default Register