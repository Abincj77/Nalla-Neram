import React, { useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';
import { motion } from 'framer-motion';

const Shop = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categories = ['All', ...new Set(products.map(p => p.category))];
    const filteredProducts = activeCategory === 'All' 
        ? products 
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen pt-32 pb-24 bg-brand-cream-100">
            <div className="container mx-auto px-6 md:px-12">
                <SectionTitle 
                    title="Our Collection" 
                    subtitle="Discover the pure essence of nature with our premium spices."
                />
                
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-colors ${
                                activeCategory === cat 
                                    ? 'bg-brand-charcoal-900 text-brand-cream-50' 
                                    : 'bg-brand-cream-50 text-brand-charcoal-800 border border-brand-charcoal-900/10 hover:border-brand-charcoal-900/30'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <ProductGrid products={filteredProducts} />
                </motion.div>
            </div>
        </div>
    );
};

export default Shop;
