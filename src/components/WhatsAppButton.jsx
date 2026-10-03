import React from 'react';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = ({ productName, className = "" }) => {
    const link = generateWhatsAppLink(productName);
    
    return (
        <motion.a 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 bg-brand-charcoal-900 hover:bg-brand-spice-600 text-brand-cream-50 px-6 py-3.5 font-medium transition-colors duration-300 ${className}`}
        >
            <MessageCircle size={18} />
            WhatsApp Enquiry
        </motion.a>
    );
};

export default WhatsAppButton;
