import { siteConfig } from '../data/siteConfig';

export const generateWhatsAppLink = (productName) => {
    const number = siteConfig.whatsappNumber;
    const message = `Hello,\n\nI'm interested in your ${productName} product.\n\nCould you please share more details?\n\nThank you.`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${number}?text=${encodedMessage}`;
};
