import React from "react";
import CountUp from "react-countup";

const SuccessCounter = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="w-11/12 mx-auto  text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Success Counter</h2>
        <p className="text-gray-600 mb-8">
          See how many have joined, matched, and found their perfect partner through us!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Biodata */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-4xl font-extrabold text-indigo-600">
              <CountUp start={0} end={1000} duration={3} />
              +
            </h3>
            <p className="text-gray-700 mt-2">Total Biodata</p>
          </div>

          {/* Girls Biodata */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-4xl font-extrabold text-pink-600">
              <CountUp start={0} end={500} duration={3} />
              +
            </h3>
            <p className="text-gray-700 mt-2">Girls Biodata</p>
          </div>

          {/* Boys Biodata */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-4xl font-extrabold text-blue-600">
              <CountUp start={0} end={500} duration={3} />
              +
            </h3>
            <p className="text-gray-700 mt-2">Boys Biodata</p>
          </div>

          {/* Total Marriages */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-4xl font-extrabold text-green-600">
              <CountUp start={0} end={100} duration={3} />
              +
            </h3>
            <p className="text-gray-700 mt-2">Marriages Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCounter;
