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
                    

                    
                </div>
            </div>
        </div>
    );
};

export default NotFound;
