
import React from "react";
import qr from "../assets/QR.jpeg";

const Donate = () => {
  const handlePayment = async () => {
    try {
      const response = await fetch("https://astitva-backend.onrender.com/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 50000, currency: "INR" }), // Amount in paise (e.g., 50000 = ₹500)
      });

      const { id, amount, currency } = await response.json();
      const options = {
        key: "rzp_live_xPhSqarKbSjXSy", // Replace with your Razorpay Key ID
        amount,
        currency,
        order_id: id,
        handler: function (response) {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: "MADHUSUDAN TRIPATHI",
          email: "connectwithmst12@gmail.com",
          contact: "8787236681",
        },
        theme: {
          color: "#22c55e",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error during payment:", error);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200 px-6 py-10"
      id="donate"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-green-700 mb-6 tracking-wide drop-shadow-lg">
          Donate for a Cause
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Together, we can make a lasting difference. Your donation helps us bring positive changes to those in need.
        </p>
      </div>

      {/* Donation Details */}
      <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 lg:flex lg:items-center lg:gap-8 max-w-5xl w-full transition-transform transform hover:scale-105">
        {/* QR Code */}
        <div className="lg:w-1/3 flex flex-col items-center">
          <img
            src={qr}
            alt="QR Code"
            className="w-32 h-32 md:w-48 md:h-48 mb-4 rounded-lg shadow-md hover:shadow-xl"
          />
          <p className="text-gray-600 text-sm text-center italic">
            Scan the QR code to donate via UPI
          </p>
        </div>
        {/* Donation Info & Button */}
        <div className="lg:w-2/3 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-2">
            Receiver: <span className="italic">Jeevan Foundation</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Bank Account Number:{" "}
            {/* <span className="font-bold text-green-700">202002020202002</span> */}
          </p>
          <a href="https://razorpay.me/@jeevan7284">
            <button
              onClick={handlePayment}
              className="bg-green-600 hover:bg-green-700 text-white text-lg md:text-xl font-medium py-3 px-12 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:ring-4 focus:ring-green-300"
            >
              Donate Now
            </button>
          </a>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-12 max-w-3xl w-full">
        <p className="text-green-700 font-medium text-center text-lg mb-2">
          Donation Goal: <span className="font-bold">₹1,000,000</span>
        </p>
        <div className="bg-gray-300 rounded-full h-6 overflow-hidden relative">
          <div
            className="bg-green-600 h-full rounded-full absolute left-0 top-0"
            style={{ width: "45%" }}
          ></div>
        </div>
        <p className="text-gray-600 mt-3 text-center text-sm">
          ₹45,780 raised so far
        </p>
      </div>

      {/* Footer Note */}
      <div className="mt-16 text-center">
        <p className="text-gray-500 text-sm">
          Your generosity can create an impact. Thank you for your support! ❤️
        </p>
      </div>
    </div>
  );
};

export default Donate;