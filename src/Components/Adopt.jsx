// import React from 'react'
// // import { ForAdoption } from './Common'

// const ForAdoption = [
//       {
//           src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLeB32pU2TbimIrpSdavimue8Qj9wRmwZzQw&s',
//           name: "max",
//           age: "6 Months",
//           contact: 3876483482,
//           location: "Kalyanpur",
//           quote: "Money can buy you a fine dog, but only love can make him wag his tail."
//       },
//       {
//           src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxl4FYrJNSw2uaLqH0BoeNaOlb6KJYjupzIw&s',
//           name: "max",
//           age: "6 Months",
//           contact: 3876483482,
//           location: "Kalyanpur",
//           quote: "Money can buy you a fine dog, but only love can make him wag his tail."
//       },
//       {
//           src: 'https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg',
//           name: "max",
//           age: "6 Months",
//           contact: 3876483482,
//           location: "Kalyanpur",
//           quote: "Money can buy you a fine dog, but only love can make him wag his tail."
//       },
//       {
//           src: 'https://t3.ftcdn.net/jpg/05/59/27/48/360_F_559274893_O9iSRQwTKIkAooNTglilMgx2yMcXK9Or.jpg',
//           name: "max",
//           age: "6 Months",
//           contact: 3876483482,
//           location: "Kalyanpur",
//           quote: "Money can buy you a fine dog, but only love can make him wag his tail."
//       },
//       {
//           src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLW9WTw8SuNL4khSD81LpkflLN0iTm0cw56g&s',
//           name: "max",
//           age: "6 Months",
//           contact: 3876483482,
//           location: "Kalyanpur",
//           quote: "Money can buy you a fine dog, but only love can make him wag his tail." 
//       },
//       {
//           src: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
//           name: "max",
//           age: "6 Months",
//           contact: 3876483482,
//           location: "Kalyanpur",
//           quote: "Money can buy you a fine dog, but only love can make him wag his tail." 
//       }
//   ]

// const ContactUs = () => {
//   return (
//     <>
//     <div id='adopt'>
//     <h1 className='text-3xl md:text-4xl lg:text-6xl text-center my-10 border-b border-teal-300 p-3 leading-normal'>Adopt these <span className='bg-gradient-to-r from-teal-200 to-teal-500 text-transparent bg-clip-text
//     font-bold italic'>Little One's</span></h1>
//     <div className='my-10 grid lg:grid-cols-2 w-full'>
//       {
//         ForAdoption.map((data, index) => (
//           <div className="grid md:grid-cols-3 border border-white p-4 rounded-lg m-3 justify-center items-center  hover:bg-white hover:text-black" key={index}>
//             <div className="mx-auto hover:border p-3 hover:border-black hover:scale-105 rounded-lg">
//               <img src={data.src} alt="puppy" className='rounded-lg'/>
//             </div>
//             <div className="text-center my-4 mx-3">
//               <h3 className='text-xl'><span className='bg-gradient-to-r from-teal-200 to-teal-500 text-transparent bg-clip-text
//     font-bold italic text-2xl mr-3'>Name:- </span>{data.name}</h3>
//               <h3 className='text-xl'><span className='bg-gradient-to-r from-teal-200 to-teal-500 text-transparent bg-clip-text
//     font-bold italic text-2xl mr-3'>Age:-</span>{data.age}</h3>
//               <h3 className='text-xl'><span className='bg-gradient-to-r from-teal-200 to-teal-500 text-transparent bg-clip-text
//     font-bold italic text-2xl mr-3'>Contact:-</span>{data.contact}</h3>
//               <h3 className='text-xl'><span className='bg-gradient-to-r from-teal-200 to-teal-500 text-transparent bg-clip-text
//     font-bold italic text-2xl mr-3'>Location:-</span>{data.location}</h3>
//             </div>
//             <h1 className='hidden md:inline-block md:mx-auto md:text-xl md:ml-3'>{data.quote}</h1>
//           </div>
//         ))
//       }
//     </div>
//     </div>
//     </>
//   )
// }

// export default ContactUs


import React, { useState } from "react";

