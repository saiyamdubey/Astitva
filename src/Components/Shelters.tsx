import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search } from "lucide-react";
import Bearloading from "./bearloading";
import { Link } from "react-router-dom";
import Footer from "./Footer";

interface Shelter {
  shelter_name: string;
  location: string;
  contact: string;
  active_inactive: string;
  ratings: number;
  src?: string; // Optional property if not all shelters have an image
  slogan?: string; // Optional property if not all shelters have a slogan
}

const Shelters = () => {
  const [shelters, setShelters] = useState<Shelter[]>([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce logic for search input
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300); // Adjust delay as needed
    return () => clearTimeout(delayDebounce);
  }, [search]);

  // Fetch shelters based on debounced search term

  useEffect(() => {
    const fetchShelters = async () => {
      try {
        const res = debouncedSearch
          ? await axios.get(
              `https://astitva-backend.onrender.com/register/search?location=${debouncedSearch}`
            )
          : await axios.get(
              "https://astitva-backend.onrender.com/register/all"
              // "http://www.localhost:8000/register/all"
            );
        console.log("API Response:", res.data);
        setShelters(res.data);
      } catch (error) {
        console.error("Error fetching shelters:", error);
      }
    };
    fetchShelters();
  }, [debouncedSearch]);

  return (
    <div className="min-h-screen bg-transparent p-6 sm:p-8 lg:p-12">
      {/* Search Bar */}
      <div className="flex justify-center items-center mb-6">
        <div className="relative w-full max-w-md flex">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search shelters by location..."
            className="w-full p-3 sm:p-4 border border-gray-300 rounded-l-lg shadow-sm text-sm sm:text-base focus:outline-none focus:ring focus:ring-teal-300"
          />
          <button
            title="Search"
            className="bg-teal-500 text-white p-3 sm:p-4 rounded-r-lg hover:bg-teal-600 transition-all duration-300 ease-in-out flex items-center justify-center text-sm sm:text-base"
          >
            Search
            <Search className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Shelter List */}
      <div className="flex flex-col gap-6 sm:px-8 lg:px-32">
        {shelters.length > 0 ? (
          shelters.map((shelter, index) => (
            <Link to={`/shelters/${shelter._id}`}>
            <div
              key={index}
              className="bg-black border rounded-3xl shadow-md hover:shadow-lg transition duration-200 p-6 sm:p-8 md:p-9 flex flex-col md:flex-row items-center md:items-start"
            >
              {/* Logo on the left */}
              <div className="flex-shrink-0 mb-6 md:mb-0">
                <img
                  src={shelter.src}
                  alt="Shelter Logo"
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 object-cover rounded-full mx-auto md:mx-0"
                />
              </div>

              {/* Shelter Details in the middle */}
              <div className="flex flex-col justify-center w-full md:w-[40%] md:ml-8 text-center md:text-left">
                <h1 className="text-xl sm:text-2xl font-bold text-teal-400 mb-2">
                  {shelter.shelter_name}
                </h1>
                <p className="text-sm sm:text-base text-gray-200">
                  <strong>Location:</strong> {shelter.location}
                </p>
                <p className="text-sm sm:text-base text-gray-200">
                  <strong>Contact:</strong> {shelter.contact}
                </p>
                <p className="text-sm sm:text-base text-gray-200">
                  <strong>Status:</strong> {shelter.active_inactive}
                </p>
                <p className="text-sm sm:text-base text-gray-200">
                  <strong>Ratings:</strong> {shelter.ratings}/5
                </p>
                {shelter.slogan && (
                  <p className="text-sm sm:text-base text-gray-100 italic mt-2">
                    "{shelter.slogan}"
                  </p>
                )}
              </div>

              {/* Map iframe on the right */}
              <div className="w-full md:w-[30rem] md:h-[15rem] mt-6 md:mt-0">
                <iframe
                  className="w-full h-[12rem] sm:h-[15rem] rounded-lg"
                  title="Google Map"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28580.70340676968!2d80.23307383060461!3d26.436771368208582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47aaaa460ecd%3A0x509aaf4ca1259442!2sAnimal%20Shelter%20Kanpur!5e0!3m2!1sen!2sin!4v1731536134170!5m2!1sen!2sin"
                  loading="eager"
                ></iframe>
              </div>
            </div></Link>
          ))
        ) : (
          <div className="text-center text-xl sm:text-2xl justify-center mt-6 w-full flex text-gray-300">
            <Bearloading />
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Shelters;
