import React from 'react';

function Contact() {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#D388F8]">Contact Us</h1>
          <p className="text-lg text-gray-400 mt-2">
            We appreciate your interest in reaching out to us. Our contact page is currently under development. We are working hard to bring you a seamless way to get in touch with our team. Please check back soon for updates.
          </p>
        </div>

        <div className="text-center mt-12">
          <a href="/" className="bg-[#D388F8] text-white py-2 px-6 rounded-lg font-semibold hover:bg-[#a565d1]">
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
