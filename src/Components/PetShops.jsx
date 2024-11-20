


import React, { useEffect, useState } from "react";
import axios from "axios";

const PetShops = () => {
  const [petShops, setPetShops] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    axios.get("https://astitva-backend.onrender.com/api/petShops").then((response) => {
      setPetShops(response.data);
    });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? "" : category);
  };

  const filteredShops = petShops.filter((shop) => {
    const matchesSearch = shop.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      !selectedCategory || shop.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#0a1324] text-white w-full flex  gap-5">
      {/* Sidebar */}
      <div className="w-1/4 bg-teal-700 p-4 flex flex-col space-y-4 text-white rounded-lg h-[85vh] overflow-hidden">
        <h2 className="text-3xl font-bold">Categories</h2>
        {[
          "",
          "Medical Supplies",
          "Food Supplies",
          "Pet Accessories",
          "Grooming Services",
        ].map((category) => (
          <button
            key={category}
            className={`p-12 mt-10 rounded-lg transition ${
              selectedCategory === category
                ? "bg-teal-900"
                : "bg-teal-600"
            } hover:bg-teal-800`}
            onClick={() => handleCategoryClick(category)}
          >
            {category !== "" ? (category) : ("All Available Shops")} 
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-10">
        {/* Search Bar */}
        <div className="flex  items-center">
          <h1 className="text-3xl font-bold text-teal-400">Pet Shops</h1>
          <input
            type="text"
            placeholder="Search shops..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 ml-auto mr-6 rounded-lg border-2 border-teal-400 bg-[#121e34] text-white focus:outline-none focus:ring focus:ring-teal-300"
          />
          <button
            className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-800 transition"
          >
            Search
          </button>
        </div>

        {/* Pet Shop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          {filteredShops.length > 0 ? (
            filteredShops.map((shop, index) => (
              <div
                key={index}
                className="bg-black border rounded-3xl shadow-md hover:shadow-lg transition duration-200 p-6"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Image */}
                  <img
                    src={shop.image}
                    alt={shop.name}
                    className="w-[15rem] h-[15rem] object-cover rounded-full"
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
              </div>
            ))
          ) : (
            <div className="text-center text-3xl mt-[10rem] col-span-full text-gray-300">
              No pet shops found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PetShops;
