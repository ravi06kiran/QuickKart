import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const cardRef = useRef(null);
    const sheenRef = useRef(null);

    useGSAP(() => {
        const card = cardRef.current;
        const sheen = sheenRef.current;

        if (!card || !sheen) return;

        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -15; // Increased tilt for products
            const rotateY = ((x - centerX) / centerX) * 15;

            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.5,
                ease: 'power2.out',
                transformPerspective: 1000,
            });

            // Sheen/Reflection effect
            gsap.to(sheen, {
                x: x - rect.width / 2,
                y: y - rect.height / 2,
                opacity: 0.2 + (Math.abs(x - centerX) / rect.width) * 0.15,
                duration: 0.5,
            });
        };

        const handleMouseLeave = () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.5,
                ease: 'power2.out',
            });
            gsap.to(sheen, {
                opacity: 0,
                duration: 0.5,
            });
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="perspective-1000">
            <motion.div
                ref={cardRef}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="card-glass group relative overflow-hidden preserve-3d will-change-transform"
            >
                {/* Subtle Reflection Overlay */}
                <div
                    ref={sheenRef}
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 pointer-events-none z-10 w-full h-full mix-blend-overlay"
                    style={{ transform: 'translate(0, 0)' }}
                />

                <div className="relative h-64 -mx-6 -mt-6 mb-4 overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button
                            onClick={() => addToCart(product)}
                            className="btn-primary flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="flex justify-between items-start mb-2 relative z-20">
                    <div>
                        <p className="text-accent text-sm font-medium mb-1">{product.category}</p>
                        <h3 className="text-xl font-bold">{product.name}</h3>
                    </div>
                    <span className="text-lg font-bold text-gold">${product.price}</span>
                </div>

                <p className="text-gray-400 text-sm line-clamp-2 relative z-20">{product.description}</p>
            </motion.div>
        </div>
    );
};

export default ProductCard;
