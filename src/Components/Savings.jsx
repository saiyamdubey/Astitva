// import { Compare } from "../Components/ui/compare";
// import React from "react";
// // import { saving } from "./Common";
// import bhuribefore from '../assets/before.jpg'
// import bhuriafter from '../assets/after.jpg'
// import treatmentvideo from '../assets/video.mp4'
// import mouse1 from '../assets/mouse1.png'
// import mouse2 from '../assets/mouse2.png'
// import cow from '../assets/cow.webp'
// import cow1 from '../assets/cow1.webp'

// const saving = [
//   {
//       name: "King ",
//       before: mouse2,
//       before_text: "We got a call from a wise man told that she is lost and injured",
//       treatment: treatmentvideo,
//       treatment_text: "We provided basics medics like painkiller, Antibiotics, etc and helped her to relocate",
//       after: mouse1,
//       after_text: "This is the after treatment condition of bhuri now with her family and healthy"
//   },
//   {
//       name: "Billo",
//       before:cow1,
//       before_text: "We got a call from a wise man told that she is lost and injured",
//       treatment: treatmentvideo,
//       treatment_text: "We provided basics medics like painkiller, Antibiotics, etc and helped her to relocate",
//       after: cow,
//       after_text: "This is the after treatment condition of bhuri now with her family and healthy"
//   },
//   {
//       name: "Sheru",
//       before: bhuribefore,
//       before_text: "We got a call from a wise man told that she is lost and injured",
//       treatment: treatmentvideo,
//       treatment_text: "We provided basics medics like painkiller, Antibiotics, etc and helped her to relocate",
//       after: bhuriafter,
//       after_text: "This is the after treatment condition of bhuri now with her family and healthy"
//   }
// ]

// const Savings = () => {
//   return (
//     <div className="flex flex-col justify-center items-center">
//       <h1 className="lg:text-6xl text-4xl text-center lg:my-24 my-14 p-3 border-b border-white leading-normal">
//         Some of them to whom{" "}
//         <span className="text-4xl lg:text-6xl bg-gradient-to-l from-teal-200 to-teal-500 text-transparent bg-clip-text font-bold">
//           "we helped"
//         </span>
//       </h1>

//       <div className="grid gap-10 lg:grid-cols-1 p-4 w-full max-w-screen-xl">
//         {saving.map((data, index) => (
//           <div
//             key={index}
//             className="flex flex-col lg:flex-row items-center border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 p-6"
//           >
//             {/* Treatment Section */}
//             <div className="flex flex-col items-center lg:items-center lg:w-1/2">
//               <div className="relative w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] mb-4 flex justify-center items-center">
//                 {/* Rounded circle */}
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-l from-teal-200 to-teal-500 opacity-50"></div>
//                 <video
//                   src={data.treatment}
//                   loop
//                   muted
//                   autoPlay
//                   className="relative w-full h-full rounded-full object-cover"
//                 >
//                   Browser doesn't support the video
//                 </video>
//               </div>
//               <h2 className="text-center text-2xl mt-4 mb-4 font-bold text-teal-400">
//                 {data.title || `Case #${index + 1}`}
//               </h2>
//               <p className="text-xl text-center md:text-2xl">
//                 {data.treatment_text}
//               </p>
//             </div>

//             {/* Comparison Section */}
//             <div className="relative flex items-center justify-center lg:w-1/2 mt-8 lg:mt-0">
//               {/* Before label */}
//               <p className="absolute left-[-70px] lg:left-[-20px] text-2xl font-semibold text-teal-400 dark:text-gray-300 transform -rotate-90">
//                 Before
//               </p>

//               {/* Compare Component */}
//               <Compare
//                 firstImage={data.before}
//                 secondImage={data.after}
//                 firstImageClassName="object-cover object-left-top"
//                 secondImageClassname="object-cover object-left-top"
//                 className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
//                 slideMode="hover"
//                 autoplay={true}
//               />

