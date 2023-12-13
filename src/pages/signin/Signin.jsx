import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addEmail,
  addFirstName,
  addLastName,
  addPassword,
} from "../../features/users/userSlice";
import "./signin.css";

const Signin = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  console.log(user);
  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleForm = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.firstName);
    dispatch(addFirstName(formData.firstName));
    dispatch(addLastName(formData.lastName));
    dispatch(addEmail(formData.email));
    dispatch(addPassword(formData.password));
  };

  return (
    <section className="signin">
      <div className="container">
        <h1 className="signup_heading">Register User</h1>
        <form action="" className="signup_form">
          <input
            className="input_field"
            type="text"
            name="firstName"
            placeholder="Enter Your First Name"
            onChange={handleForm}
          />
          <input
            className="input_field"
            type="text"
            name="lastName"
            placeholder="Enter Your Last Name"
            onChange={handleForm}
          />
          <input
            className="input_field"
            type="text"
            name="email"
            placeholder="Enter Your Email"
            onChange={handleForm}
          />
          <input
            className="input_field"
            type="password"
            name="password"
            placeholder="Enter Your Password"
            onChange={handleForm}
          />
          <button onClick={handleSubmit} className="btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Signin;
