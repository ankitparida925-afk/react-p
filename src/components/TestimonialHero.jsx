import React from 'react';

// Testimonial Hero Component (matching screenshot)
function TestimonialHero() {
  const teamImages = [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80"
  ];

  // 9 Columns containing exactly 13 images mapping to a U-shape
  const columns = [
    { ghostTop: '-30%', img1Top: '5%', img2Top: '32%', images: [teamImages[0], teamImages[1]] },
    { ghostTop: '-40%', img1Top: '-5%', img2Top: '22%', images: [teamImages[2], teamImages[3]] },
    { ghostTop: '-25%', img1Top: '6%', images: [teamImages[4]] },
    { ghostTop: '-40%', img1Top: '-5%', images: [teamImages[5]] }, // Col 4
    { ghostTop: '-25%', img1Top: '6%', images: [teamImages[6]] }, // Col 5
    { ghostTop: '-40%', img1Top: '-5%', images: [teamImages[7]] }, // Col 6
    { ghostTop: '-25%', img1Top: '6%', images: [teamImages[8]] }, // Col 7
    { ghostTop: '-40%', img1Top: '-5%', img2Top: '22%', images: [teamImages[9], teamImages[10]] }, // Col 8
    { ghostTop: '-30%', img1Top: '5%', img2Top: '32%', images: [teamImages[11], teamImages[12]] }, // Col 9
  ];

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  return (
    <section className="w-full flex-1 flex flex-col items-center justify-center text-center pt-12 sm:pt-24 pb-8 sm:pb-24 overflow-hidden relative">
      
      {/* Arch Grid Section - Allowed to bleed off edges on tiny screens to keep images large */}
      <div className="relative w-full h-[260px] sm:h-[450px] md:h-[600px] z-10">
        {/* Mathematically perfectly centered grid wrapper */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[100vw] max-w-[1300px] h-full flex justify-between sm:justify-center gap-[2px] sm:gap-4 md:gap-6 px-1 sm:px-4">
          {columns.map((col, idx) => {
            return (
              <div key={idx} className="relative w-[10.5%] h-full flex justify-center">
              {/* Faint Vertical track line */}
              <div className="absolute top-[-100px] bottom-[-200px] w-px bg-gradient-to-b from-transparent via-black/[0.04] to-transparent"></div>
              
              {/* Ghost Placeholder Box */}
              {col.ghostTop !== null && (
                <div 
                  className="absolute w-full aspect-[4/5] rounded-xl md:rounded-2xl bg-black/[0.02]"
                  style={{ top: col.ghostTop }}
                ></div>
              )}
              
              {/* Main Images */}
              {col.images.map((imgUrl, imgIdx) => (
                <div 
                  key={imgIdx}
                  className="absolute w-full aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden shadow-lg shadow-black/5 bg-white animate-fall-from-left"
                  style={{ 
                    top: imgIdx === 0 ? col.img1Top : `calc(${col.img2Top} + ${isMobile ? '10%' : '0%'})`, // Push second image down slightly on mobile to prevent overlap
                    animationDelay: `${idx * 100 + imgIdx * 200}ms`
                  }}
                >
                  <img src={imgUrl} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt={`Testimonial ${idx}-${imgIdx}`} />
                </div>
              ))}
            </div>
          );
        })}
        </div>
      </div>

      {/* Text Content Area perfectly nesting inside the taller arch on mobile */}
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center relative z-20 -mt-24 sm:-mt-32 md:-mt-[22rem]">
        {/* Pill Badge */}
        <div className="bg-black/5 text-[#121212] text-[8px] sm:text-xs font-semibold px-2 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-8">
          Testimonials
        </div>
        
        {/* Large Heading */}
        <h2 className="text-xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-2 sm:mb-6 leading-[1.1]">
          <span className="text-[#121212]">Trusted by leaders</span><br />
          <span className="text-[#121212]/40">from various industries</span>
        </h2>
        
        {/* Subtext */}
        <p className="text-[9px] md:text-base text-[#121212]/80 font-medium max-w-[250px] md:max-w-lg mx-auto mb-5 sm:mb-10 leading-snug sm:leading-relaxed">
          Learn why professionals trust our solutions to complete their customer journeys.
        </p>
        
        {/* Black Button */}
        <button className="bg-[#121212] text-white px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full font-semibold text-[9px] sm:text-sm hover:scale-105 transition-transform flex items-center gap-1 sm:gap-2 shadow-xl shadow-black/10">
          Read Success Stories <span className="text-[10px] sm:text-sm">→</span>
        </button>
      </div>
    </section>
  );
}

export default TestimonialHero;
