import React, { useEffect, useState } from 'react';
import TeamCarousel from './components/TeamCarousel';
import TestimonialHero from './components/TestimonialHero';
import TravelGuide from './components/TravelGuide';

// Navigation Header Component
function Header({ currentView, setView }) {
  return (
    <header className="animate-fade-in-up flex justify-between items-center px-8 py-6 max-w-7xl mx-auto w-full border-b border-app-primary/10">
      <div className="hidden md:flex gap-6 items-center text-sm font-medium opacity-80">
        <a href="#services" className="hover:opacity-100 transition-opacity">Services</a>
        <a href="#features" className="hover:opacity-100 transition-opacity">Features</a>
        <a href="#blog" className="hover:opacity-100 transition-opacity">Blog</a>
        <a href="#services-2" className="hover:opacity-100 transition-opacity">Services</a>
      </div>
      
      <div className="text-2xl font-bold tracking-tight text-app-primary cursor-pointer" onClick={() => setView('flowblox')}>
        Flowblox
      </div>
      
      <div className="flex gap-2 md:gap-6 items-center text-sm font-medium">
        <button 
          onClick={() => setView(currentView === 'flowblox' ? 'travel-guide' : 'flowblox')} 
          className="bg-app-green text-white px-3 md:px-4 py-2 rounded-full hover:opacity-90 transition-opacity text-xs"
        >
          {currentView === 'flowblox' ? '✈' : '🏢'} <span className="hidden md:inline">{currentView === 'flowblox' ? 'Travel Guide' : 'Team Hub'}</span>
        </button>
        <button 
          onClick={() => setView('testimonials')} 
          className="bg-[#121212] text-white px-3 md:px-4 py-2 rounded-full hover:opacity-90 transition-opacity text-xs"
        >
          💬 <span className="hidden md:inline">Testimonials</span>
        </button>
        <a href="#get-started" className="hidden sm:flex bg-app-primary text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity items-center gap-1">
          Get started <span className="text-xs">→</span>
        </a>
      </div>
    </header>
  );
}

// Hero Section Component
function Hero({ setView }) {
  return (
    <section className="animate-fade-in-up text-center pt-8 sm:pt-16 pb-4 px-4 max-w-4xl mx-auto">
      <h1 className="animate-fade-in-up delay-100 font-serif text-3xl sm:text-5xl md:text-7xl font-light tracking-tight text-app-primary mb-6 leading-tight">
        Streamline Your Team, <br />
        <span className="font-semibold italic">Supercharge Your Workflow</span>
      </h1>
      <p className="animate-fade-in-up delay-200 text-lg text-app-primary/70 max-w-2xl mx-auto mb-8 font-light">
        All-in-one platform to plan, collaborate, and deliver — faster and smarter.
      </p>
      <div className="animate-fade-in-up delay-300 flex flex-wrap justify-center gap-4">
        <a 
          href="#get-started-free" 
          className="inline-flex items-center gap-2 bg-app-primary text-white px-6 py-3.5 rounded-full hover:scale-105 transition-transform duration-300 font-medium text-sm"
        >
          Get started for Free <span>→</span>
        </a>
        <button 
          onClick={() => setView('travel-guide')}
          className="inline-flex items-center gap-2 bg-app-beige text-app-primary px-6 py-3.5 rounded-full hover:scale-105 transition-transform duration-300 font-medium text-sm"
        >
          Explore Travel Guide <span>✈</span>
        </button>
      </div>
    </section>
  );
}


// Three Feature Highlights under the carousel
function FeatureHighlights() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-app-primary/10">
      <div className="text-center md:text-left">
        <h3 className="font-semibold text-lg mb-2">Real-Time Collaboration</h3>
        <p className="text-sm text-app-primary/70 font-light leading-relaxed">
          Communicate seamlessly and keep everyone in sync with built-in messaging, file sharing, and live updates.
        </p>
      </div>
      <div className="text-center md:text-left">
        <h3 className="font-semibold text-lg mb-2">Task & Project Tracking</h3>
        <p className="text-sm text-app-primary/70 font-light leading-relaxed">
          Assign tasks, set deadlines, and visualize progress with boards, lists, and timelines tailored to your team's style.
        </p>
      </div>
      <div className="text-center md:text-left">
        <h3 className="font-semibold text-lg mb-2">Performance Insights</h3>
        <p className="text-sm text-app-primary/70 font-light leading-relaxed">
          Make smarter decisions with analytics that show productivity trends, bottlenecks, and team workload balance.
        </p>
      </div>
    </section>
  );
}

