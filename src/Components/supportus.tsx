// import React from "react";
// import { Link } from "react-router-dom";

// const Supportus = () => {
//   return (
//     <div className="flex justify-center items-center bg-gradient-to-r from-gray-800 via-teal-900 to-gray-800 min-h-[81vh] pt-6 md:pt-12 px-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl">
//         {/* Donate Us Box */}
//         <div className="flex flex-col items-center text-center bg-teal-600 p-6 md:p-8 rounded-lg shadow-lg relative">
//           <p className="text-white text-lg md:text-2xl font-semibold italic mb-4">
//             "Your generosity changes lives."
//           </p>
//           <Link to="/login">
//             <button className="mt-6 px-24 py-6 bg-black text-white font-semibold rounded hover:bg-[#f0f3f3] hover:text-black transition duration-300 transform hover:scale-105">
//               Donate Us
//             </button>
//           </Link>
//         </div>

//         {/* Volunteer Box */}
//         <div className="flex flex-col items-center text-center bg-[#f6f5f5] p-6 md:p-8 rounded-lg shadow-lg">
//           <h2 className="text-xl md:text-3xl font-semibold text-black md:mt-6">
//             For All The Volunteers
//           </h2>
//           <p className="text-sm md:text-lg font-semibold text-gray-600 mt-2">
//             Join hands to make a difference!
//           </p>
//           <Link to="/VolunteerForm">
//             <button className="mt-6 px-8 py-8 bg-[#23ab94] text-white font-semibold rounded hover:bg-black hover:text-white transition duration-300 transform hover:scale-105">
//               Volunteers Form
//             </button>
//           </Link>
//         </div>

//         {/* Item Donation Box */}
//         <div className="flex flex-col items-center text-center bg-[#f6f5f5] p-6 md:p-8 rounded-lg shadow-lg">
//           <h2 className="text-xl md:text-3xl font-semibold text-black md:mt-6">
//             For Item Donation
//           </h2>
//           <p className="text-sm md:text-lg font-semibold text-gray-600 mt-2">
//             Every contribution matters!
//           </p>
//           <Link to="/VolunteerForm">
//             <button className="mt-6 px-8 py-8 bg-[#23ab94] text-white font-semibold rounded hover:bg-black hover:text-white transition duration-300 transform hover:scale-105">
//               Volunteers Form
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Supportus;
import React from "react";
import { Link } from "react-router-dom";

const Supportus = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-gray-800 via-teal-900 to-gray-800 min-h-[81vh] pt-6 md:pt-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl">
        {/* Donate Us Box */}
        <div className="flex flex-col items-center text-center bg-teal-600 p-8 rounded-lg shadow-lg relative">
          <p className="text-white text-lg md:text-2xl font-semibold italic mb-6">
            "Your generosity changes lives."
          </p>
          <Link to="/donate">
            <button className="px-10 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-100 hover:text-black transition duration-300 transform hover:scale-110">
              Donate Now
            </button>
          </Link>
        </div>

        {/* Volunteer Box */}
        <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Become a Volunteer
          </h2>
          <p className="text-gray-600 text-sm md:text-lg font-medium mb-6">
            Join hands to make a meaningful difference!
          </p>
          <Link to="/VolunteerForm">
            <button className="px-10 py-4 bg-[#23ab94] text-white font-semibold rounded-lg hover:bg-black hover:text-white transition duration-300 transform hover:scale-110">
              Volunteer Form
            </button>
          </Link>
        </div>

        {/* Item Donation Box */}
        <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Donate Items
          </h2>
          <p className="text-gray-600 text-sm md:text-lg font-medium mb-6">
            Every contribution matters!
          </p>
          <Link to="/ItemDonationForm">
            <button className="px-10 py-4 bg-[#23ab94] text-white font-semibold rounded-lg hover:bg-black hover:text-white transition duration-300 transform hover:scale-110">
              Donate Items
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Supportus;
