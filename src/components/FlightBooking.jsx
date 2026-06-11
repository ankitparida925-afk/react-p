import React, { useState, useEffect, useRef } from 'react';
import heroVideo from '../assets/hero-airplane.mp4';

function FlightBooking() {
  const [tripType, setTripType] = useState('round-trip');
  const [passengers, setPassengers] = useState(1);
  const [flightClass, setFlightClass] = useState('economy');
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current && !isNaN(videoRef.current.duration)) {
        const scrollTop = window.scrollY;
        const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
        
        if (maxScrollTop > 0) {
          const scrollFraction = scrollTop / maxScrollTop;
          // Scrub the video based on scroll position
          videoRef.current.currentTime = videoRef.current.duration * scrollFraction;
        }
      }
    };

    // Initialize the video to paused at the first frame once metadata is loaded
    if (videoRef.current) {
      videoRef.current.pause();
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-app-bg text-app-primary pt-16 sm:pt-20">
      {/* Video Hero Section */}
      <section className="relative w-full h-[600px] sm:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video 
          ref={videoRef}
          muted 
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-app-bg"></div>

        {/* Hero Content & Search Box */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 mt-12 sm:mt-0 flex flex-col items-center">
          
          <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
            <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-xs font-medium tracking-widest uppercase mb-4 shadow-lg">
              Next-Gen Travel
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-tight drop-shadow-lg">
              The world awaits. <br/>
              <span className="font-semibold italic">Fly better.</span>
            </h1>
          </div>

          {/* Glassmorphic Search Interface */}
          <div className="w-full max-w-4xl bg-white/80 sm:bg-white/60 backdrop-blur-2xl rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/40 animate-fade-in-up delay-200">
            
            {/* Top Controls: Trip Type, Class, Passengers */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-app-primary/10 pb-4 mb-4">
              <div className="flex bg-black/5 rounded-full p-1">
                <button 
                  onClick={() => setTripType('round-trip')}
                  className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${tripType === 'round-trip' ? 'bg-white shadow-sm text-app-primary' : 'text-app-primary/60 hover:text-app-primary'}`}
                >
                  Round Trip
                </button>
                <button 
                  onClick={() => setTripType('one-way')}
                  className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${tripType === 'one-way' ? 'bg-white shadow-sm text-app-primary' : 'text-app-primary/60 hover:text-app-primary'}`}
                >
                  One Way
                </button>
              </div>

              <div className="flex items-center gap-4">
                <select 
                  className="bg-transparent text-sm font-medium text-app-primary/80 focus:outline-none cursor-pointer"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                >
                  <option value="1">1 Passenger</option>
                  <option value="2">2 Passengers</option>
                  <option value="3">3 Passengers</option>
                  <option value="4">4+ Passengers</option>
                </select>

                <select 
                  className="bg-transparent text-sm font-medium text-app-primary/80 focus:outline-none cursor-pointer"
                  value={flightClass}
                  onChange={(e) => setFlightClass(e.target.value)}
                >
                  <option value="economy">Economy</option>
                  <option value="premium">Premium Economy</option>
                  <option value="business">Business</option>
                  <option value="first">First Class</option>
                </select>
              </div>
            </div>

            {/* Main Input Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
              
              {/* Origin */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none opacity-40">
                  <span className="text-lg">🛫</span>
                </div>
                <input 
                  type="text" 
                  placeholder="Where from?" 
                  className="w-full bg-white/50 border border-white/60 focus:border-app-primary/30 rounded-2xl py-3.5 pl-12 pr-4 text-app-primary font-medium placeholder:text-app-primary/40 focus:outline-none focus:ring-4 focus:ring-black/5 transition-all"
                />
              </div>

              {/* Destination */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none opacity-40">
                  <span className="text-lg">🛬</span>
                </div>
                <input 
                  type="text" 
                  placeholder="Where to?" 
                  className="w-full bg-white/50 border border-white/60 focus:border-app-primary/30 rounded-2xl py-3.5 pl-12 pr-4 text-app-primary font-medium placeholder:text-app-primary/40 focus:outline-none focus:ring-4 focus:ring-black/5 transition-all"
                />
              </div>

              {/* Departure Date */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none opacity-40">
                  <span className="text-lg">📅</span>
                </div>
                <input 
                  type="date" 
                  className="w-full bg-white/50 border border-white/60 focus:border-app-primary/30 rounded-2xl py-3.5 pl-12 pr-4 text-app-primary font-medium focus:outline-none focus:ring-4 focus:ring-black/5 transition-all cursor-pointer"
                />
              </div>

              {/* Return Date (Hidden if one-way) */}
              <div className={`relative group transition-opacity duration-300 ${tripType === 'one-way' ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none opacity-40">
                  <span className="text-lg">📆</span>
                </div>
                <input 
                  type="date" 
                  disabled={tripType === 'one-way'}
                  className="w-full bg-white/50 border border-white/60 focus:border-app-primary/30 rounded-2xl py-3.5 pl-12 pr-4 text-app-primary font-medium focus:outline-none focus:ring-4 focus:ring-black/5 transition-all cursor-pointer"
                />
              </div>

            </div>

            {/* Search Button */}
            <div className="mt-4 flex justify-end">
              <button className="w-full md:w-auto bg-app-primary text-white px-8 py-4 rounded-2xl font-semibold text-sm hover:bg-[#222] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg flex justify-center items-center gap-2">
                Search Flights <span>→</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Destinations / Promotions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">Popular Destinations</h2>
            <p className="text-app-primary/60 font-light">Explore top places our users are flying to right now.</p>
          </div>
          <button className="hidden sm:block text-sm font-medium hover:underline underline-offset-4 opacity-80">
            View all destinations
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { city: "Tokyo, Japan", price: "$640", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80" },
            { city: "Paris, France", price: "$420", img: "https://images.unsplash.com/photo-1502602898657-3e907616223d?auto=format&fit=crop&w=600&q=80" },
            { city: "Bali, Indonesia", price: "$510", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80" }
          ].map((dest, i) => (
            <div key={i} className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
              <img src={dest.img} alt={dest.city} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-2xl font-semibold mb-1">{dest.city}</h3>
                <p className="text-white/80 text-sm mb-4">Round trips starting at</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-medium bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20">{dest.price}</span>
                  <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FlightBooking;
