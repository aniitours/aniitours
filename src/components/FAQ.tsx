import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: 'What is the best time to visit the Andaman Islands?',
    answer: 'The best time to visit is from October to May when the weather is pleasant, and the sea is calm, making it ideal for water activities.',
  },
  {
    question: 'Do I need a passport or visa to visit the Andamans?',
    answer: 'For Indian citizens, no passport or visa is required. A valid photo ID is sufficient. Foreign nationals require an Indian visa and may need a Restricted Area Permit (RAP).',
  },
  {
    question: 'What kind of activities can I do in the Andamans?',
    answer: 'The islands offer a wide range of activities, including scuba diving, snorkeling, sea walking, jet-skiing, parasailing, and exploring historic sites like Cellular Jail.',
  },
  {
    question: 'Is it safe to travel to the Andaman Islands?',
    answer: 'Yes, the Andamans are a safe destination for tourists. It is always advisable to follow local guidelines and take standard safety precautions, especially during water activities.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 font-caudex">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-2 font-poppins">Find answers to common questions about the Andaman Islands.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-poppins">{faq.question}</span>
                {activeIndex === index ? <ChevronUp className="w-6 h-6 text-[#3A75F1]" /> : <ChevronDown className="w-6 h-6 text-gray-500" />}
              </button>
              {activeIndex === index && (
                <div className="mt-4 text-gray-600 font-poppins">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
