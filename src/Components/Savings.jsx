// import React from 'react'

// const Savings = () => {
//   return (
//     <>
//     <div className="" id='savings'>
//     <h1 className='lg:text-6xl text-4xl text-center lg:my-24 my-14 p-3 border-b border-white leading-normal'>Some of them to whom <span className='text-4xl lg:text-6xl bg-gradient-to-l from-teal-200 to-teal-500 text-transparent bg-clip-text font-bold'>"we helped"</span></h1>
//       {
//         saving.map((data, index) => (
//           <div className=" md:text-2xl flex flex-col lg:flex-row mt-10 lg:my-20 my-10 p-3 border border-teal-200 rounded-lg" key={index}>
//             <h1 className='text-4xl italic bg-gradient-to-l from-teal-200 to-teal-500 text-transparent bg-clip-text font-bold'>{data.name}</h1>
//             <div className="h-1/3 mt-5 flex flex-col items-center justify-center border p-2 rounded-lg lg:w-1/3 lg:m-2">
//               <h1 className='text-center text-3xl border-b mb-3 md:text-4xl  leading-normal'>Before</h1>
//               <img src={data.before} alt="before treatment" className='lg:h-[400px] md:h-[350px]' />
//               <p className='mt-5 text-xl text-center md:text-2xl'>{data.before_text}</p>
//             </div>
//             <div className="h-1/3 mt-10 flex flex-col items-center justify-center border p-2 rounded-lg lg:w-1/3 lg:m-2">
//               <h1 className='text-center text-3xl border-b mb-3 l md:text-4xl leading-normal'>Treatment</h1>
//               <video src={data.treatment} loop muted autoPlay className='h-[300px] lg:h-[400px]'>Browser dosen't support the video</video>
//               <p className='mt-5 text-xl text-center md:text-2xl'>{data.treatment_text}</p>
//             </div>
//             <div className="h-1/3 mt-10 flex flex-col items-center justify-center border p-2 rounded-lg lg:w-1/3 lg:m-2">
//               <h1 className='text-center text-3xl border-b mb-3 md:text-4xl  leading-normal'>After</h1>
//               <img src={data.after} alt="after treatment image" className='lg:h-[400px] md:h-[350px]' />
//               <p className='mt-5 text-xl text-center md:text-2xl'>{data.after_text}</p>
//             </div>
//           </div>
//         ))
//       }
//       </div>
//       </>
//   )
// }

// export default Savings

import { Compare } from "../Components/ui/compare";
import React from "react";
import { saving } from "../constant/Common";

const Savings = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="lg:text-6xl text-4xl text-center lg:my-24 my-14 p-3 border-b border-white leading-normal">
        Some of them to whom{" "}
        <span className="text-4xl lg:text-6xl bg-gradient-to-l from-teal-200 to-teal-500 text-transparent bg-clip-text font-bold">
          "we helped"
        </span>
      </h1>

      <div className="grid gap-10 lg:grid-cols-1 p-4 w-full max-w-screen-xl">
        {saving.map((data, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 p-6"
          >
            {/* Treatment Section */}
            <div className="flex flex-col items-center lg:items-center lg:w-1/2">
              <div className="relative w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] mb-4 flex justify-center items-center">
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
              <h2 className="text-center text-2xl mt-4 mb-4 font-bold text-teal-400">
                {data.title || `Case #${index + 1}`}
              </h2>
              <p className="text-xl text-center md:text-2xl">
                {data.treatment_text}
              </p>
            </div>

            {/* Comparison Section */}
            <div className="relative flex items-center justify-center lg:w-1/2 mt-8 lg:mt-0">
              {/* Before label */}
              <p className="absolute left-[-70px] lg:left-[-20px] text-2xl font-semibold text-teal-400 dark:text-gray-300 transform -rotate-90">
                Before
              </p>

              {/* Compare Component */}
              <Compare
                firstImage={data.before}
                secondImage={data.after}
                firstImageClassName="object-cover object-left-top"
                secondImageClassname="object-cover object-left-top"
                className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
                slideMode="hover"
                autoplay={true}
              />

              {/* After label */}
              <p className="absolute right-[-70px] lg:right-[-20px] text-2xl font-semibold text-teal-400 dark:text-gray-300 transform rotate-90">
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



