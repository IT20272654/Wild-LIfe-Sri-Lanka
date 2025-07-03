import { useState } from 'react';
import video from '../assets/wildlife.mp4';

export default function LandingPage() {

  return (
      <div className="min-h-screen bg-gray-50">
        <div>
          {/* Head content can be managed in index.html or using react-helmet */}

          <header className="relative min-h-72 md:min-h-screen" x-data="{ mobileMenuOpen: false }">
            {/* Background Image */}
            <div className="absolute inset-0 bg-blue-900 overflow-hidden">
              <video
                src={video}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover opacity-70"
              />
            </div>

            {/* Navigation */}
            <nav className="container mx-auto px-4 py-6 flex justify-between items-center relative z-20">
              <a href="#" className="text-white text-3xl font-bold z-20">
                <span className="text-yellow-300">WildLife</span> Sri Lanka
              </a>

              <div className="hidden md:flex space-x-10 text-white text-lg">
                {['Destinations', 'Tours', 'Gallery', 'Blog'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="hover:text-yellow-300 transition font-medium"
                  >
                    {item}
                  </a>
                ))}
                {/* Dropdowns would need to be converted to components with state */}
              </div>

              <a
                href="#"
                className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-3 rounded-full transition font-medium text-lg"
              >
                Book Now
              </a>

              <button
                className="md:hidden text-white z-40 p-2 fixed top-6 right-4 focus:outline-none"
                aria-label="Toggle menu"
              >
                <div className="w-8 h-8 relative flex justify-center items-center">
                  <span className="absolute h-1 w-8 bg-white rounded-full transform transition-all duration-300 -translate-y-2"></span>
                  <span className="absolute h-1 w-8 bg-white rounded-full transition-all duration-300"></span>
                  <span className="absolute h-1 w-8 bg-white rounded-full transform transition-all duration-300 translate-y-2"></span>
                </div>
              </button>
            </nav>

            {/* Hero Section */}
            <div className="relative container mx-auto px-4 flex items-center justify-start h-full min-h-72 md:min-h-screen z-10">
              <div className="max-w-2xl text-white mt-16 md:mt-0 md:pt-20 lg:pt-0">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                  Discover the magic<br />of Sri Lanka
                </h1>
                <p className="text-xl md:text-2xl mb-8">
                  Where adventure meets wonder in the land down under.
                </p>
                <a
                  href="#"
                  className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 my-5 rounded-full transition text-lg"
                >
                  Start Your Journey
                </a>
              </div>
            </div>

            <div className="absolute bottom-10 md:bottom-16 left-4 md:left-8 lg:left-16 z-0">
            </div>
          </header>





        </div>

      </div>
  );
}













