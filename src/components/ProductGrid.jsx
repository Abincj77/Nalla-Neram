import React from 'react';
import ProductCard from './ProductCard';
import { siteConfig } from '../data/siteConfig';

const ProductGrid = ({ products }) => {
    if (!products || products.length === 0) {
        return (
            <div className="text-center py-24 text-brand-charcoal-800/50 text-lg font-light">
                {siteConfig.emptyState.noProducts}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductGrid;
