// import React, { useState } from "react";
// import axios from "axios";

// const ItemVolunteerForm = () => {
//   const [formData, setFormData] = useState({
//     shelter_name: "",
//     age: "",
//     phone: "",
//     email: "",
//     availability_date: "",
//     availability_time: "",
//     current_location: "",
//     items_to_donate: "",
//     transportation: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "https://astitva-backend.onrender.com/api/itemdonate",
//         formData
//       );
//       alert("Volunteer information submitted successfully!");
//       console.log(response.data);
//       setFormData({
//         shelter_name: "",
//         age: "",
//         phone: "",
//         email: "",
//         availability_date: "",
//         availability_time: "",
//         current_location: "",
//         items_to_donate: "",
//         transportation: "",
//       });
//     } catch (error) {
//       alert("Error submitting volunteer information.");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="my-10 text-center">
//       <form onSubmit={handleSubmit}>
//         <label className="text-2xl" htmlFor="shelter_name">
//           Name:
//         </label>
//         <br />
//         <input
//           type="text"
//           placeholder="Enter Shelter Name"
//           className="p-2 border border-teal-300 my-4 md:w-1/2 rounded-lg"
//           name="shelter_name"
//           value={formData.shelter_name}
//           onChange={handleChange}
//         />
//         <br />
//         <label className="text-2xl" htmlFor="age">
//           Age:
//         </label>
//         <br />
//         <input
//           type="text"
//           placeholder="Enter Your Age"
//           className="p-2 border border-teal-300 my-4 md:w-1/2 rounded-lg"
//           name="age"
//           value={formData.age}
//           onChange={handleChange}
//         />
//         <br />
//         <label className="text-2xl" htmlFor="contact">
//           Contact Details:
//         </label>
//         <br />
//         <input
//           type="text"
//           placeholder="Enter Phone Number"
//           className="p-2 border border-teal-300 my-4 md:w-1/2 rounded-lg"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           type="email"
//           placeholder="Enter Email Address"
//           className="p-2 border border-teal-300 my-4 md:w-1/2 rounded-lg"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <br />
//         <label className="text-2xl" htmlFor="availability">
//           Your Availability:
//         </label>
//         <br />
//         <input
//         title="hiii"
//           type="date"
//           className="p-2 border border-teal-300 my-4 md:w-1/2 rounded-lg"
//           name="availability_date"
//           value={formData.availability_date}
//           onChange={handleChange}
//         />
//         <br />
//         {/* <select
//         title="hiii"
//           className="p-2 border border-teal-300 my-4 md:w-1/2 rounded-lg"
//           name="availability_time"
//           value={formData.availability_time}
//           onChange={handleChange}
//         >
//           <option value="">Select Time</option>
//           <option value="morning">Morning</option>
//           <option value="afternoon">Afternoon</option>
//           <option value="evening">Evening</option>
//         </select> */}
//         <br />
//         <label className="text-2xl" htmlFor="logistics">
//           Donate Items
//         </label>
//         <br />
//         <input
//           type="text"
//           placeholder="Enter Items to Donate"
//           className="p-2 border border-teal-300 my-4 md:w-1/2 rounded-lg"
//           name="items_to_donate"
//           value={formData.items_to_donate}
//           onChange={handleChange}
//         />
//         <br />
//         <button
//           type="submit"
//           className="px-8 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-800"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ItemVolunteerForm;



import React, { useState } from "react";
import axios from "axios";

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    shelter_name: "",
    age: "",
    phone: "",
    email: "",
    availability_date: "",
    availability_time: "",
    current_location: "",
    transportation: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://astitva-backend.onrender.com/api/volunteer",
        formData
      );
      alert("Volunteer information submitted successfully!");
      console.log(response.data);
      setFormData({
        shelter_name: "",
        age: "",
        phone: "",
        email: "",
        availability_date: "",
        availability_time: "",
        current_location: "",
        transportation: "",
      });
    } catch (error) {
      alert("Error submitting volunteer information.");
      console.error(error);
    }
  };

  return (
    <div className="my-10 px-4 lg:px-16 py-10 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-teal-600 mb-8">
        Volunteer with Us
      </h1>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        {/* Shelter Name */}
        <div className="mb-6">
          <label htmlFor="shelter_name" className="block text-xl font-semibold text-teal-700 mb-2">
            Shelter Name:
          </label>
          <input
            type="text"
            placeholder="Enter Shelter Name"
            name="shelter_name"
            value={formData.shelter_name}
            onChange={handleChange}
            className="w-full p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Age */}
        <div className="mb-6">
          <label htmlFor="age" className="block text-xl font-semibold text-teal-700 mb-2">
            Age:
          </label>
          <input
            type="text"
            placeholder="Enter Your Age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Contact Details */}
        <div className="mb-6">
          <label htmlFor="phone" className="block text-xl font-semibold text-teal-700 mb-2">
            Phone:
          </label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-xl font-semibold text-teal-700 mb-2">
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Availability */}
        <div className="mb-6">
          <label htmlFor="availability_date" className="block text-xl font-semibold text-teal-700 mb-2">
            Availability Date:
          </label>
          <input
            type="date"
            name="availability_date"
            value={formData.availability_date}
            onChange={handleChange}
            className="w-full p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Availability Time */}
        <div className="mb-6">
          <label htmlFor="availability_time" className="block text-xl font-semibold text-teal-700 mb-2">
            Availability Time:
          </label>
          <select
            name="availability_time"
            value={formData.availability_time}
            onChange={handleChange}
            className="w-full p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Select Time</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </div>

        {/* Current Location */}
        <div className="mb-6">
          <label htmlFor="current_location" className="block text-xl font-semibold text-teal-700 mb-2">
            Current Location:
          </label>
          <input
            type="text"
            placeholder="Enter Current Location"
            name="current_location"
            value={formData.current_location}
            onChange={handleChange}
            className="w-full p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Transportation Details */}
        <div className="mb-6">
          <label htmlFor="transportation" className="block text-xl font-semibold text-teal-700 mb-2">
            Transportation Details:
          </label>
          <input
            type="text"
            placeholder="Enter Transportation Details"
            name="transportation"
            value={formData.transportation}
            onChange={handleChange}
            className="w-full p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Submit Button */}
        <div className="mb-6">
          <button
            type="submit"
            className="w-full px-4 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default VolunteerForm;
