import React, { useEffect, useState } from 'react';
import TeamCarousel from './components/TeamCarousel';
import TestimonialHero from './components/TestimonialHero';
import TravelGuide from './components/TravelGuide';

// Navigation Header Component
function Header({ currentView, setView }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="animate-fade-in-up flex flex-col px-4 sm:px-8 py-4 sm:py-6 max-w-7xl mx-auto w-full border-b border-app-primary/10 relative z-50 bg-app-bg">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold tracking-tight text-app-primary cursor-pointer z-10" onClick={() => { setView('flowblox'); setIsMobileMenuOpen(false); }}>
          Flowblox
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center text-sm font-medium opacity-80 absolute left-1/2 -translate-x-1/2">
          <a href="#services" className="hover:opacity-100 transition-opacity">Services</a>
          <a href="#features" className="hover:opacity-100 transition-opacity">Features</a>
          <a href="#blog" className="hover:opacity-100 transition-opacity">Blog</a>
          <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
        </div>
        
        {/* Buttons & Hamburger */}
        <div className="flex gap-2 sm:gap-4 items-center text-sm font-medium z-10">
          <button 
            onClick={() => { setView(currentView === 'flowblox' ? 'travel-guide' : 'flowblox'); setIsMobileMenuOpen(false); }} 
            className="bg-app-green text-white px-3 sm:px-4 py-2 rounded-full hover:opacity-90 transition-opacity text-xs"
          >
            {currentView === 'flowblox' ? '✈' : '🏢'} <span className="hidden sm:inline">{currentView === 'flowblox' ? 'Travel Guide' : 'Team Hub'}</span>
          </button>
          <button 
            onClick={() => { setView('testimonials'); setIsMobileMenuOpen(false); }} 
            className="hidden sm:flex bg-[#121212] text-white px-3 md:px-4 py-2 rounded-full hover:opacity-90 transition-opacity text-xs"
          >
            💬 <span className="hidden md:inline">Testimonials</span>
          </button>
          
          {/* Hamburger Icon */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-app-primary transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-app-primary transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-app-primary transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden w-full overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col gap-4 py-4 border-t border-app-primary/10 text-base font-medium">
          <a href="#services" className="hover:opacity-100 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#features" className="hover:opacity-100 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#blog" className="hover:opacity-100 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>Blog</a>
          <a href="#about" className="hover:opacity-100 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <button 
            onClick={() => { setView('testimonials'); setIsMobileMenuOpen(false); }} 
            className="flex self-start items-center gap-2 bg-[#121212] text-white px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity text-sm mt-2"
          >
            💬 Testimonials
          </button>
        </div>
      </div>
    </header>
  );
}

// Hero Section Component
function Hero({ setView }) {
  return (
    <section className="animate-fade-in-up text-center pt-8 sm:pt-16 pb-4 px-4 max-w-4xl mx-auto">
      <h1 className="animate-fade-in-up delay-100 font-serif text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-app-primary mb-6 leading-tight">
        Streamline Your Team, <br />
        <span className="font-semibold italic">Supercharge Your Workflow</span>
      </h1>
      <p className="animate-fade-in-up delay-200 text-base sm:text-lg text-app-primary/70 max-w-2xl mx-auto mb-8 font-light">
        All-in-one platform to plan, collaborate, and deliver — faster and smarter.
      </p>
      <div className="animate-fade-in-up delay-300 flex flex-wrap justify-center gap-4">
        <a 
          href="#get-started-free" 
          className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-app-primary text-white px-6 py-3.5 rounded-full hover:scale-105 transition-transform duration-300 font-medium text-sm"
        >
          Get started for Free <span>→</span>
        </a>
        <button 
          onClick={() => setView('travel-guide')}
          className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-app-beige text-app-primary px-6 py-3.5 rounded-full hover:scale-105 transition-transform duration-300 font-medium text-sm"
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
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16 grid grid-cols-3 gap-3 sm:gap-8 border-b border-app-primary/10">
      <div className="text-center md:text-left">
        <h3 className="font-semibold text-[10px] sm:text-lg mb-1 sm:mb-2 leading-tight">Real-Time Collaboration</h3>
        <p className="text-[9px] sm:text-sm text-app-primary/70 font-light leading-tight sm:leading-relaxed hidden sm:block">
          Communicate seamlessly and keep everyone in sync with built-in messaging, file sharing, and live updates.
        </p>
        <p className="text-[9px] sm:text-sm text-app-primary/70 font-light leading-tight sm:hidden">
          Keep everyone in sync.
        </p>
      </div>
      <div className="text-center md:text-left">
        <h3 className="font-semibold text-[10px] sm:text-lg mb-1 sm:mb-2 leading-tight">Task Tracking</h3>
        <p className="text-[9px] sm:text-sm text-app-primary/70 font-light leading-tight sm:leading-relaxed hidden sm:block">
          Assign tasks, set deadlines, and visualize progress with boards, lists, and timelines tailored to your team's style.
        </p>
        <p className="text-[9px] sm:text-sm text-app-primary/70 font-light leading-tight sm:hidden">
          Visualize team progress.
        </p>
      </div>
      <div className="text-center md:text-left">
        <h3 className="font-semibold text-[10px] sm:text-lg mb-1 sm:mb-2 leading-tight">Performance Insights</h3>
        <p className="text-[9px] sm:text-sm text-app-primary/70 font-light leading-tight sm:leading-relaxed hidden sm:block">
          Make smarter decisions with analytics that show productivity trends, bottlenecks, and team workload balance.
        </p>
        <p className="text-[9px] sm:text-sm text-app-primary/70 font-light leading-tight sm:hidden">
          Make smarter decisions.
        </p>
      </div>
    </section>
  );
}

