import React, { useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import axios from "axios";
import TypewriterLoader from "./TypewriterLoader";
import { Link } from "react-router-dom";
// import doodle from '../assets/'

const PetShops = () => {
  const [petShops, setPetShops] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [monkeyPosition, setMonkeyPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    axios.get("https://astitva-backend.onrender.com/api/petshops").then((response) => {
      setPetShops(response.data);
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMonkeyPosition({
        x: e.pageX,
        y: e.pageY,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? "" : category);
    setIsSidebarOpen(false);
  };

  const filteredShops = petShops.filter((shop) => {
    const matchesSearch = shop.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      !selectedCategory || shop.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className=" h-[88vh] overflow-hidden w-full lg:flex text-white lg:flex-row py-10 gap-5">
      {/* Category Sidebar Button */}
      <button
        className={`lg:hidden px-4 py-2 rounded z-50 top-4 ${isSidebarOpen ? "w-1 text-black left-4" : "w-auto bg-teal-600 text-white"
          }`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "" : "Open Categories"}
      </button>

      {/* Sidebar - Categories Section */}
      <div
        className={`hello bg-transparent overflow-scroll max-h-[80vh] backdrop-blur-3xl border p-4 flex flex-col space-y-4 text-white rounded-lg transition-transform duration-1000 z-40 ${isSidebarOpen ? "translate-x-0" : "-translate-x-[50rem]"
          } lg:translate-x-0 lg:w-[25%] fixed top-20 left-0 lg:static`}
      >
        <div className="flex flex-row gap-20 text-white">
          <h2 className="text-3xl font-bold ">Categories</h2>
          <button
            className="lg:hidden px-4 py-2 rounded z-50 top-4 right-4"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <IoIosCloseCircle size={32} color="white" />
          </button>
        </div>
        <hr />
        <div className="hello h-[80vh] overflow-scroll">
        {[
          "",
          "Medical Supplies",
          "Food Supplies",
          "Pet Accessories",
          "Pet Teachers",
          "Grooming Services",
          "Clothes Supplies",
        ].map((category) => (
          <button
            key={category}
            className={`p-8  w-[100%] mt-4  overflow-hidden rounded-lg transition ${selectedCategory === category ? "bg-teal-900" : "bg-teal-600"
              } hover:bg-teal-800`}
            onClick={() => handleCategoryClick(category)}
          >
            {category !== "" ? category : "All Available Shops"}
          </button>
        ))}

        </div>
        
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-4 px-0 -mt-96 lg:mt-0 overflow-scroll-x">
        {/* Search Bar */}
        <div className="flex flex-wrap gap-2 items-center">
          <h1 className="text-3xl font-bold text-teal-400">Pet Shops</h1>
          <input
            type="text"
            placeholder="Search shops..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow p-2 rounded-lg border-2 border-teal-400 bg-[#121e34] text-white focus:outline-none focus:ring focus:ring-teal-300"
          />
          <button className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-800 transition">
            Search
          </button>
        </div>

        {/* Pet Shop Grid */}
        <div className=" hello grid h-[80vh] overflow-x-hidden overflow-scroll grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2">
          {filteredShops.length > 0 ? (
            filteredShops.map((shop, index) => (
              
              <Link to={`/petshops/${shop._id}`}>
                <div
                  key={index}
                  className="bg-black border rounded-3xl shadow-md hover:shadow-lg transition duration-200 p-6"
                >
                  <div className="flex h-[10rem] flex-col md:flex-row items-center gap-4">
                    {/* Image */}
                    <img
                      src={shop.image}
                      alt={shop.name}
                      className="w-[10rem] h-[10rem] object-cover rounded-full"
                    />

                    {/* Details */}
                    <div className="flex flex-col justify-center">
                      <h2 className="text-2xl font-bold text-teal-400">{shop.name}</h2>
                      <p className="text-gray-200">
                        <strong>Category:</strong> {shop.category}
                      </p>
                      <p className="text-gray-200">
                        <strong>Location:</strong> {shop.location}
                      </p>
                      <p className="text-gray-200">
                        <strong>Contact:</strong> {shop.contact}
                      </p>
                      <p className="text-gray-400 mt-2">{shop.description}</p>
                    </div>
                  </div>
                </div></Link>
            ))
          ) : (
            <div className="text-center text-3xl justify-center mt-[8rem] w-full flex col-span-full text-gray-300">
              {/* No pet shops found. */}
              <TypewriterLoader />
            </div>
          )}
        </div>
      </div>

      {/* Monkey Animation */}
      <div
        style={{
          position: "fixed",
          left: `${monkeyPosition.x} px`,
          top: `${monkeyPosition.y}px`,
          pointerEvents: "none",
          transition: "left 0.1s, top 0.1s",
        }}
      >
        {/* <img
          src={doodle} // Replace this with your monkey image URL
          alt="Monkey Animation"
          style={{
            width: "100px", // Increased size
            height: "100px", // Increased size
            opacity: 0.7, // Transparency (adjust between 0 and 1)
            transition: "left 0.1s, top 0.1s",
          }}
        /> */}
      </div>

    </div >
  );
};

export default PetShops;