// Grid of Key Team Needs
function WorkSmarterGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
          Everything Your Team Needs to <br /> Work Smarter
        </h2>
        <p className="text-base text-app-primary/70 max-w-xl mx-auto font-light leading-relaxed">
          From task tracking to real-time chat, our features are built to keep your team connected, organized, and moving forward—together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 bg-white rounded-3xl overflow-hidden relative min-h-[380px] shadow-sm border border-app-primary/5 hover:shadow-md transition-shadow group">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
            alt="Built-In Team Chat" 
            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 flex flex-col justify-end p-6 sm:p-8 text-white">
            <h3 className="text-2xl font-semibold mb-2">Built-In Team Chat</h3>
            <p className="text-sm opacity-80 max-w-md font-light">
              Communicate instantly within projects—no need to switch apps.
            </p>
          </div>
        </div>

        <div className="md:col-span-4 bg-app-beige/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[300px] sm:min-h-[380px] shadow-sm hover:shadow-md transition-shadow group">
          <div className="w-12 h-12 bg-app-primary text-white rounded-full flex items-center justify-center font-bold mb-8">✓</div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-app-primary">Task Assignment</h3>
            <p className="text-sm text-app-primary/80 font-light leading-relaxed">
              Easily create, assign, and track tasks to keep everyone aligned and accountable.
            </p>
          </div>
        </div>

        <div className="md:col-span-4 bg-app-beige text-app-primary rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[300px] sm:min-h-[380px] shadow-sm hover:shadow-md transition-shadow group">
          <div className="w-12 h-12 bg-app-primary text-white rounded-full flex items-center justify-center font-bold mb-8">⚡</div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Real-Time Scheduling</h3>
            <p className="text-sm text-app-primary/80 font-light leading-relaxed">
              Plan meetings, set deadlines, and sync calendars so your team stays on the same page.
            </p>
          </div>
        </div>

        <div className="md:col-span-8 bg-app-green text-white rounded-3xl overflow-hidden relative min-h-[380px] shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row items-stretch">
          <div className="p-6 sm:p-8 flex flex-col justify-between md:w-1/2 z-10">
            <div className="w-12 h-12 bg-white text-app-green rounded-full flex items-center justify-center font-bold mb-8">📈</div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Progress Tracking</h3>
              <p className="text-sm opacity-80 font-light leading-relaxed">
                Visualize team performance with dashboards that highlight what's done and what's next.
              </p>
            </div>
          </div>
          <div className="relative md:w-1/2 min-h-[200px] md:min-h-full">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500" 
              alt="Progress Tracking Specialist" 
              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Proven Results Section
function ProvenResults() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20 border-t border-app-primary/10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
          Proven Results, Real Impact
        </h2>
        <p className="text-base text-app-primary/70 max-w-xl mx-auto font-light leading-relaxed">
          See how teams around the world are working faster, communicating better, and getting more done with our all-in-one management platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl p-8 border border-app-primary/5 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-4xl font-bold mb-2">35%</div>
          <h4 className="font-semibold text-lg mb-2">Increase in Productivity</h4>
          <p className="text-sm text-app-primary/70 font-light leading-relaxed">
            Teams report a significant boost in task completion speed and overall efficiency in the first month.
          </p>
        </div>
        <div className="bg-white rounded-3xl p-8 border border-app-primary/5 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-4xl font-bold mb-2">10h+</div>
          <h4 className="font-semibold text-lg mb-2">Saved per Week</h4>
          <p className="text-sm text-app-primary/70 font-light leading-relaxed">
            Automating recurring workflows and templates helps managers save hours on manual admin updates.
          </p>
        </div>
        <div className="bg-white rounded-3xl p-8 border border-app-primary/5 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-4xl font-bold mb-2">99%</div>
          <h4 className="font-semibold text-lg mb-2">Satisfaction Rate</h4>
          <p className="text-sm text-app-primary/70 font-light leading-relaxed">
            Users love the clean interface and intuitive features, making team onboarding incredibly simple.
          </p>
        </div>
      </div>
    </section>
  );
}

// TravelGuide component has been extracted to src/components/TravelGuide.jsx

// TestimonialHero component has been extracted to src/components/TestimonialHero.jsx

// Footer Component
function Footer() {
  return (
    <footer className="bg-app-primary text-white py-16 px-8 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-2">Flowblox</h3>
          <p className="text-sm opacity-60 font-light">Streamlining teamwork since 2026.</p>
        </div>
        <div className="flex gap-8 text-sm opacity-80">
          <a href="#privacy" className="hover:opacity-100 transition-opacity text-white">Privacy</a>
          <a href="#terms" className="hover:opacity-100 transition-opacity text-white">Terms</a>
          <a href="#github" className="hover:opacity-100 transition-opacity text-white">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

// Main App Container
function App() {
  const [view, setView] = useState('flowblox');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [view]);

  return (
    <div className="min-h-screen bg-app-bg text-app-primary flex flex-col transition-all duration-300">
      <Header currentView={view} setView={setView} />
      
      <main className="flex-grow">
        {view === 'flowblox' && (
          <>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
              <Hero setView={setView} />
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-200">
              <TeamCarousel />
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-300">
              <FeatureHighlights />
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
              <WorkSmarterGrid />
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
              <ProvenResults />
            </div>
          </>
        )}
        
        {view === 'travel-guide' && (
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
            <TravelGuide />
          </div>
        )}

        {view === 'testimonials' && (
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
            <TestimonialHero />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
