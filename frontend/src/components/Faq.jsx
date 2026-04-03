import React, { useState } from 'react';

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is PC Builder?",
      answer: "PC Builder is an online platform that helps users browse, compare, and purchase computer components to build their own custom PC. We offer a curated selection of quality components from trusted brands."
    },
    {
      question: "Do I need technical knowledge to use PC Builder?",
      answer: "No! PC Builder is designed for both beginners and experienced users. We provide detailed specifications and guidance to help you choose the right components for your needs, even if you're new to PC building."
    },
    {
      question: "What types of components do you offer?",
      answer: "We offer a wide range of components including Processors (CPUs), Graphics Cards (GPUs), RAM, SSDs, Power Supplies (PSU), Motherboards, Cases, and Case Fans. Each component comes with detailed specifications."
    },
    {
      question: "How do I search for specific components?",
      answer: "You can use the search bar in the navigation menu to find components by name or specifications. You can also browse components by category using the 'Component' dropdown menu."
    },
    {
      question: "Can I add items to my cart and checkout later?",
      answer: "Yes! You can add components to your cart and review them anytime. Your cart is saved, allowing you to checkout when you're ready. Simply click the 'See My Cart' button to view your selections."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major payment methods including credit cards, debit cards, and digital payment platforms. All transactions are secure and encrypted."
    },
    {
      question: "Do you offer warranty or return policies?",
      answer: "Our components come with manufacturer warranties. For detailed information about our return policy and warranty, please contact our support team at support@pcbuilder.com"
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery times vary based on your location and the availability of components. You'll receive estimated delivery information at checkout."
    },
    {
      question: "Can I get recommendations for a complete PC build?",
      answer: "Our platform provides detailed specifications for each component to help you make informed decisions. You can mix and match components based on your budget and use case (gaming, workstation, etc.)."
    },
    {
      question: "How do I create an account?",
      answer: "Click the 'Sign Up' button in the navigation bar. You'll need to provide your email and create a password. Once registered, you can save your preferences and track your orders."
    },
    {
      question: "What if I have questions about component compatibility?",
      answer: "Feel free to reach out to our support team at support@pcbuilder.com or call +91-XXX-XXX-XXXX. We're happy to help you choose compatible components for your build."
    },
    {
      question: "Can I modify or cancel my order?",
      answer: "Orders can typically be modified or cancelled within a short time after placement. Contact our support team immediately for assistance with order changes."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black min-h-screen text-white px-6 py-10">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl font-bold mb-6 text-green-300">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-300">
          Find answers to common questions about PC Builder, components, orders, and more.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-green-500 transition"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-800 transition"
            >
              <h3 className="text-lg font-semibold text-green-300 text-left">
                {faq.question}
              </h3>
              <span className={`text-2xl text-green-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-800 bg-opacity-50 border-t border-gray-800">
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto mt-16 bg-gray-900 p-8 rounded-lg border border-gray-800">
        <h2 className="text-3xl font-bold mb-4 text-green-300">Didn't find your answer?</h2>
        <p className="text-gray-300 mb-4">
          Can't find the answer you're looking for? Our support team is here to help!<br/><br/>
          Email: chileharsh19@gmail.com / nsaurabh106@gmail.com<br/>
          Phone: +91-750-670-8244 / +91-987-246-7288
        </p>
        
      </div>
    </div>
  );
}

export default Faq;