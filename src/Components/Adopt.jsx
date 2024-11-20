import React from 'react'
// import { ForAdoption } from './Common'

const ForAdoption = [
      {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLeB32pU2TbimIrpSdavimue8Qj9wRmwZzQw&s',
          name: "max",
          age: "6 Months",
          contact: 3876483482,
          location: "Kalyanpur",
          quote: "Money can buy you a fine dog, but only love can make him wag his tail."
      },
      {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxl4FYrJNSw2uaLqH0BoeNaOlb6KJYjupzIw&s',
          name: "max",
          age: "6 Months",
          contact: 3876483482,
          location: "Kalyanpur",
          quote: "Money can buy you a fine dog, but only love can make him wag his tail."
      },
      {
          src: 'https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg',
          name: "max",
          age: "6 Months",
          contact: 3876483482,
          location: "Kalyanpur",
          quote: "Money can buy you a fine dog, but only love can make him wag his tail."
      },
      {
          src: 'https://t3.ftcdn.net/jpg/05/59/27/48/360_F_559274893_O9iSRQwTKIkAooNTglilMgx2yMcXK9Or.jpg',
          name: "max",
          age: "6 Months",
          contact: 3876483482,
          location: "Kalyanpur",
          quote: "Money can buy you a fine dog, but only love can make him wag his tail."
      },
      {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLW9WTw8SuNL4khSD81LpkflLN0iTm0cw56g&s',
          name: "max",
          age: "6 Months",
          contact: 3876483482,
          location: "Kalyanpur",
          quote: "Money can buy you a fine dog, but only love can make him wag his tail." 
      },
      {
          src: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
          name: "max",
          age: "6 Months",
          contact: 3876483482,
          location: "Kalyanpur",
          quote: "Money can buy you a fine dog, but only love can make him wag his tail." 
      }
  ]

const ContactUs = () => {
  return (
    <>
    <div id='adopt'>
    <h1 className='text-3xl md:text-4xl lg:text-6xl text-center my-10 border-b border-teal-300 p-3 leading-normal'>Adopt these <span className='bg-gradient-to-r from-teal-200 to-teal-500 text-transparent bg-clip-text
    font-bold italic'>Little One's</span></h1>
    <div className='my-10 grid lg:grid-cols-2 w-full'>
      {
        ForAdoption.map((data, index) => (
          <div className="grid md:grid-cols-3 border border-white p-4 rounded-lg m-3 justify-center items-center  hover:bg-white hover:text-black" key={index}>
            <div className="mx-auto hover:border p-3 hover:border-black hover:scale-105 rounded-lg">
              <img src={data.src} alt="puppy" className='rounded-lg'/>
            </div>
            <div className="text-center my-4 mx-3">
              <h3 className='text-xl'><span className='bg-gradient-to-r from-teal-200 to-teal-500 text-transparent bg-clip-text
    font-bold italic text-2xl mr-3'>Name:- </span>{data.name}</h3>
              <h3 className='text-xl'><span className='bg-gradient-to-r from-teal-200 to-teal-500 text-transparent bg-clip-text
    font-bold italic text-2xl mr-3'>Age:-</span>{data.age}</h3>
              <h3 className='text-xl'><span className='bg-gradient-to-r from-teal-200 to-teal-500 text-transparent bg-clip-text
    font-bold italic text-2xl mr-3'>Contact:-</span>{data.contact}</h3>
              <h3 className='text-xl'><span className='bg-gradient-to-r from-teal-200 to-teal-500 text-transparent bg-clip-text
    font-bold italic text-2xl mr-3'>Location:-</span>{data.location}</h3>
            </div>
            <h1 className='hidden md:inline-block md:mx-auto md:text-xl md:ml-3'>{data.quote}</h1>
          </div>
        ))
      }
    </div>
    </div>
    </>
  )
}

export default ContactUs
