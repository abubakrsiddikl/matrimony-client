// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// const faqs = [
//   {
//     question: "How do I create a biodata?",
//     answer: "You can easily create your biodata by logging in and clicking on the 'Create Biodata' option.",
//   },
//   {
//     question: "Is registration free?",
//     answer: "Yes, registration is completely free, but some premium features require a subscription.",
//   },
//   {
//     question: "How can I contact someone?",
//     answer: "With a premium membership, you can directly send messages and view contact details.",
//   },
//   {
//     question: "Is my information safe?",
//     answer: "Yes, we prioritize your privacy and ensure that your data remains secure.",
//   },
// ];

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto px-4 md:px-8">
//         <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
//         <div className="max-w-2xl mx-auto space-y-4">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="bg-white p-5 rounded-xl shadow-md cursor-pointer"
//               onClick={() => toggleFAQ(index)}
//             >
//               <div className="flex justify-between items-center">
//                 <h3 className="text-lg font-semibold">{faq.question}</h3>
//                 <ChevronDown
//                   className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}
//                 />
//               </div>
//               {openIndex === index && <p className="mt-3 text-gray-600">{faq.answer}</p>}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I create a biodata?",
    answer: "You can easily create your biodata by logging in and clicking on the 'Create Biodata' option.",
  },
  {
    question: "Is registration free?",
    answer: "Yes, registration is completely free, but some premium features require a subscription.",
  },
  {
    question: "How can I contact someone?",
    answer: "With a premium membership, you can directly send messages and view contact details.",
  },
  {
    question: "Is my information safe?",
    answer: "Yes, we prioritize your privacy and ensure that your data remains secure.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-gray-100">
      <div className="w-11/12 mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-sm rounded-2xl overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden px-5 pb-4 text-gray-600">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
