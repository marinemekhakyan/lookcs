import React from "react";
import "./Form.css";

const Form = ({ inputHandler, submitHandler }) => (
  <form className="form" onSubmit={submitHandler}>
    <div className="input-container">
      <input id="username" type="text" name="username" onChange={inputHandler} required />
      <span className="input-underline"></span>
      <label htmlFor="username" className="input-label">Username</label>
    </div>
    <div className="input-container">
      <input id="password" type="password" name="password" onChange={inputHandler} required />
      <span className="input-underline"></span>
      <label htmlFor="password" className="input-label">Password</label>
    </div>
    <div className="input-container">
      <input id="dob" type="date" name="dob" onChange={inputHandler} required />
      <span className="input-underline"></span>
      <label htmlFor="dob" className="input-label" id='dob'>Date of Birth</label>
    </div>
    <button className="btn">SUBMIT</button>
  </form>
);

export default Form;
