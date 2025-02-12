import React from 'react'
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsCartCheck } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFirstAid } from "react-icons/fa";
import { LiaDonateSolid } from "react-icons/lia";
import Footer from "./Footer"
import NeedHelpButton from './Needhelpbtn';

const Sheltermainpage = () => {
    const { id } = useParams();
    const [petShop, setPetShop] = useState(null);
    const [loading, setLoading] = useState(true);
    const phoneNumber = "919555528030";

    useEffect(() => {
        axios
            .get("https://astitva-backend.onrender.com/register/all")
            .then((response) => {
                const foundShop = response.data.find((shop) => shop._id === id);
                setPetShop(foundShop);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching pet shop details:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="text-white text-3xl text-center mt-10">Loading...</div>;
    }

    if (!petShop) {
        return <div className="text-red-500 text-center mt-10">Pet shop not found</div>;
    }

    return (
        <div className="max-w-6xl mx-auto p-5 text-white">
            <Link to="/shelters" className="flex items-center text-teal-400 text-lg">
                <IoIosArrowBack className="mr-2" /> Back to Shelter`s Page
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
                {/* Image Section */}
                <div className="flex justify-center">
                    <img
                        src={petShop.src}
                        alt={petShop.name}
                        className="w-full object-contain max-w-md rounded-xl shadow-lg"
                    />
                </div>

                {/* Details Section */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold text-teal-400">{petShop.shelter_name}</h1>
                    <p className="text-lg  text-teal-400">A dedicated clinic providing the best medical care and supplies for your pets. We make all of them happy and fun.</p>
                    <p className="text-lg"><strong>Opening Hours:  09 : 00 AM -- 06 : 30 PM</strong> {petShop.openingHours}</p>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <p className="text-lg"><strong>Category:</strong> Shelter / Protector</p>
                        <p className="text-lg text-teal-500"><strong>Slogon :</strong> {petShop.slogan}</p>
                        <p className="text-lg"><strong>Location:</strong> {petShop.location}</p>
                        <p className="text-lg"><strong>Contact:</strong> {petShop.contact}</p>
                        <p className="text-lg"><strong>Rating:</strong> ⭐⭐⭐⭐⭐</p>
                    </div>

                    <div className="flex justify-evenly">

                        <NeedHelpButton shelteremail="madhusudantripathi2004@gmail.com" />

                        <a
                            href={`https://wa.me/${phoneNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-teal-600 text-white flex items-center justify-center gap-2 px-8 py-2 rounded-full shadow-lg hover:bg-teal-800 transition"
                        >
                            <FaWhatsapp className="text-2xl animate-blink" />
                            Chat on WhatsApp
                        </a>

                    </div>
                    <div className='flex justify-center w-full'>
                        <a href="mailto:saiyamdubey8787@gmail.com">
                            <button className="bg-teal-600 text-white flex items-center justify-center gap-2 px-12 py-2 rounded-full shadow-lg hover:bg-teal-800 transition">
                                <FaPhoneAlt className="text-xl animate-shake" />
                                Contact Now
                            </button>
                        </a>
                    </div>

                </div>
            </div>


            <div className="mt-10">
                <h2 className="text-3xl font-bold text-teal-400">Adopted Animal</h2>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlay
                    autoPlaySpeed={3000}
                    centerMode={false}
                    infinite
                    showDots
                    responsive={{
                        desktop: {
                            breakpoint: { max: 3000, min: 1024 },
                            items: 4,
                        },
                        tablet: {
                            breakpoint: { max: 1024, min: 464 },
                            items: 3,
                        },
                        mobile: {
                            breakpoint: { max: 464, min: 0 },
                            items: 1,
                        },
                    }}
                >
                    {[{
                        name: "Sheru boy",
                        price: 500,
                        stock: 20,
                        image: "data:image/jpeg;base64,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"
                    }, {
                        name: "kitty cat",
                        price: 1200,
                        stock: 10,
                        image: "data:image/jpeg;base64,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"
                    }, {
                        name: "Baby doy",
                        price: 2500,
                        stock: 5,
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr8SNjIi5bQ8UpRauGcXysSkjoqF2Y3IDDGA&s"
                    }, {
                        name: "Bird Boy",
                        price: 2500,
                        stock: 5,
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkYST4e1fAzQdteag7BKDEc5wdJNRncWxhLA&s"
                    }, {
                        name: "Bird Cage",
                        price: 2500,
                        stock: 5,
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2WX-AzTdmtSwSqxQLnjRPlqGJqIjgnny2w&s"
                    }, {
                        name: "Gooddogy",
                        price: 2500,
                        stock: 5,
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGBtcSxC1MpIOYLdLRtyIpiF13JQq4bbWY2w&s"
                    }].map((product, index) => (
                        <div key={index} className="p-10 text-center">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-40 object-contain rounded-lg"
                            />
                            <h3 className="text-lg font-bold text-white mt-2">{product.name}</h3>
                            {/* <p className="text-gray-300">Price: ₹{product.price}</p> */}
                            {/* <p className="text-gray-300">Stock: {product.stock} left</p> */}
                            {/* <p className="text-yellow-400">Rating: ⭐⭐⭐⭐☆</p> */}
                            <button className="bg-teal-600 mt-4 text-white flex items-center justify-center gap-2 px-8 py-2 rounded-full shadow-lg hover:bg-teal-800 transition">
                                {/* <FaPhoneAlt className="text-xl animate-shake" /> */}
                                <LiaDonateSolid className="text-2xl animate-blinkslow" />
                                Donate Here
                            </button>
                        </div>
                    ))}
                </Carousel>
            </div>

            <div className="mt-10 z-0">
                <h2 className="text-3xl font-bold text-teal-400">Pet Clothes / Items</h2>
                <Carousel
                    additionalTransfrom={0}
                    // arrows
                    autoPlay
                    autoPlaySpeed={3000}
                    centerMode={false}
                    infinite
                    showDots
                    responsive={{
                        desktop: {
                            breakpoint: { max: 3000, min: 1024 },
                            items: 4,
                        },
                        tablet: {
                            breakpoint: { max: 1024, min: 464 },
                            items: 3,
                        },
                        mobile: {
                            breakpoint: { max: 464, min: 0 },
                            items: 1,
                        },
                    }}
                >
                    {[{
                        name: "Dog Food Premium",
                        price: 500,
                        stock: 20,
                        image: "https://m.media-amazon.com/images/I/71lPhDCAc1L._AC_UL320_.jpg"
                    }, {
                        name: "Cat Scratching Post",
                        price: 1200,
                        stock: 10,
                        image: "https://m.media-amazon.com/images/I/619kok+XlRL._AC_UL320_.jpg"
                    }, {
                        name: "Bull dog Cage",
                        price: 2500,
                        stock: 5,
                        image: "https://m.media-amazon.com/images/I/61V36kRMzHL._AC_UL320_.jpg"
                    }, {
                        name: "Bird Cage",
                        price: 2500,
                        stock: 5,
                        image: "https://m.media-amazon.com/images/I/81xlO1qsfML._AC_UL320_.jpg"
                    }, {
                        name: "Bird Cage",
                        price: 2500,
                        stock: 5,
                        image: "https://m.media-amazon.com/images/I/61AXugwOQUL._AC_UL320_.jpg"
                    }, {
                        name: "Bird Cage",
                        price: 2500,
                        stock: 5,
                        image: "https://m.media-amazon.com/images/I/61W0qfvWLQL._AC_UL320_.jpg"
                    }, {
                        name: "Dogs Cage",
                        price: 5500,
                        stock: 5,
                        image: "https://m.media-amazon.com/images/I/81gzSGRxopL._AC_UL320_.jpg"
                    }].map((product, index) => (
                        <div key={index} className="p-10 z-0 ">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-40 object-contain rounded-lg"
                            />
                            <h3 className="text-lg font-bold text-white mt-2">{product.name}</h3>
                            <p className="text-gray-300">Price: ₹{product.price}</p>
                            <p className="text-gray-300">Stock: {product.stock} left</p>
                            <p className="text-yellow-400">Rating: ⭐⭐⭐⭐☆</p>
                            <button className="bg-teal-600 mt-4 text-white flex items-center justify-center gap-2 px-8 py-2 rounded-full shadow-lg hover:bg-teal-800 transition">
                                {/* <FaPhoneAlt className="text-xl animate-shake" /> */}
                                <BsCartCheck className="text-2xl animate-blinkslow" />
                                Add To Bag
                            </button>
                        </div>
                    ))}
                </Carousel>
            </div>




            {/* Google Map Placeholder */}
            <div className="mt-10 mb-10">
                <h2 className="text-3xl font-bold text-teal-400">Location</h2>
                <div className="mt-4">
                    <iframe
                        src={`https://www.google.com/maps?q=${encodeURIComponent(petShop.location)}&output=embed`}
                        width="100%"
                        height="400"
                        frameBorder="0"
                        style={{ borderRadius: "10px" }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Sheltermainpage

