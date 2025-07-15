import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-blue-100 via-white to-purple-100 flex flex-col items-center justify-center">
      {/* Logo or image */}
      <img
        src="/public/lovable-uploads/97f18681-df52-4541-94d7-c7f23019c06d.png" // Change this to your actual logo path
        alt="Loading..."
        className="w-30 h-30 animate-pulse mb-8"
      />

      {/* Fancy Gradient Spinner */}
      {/*<div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-400 animate-spin"></div>
        <div className="absolute inset-2 rounded-full bg-white"></div>
      </div> */}

      {/* Loading text */}
      <p className="mt-8 text-lg font-semibold text-gray-700 animate-pulse">
         Aspiring For Excellence
      </p>
    </div>
  );
};

export default Loader;