import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Donate from "./Components/Donate";
import Adopt from "./Components/Adopt";
import AboutUs from "./Components/AboutUs";
import Savings from "./Components/Savings";
import Team from "./Components/Team";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Shelters from "./Components/Shelters";
import Login from "./Authentication/Login";
import SignUp from "./Authentication/SignUp";
import DefaultLayout from "./layouts/DefaultLayout";
import Chatbot from "./Components/Chatbot";
import UserDashboard from "./Components/Dashboard";
import Joincummunity from "./Components/Joincummunity";
import Dashboardshelter from "./Components/DashboardShelter";
import OwnerLogin from "./Authentication/ownerlogin";
import OwnerSignup from "./Authentication/ownersignup";
import AddShelterForm from "./Components/Shelterform";
import PetShops from "./Components/PetShops";
import Supportus from "./Components/supportus";
import VolunteerForm from "./Components/Volunteerform";
import NotFound from "./Components/NotFound";
import ItemDonationForm from "./Components/ItemDonationForm"
import { useEffect, useState } from "react";
import PricingPlans from "./Components/NetflixPlans"
import Petshopmainpage from "./Components/Petshopmainpage"
import Sheltermainpage from "./Components/Sheltermainpage"


import "./App.css"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('userhai'));

  // Monitor localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem('userhai'));
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  return (
    <>
    <div className="relative">
      <Analytics />
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar isLoggedIn={isLoggedIn} />
          <div className="flex-grow mx-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/savings" element={<Savings />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/adopt" element={<Adopt />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/form" element={<Form />} />
              <Route path="/shelters" element={<Shelters />} />
              <Route path="/shelters/:id" element={<Sheltermainpage />} />
              <Route path="/pricing" element={<PricingPlans />} />
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/dashboard" element={<UserDashboard />}></Route>
              <Route path="/ItemDonationForm" element={<ItemDonationForm />}></Route>
              {/* <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <UserDashboard />
                  </ProtectedRoute>
                }
              /> */}
              <Route
                path="/dashboardshelter"
                element={<Dashboardshelter />}
              ></Route>
              <Route path="/Joincummunity" element={<Joincummunity />}></Route>
              <Route path="/ownerlogin" element={<OwnerLogin />} />
              <Route path="/ownersignup" element={<OwnerSignup />} />
              <Route path="/ShelterForm" element={<AddShelterForm />} />
              <Route path="/petshops" element={<PetShops />} />
              <Route path="/petshops/:id" element={<Petshopmainpage />} />
              <Route path="/SupportUs" element={<Supportus />} />
              <Route path="/VolunteerForm" element={<VolunteerForm />} />
              
              <Route
                path="/dashboardshelter/:val"
                element={<Dashboardshelter />}
              />
              <Route path="/dashboard/:val" element={<UserDashboard />} />
              <Route path="*" element={<NotFound />} />
              <Route element={<DefaultLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
              </Route>
            </Routes>
          </div>
          <Chatbot></Chatbot>
        {/* <Footer /> */}
          
        </div>
      </Router>
      
    </div>
    {/* <div>
      <Footer />
    </div> */}
    </>
    
  );
}

export default App;
