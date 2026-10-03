import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import WhatsAppButton from '../components/WhatsAppButton';
import NotFound from './NotFound';
import { ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductDetails = () => {
    const { slug } = useParams();
    const product = products.find(p => p.slug === slug);
    const [mainImage, setMainImage] = useState(product?.images[0]);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (product) {
            setMainImage(product.images[0]);
        }
    }, [slug, product]);

    if (!product) {
        return <NotFound />;
    }

    return (
        <div className="min-h-screen pt-32 pb-24 bg-brand-cream-50">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <Link to="/shop" className="inline-flex items-center gap-2 text-brand-charcoal-800/60 hover:text-brand-charcoal-900 mb-12 transition-colors uppercase tracking-widest text-xs font-semibold">
                    <ArrowLeft size={16} />
                    Back to Collection
                </Link>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    
                    {/* Images Section */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <div className="aspect-[4/5] bg-brand-cream-100 overflow-hidden relative">
                            <AnimatePresence mode="wait">
                                <motion.img 
                                    key={mainImage}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    src={mainImage} 
                                    alt={product.name} 
                                    className="w-full h-full object-cover"
                                />
                            </AnimatePresence>
                        </div>
                        
                        {product.images.length > 1 && (
                            <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
                                {product.images.map((img, idx) => (
                                    <button 
                                        key={idx}
                                        onClick={() => setMainImage(img)}
                                        className={`flex-shrink-0 w-24 aspect-square snap-start overflow-hidden transition-all duration-300 ${
                                            mainImage === img ? 'opacity-100 ring-2 ring-brand-charcoal-900 ring-offset-2 ring-offset-brand-cream-50' : 'opacity-50 hover:opacity-100'
                                        }`}
                                    >
                                        <img src={img} alt="" className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    
                    {/* Content Section (Sticky on desktop) */}
                    <div className="w-full lg:w-1/2">
                        <div className="lg:sticky lg:top-32 flex flex-col h-full lg:h-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {product.category && (
                                    <span className="text-sm font-semibold tracking-widest text-brand-spice-600 uppercase mb-4 block">
                                        {product.category}
                                    </span>
                                )}
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-charcoal-900 mb-6 leading-tight">
                                    {product.name}
                                </h1>
                                
                                {product.price && (
                                    <div className="text-3xl font-serif text-brand-charcoal-800 mb-10 pb-10 border-b border-brand-charcoal-900/10">
                                        {product.price}
                                    </div>
                                )}

                                <div className="prose prose-lg prose-stone mb-12">
                                    <p className="text-brand-charcoal-800/80 font-light leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-6 mt-auto">
                                    <WhatsAppButton productName={product.name} className="w-full sm:w-auto" />
                                    
                                    {product.available && (
                                        <span className="text-sm uppercase tracking-widest font-semibold text-brand-green-600">
                                            In Stock
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
