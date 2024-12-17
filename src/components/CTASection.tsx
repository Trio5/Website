import React from 'react';

export function CTASection() {
  return (
    <section className="py-24 px-4 bg-black" id="cta-section">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Ready to Join the Elite?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Sign up for exclusive deals and early access to new releases.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-md text-gray-900 w-full sm:w-auto"
          />
          <button className="bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
}
