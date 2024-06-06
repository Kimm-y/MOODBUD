import { Link } from 'react-router-dom'
import image1 from './assets/Images/image1.jpg'


const imagesList = [
  {
    id: 1,
    src: image1,
    alt: "Image 1",
  },
];

function App() {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100' style={{ backgroundColor: '#bef5ff' }}>
      <div className='w-75 p-3 d-inline-block shadow-lg p-3 rounded' style={{ backgroundColor: '#67E9FF' }}>
        <h1 className='text-center mt-5 fs-1 text-nowrap fw-light mb-4'>WELCOME TO MOOD BUD</h1>
        <div className="d-flex justify-content-center mb-4 column-gap-3">
          <button className='login btn btn-primary mr-3'><Link to="/login" className='text-decoration-none text-white'>LOGIN</Link></button>
          <button className='login btn btn-primary'><Link to="/register" className='text-decoration-none text-white'>REGISTER</Link></button>
        </div>
        <div className="d-flex justify-content-center">
          {imagesList.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              width="250"
              height="250"
              className="rounded-circle mr-3"
            />
          ))}
    
        </div>
      </div>
    </div>
  );
}

export default App;




