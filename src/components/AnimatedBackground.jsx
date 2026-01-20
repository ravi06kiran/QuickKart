import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedBackground = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const blobs = document.querySelectorAll('.blob');

            blobs.forEach((blob) => {
                // Randomize initial position
                gsap.set(blob, {
                    x: () => Math.random() * window.innerWidth * 0.5,
                    y: () => Math.random() * window.innerHeight * 0.5,
                    scale: () => 0.8 + Math.random() * 0.4,
                });

                // Create continuous random floating movement
                gsap.to(blob, {
                    x: "random(-200, 200, 50)", // Random coords
                    y: "random(-150, 150, 40)",
                    scale: "random(0.8, 1.2)",
                    duration: "random(10, 20)",
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true,
                });

                // Add a slow rotation for extra organic feel
                gsap.to(blob, {
                    rotation: "random(-90, 90)",
                    duration: "random(20, 30)",
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true,
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 z-[-10] overflow-hidden bg-[#050505] pointer-events-none">
            {/* Dark Overlay to keep text readable */}
            <div className="absolute inset-0 bg-black/40 z-[1]" />

            {/* Blob 1: Electric Blue */}
            <div className="blob absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/40 blur-[120px] mix-blend-screen opacity-70"></div>

            {/* Blob 2: Deep Violet */}
            <div className="blob absolute bottom-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-violet-700/40 blur-[120px] mix-blend-screen opacity-70"></div>

            {/* Blob 3: Soft Cyan */}
            <div className="blob absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full bg-cyan-500/30 blur-[100px] mix-blend-screen opacity-60"></div>

            {/* Blob 4: Extra Indigo for depth */}
            <div className="blob absolute bottom-[-10%] left-[-10%] w-[550px] h-[550px] rounded-full bg-indigo-800/40 blur-[120px] mix-blend-screen opacity-60"></div>
        </div>
    );
};

export default AnimatedBackground;
