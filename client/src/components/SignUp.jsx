import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userSignUp } from "../redux/actions";

const SignUp = () => {
  const { user, loading } = useSelector((state) => state);
  console.log(loading);
  console.log(user);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userSignUp({ fullName, email, password, phone }));
  };

  return (
    <div>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <form>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button onClick={handleSubmit}>Confirm</button>
        </form>
      )}
      <Link to="/login">
        <p>
          do you have a account ?
          <br />
          go to Login page
        </p>
      </Link>
    </div>
  );
};

export default SignUp;
