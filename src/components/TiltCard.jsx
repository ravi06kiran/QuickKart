import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const TiltCard = ({ children, className = '', containerClassName = '', onClick }) => {
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
            const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
            const rotateY = ((x - centerX) / centerX) * 10;

            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.5,
                ease: 'power2.out',
                transformPerspective: 1000,
            });

            // Sheen effect
            gsap.to(sheen, {
                x: x - rect.width / 2,
                y: y - rect.height / 2,
                opacity: 0.15 + (Math.abs(x - centerX) / rect.width) * 0.1,
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

    const Component = onClick ? 'button' : 'div';

    return (
        <div className={`perspective-container ${containerClassName}`}>
            <Component
                ref={cardRef}
                onClick={onClick}
                className={`relative preserve-3d transition-transform will-change-transform ${className}`}
            >
                <div
                    ref={sheenRef}
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 pointer-events-none z-10 w-full h-full mix-blend-overlay rounded-[inherit]"
                    style={{ transform: 'translate(0, 0)' }}
                />
                {children}
            </Component>
        </div>
    );
};

export default TiltCard;
