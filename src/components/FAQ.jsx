import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqs = [
    { question: 'What is the purpose of this campaign?', answer: 'Our mission is to help provide necessary healthcare and resources to underserved communities.' },
    { question: 'How can I contribute to this campaign?', answer: 'You can contribute through donations, spreading awareness, or volunteering with our team.' },
    { question: 'Where do the donations go?', answer: 'All donations are directly used for medical treatments, aid supplies, and supporting the families in need.' },
    { question: 'How can I get involved?', answer: 'You can join our network by volunteering, donating, or helping us share our message to reach more people.' },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button 
                onClick={() => toggleFAQ(index)} 
                className="w-full text-left text-xl font-semibold text-gray-700 bg-blue-100 py-4 px-6 rounded-lg shadow-lg transition duration-300 transform hover:bg-blue-200 focus:outline-none"
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                <div className="bg-blue-50 py-4 px-6 mt-2 rounded-b-lg shadow-inner text-lg text-gray-600">
                  {faq.answer}
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
