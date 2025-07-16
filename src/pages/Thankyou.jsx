import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-blue-100 px-4 py-12">
      <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 max-w-xl w-full text-center animate-fade-in">
        <CheckCircle className="text-green-600 w-16 h-16 mx-auto mb-6 animate-bounce" />
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">Thank You!</h1>
        <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
          Your application has been successfully submitted. We’ll review your details and get back to you shortly.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition hover:shadow-xl duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Thankyou;
