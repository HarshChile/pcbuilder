import React from 'react';

function Aboutus() {
  return (
    <div className="bg-black min-h-screen text-white px-6 py-10">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl font-bold mb-6 text-green-300">About PC Builder</h1>
        <p className="text-lg text-gray-300">
          Welcome to PC Builder - Your ultimate destination for building and customizing the perfect PC setup.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl mx-auto mb-16 bg-gray-900 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-green-300">Our Mission</h2>
        <p className="text-gray-300 leading-relaxed">
          At PC Builder, we believe that everyone deserves access to high-quality computer components at fair prices. Our mission is to make PC building accessible, easy, and enjoyable for beginners and enthusiasts alike. We provide a curated selection of components from trusted brands, helping you make informed decisions for your next build.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-green-300">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-400 mb-3">Wide Selection</h3>
            <p className="text-gray-300">
              Browse from hundreds of quality components including processors, graphics cards, RAM, SSDs, and more.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-400 mb-3">Expert Guidance</h3>
            <p className="text-gray-300">
              Get detailed specifications and information to help you choose the right components for your needs.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-400 mb-3">Competitive Pricing</h3>
            <p className="text-gray-300">
              Enjoy best market prices on premium components with regular updates and deals.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-400 mb-3">Easy Checkout</h3>
            <p className="text-gray-300">
              Seamless shopping experience with secure payment options and quick order processing.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-4xl mx-auto mb-16 bg-gray-900 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-green-300">Our Values</h2>
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">✓</span>
            <span><strong>Transparency:</strong> Clear pricing and honest product information</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">✓</span>
            <span><strong>Quality:</strong> Only trusted brands and verified components</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">✓</span>
            <span><strong>Customer First:</strong> Your satisfaction is our priority</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 font-bold">✓</span>
            <span><strong>Innovation:</strong> Always improving our platform and services</span>
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-green-300">Get in Touch</h2>
        <p className="text-gray-300 mb-4">
          Have questions or need assistance? We're here to help!
        </p>
        <p className="text-gray-400">
          Email: chileharsh19@gmail.com / nsaurabh106@gmail.com<br/>
          Phone: +91-750-670-8244 / +91-987-246-7288
        </p>
      </div>
    </div>
  );
}

export default Aboutus;