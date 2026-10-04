import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

const Footer = () => {
    return (
        <footer className="bg-brand-charcoal-900 text-brand-cream-50 pt-24 pb-12">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start border-b border-brand-cream-50/10 pb-16 mb-12 gap-12">
                    
                    <div className="max-w-md">
                        <h3 className="text-4xl font-malayalam font-bold text-brand-green-500 mb-6">
                            {siteConfig.brandNameMalayalam}
                        </h3>
                        <p className="text-brand-cream-50/70 font-light text-lg leading-relaxed">
                            {siteConfig.footer.description}
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-16 md:gap-24">
                        <div>
                            <h4 className="text-sm font-semibold tracking-widest uppercase mb-8 text-brand-spice-500">Navigation</h4>
                            <ul className="space-y-4 font-light text-brand-cream-50/70">
                                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><Link to="/shop" className="hover:text-white transition-colors">Shop</Link></li>
                                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="text-sm font-semibold tracking-widest uppercase mb-8 text-brand-spice-500">Connect</h4>
                            <ul className="space-y-4 font-light text-brand-cream-50/70">
                                <li>
                                    <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                        WhatsApp
                                    </a>
                                </li>
                                <li>
                                    <a href={`mailto:${siteConfig.footer.links.email}`} className="hover:text-white transition-colors">
                                        Email
                                    </a>
                                </li>
                                <li>
                                    <a href={`tel:${siteConfig.footer.links.phone}`} className="hover:text-white transition-colors">
                                        Call Us
                                    </a>
                                </li>
                                <li>
                                    <a href={siteConfig.footer.links.instagram} className="hover:text-white transition-colors">
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-center text-brand-cream-50/40 text-sm font-light">
                    <div>{siteConfig.footer.copyright}</div>
                    <div className="mt-4 md:mt-0">Premium Spices • Naturally Selected</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
