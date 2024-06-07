// import React, { useState } from 'react';
// import { login } from '../../components/Authentication/Auth';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await login({ username, password });
//             if (response) {
               
//                 navigate('/home');
//             }
//         } catch (error) {
//             console.error('Login failed:', error);
         
//         }
//     };

//     return (
//         <form onSubmit={handleLogin} className='  w-75 p-3 h-75 d-inline-block shadow-lg p-3 mb-5 bg-body-tertiary rounded mt-10 position-absolute top-50 start-50 translate-middle'
//          >
//             <div className='login'>
//             </div>
//             <h1>LOGIN</h1>
//             <input
//                 type="text"
//                 placeholder='email'
//                 className='email form-control mt-5'
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//                 type="password"
//                 placeholder='password'
//                 className='password form-control  mt-5'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <div className="sign-in mt-5"> 
//                 <button type="submit" className="login btn btn-primary column-gap-3">LOGIN</button>
//                 <Link to = '/register'>
//                 <button type="submit" className="login btn btn-primary">REGISTER</button></Link>
//             </div>
//         </form>
//     );
// };

// export default Login;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     axios.post('http://localhost:8000/api/login/', { username, password })
//       .then(response => {
//         localStorage.setItem('access', response.data.access);
//         localStorage.setItem('refresh', response.data.refresh);
//         alert('User logged in successfully!');
//         navigate('/home');
//       })
//       .catch(error => {
//         console.error('There was an error logging in the user!', error);
//       });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleLogin();
//   };

//   return (
//     <div className='w-75 p-3 h-75 d-inline-block shadow-lg p-3 mb-5 bg-body-tertiary rounded mt-10 position-absolute top-50 start-50 translate-middle'>
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <input type="text"   className=' form-control  mt-5' placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
//       <input type="password"  className='form-control  mt-5' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <div className='row-gap-3'>
//       <button type="submit" className='login btn btn-primary'>Login</button>
//       </div>
//     </form>
//     </div>
//   );
// }

// export default Login;



// Login.jsx
import React, { useState } from 'react';
import axiosInstance from '../Interceptors/Axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.post('http://127.0.0.1:8000/token/', { username, password }, { withCredentials: true});
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;
      toast.success('Login successful!');
      navigate('/home');
    } catch (error) {
      toast.error('Login failed!');
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="Auth-form-container w-75 p-3 h-75 d-inline-block shadow-lg p-3 mb-5 bg-body-tertiary rounded mt-10 position-absolute top-50 start-50 translate-middle">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              className="form-control mt-5"
              placeholder="Enter Username"
              name="username"
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
      <ToastContainer />
    </div>
  );
}

export default Login;
