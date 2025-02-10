import React from 'react';
import { FaHome, FaLayerGroup, FaBriefcase, FaUserFriends, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Line, Pie, Radar, PolarArea } from 'react-chartjs-2';
// import { Chart as ChartJS } from 'chart.js/auto';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Link, useParams } from 'react-router-dom';
// import DashboardNavbar from "./dashboardnavbar.jsx";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const lineChartData = {
  labels: [
    'Adopted Pets',
    'Available for Adoption',
    'Pets in Medical Care',
    'Pets Reserved',
    'Volunteer Hours',
    'Shelter Capacity Remaining',
  ],
  datasets: [
    {
      label: 'Shelter Metrics',
      data: [120, 80, 40, 30, 60, 50],
      borderColor: '#4caf50',
      backgroundColor: 'rgba(76, 175, 80, 0.2)',
      tension: 0.4,
      fill: true,
      pointBackgroundColor: '#4caf50',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#4caf50',
    },
  ],
};

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Shelter Metrics Progress',
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Hide the vertical grid lines
      },
    },
    y: {
      beginAtZero: true,
    },
  },
  ProcessingInstruction: true,
};

const Sidebar = () => {
  return (
    <div className="w-1/5 bg-white text-black hidden lg:block">
      <div className="p-4 text-xl text-center md:text-3xl font-semibold"><Link to='/'>Astitva4Animals</Link></div>
      <nav className="mt-4">
        <ul>
          <SidebarItem icon={<FaHome />} label="Dashboard" />
          <SidebarItem icon={<FaLayerGroup />} label="Saved Animals" />
          <SidebarItem icon={<FaBriefcase />} label="My Points" />
          <SidebarItem icon={<FaUserFriends />} label="Members" />
          <SidebarItem icon={<FaShieldAlt />} label="Security" />
          <SidebarItem icon={<FaChartLine />} label="Statistics" />
        </ul>
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, label }) => {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-black hover:text-white cursor-pointer">
      <div className="text-2xl md:text-4xl">{icon}</div>
      <span className="hover:inline-block text-sm font-medium md:text-2xl">{label}</span>
    </div>
  );
};

const UserDashboard = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '500px',
    filter: 'brightness(1.2)',
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const membersLocations = [
    { id: 1, lat: 37.7749, lng: -122.4194 },
    { id: 2, lat: 37.8044, lng: -122.2711 },
    { id: 3, lat: 37.6879, lng: -122.4702 },
  ];

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Adoption Statistics',
        data: [20, 45, 30, 60, 80, 100],
        fill: false,
        borderColor: '#0D9488',
        tension: 0.1,
      },
    ],
  };

  const pieChartData = {
    labels: [
      'Adopted Pets',
      'Available for Adoption',
      'Pets in Medical Care',
      'Pets Reserved',
      'Volunteer Hours',
      'Shelter Capacity Remaining',
    ],
    datasets: [
      {
        data: [120, 80, 40, 30, 60, 50],
        backgroundColor: ['#4caf50', '#f44336', '#ff9800', '#9c27b0', '#03a9f4', '#cddc39'],
        hoverBackgroundColor: ['#388e3c', '#d32f2f', '#f57c00', '#7b1fa2', '#0288d1', '#afb42b'],
      },
    ],
  };
  const polarAreaConfig = {
    type: 'polarArea',
    data: {
      labels: [
        'Adopted Pets',
        'Available for Adoption',
        'Pets in Medical Care',
        'Pets Reserved',
        'Volunteer Hours',
        'Shelter Capacity Remaining',
      ],
      datasets: [
        {
          data: [120, 80, 40, 30, 60, 50],
          backgroundColor: ['#4caf50', '#f44336', '#ff9800', '#9c27b0', '#03a9f4', '#cddc39'],
          hoverBackgroundColor: ['#388e3c', '#d32f2f', '#f57c00', '#7b1fa2', '#0288d1', '#afb42b'],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
    },
  };
  const params = useParams();
  const val = params.val;
  window.addEventListener("load", () => {
    const hasReloaded = localStorage.getItem("hasReloaded");

    if (!hasReloaded) {
      localStorage.setItem("hasReloaded", "true");
      window.location.reload();
    }

  });
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#0D9488] md:mt-10 md:mx-5">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Dashboard Area */}
        <div className="flex-1 p-4 md:p-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div className="text-xl md:text-3xl font-semibold text-white mb-4 md:mb-0">
              Welcome, {val}!
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 rounded-full focus:outline-none text-sm md:text-base"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/200/200941.png"
                alt="User Avatar"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full"
              />
            </div>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {/* Card 1 */}
            <div className="p-4 rounded-lg shadow-md bg-teal-700 text-white hover:scale-105 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-semibold">Saved Animals</h3>
              <p className="text-2xl md:text-3xl font-bold">12</p>
              <p className="mt-2 text-sm">View your saved animals</p>
            </div>

            {/* Card 2 */}
            <div className="bg-black p-4 rounded-lg shadow-md hover:bg-teal-50 hover:scale-105 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-semibold text-gray-700">
                Points
              </h3>
              <p className="text-2xl md:text-3xl font-bold text-black">150</p>
              <a
                href="#rewards"
                className="mt-2 text-sm text-teal-600 hover:underline"
              >
                Go to Rewards
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-black p-4 rounded-lg shadow-md hover:bg-teal-50 hover:scale-105 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-semibold text-gray-700">
                Points Breakdown
              </h3>
              <div className="w-full h-40 md:h-52 mt-4">
                <Line data={lineChartData} options={lineChartOptions} />
              </div>
            </div>
          </div>

          {/* Savings Section */}
          <div className="bg-black p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">
              View Your Savings
            </h3>
            <p className="mt-2 text-gray-600">
              Track your saved animals and associated rewards.
            </p>
          </div>

          {/* Google Map Section */}
          <div className="mt-4 h-64 md:h-[500px]">
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28580.70340676968!2d80.23307383060461!3d26.436771368208582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47aaaa460ecd%3A0x509aaf4ca1259442!2sAnimal%20Shelter%20Kanpur!5e0!3m2!1sen!2sin!4v1731536134170!5m2!1sen!2sin"
              allowFullScreen=""
              loading="eager"
            ></iframe>
          </div>
        </div>
      </div>
    </>

  );
};

export default UserDashboard;