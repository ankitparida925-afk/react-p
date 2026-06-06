import React from 'react';

// Travel Guide Book Section Component
function TravelGuide() {
  const guides = [
    {
      id: 1,
      title: "Couple Travel",
      img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=400",
      icon: "💛",
      themeColor: "bg-app-beige text-app-primary"
    },
    {
      id: 2,
      title: "Friends' Trip",
      img: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=80&w=400",
      icon: "🧡",
      themeColor: "bg-app-primary text-white"
    },
    {
      id: 3,
      title: "Seaside Getaway",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400",
      icon: "💙",
      themeColor: "bg-app-green text-white"
    },
    {
      id: 4,
      title: "Family Camping",
      img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=400",
      icon: "❤️",
      themeColor: "bg-app-beige text-app-primary"
    },
    {
      id: 5,
      title: "Coastal Drive",
      img: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=400",
      icon: "💚",
      themeColor: "bg-app-green text-white"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-12 sm:pt-20 pb-16 flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
      <div className="lg:w-1/3 text-center lg:text-left flex flex-col justify-end">
        <div className="pb-1">
          <h4 className="text-xs tracking-widest uppercase text-app-primary/40 mb-2 font-medium">Exclusive Collection</h4>
        <h2 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-app-primary mb-4 leading-none">
          Travel <br className="hidden lg:block" />
          <span className="font-semibold italic">guide book</span>
        </h2>
        <p className="text-sm text-app-primary/60 font-light leading-relaxed max-w-sm mx-auto lg:mx-0">
          Discover our best 5 handpicked travel destinations. Carefully curated routes, local secrets, and inspiring guides written to help you wander better.
        </p>
        </div>
      </div>

      {/* Right 5-Card Capsules */}
      <div className="lg:w-2/3 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-8 overflow-visible">
        {guides.map((guide, index) => (
          <div 
            key={guide.id} 
            className={`flex flex-col items-center ${index % 2 === 0 ? 'animate-slide-up-entry' : 'animate-slide-down-entry'}`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Wrapper for capsule and badge to allow badge to spill outside */}
            <div className="relative w-full">
              {/* Curved U-Shape Capsule (Curved top, rounded bottom) */}
              <div className="w-full aspect-[1/3.2] rounded-full overflow-hidden bg-white group shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={guide.img} 
                  alt={guide.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Circular floating icon on the bottom right curve, half outside */}
              <div className={`absolute bottom-8 right-0 translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-md ${guide.themeColor} z-10`}>
                {guide.icon}
              </div>
            </div>
            {/* Label below capsule */}
            <h4 className="mt-6 font-semibold text-sm text-app-primary text-center leading-tight">
              {guide.title}
            </h4>
            <p className="text-[10px] text-app-primary/40 uppercase tracking-widest mt-1">guide book</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TravelGuide;
