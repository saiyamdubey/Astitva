
// import React, { useState } from "react";

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
//   const [selectedDog, setSelectedDog] = useState(null);  
//   const [favorites, setFavorites] = useState([]);  

//   const toggleFavorite = (name) => {
//     setFavorites((prev) =>
//       prev.includes(name) ? prev.filter((fav) => fav !== name) : [...prev, name]
//     );
//   };

//   return (
//     <div id="adopt" className="min-h-screen py-10">
//       <h1 className="text-3xl md:text-4xl lg:text-6xl text-center my-10 border-b border-teal-300 p-3 leading-normal">
//         Adopt these{" "}
//         <span className="bg-gradient-to-r from-teal-200 to-teal-500 text-transparent bg-clip-text font-bold italic">
//           Little One's
//         </span>
//       </h1>

//       {/* Adoption Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
//         {ForAdoption.map((data, index) => (
//           <div
//             key={index}
//             className="group relative flex flex-col border border-gray-300 dark:border-gray-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4"
//           >
//             {/* Favorite Icon */}
//             <div
//               className="absolute top-3 right-3 cursor-pointer text-2xl text-gray-400 hover:text-red-500 transition-all"
//               onClick={() => toggleFavorite(data.name)}
//             >
//               {favorites.includes(data.name) ? "❤️" : "🤍"}
//             </div>

//             {/* Image Section */}
//             <div className="relative overflow-hidden rounded-lg mb-4">
//               <img
//                 src={data.src}
//                 alt={`Adopt ${data.name}`}
//                 className="w-full h-48 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
//               />
//             </div>

//             {/* Text Details */}
//             <div className="flex flex-col items-start">
//               <h3 className="text-lg font-bold text-teal-500 dark:text-teal-400 mb-1">
//                 Name: <span className="text-gray-700 dark:text-gray-300">{data.name}</span>
//               </h3>
//               <p className="text-sm text-gray-600 dark:text-gray-400">
//                 Age: <span className="font-medium">{data.age}</span>
//               </p>
//               <p className="text-sm text-gray-600 dark:text-gray-400">
//                 Location: <span className="font-medium">{data.location}</span>
//               </p>
//               <a
//                 href={`tel:${data.contact}`}
//                 className="text-sm text-teal-500 dark:text-teal-400 hover:underline mt-2"
//               >
//                 Contact: {data.contact}
//               </a>
//             </div>

//             {/* Quote */}
//             {/* <blockquote className="absolute top-2 left-2 text-xs italic text-gray-500 dark:text-gray-400 hidden group-hover:block transition-opacity duration-300">
//               "{data.quote}"
//             </blockquote> */}

//             {/* Adopt Button */}
//             <button
//               className="mt-4 w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-all duration-300"
//               onClick={() => setSelectedDog(data)}
//             >
//               More Details
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Modal for More Details */}
//       {selectedDog && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//           onClick={() => setSelectedDog(null)}
//         >
//           <div
//             className="backdrop-blur-3xl rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2 className="text-2xl font-bold text-teal-500 dark:text-teal-400 mb-4">
//               {selectedDog.name}
//             </h2>
//             <img
//               src={selectedDog.src}
//               alt={`Details of ${selectedDog.name}`}
//               className="w-full h-64 object-cover rounded-lg mb-4"
//             />
//             <p className="text-gray-700 dark:text-gray-300 mb-2">
//               <strong>Age:</strong> {selectedDog.age}
//             </p>
//             <p className="text-gray-700 dark:text-gray-300 mb-2">
//               <strong>Location:</strong> {selectedDog.location}
//             </p>
//             <p className="text-gray-700 dark:text-gray-300 mb-2">
//               <strong>Contact:</strong> {selectedDog.contact}
//             </p>
//             <p className="text-gray-700 dark:text-gray-300 italic">
//               "{selectedDog.quote}"
//             </p>
//             <button
//               className="mt-4 w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-all duration-300"
//               onClick={() => setSelectedDog(null)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContactUs;




import React, { useState } from "react";

