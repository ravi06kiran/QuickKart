import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const useProductAnimation = () => {
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
            const rotateX = ((y - centerY) / centerY) * -15;
            const rotateY = ((x - centerX) / centerX) * 15;

            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.5,
                ease: 'power2.out',
                transformPerspective: 1000,
            });

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

    return { cardRef, sheenRef };
};
