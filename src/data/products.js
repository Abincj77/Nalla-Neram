import blackPepperImage from '../assets/products/product/Black Pepper.jpeg';
import TurmeriPower from '../assets/products/product/Turmeric Power.jpeg';
import Cardamon from '../assets/products/product/cardamon.jpeg'; 
import Cinnamon from '../assets/products/product/Cinnamon.jpeg';
import Kashmiri from '../assets/products/product/Kashmiri Chilli Powder.png';




export const products = [
    {
        id: 1,
        slug: "premium-black-pepper",
        name: "Black Pepper",
        shortDescription: "Bold. Aromatic. Naturally selected.",
        description: "Our premium black pepper is sourced directly from the lush hills of Kerala. Known for its bold, pungent flavor and deep aroma, it is the perfect addition to elevate any dish. Sun-dried to perfection to preserve its essential oils.",
        price: "₹299",
        category: "Whole Spices",
        images: [blackPepperImage],
        featured: true,
        available: true
    },
    {
        id: 2,
        slug: "pure-turmeric-powder",
        name: "Turmeric Powder",
        shortDescription: "Vibrant color. Rich in curcumin.",
        description: "Ground from the finest turmeric roots, this powder boasts a vibrant golden hue and an earthy, warm flavor. Extremely rich in curcumin, it offers both incredible taste and health benefits for your daily cooking.",
        price: "₹199",
        category: "Spice Powders",
        images: [TurmeriPower],
        featured: true,
        available: true
    },
    {
        id: 3,
        slug: "green-cardamom",
        name: "Green Cardamom",
        shortDescription: "The queen of spices. Intensely aromatic.",
        description: "Handpicked at the right maturity, our green cardamom pods are bursting with sweet, floral, and slightly citrusy notes. A must-have for both sweet delicacies and savory curries.",
        price: "₹899",
        category: "Whole Spices",
        images: [Cardamon],
        featured: true,
        available: true
    },
    {
        id: 4,
        slug: "cinnamon-sticks",
        name: "Cinnamon Sticks",
        shortDescription: "Warm, sweet, and perfectly curled.",
        description: "True Ceylon cinnamon sticks offering a delicate, sweet flavor and a warm aroma. Ideal for infusing teas, curries, and baking your favorite desserts.",
        price: "₹349",
        category: "Whole Spices",
        images: [Cinnamon],
        featured: false,
        available: true
    },
    {
        id: 5,
        slug: "kashmiri-chilli-powder",
        name: "Kashmiri Chilli Powder",
        shortDescription: "Vibrant red. Mildly spiced.",
        description: "Give your dishes a spectacular red color without the extreme heat. Our Kashmiri Chilli powder is freshly ground from selected mild chillies.",
        price: "₹249",
        category: "Spice Powders",
        images: [Kashmiri],
        featured: true,
        available: true
    },
    {
        id: 6,
        slug: "kerala-garam-masala",
        name: "Garam Masala Blend",
        shortDescription: "The heart of Indian cooking.",
        description: "A proprietary blend of roasted premium whole spices ground together. This Garam Masala adds exceptional depth and warmth to any curry.",
        price: "₹279",
        category: "Blends",
        images: [
            "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80"
        ],
        featured: false,
        available: true
    }
];
