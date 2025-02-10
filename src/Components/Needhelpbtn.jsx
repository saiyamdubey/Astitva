import React, { useState } from "react";
import axios from "axios";
import { FaFirstAid } from "react-icons/fa";

const NeedHelpButton = ({ shelteremail }) => {
    const [loading, setLoading] = useState(false);

    const getLocationAndSendEmail = async () => {
        if (!shelteremail) {
            alert("Shelter owner's email is missing!");
            return;
        }

        setLoading(true);

        // Get user location
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    try {
                        // Get address from latitude & longitude (OpenStreetMap API)
                        const response = await axios.get(
                            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                        );

                        const address = response.data.display_name || "Address not found";

                        // Send location & email to backend
                        await axios.post("https://astitva-backend.onrender.com/send-location", {
                            latitude,
                            longitude,
                            address,
                            email: shelteremail,
                        });

                        alert("Location sent successfully!");
                    } catch (error) {
                        console.error("Error:", error);
                        alert("Failed to send location. Try again.");
                    } finally {
                        setLoading(false);
                    }
                },
                (error) => {
                    console.error("Error getting location:", error);
                    alert("Please allow location access.");
                    setLoading(false);
                }
            );
        } else {
            alert("Geolocation is not supported by your browser.");
            setLoading(false);
        }
    };

    return (
        <button
            onClick={getLocationAndSendEmail}
            className="bg-teal-600 text-white flex items-center justify-center gap-2 px-12 py-2 rounded-full shadow-lg hover:bg-teal-800 transition"
            disabled={loading}
        >
            <FaFirstAid className="text-xl animate-blink" />
            {loading ? "Sending..." : "Need Help"}
        </button>
    );
};

export default NeedHelpButton;