const ForAdoption = [
  {
    src: "https://github.com/saiyamdubey/Astitva/blob/main/src/assets/1.jpg?raw=true",
    name: "Max",
    age: "6 Months",
    contact: 3876483482,
    location: "Kalyanpur",
    quote: "Money can buy you a fine dog, but only love can make him wag his tail.",
  },
  {
    src: "https://github.com/saiyamdubey/Astitva/blob/main/src/assets/2.jpg?raw=true",
    name: "Bella",
    age: "8 Months",
    contact: 4876483482,
    location: "Gomti Nagar",
    quote: "A dog is the only thing on earth that loves you more than you love yourself.",
  },
  {
    src: "https://github.com/saiyamdubey/Astitva/blob/main/src/assets/3.jpg?raw=true",
    name: "Charlie",
    age: "1 Year",
    contact: 5876483482,
    location: "Indira Nagar",
    quote: "Happiness is a warm puppy.",
  },
  {
    src: "https://github.com/saiyamdubey/Astitva/blob/main/src/assets/4.jpg?raw=true",
    name: "Daisy",
    age: "4 Months",
    contact: 6876483482,
    location: "Hazratganj",
    quote: "Dogs are not our whole life, but they make our lives whole.",
  },
  {
    src: 'https://github.com/saiyamdubey/Astitva/blob/main/src/assets/5.jpg?raw=true',
    name: "max",
    age: "6 Months",
    contact: 3876483482,
    location: "Kalyanpur",
    quote: "Money can buy you a fine dog, but only love can make him wag his tail."
  },
  {
    src: "https://github.com/saiyamdubey/Astitva/blob/main/src/assets/6.jpg?raw=true",
    name: "max",
    age: "6 Months",
    contact: 3876483482,
    location: "Kalyanpur",
    quote: "Money can buy you a fine dog, but only love can make him wag his tail."
  }
];

const ContactUs = () => {
  const [selectedDog, setSelectedDog] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (name) => {
    setFavorites((prev) =>
      prev.includes(name) ? prev.filter((fav) => fav !== name) : [...prev, name]
    );
  };

  return (
    <div id="adopt" className="min-h-screen bg-gray py-10">
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-center mb-10 font-extrabold text-teal-600">
        Adopt a{" "}
        <span className="bg-gradient-to-r from-teal-400 to-teal-600 text-transparent bg-clip-text">
          Furry Friend
        </span>
      </h1>

      {/* Adoption Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {ForAdoption.map((data, index) => (
          <div
            key={index}
            className="relative bg-black shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-all duration-300"
          >
            {/* Favorite Icon */}
            <div
              className="absolute top-3 right-3 cursor-pointer text-2xl text-gray-400 hover:text-red-500"
              onClick={() => toggleFavorite(data.name)}
            >
              {favorites.includes(data.name) ? "❤️" : "🤍"}
            </div>

            {/* Image Section */}
            <img
              src={data.src}
              alt={`Adopt ${data.name}`}
              className="w-full p-3  h-56 object-contain"
            />

            {/* Text Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-teal-600">{data.name}</h3>
              <p className="text-gray-600">
                Age: <span className="font-medium">{data.age}</span>
              </p>
              <p className="text-gray-600">
                Location: <span className="font-medium">{data.location}</span>
              </p>
              <a
                href={`tel:${data.contact}`}
                className="block mt-2 text-teal-500 hover:underline"
              >
                Contact: {data.contact}
              </a>
              <button
                className="mt-4 w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600"
                onClick={() => setSelectedDog(data)}
              >
                More Details
              </button>
            </div>
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
            className="relative bg-black rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl"
              onClick={() => setSelectedDog(null)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-teal-600 mb-4">
              {selectedDog.name}
            </h2>
            <img
              src={selectedDog.src}
              alt={`Details of ${selectedDog.name}`}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 mb-2">
              <strong>Age:</strong> {selectedDog.age}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Location:</strong> {selectedDog.location}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Contact:</strong> {selectedDog.contact}
            </p>
            <p className="italic text-gray-500">"{selectedDog.quote}"</p>
            <button
              className="mt-4 w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600"
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
