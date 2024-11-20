// import React, { useState } from "react";
// import axios from "axios";

// const VolunteerForm = () => {
//   const [formData, setFormData] = useState({
//     shelter_name: "",
//     location: "",
//     contact: "",
//     active_inactive: "",
//     ratings: "",
//     slogan: "",
//     src: "hello",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:8000/register/add",
//         formData
//       );
//       alert("Shelter added successfully!");
//       console.log(response.data);
//       setFormData({
//         shelter_name: "",
//         location: "",
//         contact: "",
//         active_inactive: "",
//         ratings: "",
//         slogan: "",
//         src: "",
//       });
//     } catch (error) {
//       alert("Error adding shelter.");
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

//         <label className="text-2xl" htmlFor="location">
//           Age :
//         </label>
//         <br />
//         <input
//           type="text"
//           placeholder="Enter Shelter Location"
//           className="p-2 border border-teal-300 my-4 md:w-1/2 rounded-lg"
//           name="location"
//           value={formData.location}
//           onChange={handleChange}
//         />
//         <br />
//         <div className=" mx-auto p-2 border border-teal-300  md:w-1/2 rounded-lg w-[30rem] h-[8rem] bg-transparent">
//           <div className="">
//             <label className="text-2xl" htmlFor="contact">
//               Contact Details:
//             </label>
//           </div>
//           <div className="gap-5 flex justify-center ">
//             <input
//               type="text"
//               placeholder="Enter Phone Number"
//               className="p-2  border border-teal-300 my-4 md:w-1/3 rounded-lg"
//               name="contact"
//               value={formData.contact}
//               onChange={handleChange}
//             />
//             <input
//               type="text"
//               placeholder="Enter Email Address"
//               className="p-2  border border-teal-300 my-4 md:w-1/3 rounded-lg"
//               name="contact"
//               value={formData.contact}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <br />
//         <div className=" mx-auto p-2 border border-teal-300  md:w-1/2 rounded-lg w-[30rem] h-[8rem] bg-transparent">
//           <div className="">
//             <label className="text-2xl" htmlFor="contact">
//               Your Availability
//             </label>
//             <br />
//           </div>
//           <div className="gap-5 flex justify-center ">
//             <input
//               type="date"
//               placeholder="Enter Phone Number"
//               className="p-2  border border-teal-300 my-4 md:w-1/3 rounded-lg"
//               name="contact"
//               value={formData.contact}
//               onChange={handleChange}
//             />
//             <select
//               className="border-spacing-0  rounded-xl border-2 outline-none h-12 mt-[1rem]"
//               name=""
//               id=""
//             >
//               <option value="morning">morning</option>
//               <option value="evening">evening</option>
//               <option value="AftrNoon">AftrNoon</option>
//               <option value="Good Night">Good Night</option>
//             </select>
//           </div>
//         </div>
//         <br />
//         <label className="text-2xl" htmlFor="contact">
//           Logistics / Transportation
//         </label>
//         <br />
//         <div className="flex-row justify-center gap-7">
//           <input
//             type="text"
//             placeholder="Enter Your Current Location"
//             className="p-2  border border-teal-300 my-4 md:w-1/5 rounded-lg"
//             name="contact"
//             value={formData.contact}
//             onChange={handleChange}
//           />
//           <div className="w-10"></div>
//           <input
//             type="text"
//             placeholder="Enter Your  Transportation"
//             className="p-2 border border-teal-300 my-4 md:w-1/5 rounded-lg"
//             name="contact"
//             value={formData.contact}
//             onChange={handleChange}
//           />
//         </div>
//         <br />
//       </form>
//     </div>
//   );
// };

// export default VolunteerForm;






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
        "http://localhost:8000/api/volunteer",
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
        <select
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
        </select>
        <br />
        <label className="text-2xl" htmlFor="logistics">
          Logistics / Transportation:
        </label>
        <br />
        <input
          type="text"
          placeholder="Enter Current Location"
          className="p-2 border border-teal-300 my-4 md:w-1/2 rounded-lg"
          name="current_location"
          value={formData.current_location}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Transportation Details"
          className="p-2 border border-teal-300 my-4 md:w-1/2 rounded-lg"
          name="transportation"
          value={formData.transportation}
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

export default VolunteerForm;
