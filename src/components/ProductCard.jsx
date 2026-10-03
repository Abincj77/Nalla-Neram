import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { ArrowUpRight } from 'lucide-react';

const ProductCard = ({ product }) => {
    const waLink = generateWhatsAppLink(product.name);
    
    return (
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col bg-brand-cream-50 h-full overflow-hidden"
        >
            <Link to={`/product/${product.slug}`} className="relative aspect-[4/5] overflow-hidden bg-brand-green-100/30">
                <motion.img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-charcoal-900/0 group-hover:bg-brand-charcoal-900/10 transition-colors duration-500 ease-out" />
                
                {/* Hover CTA Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-10 pointer-events-none">
                    <div className="bg-white/95 backdrop-blur-sm text-brand-charcoal-900 px-6 py-3 w-full text-center flex items-center justify-between pointer-events-auto shadow-lg">
                        <span className="font-medium text-sm tracking-wide uppercase">View Product</span>
                        <ArrowUpRight size={18} />
                    </div>
                </div>
            </Link>
            
            <div className="p-6 md:p-8 flex flex-col flex-grow bg-brand-cream-50 group-hover:bg-brand-cream-100 transition-colors duration-500">
                {product.category && (
                    <span className="text-xs font-semibold tracking-widest text-brand-spice-600 uppercase mb-3 block">
                        {product.category}
                    </span>
                )}
                
                <div className="flex justify-between items-start mb-3">
                    <Link to={`/product/${product.slug}`}>
                        <h3 className="text-2xl font-serif text-brand-charcoal-900 transition-colors">
                            {product.name}
                        </h3>
                    </Link>
                </div>
                
                <p className="text-brand-charcoal-800/70 mb-6 font-light leading-relaxed flex-grow">
                    {product.shortDescription}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-charcoal-900/10">
                    <span className="text-lg font-medium text-brand-charcoal-900">
                        {product.price}
                    </span>
                    <a 
                        href={waLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-brand-green-600 hover:text-brand-spice-600 transition-colors underline-offset-4 hover:underline"
                    >
                        WhatsApp Enquiry
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
