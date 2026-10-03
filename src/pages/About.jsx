import React, { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { motion } from 'framer-motion';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-32 pb-24 bg-brand-cream-50 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
                    
                    <motion.div 
                        initial={{ opacity: 0, clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
                        animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="aspect-[3/4] relative">
                            <div className="absolute inset-0 bg-brand-green-100 -translate-x-4 translate-y-4" />
                            <img 
                                src={siteConfig.about.image} 
                                alt="About Us" 
                                className="w-full h-full object-cover relative z-10 shadow-xl"
                            />
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-1/2 space-y-10"
                    >
                        <div>
                            <h4 className="text-sm font-semibold tracking-widest text-brand-spice-600 uppercase mb-4">Our Story</h4>
                            <h1 className="text-5xl md:text-6xl font-serif text-brand-charcoal-900 leading-tight">
                                {siteConfig.about.title}
                            </h1>
                        </div>
                        
                        <div className="w-24 h-1 bg-brand-green-500"></div>
                        
                        <p className="text-xl text-brand-charcoal-800/80 font-light leading-relaxed">
                            {siteConfig.about.description}
                        </p>
                        
                        <div className="pt-8 grid gap-6">
                            <div className="border-t border-brand-charcoal-900/10 pt-6">
                                <h3 className="text-2xl font-serif mb-2">Premium Quality</h3>
                                <p className="font-light text-brand-charcoal-800/70">Selected from the best farms to ensure rich flavor.</p>
                            </div>
                            <div className="border-t border-brand-charcoal-900/10 pt-6">
                                <h3 className="text-2xl font-serif mb-2">Natural Aroma</h3>
                                <p className="font-light text-brand-charcoal-800/70">Processed meticulously to retain natural oils and aroma.</p>
                            </div>
                        </div>
                    </motion.div>
                    
                </div>
            </div>
        </div>
    );
};

export default About;
