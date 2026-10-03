import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > 50) {
            setIsScrolled(true);
            if (latest > previous && latest > 200) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
        } else {
            setIsScrolled(false);
            setIsHidden(false);
        }
    });

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const isHome = location.pathname === '/';
    const navTextColor = isHome && !isScrolled ? 'text-brand-cream-50' : 'text-brand-charcoal-900';
    const logoColor = isHome && !isScrolled ? 'text-brand-cream-50' : 'text-brand-charcoal-900';

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' },
        { name: 'About', path: '/about' },
    ];

    return (
        <motion.header 
            variants={{
                visible: { y: 0 },
                hidden: { y: '-100%' }
            }}
            animate={isHidden && !isMobileMenuOpen ? "hidden" : "visible"}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
                isScrolled || isMobileMenuOpen || !isHome ? 'bg-brand-cream-50/90 backdrop-blur-md border-b border-brand-charcoal-900/5 py-4' : 'bg-transparent py-6'
            }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                
                {/* Logo */}
                <Link to="/" className={`text-3xl font-malayalam font-bold tracking-wide transition-colors duration-500 ${logoColor} ${(isScrolled || isMobileMenuOpen || !isHome) ? 'text-brand-green-700' : ''}`}>
                    {siteConfig.brandNameMalayalam}
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map(link => (
                        <Link 
                            key={link.name} 
                            to={link.path}
                            className={`text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:opacity-70 ${
                                location.pathname === link.path 
                                    ? `opacity-100 ${isHome && !isScrolled ? 'border-b border-brand-cream-50 pb-1' : 'text-brand-spice-600'}` 
                                    : `opacity-80 ${navTextColor}`
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex">
                    <Link 
                        to="/shop" 
                        className={`text-sm font-medium tracking-widest uppercase px-6 py-3 border transition-colors duration-300 ${
                            isHome && !isScrolled 
                                ? 'border-brand-cream-50 text-brand-cream-50 hover:bg-brand-cream-50 hover:text-brand-charcoal-900' 
                                : 'border-brand-charcoal-900 text-brand-charcoal-900 hover:bg-brand-charcoal-900 hover:text-brand-cream-50'
                        }`}
                    >
                        Shop Now
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className={`md:hidden ${isMobileMenuOpen || isScrolled || !isHome ? 'text-brand-charcoal-900' : 'text-brand-cream-50'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute top-full left-0 right-0 bg-brand-cream-50 border-b border-brand-charcoal-900/10 shadow-xl overflow-hidden md:hidden"
                    >
                        <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link 
                                        to={link.path}
                                        className={`block text-2xl font-serif ${
                                            location.pathname === link.path 
                                                ? 'text-brand-spice-600' 
                                                : 'text-brand-charcoal-900'
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="pt-6 border-t border-brand-charcoal-900/10 mt-2"
                            >
                                <Link 
                                    to="/shop" 
                                    className="inline-block bg-brand-charcoal-900 text-brand-cream-50 px-8 py-4 uppercase tracking-widest text-sm font-medium w-full text-center"
                                >
                                    Shop Now
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
