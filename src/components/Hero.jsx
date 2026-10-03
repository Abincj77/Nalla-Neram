import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { siteConfig } from '../data/siteConfig';

const Hero = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

    return (
        <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-brand-charcoal-900">
            {/* Spice Grain Texture */}
            <div className="spice-grain" />

            {/* Parallax Background */}
            <motion.div 
                style={{ y: yBackground }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal-900/40 via-brand-charcoal-900/20 to-brand-charcoal-900/80 z-10" />
                <img 
                    src={siteConfig.hero.image} 
                    alt="Premium Spices Background" 
                    className="w-full h-full object-cover object-center"
                />
            </motion.div>

            {/* Floating Particles (CSS simulated) */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-40">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ 
                            y: "120vh", 
                            x: `${Math.random() * 100}vw`,
                            rotate: Math.random() * 360,
                            scale: Math.random() * 0.5 + 0.2
                        }}
                        animate={{ 
                            y: "-20vh",
                            rotate: Math.random() * 360 + 360,
                        }}
                        transition={{ 
                            duration: Math.random() * 10 + 15, 
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 10
                        }}
                        className="absolute w-4 h-4 bg-brand-spice-600/30 rounded-full blur-[2px]"
                    />
                ))}
            </div>

            {/* Content Container */}
            <motion.div 
                style={{ y: yContent, opacity: opacityHero }}
                className="relative z-20 text-center px-6 w-full max-w-5xl"
            >
                <div className="overflow-hidden mb-6">
                    <motion.h1 
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-malayalam font-bold text-brand-cream-50 drop-shadow-2xl tracking-wide"
                    >
                        {siteConfig.brandNameMalayalam}
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                >
                    <p className="text-xl md:text-3xl font-serif text-brand-cream-50/90 mb-2 font-light">
                        {siteConfig.hero.subtitle1}
                    </p>
                    <p className="text-lg md:text-xl font-sans text-brand-spice-500 uppercase tracking-[0.3em] font-medium mb-12">
                        {siteConfig.hero.subtitle2}
                    </p>

                    <motion.a 
                        href="#collection"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-10 py-4 bg-brand-cream-50 text-brand-charcoal-900 uppercase tracking-widest text-sm font-semibold transition-colors hover:bg-brand-spice-600 hover:text-brand-cream-50"
                    >
                        {siteConfig.hero.ctaPrimary}
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest text-brand-cream-50/60">Scroll</span>
                <motion.div 
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-[1px] h-12 bg-brand-cream-50/40"
                />
            </motion.div>
        </section>
    );
};

export default Hero;
