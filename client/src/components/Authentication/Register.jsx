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
import React, { useState } from 'react';
import axiosInstance from '../Interceptors/Axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/api/register/', { username, password, email });
      toast.success('User registered successfully!');
      navigate('/home');
    } catch (error) {
      toast.error('There was an error registering the user!');
      console.error('There was an error registering the user!', error);
    }
  };

  return (
    <div className='w-75 p-3 h-75 d-inline-block shadow-lg p-3 mb-5 bg-body-tertiary rounded mt-10 position-absolute top-50 start-50 translate-middle'>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input 
          type="text" 
          className='form-control mt-5'  
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          className='form-control mt-5' 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          className='form-control mt-5' 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <button type="submit" className='register btn btn-primary mt-3'>Register</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Register;


