import React, { useState, useRef } from "react";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import ReactToPrint from "react-to-print";

const CertificateGenerator = () => {
  const componentRef = useRef();
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState(null);
  const [showCertificate, setShowCertificate] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUserImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = () => {
    if (userName && userImage) {
      setShowCertificate(true);
    } else {
      alert("Please enter your name and upload your image!");
    }
  };

  const handleDownload = () => {
    const certificate = document.getElementById("certificate");
    if (certificate) {
      toPng(certificate, {
        width: 1920, // Set width to 1920
        height: 1080, // Set height to 1080
      })
        .then((dataUrl) => {
          const pdf = new jsPDF("landscape");
          pdf.addImage(dataUrl, "PNG", 0, 0, 297, 210); // Fit to A4 size (297mm x 210mm)
          pdf.save(`${userName}_certificate.pdf`);
        })
        .catch((err) => {
          console.error("Error generating certificate:", err);
        });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-center text-teal-700 mb-4">
          Generate Your Volunteer Certificate
        </h2>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          className="w-full mb-4"
          onChange={handleImageChange}
        />
        <button
          onClick={handleGenerate}
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 w-full"
        >
          Generate Certificate
        </button>
      </div>

      {showCertificate && (
        <div className="mt-8 w-full max-w-3xl">
          <div
            id="certificate"
            className="relative bg-white shadow-lg rounded-lg p-8 mx-auto"
            style={{
              width: "800px",
              height: "600px",
              transform: "scale(1)",
              transformOrigin: "top left",
            }}
            ref={componentRef}
          >
            <h2 className="text-2xl font-bold text-center text-teal-700">
              Certificate of Appreciation
            </h2>
            <p className="text-center text-gray-600 mt-4">
              This certificate is proudly presented to
            </p>
            <h3 className="text-xl font-semibold text-center mt-2 text-teal-800">
              {userName}
            </h3>
            <p className="text-center text-gray-600 mt-2">
              For their dedication to supporting the welfare of animals through
              the Astitva4Animals initiative.
            </p>
            {userImage && (
              <img
                src={userImage}
                alt="User"
                className="w-32 h-32 rounded-full mx-auto mt-4"
              />
            )}
            <p className="text-center text-sm text-gray-500 mt-8">
              Issued on: {new Date().toLocaleDateString()}
            </p>
          </div>

          <ReactToPrint
            trigger={() => (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
              >
                Download
              </button>
            )}
            content={() => componentRef.current}
          />

          <button
            onClick={handleDownload}
            className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 mt-4"
          >
            Download Certificate
          </button>
        </div>
      )}
      <style jsx>{`
        @media (max-width: 768px) {
          #certificate {
            transform: scale(0.6); /* Reduce size on small screens */
            transform-origin: top left;
          }
        }
        @media (max-width: 480px) {
          #certificate {
            transform: scale(0.4); /* Further reduce size on very small screens */
            transform-origin: top left;
          }
        }
      `}</style>
    </div>
  );
};

export default CertificateGenerator;
