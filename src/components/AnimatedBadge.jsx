import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const AnimatedBadge = ({ children, className = '', variant = 'accent' }) => {
    const badgeRef = useRef(null);

    useGSAP(() => {
        gsap.to(badgeRef.current, {
            y: -5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, [badgeRef]);

    const variants = {
        accent: 'bg-accent/20 text-accent border-accent/30',
        gold: 'bg-gold/20 text-gold border-gold/30',
        green: 'bg-green-500/20 text-green-400 border-green-500/30',
        blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
        white: 'bg-white/10 text-white border-white/20',
        red: 'bg-red-500/20 text-red-400 border-red-500/30',
    };

    return (
        <span
            ref={badgeRef}
            className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-sm inline-block ${variants[variant] || variants.accent} ${className}`}
        >
            {children}
        </span>
    );
};

export default AnimatedBadge;
