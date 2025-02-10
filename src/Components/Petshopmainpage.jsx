
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsCartCheck } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { LiaDonateSolid } from "react-icons/lia";
import Footer from "./Footer"

const PetshopMainPage = () => {
    const { id } = useParams();
    const [petShop, setPetShop] = useState(null);
    const [loading, setLoading] = useState(true);
    const phoneNumber = "919555528030";

    useEffect(() => {
        axios
            .get("https://astitva-backend.onrender.com/api/petshops")
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
            <Link to="/petshops" className="flex items-center text-teal-400 text-lg">
                <IoIosArrowBack className="mr-2" /> Back to Pet Shops
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
                {/* Image Section */}
                <div className="flex justify-center">
                    <img
                        src={petShop.image}
                        alt={petShop.name}
                        className="w-full object-contain max-w-md rounded-xl shadow-lg"
                    />
                </div>

                {/* Details Section */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold text-teal-400">{petShop.name}</h1>
                    <p className="text-lg text-teal-300">{petShop.description}</p>
                    <p className="text-lg"><strong>Opening Hours:  09 : 00 AM -- 06 : 30 PM</strong> {petShop.openingHours}</p>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <p className="text-lg"><strong>Category:</strong> {petShop.category}</p>
                        <p className="text-lg"><strong>Location:</strong> {petShop.location}</p>
                        <p className="text-lg"><strong>Contact:</strong> {petShop.contact}</p>
                        <p className="text-lg"><strong>Rating:</strong> ⭐⭐⭐⭐⭐</p>
                    </div>
                    <div className="flex justify-evenly">
                        <a href="mailto:saiyamdubey8787@gmail.com">
                            <button className="bg-teal-600 text-white flex items-center justify-center gap-2 px-8 py-2 rounded-full shadow-lg hover:bg-teal-800 transition">
                                <FaPhoneAlt className="text-xl animate-shake" />
                                Contact Now
                            </button>
                        </a>
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

                </div>
            </div>

            {/* Manually Added Featured Products */}
            <div className="mt-10">
                <h2 className="text-3xl font-bold text-teal-400">Best Products</h2>
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
                        name: "Dog Food Premium",
                        price: 500,
                        stock: 20,
                        image: "https://m.media-amazon.com/images/I/71wSJ3exA2L._AC_UL320_.jpg"
                    }, {
                        name: "Cat Scratching Post",
                        price: 1200,
                        stock: 10,
                        image: "https://m.media-amazon.com/images/I/71lLwJpyH1L._AC_UL320_.jpg"
                    }, {
                        name: "Bird Cage",
                        price: 2500,
                        stock: 5,
                        image: "https://m.media-amazon.com/images/I/61xbL41m+jL._AC_UL320_.jpg"
                    }, {
                        name: "Bird Cage",
                        price: 2500,
                        stock: 5,
                        image: "https://m.media-amazon.com/images/I/61th7vu+SCL._AC_UL320_.jpg"
                    }, {
                        name: "Bird Cage",
                        price: 2500,
                        stock: 5,
                        image: "https://m.media-amazon.com/images/I/81mRZPZSJ8L._AC_UL320_.jpg"
                    }, {
                        name: "Bird Cage",
                        price: 2500,
                        stock: 5,
                        image: "https://m.media-amazon.com/images/I/71o84Bphv-L._AC_UL320_.jpg"
                    }].map((product, index) => (
                        <div key={index} className="p-10">
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
                                <BsCartCheck  className="text-2xl animate-blinkslow" />
                               Add To Bag
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
                                <BsCartCheck  className="text-2xl animate-blinkslow" />
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
    );
};

export default PetshopMainPage;
