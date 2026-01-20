import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const MagneticButton = ({ children, className = '', strength = 40 }) => {
    const buttonRef = useRef(null);

    useGSAP(() => {
        const button = buttonRef.current;
        if (!button) return;

        const handleMouseMove = (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(button, {
                x: x * (strength / 100),
                y: y * (strength / 100),
                duration: 0.3,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = () => {
            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)"
            });
        };

        button.addEventListener('mousemove', handleMouseMove);
        button.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            button.removeEventListener('mousemove', handleMouseMove);
            button.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [strength]);

    return (
        <div ref={buttonRef} className={`inline-block ${className}`}>
            {children}
        </div>
    );
};

export default MagneticButton;
