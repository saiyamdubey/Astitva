import React from "react";
import Donate from "./Donate";
import dog1 from "../assets/dog1.png";
import playdog from "../assets/playdog.png";
import cow from "../assets/calf.png";
import mouse from "../assets/mouse.png";
import squirel from "../assets/squirel.png";
import Team from "./Team";
import Savings from "./Savings";
import Adopt from "./Adopt";
import AboutUs from "./AboutUs";
import BackgroundLines from "./ui/background-lines";
import PetShop from "./PetShops";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import LazyLoad from "react-lazyload";

const Home = () => {
  return (
    <BackgroundLines>
      <div>
        {/* Home Section */}
        <div id="home" className="relative z-10 h-screen ">
          <div className="mt-14 md:mt-20 flex flex-col justify-center">
            <div className="text-center">
              <h1 className="text-4xl lg:text-7xl leading-normal">
                We Live To <span>Make</span>{" "}
                <span className=" bg-gradient-to-r from-teal-200 to-teal-600 text-transparent bg-clip-text font-bold italic">
                  "Them Live"
                </span>
              </h1>
              <p className="text-xl mt-8 leading-normal italic">
                Our Community is giving their best to support the existence of
                needy animals.
              </p>
            </div>

            {/* Buttons Section */}
            <div className="md:flex md:justify-center grid grid-cols-2 content-center mt-10">
              <Link
                className="p-3 border border-white hover:bg-teal-300 hover:text-black m-2 rounded-md font-extrabold hover:scale-105 text-center"
                to="/donate"
              >
                Donate Us
              </Link>
              <Link
                className="p-3 border border-white hover:bg-teal-300 hover:text-black m-2 rounded-md font-extrabold hover:scale-105 text-center"
                to="/form"
              >
                Inform Us
              </Link>
              <a
                className="p-3 border border-white hover:bg-teal-300 hover:text-black m-2 rounded-md font-extrabold hover:scale-105 text-center flex items-center gap-2"
                href="https://www.instagram.com/pawwpatrooll/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-xl" /> Instagram
              </a>
              <a
                className="p-3 border border-white hover:bg-teal-300 hover:text-black m-2 rounded-md font-extrabold hover:scale-105 text-center flex items-center gap-2"
                href="https://chat.whatsapp.com/LehP1NoNMXC9z6mz1aXLQ4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-xl" /> Join Group
              </a>
            </div>

            {/* Image Section */}
            <div className="flex justify-center items-end mt-6 max-w-screen overflow-hidden">
              <LazyLoad height={200} offset={100}>
                <img
                  className="left-0 hidden md:flex h-[300px]"
                  src={cow}
                  alt="cow"
                />
              </LazyLoad>
              <LazyLoad height={200} offset={100}>
                <img
                  className="hidden md:flex h-[300px]"
                  src={squirel}
                  alt="squirrel"
                />
              </LazyLoad>
              <LazyLoad height={200} offset={100}>
                <img
                  className="flex lg:h-[500px] lg:w-[500px] h-[350px] md:static bottom-0 -z-10"
                  src={dog1}
                  alt="dog1"
                />
              </LazyLoad>
              <LazyLoad height={200} offset={100}>
                <img className="hidden md:flex h-[200px]" src={mouse} alt="cat" />
              </LazyLoad>
              <LazyLoad height={200} offset={100}>
                <img
                  className="hidden md:flex h-[300px]"
                  src={playdog}
                  alt="playing dog"
                />
              </LazyLoad>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        
        <Savings />
        <Adopt />
        
        <PetShop />
        <Team />
        <AboutUs />
        <Footer />
      </div>
    </BackgroundLines>
  );
};

export default Home;