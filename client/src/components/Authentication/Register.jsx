// import React from 'react'

// function Register() {
//   return (
//     <div>
//        <form className='  w-75 p-3 h-75 d-inline-block shadow-lg p-3 mb-5 bg-body-tertiary rounded mt-10 position-absolute top-50 start-50 translate-middle'
//          >
//             <div className='login'>
//             </div>
//             <h1>REGISTER</h1>
//             <input
//                 type="text"
//                 placeholder='email'
//                 className='email form-control mt-5'

//             />
//             <input
//                 type="password"
//                 placeholder='password'
//                 className='password form-control  mt-5'

//             />
//             <div className="sign-in mt-5">

//                 <button type="submit" className="register btn btn-primary">REGISTER</button>
//             </div>
//         </form>
//     </div>
//   )
// }

// export default Register
import React, { useState } from "react";
import axiosInstance from "../Interceptors/Axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("http://127.0.0.1:8000/api/register/", {
        username,
        password,
        email,
        password2,
        first_name,
        last_name
      });
      toast.success("User registered successfully!");
      navigate("/login");
    } catch (error) {
      toast.error("There was an error registering the user!");
      console.error("There was an error registering the user!", error);
    }
  };

  return (
    <div className="w-75 p-3 h-75 d-inline-block shadow-lg p-3 mb-5 bg-body-tertiary rounded mt-10 position-absolute top-50 start-50 translate-middle">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          className="form-control mt-5"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="text"
          className="form-control mt-5"
          placeholder="First Name"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          className="form-control mt-5"
          placeholder="Last Name"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-control mt-5"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-control mt-5"
          placeholder="Confirm Password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          required
        />
        <input
          type="email"
          className="form-control mt-5"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="register btn btn-primary mt-3">
          Register
        </button>
      </form>
      <Link to="/login">Login if you have an account</Link>
      <ToastContainer />
    </div>
  );
}

export default Register;
