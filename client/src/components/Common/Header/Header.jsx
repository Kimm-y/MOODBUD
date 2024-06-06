// import React from 'react';
// import image1 from '../../../assets/Images/image1.jpg';

// const imagesList = [
//     {
//         id: 1,
//         src: image1,
//         alt: "Image 1",
//     },
// ];

// const Header = () => {
//     return (
//         <header className="bg-white shadow-md py-4">
//             <div className="container mx-auto px-4 flex items-center">
//                 <div className="flex space-x-4">
//                     {imagesList.map((image) => (
//                         <img
//                             key={image.id}
//                             src={image.src}
//                             alt={image.alt}
//                             className="w-32 h-32 rounded-full"
//                         />
//                     ))}
//                         <h1 className="text-3xl font-bold text-end">MOOD BUD</h1>
//                     <p className="text-end">A safe space to write whatever is on your mind and track your mood as you go about the journey to heal your mental health</p>
//                     <p className="text-end">Below you can read about a small snippet to help you better understand mental health</p>
//                 </div>
//                 {/* <div className="ml-4">
                
//                 </div> */}
//             </div>
//         </header>
//     );
// };

// export default Header;




import React from 'react';
import image1 from '../../../assets/Images/image1.jpg';

const imagesList = [
    {
        id: 1,
        src: image1,
        alt: "Image 1",
    },
];

const Header = () => {
    return (
        <header className="bg-white shadow-md py-4">
            <div className="container d-flex align-items-center">
                <div className="d-flex mr-5">
                    {imagesList.map((image) => (
                        <img
                            key={image.id}
                            src={image.src}
                            alt={image.alt}
                            width="250"
                            height="250"
                            className="rounded-circle mr-6"
                        />
                    ))}
                </div>
                <div>
                    <h1 className="display-2 ml-5">MOOD BUD</h1>
                    <div className=' ml-5'>
                    <p className=" text-muted  fs-5 ml-2">A safe space to write whatever is on your mind and track your mood as you go about the journey to heal your mental health</p>
                    <p className=" text-muted  fs-5 ml-5 ">Below you can read about a small snippet to help you better understand mental health</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;



