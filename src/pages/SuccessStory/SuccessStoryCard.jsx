import React from "react";

const SuccessStoryCard = () => {
  return (
    <div>
      <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
        {/* Couple Image */}
        <img
          src="https://via.placeholder.com/150"
          alt="Couple"
          className="w-full h-40 object-cover"
        />

        {/* Card Content */}
        <div className="p-6">
          {/* Marriage Date */}
          <p className="text-gray-500 text-sm mb-2">
            Marriage Date: <span className="font-semibold">20-12-2024</span>
          </p>

          {/*  Stars */}
          <div className="flex items-center mb-3">
            {/* Full Stars */}
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="text-yellow-400 w-5 h-5"
            >
              <path d="M12 17.27l6.18 4.02-4.64-7.56L21 9.73h-8.36L12 2 9.36 9.73H1l7.46 4.02-4.64 7.56L12 17.27z" />
            </svg>
            {/* Half Star */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="text-yellow-400 w-5 h-5"
            >
              <path d="M12 17.27l6.18 4.02-4.64-7.56L21 9.73h-8.36L12 2 9.36 9.73H1l7.46 4.02-4.64 7.56L12 17.27z" />
            </svg>
            <span className="ml-2 text-gray-600">(4.5 stars)</span>
          </div>

          {/* Success Story Text */}
          <p className="text-gray-700">
            "We are forever grateful to this platform for helping us find each
            other. It was truly a life-changing experience."
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
