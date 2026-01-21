import { MapPin, Star, Clock, Info, TrendingUp, ArrowRight, Zap } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import TiltCard from '../../components/TiltCard';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import AnimatedBadge from '../../components/AnimatedBadge';
import MagneticButton from '../../components/MagneticButton';

const DashboardHome = () => {
    const { user } = useAuth();
    const containerRef = useRef(null);

    // Mock Trending Products
    const trendingProducts = [
        { id: 101, name: "Wireless Noise-Canceling Pros", price: "$249.00", image: "bg-gradient-to-br from-gray-800 to-black", tag: "Best Seller" },
        { id: 102, name: "Smart Fitness Watch Ultima", price: "$199.50", image: "bg-gradient-to-br from-blue-900 to-slate-900", tag: "New Arrival" },
        { id: 103, name: "Ergonomic Mesh Chair", price: "$320.00", image: "bg-gradient-to-br from-zinc-700 to-zinc-900", tag: "Trending" },
        { id: 104, name: "4K HDR Monitor 27inch", price: "$450.00", image: "bg-gradient-to-br from-indigo-900 to-purple-900", tag: "Limited Deal" },
    ];

    useGSAP(() => {
        gsap.from(".stat-card", {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out"
        });

        gsap.from(".trending-item", {
            x: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.3
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="max-w-6xl mx-auto pb-10">
            <h1 className="text-3xl font-bold mb-6">Welcome Back, <span className="text-accent">{user?.name || 'User'}</span></h1>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="stat-card card-glass p-6 relative overflow-hidden group flex items-center justify-between">
                    <div>
                        <h3 className="text-muted mb-2 font-medium">Orders in Progress</h3>
                        <p className="text-4xl font-bold">3</p>
                        <p className="text-sm text-green-400 mt-2 flex items-center gap-1"><Zap className="w-3 h-3" /> Arriving Today</p>
                    </div>
                    <div className="opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                        <Clock className="w-24 h-24" />
                    </div>
                </div>
                <div className="stat-card card-glass p-6 relative overflow-hidden group flex items-center justify-between">
                    <div>
                        <h3 className="text-muted mb-2 font-medium">Loyalty Points</h3>
                        <p className="text-4xl font-bold text-accent">2,450</p>
                        <p className="text-sm text-muted mt-2">Gold Member Status</p>
                    </div>
                    <div className="opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                        <Star className="w-24 h-24" />
                    </div>
                </div>
            </div>

            {/* Trending / AI Picks Section */}
            <div className="mb-10">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <TrendingUp className="w-6 h-6 text-accent" /> Trending Now
                    </h2>
                    <MagneticButton strength={30}>
                        <button className="text-sm text-accent hover:text-white transition-colors flex items-center gap-1 px-4 py-2" onClick={() => { }}>
                            View All <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                    </MagneticButton>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trendingProducts.map((product) => (
                        <TiltCard key={product.id} className="trending-item card-glass p-0 overflow-hidden group cursor-pointer" containerClassName="h-full">
                            <div className={`h-40 ${product.image} relative flex items-center justify-center`}>
                                <div className="absolute top-3 left-3">
                                    <AnimatedBadge variant="white">{product.tag}</AnimatedBadge>
                                </div>
                            </div>
                            <div className="p-4 flex flex-col items-center text-center">
                                <h3 className="font-bold text-lg leading-tight mb-1 group-hover:text-accent transition-colors">{product.name}</h3>
                                <p className="text-muted text-sm mb-3">Electronics</p>
                                <div className="flex items-center justify-between w-full px-2">
                                    <span className="font-bold text-xl">{product.price}</span>
                                    <MagneticButton strength={20}>
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </MagneticButton>
                                </div>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>

            {/* Promotion Banner */}
            <div className="stat-card rounded-3xl bg-gradient-to-r from-purple-900 to-indigo-900 p-8 relative overflow-hidden border border-white/10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10 max-w-lg mx-auto text-center flex flex-col items-center">
                    <AnimatedBadge variant="accent" className="mb-4">Flash Sale</AnimatedBadge>
                    <h2 className="text-3xl font-bold mb-2">Upgrade Your Workspace</h2>
                    <p className="text-gray-300 mb-6">Get up to 50% off on premium ergonomic chairs and desk accessories through this weekend.</p>
                    <MagneticButton strength={40}>
                        <button className="btn-primary px-8 py-3">Shop Collection</button>
                    </MagneticButton>
                </div>
            </div>

        </div>
    );
};
export default DashboardHome;
