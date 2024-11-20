import React from 'react';

const NotFound = () => {
    return (
        <div className="flex justify-center items-center max-w-screen-lg mx-auto min-h-[calc(100vh-15rem)]">
            <div className="flex flex-col items-center justify-center bg-transparent w-96 h-auto p-6  rounded-lg shadow-lg">
                {/* Upper Section */}
                <div className="w-full text-center">
                    <img
                        src="https://github.com/saiyamdubey/clone.youtube.com/blob/main/images/Monkey.png?raw=true"
                        alt="Monkey"
                        className="w-[20rem] h-[19rem] mx-auto mb-4"
                    />
                    <p className="text-lg text-gray-100 font-medium">
                        This page isn't available. Sorry about that.
                        <br />
                        Try searching for something else.
                    </p>
                </div>

                {/* Lower Section */}
                <div className="mt-6 space-y-6">
                    {/* Logo and Name */}
                    {/* <div className="flex items-center justify-center space-x-4">
                        <img
                            src="http://localhost:5173/src/assets/logo1.png"
                            alt="YouTube Logo"
                            className="w-16 h-16"
                        />
                        <h2 className="text-2xl text-gray-900 font-extrabold flex items-center">
                            Astitva
                            <sup className="ml-2 text-gray-500 text-sm font-light tracking-wide">
                                IN
                            </sup>
                        </h2>
                    </div> */}

                    
                </div>
            </div>
        </div>
    );
};

export default NotFound;
