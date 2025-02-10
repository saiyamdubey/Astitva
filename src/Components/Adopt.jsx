import React, { useState } from "react";
import Footer from "./Footer";


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
    src: "https://t3.ftcdn.net/jpg/02/36/99/22/360_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg",
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
    src: "https://d2zp5xs5cp8zlg.cloudfront.net/image-85281-800.jpg",
    name: "Daisy",
    age: "4 Months",
    contact: 6876483482,
    location: "Hazratganj",
    quote: "Dogs are not our whole life, but they make our lives whole.",
  },
  {
    src: 'https://media.istockphoto.com/id/154027287/photo/a-baby-calf-standing-in-a-meadow-during-the-day.jpg?s=612x612&w=0&k=20&c=trYyE9CltT7D7_7VtCyPnCfwW0N3SGND41z6dAVGpjY=',
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
  },
  {
    src: "https://d2zp5xs5cp8zlg.cloudfront.net/image-85281-800.jpg",
    name: "Daisy",
    age: "4 Months",
    contact: 6876483482,
    location: "Hazratganj",
    quote: "Dogs are not our whole life, but they make our lives whole.",
  },
  {
    src: 'https://media.istockphoto.com/id/154027287/photo/a-baby-calf-standing-in-a-meadow-during-the-day.jpg?s=612x612&w=0&k=20&c=trYyE9CltT7D7_7VtCyPnCfwW0N3SGND41z6dAVGpjY=',
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {ForAdoption.map((data, index) => (
          <div
            key={index}
            className="flex relative bg-black shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-all duration-300 border-2"
          >
            {/* Favorite Icon */}
            <div
              className="absolute top-3 right-3 cursor-pointer text-2xl text-gray-400 hover:text-red-500"
              onClick={() => toggleFavorite(data.name)}
            >
              {favorites.includes(data.name) ? "❤" : "🤍"}
            </div>

            {/* Image Section */}
            <div className="rounded-50%">
              <img
                src={data.src}
                alt={`Adopt ${data.name}`}
                className="w-full p-3  h-56 object-contain rounded-3xl"
              />
            </div>

            {/* Text Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-teal-600">{data.name}</h3>
              <p className="text-gray-200">
                Age: <span className="font-medium">{data.age}</span>
              </p>
              <p className="text-gray-200">
                Location: <span className="font-medium">{data.location}</span>
              </p>
              <a
                href={`tel:${data.contact}`}
                className="block mt-2 text-teal-500 hover:underline text-lg font-bold"
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
      <Footer/>
    </div>
  );
};

export default ContactUs;