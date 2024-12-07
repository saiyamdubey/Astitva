import React from 'react';
import qr from '../assets/QR.jpeg';

const Donate = () => {
  const handlePayment = async () => {
    try {
      const response = await fetch("http://localhost:8000/create-order", {
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
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error during payment:", error);
      // alert("Payment initiation failed. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-teal-200 via-white to-teal-500 "
      id="donate"
    >
      {/* Header */}
      <div className="text-center max-w-2xl mb-12">
        <h1 className="text-5xl font-bold text-teal-700 mb-4">Donate for a Cause</h1>
        <p className="text-lg text-gray-700">
          Your contribution will help us make a difference. Let's join hands to bring positive change.
        </p>
      </div>

      {/* Donation Details */}
      <div className="bg-white rounded-lg shadow-lg p-8 lg:flex lg:items-center lg:gap-12 max-w-4xl">
        {/* QR Code */}
        <div className="lg:w-1/3 flex flex-col items-center">
          <img
            src={qr}
            alt="QR Code"
            className="w-48 h-48 mb-6 rounded-lg shadow-md"
          />
          <p className="text-gray-600 text-sm">Scan the QR code to donate via UPI</p>
        </div>

        {/* Bank & Button */}
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-semibold text-teal-600 mb-2">
            Receiver: <span className="italic">Madhusudan Tripathi</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Bank Account Number: <span className="font-bold">202002020202002</span>
          </p>
          <a href="https://razorpay.me/@jeevan7284"><button
            onClick={handlePayment}
            className="bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-md transition-transform transform hover:scale-105 focus:ring-4 focus:ring-teal-300"
          >
            Donate Now
          </button></a>

        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-12 max-w-2xl w-full">
        <p className="text-teal-700 font-medium mb-2">Donation Goal: ₹1,00,000</p>
        <div className="bg-gray-300 rounded-full h-4 overflow-hidden">
          <div
            className="bg-teal-600 h-4 rounded-full"
            style={{ width: "40%" }}
          ></div>
        </div>
        <p className="text-gray-600 mt-2 text-sm">₹45,780 raised so far</p>
      </div>
    </div>
  );
};

export default Donate;
