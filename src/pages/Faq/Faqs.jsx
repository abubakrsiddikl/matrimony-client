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
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-md cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <ChevronDown
                  className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </div>
              {openIndex === index && <p className="mt-3 text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
