import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-brand-cream-100">
            <h1 className="text-9xl font-serif font-bold text-brand-charcoal-900/10 mb-6">
                {siteConfig.errorState.notFoundTitle}
            </h1>
            <p className="text-2xl font-serif text-brand-charcoal-900 mb-10 max-w-md">
                {siteConfig.errorState.notFoundDescription}
            </p>
            <Link 
                to="/"
                className="px-10 py-4 bg-brand-charcoal-900 text-brand-cream-50 uppercase tracking-widest text-sm font-semibold hover:bg-brand-spice-600 transition-colors"
            >
                {siteConfig.errorState.backToHome}
            </Link>
        </div>
    );
};

export default NotFound;
