import React, { useState } from "react";
import axios from "axios";

const ItemVolunteerForm = () => {
  const [formData, setFormData] = useState({
    shelter_name: "",
    age: "",
    phone: "",
    email: "",
    availability_date: "",
    availability_time: "",
    current_location: "",
    items_to_donate: "",
    transportation: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/itemdonate",
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
        items_to_donate: "",
        transportation: "",
      });
    } catch (error) {
      alert("Error submitting volunteer information.");
      console.error(error);
    }
  };

  return (
    <div className="my-10 text-center">
      <form onSubmit={handleSubmit}>
        <label className="text-2xl" htmlFor="shelter_name">
          Name:
        </label>
        <br />
        <input
          type="text"
          placeholder="Enter Shelter Name"
          className="p-2 border border-teal-300 my-4 md:w-1/2 rounded-lg"
          name="shelter_name"
          value={formData.shelter_name}
          onChange={handleChange}
        />
        <br />
        <label className="text-2xl" htmlFor="age">
          Age:
        </label>
        <br />
        <input
          type="text"
          placeholder="Enter Your Age"
          className="p-2 border border-teal-300 my-4 md:w-1/2 rounded-lg"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />
        <label className="text-2xl" htmlFor="contact">
          Contact Details:
        </label>
        <br />
        <input
          type="text"
          placeholder="Enter Phone Number"
          className="p-2 border border-teal-300 my-4 md:w-1/2 rounded-lg"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          placeholder="Enter Email Address"
          className="p-2 border border-teal-300 my-4 md:w-1/2 rounded-lg"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label className="text-2xl" htmlFor="availability">
          Your Availability:
        </label>
        <br />
        <input
        title="hiii"
          type="date"
          className="p-2 border border-teal-300 my-4 md:w-1/2 rounded-lg"
          name="availability_date"
          value={formData.availability_date}
          onChange={handleChange}
        />
        <br />
        {/* <select
        title="hiii"
          className="p-2 border border-teal-300 my-4 md:w-1/2 rounded-lg"
          name="availability_time"
          value={formData.availability_time}
          onChange={handleChange}
        >
          <option value="">Select Time</option>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
        </select> */}
        <br />
        <label className="text-2xl" htmlFor="logistics">
          Donate Items
        </label>
        <br />
        <input
          type="text"
          placeholder="Enter Items to Donate"
          className="p-2 border border-teal-300 my-4 md:w-1/2 rounded-lg"
          name="items_to_donate"
          value={formData.items_to_donate}
          onChange={handleChange}
        />
        <br />
        <button
          type="submit"
          className="px-8 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ItemVolunteerForm;
