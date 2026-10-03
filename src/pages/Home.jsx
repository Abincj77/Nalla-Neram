import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';
import { siteConfig } from '../data/siteConfig';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    const featuredProducts = products.filter(p => p.featured).slice(0, 3);

    return (
        <div className="min-h-screen bg-brand-cream-100">
            <Hero />
            
            <section id="collection" className="py-24 md:py-32 bg-brand-cream-50">
                <div className="container mx-auto px-6 md:px-12">
                    <SectionTitle 
                        title="Explore Our Collection" 
                        subtitle="Carefully selected spices for everyday cooking and extraordinary flavours."
                    />
                    <ProductGrid products={featuredProducts} />
                    
                    <div className="mt-20 text-center">
                        <Link 
                            to="/shop" 
                            className="inline-block border-b-2 border-brand-charcoal-900 pb-1 text-lg font-serif italic text-brand-charcoal-900 hover:text-brand-spice-600 hover:border-brand-spice-600 transition-colors"
                        >
                            View the full collection
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-32 bg-brand-charcoal-900 text-brand-cream-50 relative overflow-hidden">
                <div className="spice-grain opacity-10" />
                <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="aspect-[4/5] overflow-hidden relative">
                            <img src={siteConfig.about.image} alt="Authentic Spices" className="w-full h-full object-cover" />
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="w-full lg:w-1/2 space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-cream-50">
                            {siteConfig.about.title}
                        </h2>
                        <div className="w-16 h-1 bg-brand-spice-500"></div>
                        <p className="text-xl font-light text-brand-cream-50/80 leading-relaxed">
                            {siteConfig.about.description}
                        </p>
                        
                        <div className="pt-8 grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-3xl font-serif text-brand-green-500 mb-2">100%</h4>
                                <p className="text-sm uppercase tracking-widest text-brand-cream-50/60">Natural</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-serif text-brand-green-500 mb-2">Pure</h4>
                                <p className="text-sm uppercase tracking-widest text-brand-cream-50/60">Ingredients</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
