import React, { useState, useEffect } from 'react';

function TeamCarousel() {
  const teamMembers = [
    { id: 1, name: "Marcus", role: "Dev", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300", colorName: "Dark Charcoal", colorHex: "#121212", colorClass: "bg-app-primary" },
    { id: 2, name: "David", role: "Design", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300", colorName: "Dark Charcoal", colorHex: "#121212", colorClass: "bg-app-primary" },
    { id: 3, name: "Elena", role: "PM", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300", colorName: "Primary Cream", colorHex: "#F8F4EB", colorClass: "bg-app-bg border border-app-primary/20" },
    { id: 4, name: "Thomas", role: "Director", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300", colorName: "Muted Sage Green", colorHex: "#3F5E4D", colorClass: "bg-app-green" },
    { id: 5, name: "Sarah", role: "Marketing", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300", colorName: "Warm Sand Beige", colorHex: "#C2B39E", colorClass: "bg-app-beige" },
    { id: 6, name: "Michael", role: "Support", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300", colorName: "Warm Sand Beige", colorHex: "#C2B39E", colorClass: "bg-app-beige" },
    { id: 7, name: "Alex", role: "Engineer", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300", colorName: "Warm Sand Beige", colorHex: "#C2B39E", colorClass: "bg-app-beige" },
    { id: 8, name: "Jessica", role: "Analyst", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300", colorName: "Warm Sand Beige", colorHex: "#C2B39E", colorClass: "bg-app-beige" },
    { id: 9, name: "Ryan", role: "Writer", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300", colorName: "Dark Charcoal", colorHex: "#121212", colorClass: "bg-app-primary" },
    { id: 10, name: "Sophia", role: "Strategist", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300", colorName: "Muted Sage Green", colorHex: "#3F5E4D", colorClass: "bg-app-green" }
  ];

  const [activeIndex, setActiveIndex] = useState(4.5);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startActiveIndex, setStartActiveIndex] = useState(4.5);
  const [dragOffset, setDragOffset] = useState(0);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isClickAnimating, setIsClickAnimating] = useState(false);

  // Continuous smooth auto-rotation drift using requestAnimationFrame
  useEffect(() => {
    if (isDragging || isClickAnimating) return;

    let animationFrameId;
    let lastTime = performance.now();
    const driftSpeed = 0.00005; // Slightly faster continuous flow

    const animate = (time) => {
      const delta = time - lastTime;
      lastTime = time;

      setActiveIndex((prev) => {
        let next = prev + driftSpeed * delta;
        if (next >= teamMembers.length) next -= teamMembers.length;
        if (next < 0) next += teamMembers.length;
        return next;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging, isClickAnimating, teamMembers.length]);

  const handleStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
    setStartActiveIndex(activeIndex);
    setDragOffset(0);
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    const deltaX = clientX - startX;
    setDragOffset(Math.abs(deltaX));
    let newIndex = startActiveIndex - (deltaX / 150);
    // Loop the drag index
    while (newIndex < 0) newIndex += teamMembers.length;
    while (newIndex >= teamMembers.length) newIndex -= teamMembers.length;
    setActiveIndex(newIndex);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setActiveIndex(Math.round(activeIndex) % teamMembers.length);
  };

  const handleCardClick = (index, member) => {
    // If it was a drag, don't trigger the click color select
    if (dragOffset > 10) return;
    
    setIsClickAnimating(true);
    setActiveIndex(index);
    setSelectedMember(member);
    
    // Disable CSS transitions after the click animation finishes
    setTimeout(() => {
      setIsClickAnimating(false);
    }, 500);
  };

  const baseWidth = typeof window !== 'undefined' ? (window.innerWidth < 640 ? 96 : window.innerWidth < 768 ? 128 : window.innerWidth < 1024 ? 144 : 160) : 160;

  const getVisualWidth = (d) => {
    const absD = Math.abs(d);
    
    // Force middle 3 images (d=0, d=1, d=-1) to have the exact same dimensions
    const sizeD = absD <= 1 ? 1 : absD;
    
    // Smooth C-curve (parabola) instead of sharp V-curve
    const translateZ = 15 + Math.pow(sizeD, 2) * 12; 
    
    let rotateY = d * -20;
    // Add extra rotation inward for the outermost edge images to emphasize the C-shape
    if (absD > 3) {
      rotateY += Math.sign(d) * (absD - 3) * -20;
    }
    
    let scale = 0.75 + (sizeD * 0.1); 
    // Boost the size of the outermost edge images specifically
    if (sizeD > 3) {
      scale += (sizeD - 3) * 0.25; 
    }
    
    const rotRad = (rotateY * Math.PI) / 180;
    const projectedWidth = (baseWidth * scale) * Math.cos(rotRad);
    
    return projectedWidth / (1 - translateZ / 700);
  };

  const getExactTranslateX = (diff) => {
    let absD = Math.abs(diff);
    let sign = Math.sign(diff);
    let integerPart = Math.floor(absD);
    let fractionalPart = absD - integerPart;

    // Helper to calculate exact X at absolute integer distances
    const getXAtInteger = (dInt) => {
      let x = 0;
      for (let i = 0; i < dInt; i++) {
        let midD = i + 0.5; // Static midpoint for the full integer step
        let w = getVisualWidth(midD);
        
        let dynamicGap = 4 + (Math.pow(midD, 1.5) * 12);  
        if (midD > 2) {
          dynamicGap += 12;
        }
        if (midD > 3) {
          dynamicGap += 40;
        }
        
        let screenDist = w + dynamicGap;
        let midZ = Math.pow(midD, 2) * 12;
        x += screenDist * (1 - midZ / 700);
      }
      return x;
    };

    let x0 = getXAtInteger(integerPart);
    let x1 = getXAtInteger(integerPart + 1);

    // Linearly interpolate between the two exact integer positions
    let x = x0 + (x1 - x0) * fractionalPart;
    
    return x * sign;
  };

  return (
    <div className="w-full overflow-hidden pt-4 pb-12 select-none">
      <div 
        className="max-w-7xl mx-auto px-4 cursor-grab active:cursor-grabbing"
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
      >
        <div className="perspective-container relative flex justify-center items-center h-[260px] sm:h-[340px] md:h-[400px]">
          {teamMembers.map((member, index) => {
            let diff = index - activeIndex;
            
            // Re-introduce infinite loop wrap-around
            const halfLength = teamMembers.length / 2;
            if (diff > halfLength) diff -= teamMembers.length;
            if (diff < -halfLength) diff += teamMembers.length;

            const absD = Math.abs(diff);
            
            // Force middle 3 images to have the exact same dimensions and depth
            const sizeD = absD <= 1 ? 1 : absD;
            
            let rotateY = diff * -20; 
            // Add extra rotation inward for the outermost edge images to emphasize the C-shape
            if (absD > 3) {
              rotateY += Math.sign(diff) * (absD - 3) * -20;
            }
            
            // Add a microscopic continuous absD offset to translateZ so the GPU can hardware-sort 
            // the depths of the middle 3 images without relying on discrete z-index jumps!
            const translateZ = 15 + Math.pow(sizeD, 2) * 12 + (absD * 0.1); 
            const translateX = getExactTranslateX(diff); // Mathematically exact equal spacing
            const translateY = sizeD * 12;
            
            // Scaled all images down very slightly (0.75 base)
            let scale = 0.75 + (sizeD * 0.1); 
            // Boost the size of the outermost edge images specifically
            if (sizeD > 3) {
              scale += (sizeD - 3) * 0.25; 
            }
            
            // Hide the card and disable transition when it's at the extreme edge wrapping around
            const isWrapping = absD > 4.2;

            const cardStyle = {
              opacity: isWrapping ? 0 : 1,
              pointerEvents: isWrapping ? 'none' : 'auto',
              transform: `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
              transformStyle: 'preserve-3d',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(0, 0, 0, 0.3)', // A very strong, highly visible double shadow
              // ONLY enable CSS transition if the user clicked. Otherwise let JS handle it smoothly
              transition: isClickAnimating && !isWrapping ? 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)' : 'none',
            };

            const isActive = Math.round(activeIndex) === index;

            return (
              <div 
                key={member.id} 
                onClick={() => handleCardClick(index, member)}
                className="absolute w-16 sm:w-24 md:w-36 lg:w-40 aspect-[3/4] rounded-2xl sm:rounded-3xl cursor-pointer"
                style={cardStyle}
              >
                <div className="relative w-full h-full pointer-events-none">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className={`w-full h-full object-cover rounded-2xl sm:rounded-3xl transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-90'}`}
                    style={{ WebkitBoxReflect: 'below 8px linear-gradient(transparent, transparent, rgba(0,0,0,0.3))' }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-app-primary/40 mt-6 font-light">
          ← Drag to slide the carousel left or right →
        </p>
      </div>
    </div>
  );
}

export default TeamCarousel;
