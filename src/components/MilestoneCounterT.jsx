import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Award, Users, Calendar, Sparkles } from "lucide-react";

const milestones = [
    { id: 1, icon: <Calendar size={24} className="text-[#38B6FF]" />, count: "15+", label: "Years of Legacy", sub: "Since 2011" },
    { id: 2, icon: <Users size={24} className="text-[#9AD945]" />, count: "850+", label: "Grand Weddings", sub: "Executed Flawlessly" },
    { id: 3, icon: <Award size={24} className="text-[#38B6FF]" />, count: "120+", label: "Corporate Galas", sub: "Premium Assemblies" },
    { id: 4, icon: <Sparkles size={24} className="text-[#138F3A]" />, count: "100%", label: "In-House Execution", sub: "Zero Outsourcing" }
];

const MilestoneCounterT = () => {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    
    // Preload all 100 images
    useEffect(() => {
        const loadedImages = [];
        let loadedCount = 0;
        const totalFrames = 100;
        
        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            const frameNumber = i.toString().padStart(3, '0');
            img.src = `/wedding-frames/ezgif-frame-${frameNumber}.jpg`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === totalFrames) {
                    setImages(loadedImages);
                }
            };
            loadedImages.push(img);
        }
    }, []);

    // Scroll and draw handler
    useEffect(() => {
        if (images.length === 0 || !canvasRef.current) return;
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d", { alpha: false });
        
        const drawFrame = (frameIndex) => {
            const img = images[frameIndex];
            if (!img) return;
            
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            // "cover" scaling strategy
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;
            
            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        };
        
        drawFrame(0); // initial frame
        
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            
            let scrollFraction = maxScroll > 0 ? scrollY / maxScroll : 0;
            scrollFraction = Math.max(0, Math.min(1, scrollFraction));
            
            const frameIndex = Math.min(99, Math.floor(scrollFraction * 100));
            drawFrame(frameIndex);
        };
        
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [images]);

    return (
        <section className="relative w-full min-h-[150vh] bg-[#0a0a0a]">
            {/* Sticky Viewport */}
            <div className="sticky top-0 w-full h-[50vh] overflow-hidden flex flex-col justify-center border-t border-stone-200/40">
                {/* Canvas Background */}
                <canvas 
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full pointer-events-none"
                />
                
                {/* Subtle Abstract Grid Overlay for Elite Depth Perception */}
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
                <div className="absolute inset-0 bg-black/50 pointer-events-none" />

                {/* Foreground Content */}
                <div className="relative z-10 mx-auto w-full max-w-[1440px] px-2 sm:px-6 md:px-16 xl:px-20 text-center flex flex-col items-center justify-center h-full">
                    <div className="grid grid-cols-4 gap-2 sm:gap-6 md:gap-8 w-full mt-12 sm:mt-24">
                        {milestones.map((stat) => (
                            <motion.div
                                key={stat.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: stat.id * 0.1, ease: "easeOut" }}
                                whileHover={{ y: -4 }}
                                className="group relative rounded-xl sm:rounded-2xl md:rounded-3xl border border-stone-200/80 bg-white/60 p-3 sm:p-5 md:p-6 text-center backdrop-blur-md transition-all duration-300 hover:border-[#38B6FF]/30 hover:bg-white/90 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
                            >
                                {/* Inner Icon Box */}
                                <div className="mx-auto mb-1.5 md:mb-3 flex h-10 w-10 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-lg sm:rounded-xl md:rounded-2xl bg-white border border-stone-200/60 shadow-sm group-hover:scale-110 group-hover:border-[#38B6FF]/20 transition-all duration-300">
                                    <div className="scale-90 sm:scale-100 flex items-center justify-center">{stat.icon}</div>
                                </div>

                                {/* Animated Count Header */}
                                <h3 className="text-[1.2rem] sm:text-[1.8rem] md:text-[2.2rem] font-bold tracking-tight text-stone-900 mb-0 md:mb-1 bg-gradient-to-r from-stone-900 via-stone-800 to-[#38B6FF] bg-clip-text">
                                    {stat.count}
                                </h3>

                                {/* Label */}
                                <p className="text-[0.55rem] sm:text-[0.7rem] md:text-[0.84rem] font-bold text-stone-800 tracking-wider uppercase mb-0 md:mb-1 leading-tight">
                                    {stat.label}
                                </p>

                                {/* Subtitle description */}
                                <p className="text-[0.65rem] sm:text-[0.78rem] text-stone-500 font-medium hidden sm:block">
                                    {stat.sub}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MilestoneCounterT;
