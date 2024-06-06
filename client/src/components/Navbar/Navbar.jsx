// import React from 'react'
// import { Link } from 'react-router-dom'
// import './Navbar.css'
// import image1 from '../../assets/Images/image1.jpg'
// import React, { useState, useEffect} from 'react';

// const imagesList = [
//   {
//     id: 1,
//     src: image1,
//     alt: "Image 1",
//   },
//   // {
//   //   id: 2,
//   //   src: image2,
//   //   alt: "Image 2",
//   // },
//   // {
//   //   id: 3,
//   //   src: image3,
//   //   alt: "Image 3",
//   // },
// ];

// const Navbar = () => {

//   const [isAuth, setIsAuth] = useState(false);

// useEffect(() => {
//     if (localStorage.getItem('access_token') !== null) {
//         setIsAuth(true);
//     }
// }, [isAuth]);


//   return (

//     <>

// <nav class="navbar bg-body-tertiary">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">
//     {imagesList.map((image) => (
//         <img key={image.id} src={image.src} alt={image.alt} width="30" height="24" class="d-inline-block align-text-top"/>
//       ))}
//       MOOD BUD
//     </a>
//    <Link to = '/articles'> <button class="btn btn-outline-primary" type="submit">ARTICLES</button></Link>
//     <Link to= '/profile'> <button class="btn btn-outline-primary" type="submit"> MY PROFILE</button></Link>
//     <Link to='/form'><button class="btn btn-outline-primary" type="submit">DAILY CHECK-UP</button></Link>
//     <div>
//           {isAuth ? <Nav.Link href="/logout">Logout</Nav.Link> :  
//                     <Nav.Link href="/login">Login</Nav.Link>}
//           </div>
//   </div>
// </nav>

// </>

//   )
// }

// export default Navbar



// bg-body-tertiary

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import image1 from '../../assets/Images/image1.jpg';

const imagesList = [
  {
    id: 1,
    src: image1,
    alt: "Image 1",
  },
  // {
  //   id: 2,
  //   src: image2,
  //   alt: "Image 2",
  // },
  // {
  //   id: 3,
  //   src: image3,
  //   alt: "Image 3",
  // },
];

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
      setIsAuth(true);
    }
  }, []); // Empty dependency array to run once after initial render

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {imagesList.map((image) => (
              <img key={image.id} src={image.src} alt={image.alt} width="30" height="24" className="d-inline-block align-text-top"/>
            ))}
            MOOD BUD
          </a>
          <Link to='/articles'>
            <button className="btn btn-outline-primary" type="submit">ARTICLES</button>
          </Link>
          <Link to='/profile'>
            <button className="btn btn-outline-primary" type="submit">MY PROFILE</button>
          </Link>
          <Link to='/form'>
            <button className="btn btn-outline-primary" type="submit">DAILY CHECK-UP</button>
          </Link>
          <div>
            {isAuth ? (
              
              <Link to="/logout" className="nav-link "><button className="btn btn-outline-primary">Logout</button></Link>
            ) : (
              <Link to="/login" className="nav-link btn btn-outline-primary"> <button className="btn btn-outline-primary">Login</button></Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
