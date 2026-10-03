import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, className = "", align = "center" }) => {
    const isCenter = align === "center";
    return (
        <div className={`mb-12 ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-charcoal-900 mb-4"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-xl text-brand-charcoal-800/70 max-w-2xl mx-auto font-light"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
};

export default SectionTitle;
