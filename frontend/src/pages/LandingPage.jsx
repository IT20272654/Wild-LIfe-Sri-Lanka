import { useState } from 'react';
import video from '../assets/wildlife.mp4';
import Navigation from '../components/navigation.jsx';

export default function LandingPage() {

  return (
      <div className="min-h-screen bg-black">
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
            <Navigation />

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
        <section class="bg-slate-700">
            <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div class="max-w-lg">
                        <h2 class="text-3xl font-extrabold text-slate-50 sm:text-4xl">Explore the Wonder of Sri Lanka</h2>
                        <p class="mt-4 text-slate-300 text-lg text-justify">Wildlife in Sri Lanka is incredibly rich and diverse, thanks to its tropical climate and varied ecosystems. Despite its small size, the island is home to a wide range of animals, including elephants, leopards, sloth bears, crocodiles, and over 400 species of birds. Sri Lanka is also famous for its marine life, such as blue whales and dolphins. With numerous national parks like Yala, Wilpattu, and Udawalawe, the country offers excellent opportunities for wildlife safaris and eco-tourism, making it a top destination for nature lovers.</p>
                        <div class="mt-8">
                            <a href="#" class="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                                <span class="ml-2">&#8594;</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

     

    <section class="py-16 bg-blue-900 text-white relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        </div>

        <div class="container mx-auto px-4 relative z-10">
            <div class="max-w-3xl mx-auto text-center">
                <h2 class="text-3xl md:text-5xl font-bold mb-6">Ready for the Adventure of a Lifetime?</h2>
                <p class="text-xl mb-8">Book your Australian journey today and save up to 20% on selected tours when you
                    book before June.</p>
                <a href="#"
                    class="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold text-xl px-10 py-4 rounded-full transition">
                    Book Your Adventure Now
                </a>
                <p class="mt-6 text-blue-200">No booking fees • Free cancellation • Best price guarantee</p>
            </div>
        </div>
    </section>


      </div>
  );
}