//               {/* After label */}
//               <p className="absolute right-[-70px] lg:right-[-20px] text-2xl font-semibold text-teal-400 dark:text-gray-300 transform rotate-90">
//                 After
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Savings;


import { Compare } from "../Components/ui/compare";
import React from "react";
import bhuribefore from "../assets/before.jpg";
import bhuriafter from "../assets/after.jpg";
import treatmentvideo from "../assets/video.mp4";
import mouse1 from "../assets/mouse1.png";
import mouse2 from "../assets/mouse2.png";
import cow from "../assets/cow.webp";
import cow1 from "../assets/cow1.webp";

const saving = [
  {
    name: "King ",
    before: mouse2,
    before_text: "We got a call from a wise man told that she is lost and injured",
    treatment: treatmentvideo,
    treatment_text:
      "We provided basics medics like painkiller, Antibiotics, etc and helped her to relocate",
    after: mouse1,
    after_text: "This is the after treatment condition of bhuri now with her family and healthy",
  },
  {
    name: "Billo",
    before: cow1,
    before_text: "We got a call from a wise man told that she is lost and injured",
    treatment: treatmentvideo,
    treatment_text:
      "We provided basics medics like painkiller, Antibiotics, etc and helped her to relocate",
    after: cow,
    after_text: "This is the after treatment condition of bhuri now with her family and healthy",
  },
  {
    name: "Sheru",
    before: bhuribefore,
    before_text: "We got a call from a wise man told that she is lost and injured",
    treatment: treatmentvideo,
    treatment_text:
      "We provided basics medics like painkiller, Antibiotics, etc and helped her to relocate",
    after: bhuriafter,
    after_text: "This is the after treatment condition of bhuri now with her family and healthy",
  },
];

const Savings = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="lg:text-6xl text-4xl text-center lg:my-24 my-14 p-3 border-b border-white leading-normal">
        Some of them to whom{" "}
        <span className="text-4xl lg:text-6xl bg-gradient-to-l from-teal-200 to-teal-500 text-transparent bg-clip-text font-bold">
          "we helped"
        </span>
      </h1>

      <div className="grid gap-10 p-4 w-full max-w-screen-xl">
        {saving.map((data, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center justify-center border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 p-6 gap-8"
          >
            {/* Treatment Section */}
            <div className="flex flex-col items-center justify-center lg:w-1/2 text-center">
              <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] mb-4 flex justify-center items-center mx-auto">
                {/* Rounded circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-l from-teal-200 to-teal-500 opacity-50"></div>
                <video
                  src={data.treatment}
                  loop
                  muted
                  autoPlay
                  className="relative w-full h-full rounded-full object-cover"
                >
                  Browser doesn't support the video
                </video>
              </div>
              <h2 className="text-2xl mt-4 mb-4 font-bold text-teal-400">
                {data.name || `Case #${index + 1}`}
              </h2>
              <p className="text-base md:text-xl lg:text-2xl">
                {data.treatment_text}
              </p>
            </div>

            {/* Comparison Section */}
            <div className="relative flex items-center justify-center lg:w-1/2">
              {/* Before label */}
              <p className="absolute left-[-50px] md:left-[-60px] lg:left-[-70px] text-sm md:text-xl lg:text-2xl font-semibold text-teal-400 dark:text-gray-300 transform -rotate-90">
                Before
              </p>

              {/* Compare Component */}
              <Compare
                firstImage={data.before}
                secondImage={data.after}
                firstImageClassName="object-cover object-left-top"
                secondImageClassname="object-cover object-left-top"
                className="h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px] mx-auto"
                slideMode="hover"
                autoplay={true}
              />

              {/* After label */}
              <p className="absolute right-[-50px] md:right-[-60px] lg:right-[-70px] text-sm md:text-xl lg:text-2xl font-semibold text-teal-400 dark:text-gray-300 transform rotate-90">
                After
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Savings;