const ForAdoption = [
      {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLeB32pU2TbimIrpSdavimue8Qj9wRmwZzQw&s',
          name: "max",
          age: "6 Months",
          contact: 3876483482,
          location: "Kalyanpur",
          quote: "Money can buy you a fine dog, but only love can make him wag his tail."
      },
      {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxl4FYrJNSw2uaLqH0BoeNaOlb6KJYjupzIw&s',
          name: "max",
          age: "6 Months",
          contact: 3876483482,
          location: "Kalyanpur",
          quote: "Money can buy you a fine dog, but only love can make him wag his tail."
      },
      {
          src: 'https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg',
          name: "max",
          age: "6 Months",
          contact: 3876483482,
          location: "Kalyanpur",
          quote: "Money can buy you a fine dog, but only love can make him wag his tail."
      },
      {
          src: 'https://t3.ftcdn.net/jpg/05/59/27/48/360_F_559274893_O9iSRQwTKIkAooNTglilMgx2yMcXK9Or.jpg',
          name: "max",
          age: "6 Months",
          contact: 3876483482,
          location: "Kalyanpur",
          quote: "Money can buy you a fine dog, but only love can make him wag his tail."
      },
      {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLW9WTw8SuNL4khSD81LpkflLN0iTm0cw56g&s',
          name: "max",
          age: "6 Months",
          contact: 3876483482,
          location: "Kalyanpur",
          quote: "Money can buy you a fine dog, but only love can make him wag his tail." 
      },
      {
          src: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
          name: "max",
          age: "6 Months",
          contact: 3876483482,
          location: "Kalyanpur",
          quote: "Money can buy you a fine dog, but only love can make him wag his tail." 
      }
  ]

const ContactUs = () => {
  const [selectedDog, setSelectedDog] = useState(null);  
  const [favorites, setFavorites] = useState([]);  

  const toggleFavorite = (name) => {
    setFavorites((prev) =>
      prev.includes(name) ? prev.filter((fav) => fav !== name) : [...prev, name]
    );
  };

  return (
    <div id="adopt" className="min-h-screen py-10">
      <h1 className="text-3xl md:text-4xl lg:text-6xl text-center my-10 border-b border-teal-300 p-3 leading-normal">
        Adopt these{" "}
        <span className="bg-gradient-to-r from-teal-200 to-teal-500 text-transparent bg-clip-text font-bold italic">
          Little One's
        </span>
      </h1>

      {/* Adoption Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {ForAdoption.map((data, index) => (
          <div
            key={index}
            className="group relative flex flex-col border border-gray-300 dark:border-gray-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4"
          >
            {/* Favorite Icon */}
            <div
              className="absolute top-3 right-3 cursor-pointer text-2xl text-gray-400 hover:text-red-500 transition-all"
              onClick={() => toggleFavorite(data.name)}
            >
              {favorites.includes(data.name) ? "❤️" : "🤍"}
            </div>

            {/* Image Section */}
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={data.src}
                alt={`Adopt ${data.name}`}
                className="w-full h-48 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text Details */}
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-bold text-teal-500 dark:text-teal-400 mb-1">
                Name: <span className="text-gray-700 dark:text-gray-300">{data.name}</span>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Age: <span className="font-medium">{data.age}</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Location: <span className="font-medium">{data.location}</span>
              </p>
              <a
                href={`tel:${data.contact}`}
                className="text-sm text-teal-500 dark:text-teal-400 hover:underline mt-2"
              >
                Contact: {data.contact}
              </a>
            </div>

            {/* Quote */}
            {/* <blockquote className="absolute top-2 left-2 text-xs italic text-gray-500 dark:text-gray-400 hidden group-hover:block transition-opacity duration-300">
              "{data.quote}"
            </blockquote> */}

            {/* Adopt Button */}
            <button
              className="mt-4 w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-all duration-300"
              onClick={() => setSelectedDog(data)}
            >
              More Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal for More Details */}
      {selectedDog && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedDog(null)}
        >
          <div
            className="backdrop-blur-3xl rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-teal-500 dark:text-teal-400 mb-4">
              {selectedDog.name}
            </h2>
            <img
              src={selectedDog.src}
              alt={`Details of ${selectedDog.name}`}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Age:</strong> {selectedDog.age}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Location:</strong> {selectedDog.location}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Contact:</strong> {selectedDog.contact}
            </p>
            <p className="text-gray-700 dark:text-gray-300 italic">
              "{selectedDog.quote}"
            </p>
            <button
              className="mt-4 w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-all duration-300"
              onClick={() => setSelectedDog(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
