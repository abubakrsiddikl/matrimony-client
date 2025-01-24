import React from "react";

const SuccessStoryCard = ({story}) => {
  const {selfBiodataId, partnerBiodataId,rating, marrigeDate,successStroy,coupleImage} = story;
  console.log(story)
  return (
    <div>
      <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
        {/* Couple Image */}
        <img
          src={coupleImage}
          alt="Couple"
          className="w-full h-40 object-cover"
        />

        {/* Card Content */}
        <div className="p-6">
          {/* Marriage Date */}
          <p className="text-gray-500 text-sm mb-2">
            Marriage Date: <span className="font-semibold">{marrigeDate}</span>
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
            <span className="ml-2 text-gray-600">({rating})</span>
          </div>

          {/* Success Story Text */}
          <p className="text-gray-700">
            {successStroy}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