// Grid of Key Team Needs
function WorkSmarterGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
      <div className="text-center mb-10 sm:mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 leading-tight">
          Everything Your Team Needs to <br className="hidden md:block" /> Work Smarter
        </h2>
        <p className="text-sm sm:text-base text-app-primary/70 max-w-xl mx-auto font-light leading-relaxed">
          From task tracking to real-time chat, our features are built to keep your team connected, organized, and moving forward—together.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-3 sm:gap-6">
        <div className="col-span-8 bg-white rounded-2xl sm:rounded-3xl overflow-hidden relative min-h-[160px] sm:min-h-[380px] shadow-sm border border-app-primary/5 hover:shadow-md transition-shadow group">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
            alt="Built-In Team Chat" 
            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 flex flex-col justify-end p-4 sm:p-8 text-white">
            <h3 className="text-base sm:text-2xl font-semibold mb-1 sm:mb-2 leading-tight">Built-In Team Chat</h3>
            <p className="text-[10px] sm:text-sm opacity-80 max-w-md font-light leading-tight">
              Communicate instantly within projects.
            </p>
          </div>
        </div>

        <div className="col-span-4 bg-app-beige/30 rounded-2xl sm:rounded-3xl p-4 sm:p-8 flex flex-col justify-between min-h-[160px] sm:min-h-[380px] shadow-sm hover:shadow-md transition-shadow group">
          <div className="w-6 h-6 sm:w-12 sm:h-12 bg-app-primary text-white rounded-full flex items-center justify-center font-bold mb-2 sm:mb-8 text-xs sm:text-base">✓</div>
          <div>
            <h3 className="text-sm sm:text-2xl font-semibold mb-1 sm:mb-2 text-app-primary leading-tight">Task Assignment</h3>
            <p className="text-[10px] sm:text-sm text-app-primary/80 font-light leading-tight sm:leading-relaxed hidden sm:block">
              Easily create, assign, and track tasks to keep everyone aligned and accountable.
            </p>
            <p className="text-[9px] sm:text-sm text-app-primary/80 font-light leading-tight sm:hidden">
              Track tasks seamlessly.
            </p>
          </div>
        </div>

        <div className="col-span-4 bg-app-beige text-app-primary rounded-2xl sm:rounded-3xl p-4 sm:p-8 flex flex-col justify-between min-h-[160px] sm:min-h-[380px] shadow-sm hover:shadow-md transition-shadow group">
          <div className="w-6 h-6 sm:w-12 sm:h-12 bg-app-primary text-white rounded-full flex items-center justify-center font-bold mb-2 sm:mb-8 text-xs sm:text-base">⚡</div>
          <div>
            <h3 className="text-sm sm:text-2xl font-semibold mb-1 sm:mb-2 leading-tight">Real-Time Scheduling</h3>
            <p className="text-[10px] sm:text-sm text-app-primary/80 font-light leading-tight sm:leading-relaxed hidden sm:block">
              Plan meetings, set deadlines, and sync calendars so your team stays on the same page.
            </p>
            <p className="text-[9px] sm:text-sm text-app-primary/80 font-light leading-tight sm:hidden">
              Sync team calendars.
            </p>
          </div>
        </div>

        <div className="col-span-8 bg-app-green text-white rounded-2xl sm:rounded-3xl overflow-hidden relative min-h-[160px] sm:min-h-[380px] shadow-sm hover:shadow-md transition-shadow group flex flex-row items-stretch">
          <div className="p-4 sm:p-8 flex flex-col justify-between w-1/2 z-10">
            <div className="w-6 h-6 sm:w-12 sm:h-12 bg-white text-app-green rounded-full flex items-center justify-center font-bold mb-2 sm:mb-8 text-xs sm:text-base">📈</div>
            <div>
              <h3 className="text-base sm:text-2xl font-semibold mb-1 sm:mb-2 leading-tight">Progress Tracking</h3>
              <p className="text-[10px] sm:text-sm opacity-80 font-light leading-tight sm:leading-relaxed hidden sm:block">
                Visualize team performance with dashboards that highlight what's done and what's next.
              </p>
              <p className="text-[9px] sm:text-sm opacity-80 font-light leading-tight sm:hidden">
                Visualize performance.
              </p>
            </div>
          </div>
          <div className="relative w-1/2 min-h-full">
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
      <div className="text-center mb-10 sm:mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 leading-tight">
          Proven Results, Real Impact
        </h2>
        <p className="text-sm sm:text-base text-app-primary/70 max-w-xl mx-auto font-light leading-relaxed">
          See how teams around the world are working faster, communicating better, and getting more done with our all-in-one management platform.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:gap-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-8 border border-app-primary/5 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">35%</div>
          <h4 className="font-semibold text-[10px] sm:text-lg mb-1 sm:mb-2 leading-tight">Increase in Productivity</h4>
          <p className="text-[9px] sm:text-sm text-app-primary/70 font-light leading-tight sm:leading-relaxed hidden sm:block">
            Teams report a significant boost in task completion speed and overall efficiency in the first month.
          </p>
          <p className="text-[9px] sm:text-sm text-app-primary/70 font-light leading-tight sm:hidden">
            Boost in overall efficiency.
          </p>
        </div>
        <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-8 border border-app-primary/5 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">10h+</div>
          <h4 className="font-semibold text-[10px] sm:text-lg mb-1 sm:mb-2 leading-tight">Saved per Week</h4>
          <p className="text-[9px] sm:text-sm text-app-primary/70 font-light leading-tight sm:leading-relaxed hidden sm:block">
            Automating recurring workflows and templates helps managers save hours on manual admin updates.
          </p>
          <p className="text-[9px] sm:text-sm text-app-primary/70 font-light leading-tight sm:hidden">
            Saved on manual updates.
          </p>
        </div>
        <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-8 border border-app-primary/5 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">99%</div>
          <h4 className="font-semibold text-[10px] sm:text-lg mb-1 sm:mb-2 leading-tight">Satisfaction Rate</h4>
          <p className="text-[9px] sm:text-sm text-app-primary/70 font-light leading-tight sm:leading-relaxed hidden sm:block">
            Users love the clean interface and intuitive features, making team onboarding incredibly simple.
          </p>
          <p className="text-[9px] sm:text-sm text-app-primary/70 font-light leading-tight sm:hidden">
            Love the clean interface.
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
    <footer className="bg-app-primary text-white py-4 sm:py-16 px-4 sm:px-8 mt-2 sm:mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-base sm:text-2xl font-bold mb-0.5 sm:mb-2">Flowblox</h3>
          <p className="text-[10px] sm:text-sm opacity-60 font-light">Streamlining teamwork since 2026.</p>
        </div>
        <div className="flex gap-3 sm:gap-8 text-[10px] sm:text-sm opacity-80">
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
  // Initialize state from URL hash if present, otherwise default to 'flowblox'
  const [view, setView] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      return hash || 'flowblox';
    }
    return 'flowblox';
  });

  // Listen for native browser Back/Forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setView(hash);
      } else {
        setView('flowblox');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync state changes to the URL so the user can bookmark/refresh
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (view === 'flowblox') {
        // Clear hash for home page for a cleaner URL, without adding extra history
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      } else {
        window.location.hash = view;
      }
    }
  }, [view]);


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
      
      <main className="flex-grow flex flex-col">
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
          <div className="flex-1 flex flex-col animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
            <TestimonialHero />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
