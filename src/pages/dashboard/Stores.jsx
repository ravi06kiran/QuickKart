import { useRef } from 'react';
import { MapPin, Star, Clock, Phone, Navigation, Search } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import TiltCard from '../../components/TiltCard';
import MagneticButton from '../../components/MagneticButton';
import AnimatedBadge from '../../components/AnimatedBadge';

const Stores = () => {
    const containerRef = useRef(null);

    // Animation using GSAP
    useGSAP(() => {
        gsap.from(".store-card", {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
        });
    }, { scope: containerRef });

    const stores = [
        {
            id: 1,
            name: "TechHub Electronics",
            image: "bg-gradient-to-br from-blue-600 to-blue-800",
            rating: 4.8,
            reviews: 1240,
            distance: "0.8 miles",
            address: "123 Innovation Blvd, Tech City",
            hours: "9:00 AM - 9:00 PM",
            phone: "+1 (555) 123-4567",
            status: "Open Now",
            features: ["In-store Pickup", "Genius Bar", "Demo Zone"]
        },
        {
            id: 2,
            name: "Fresh Market Plus",
            image: "bg-gradient-to-br from-green-600 to-emerald-800",
            rating: 4.5,
            reviews: 856,
            distance: "1.2 miles",
            address: "45 Green Way, Eco District",
            hours: "7:00 AM - 10:00 PM",
            phone: "+1 (555) 987-6543",
            status: "Open Now",
            features: ["Organic Section", "Bakery", "Coffee Bar"]
        },
        {
            id: 3,
            name: "Style Boutique",
            image: "bg-gradient-to-br from-purple-600 to-pink-800",
            rating: 4.9,
            reviews: 210,
            distance: "2.5 miles",
            address: "88 Fashion Ave, Downtown",
            hours: "10:00 AM - 8:00 PM",
            phone: "+1 (555) 456-7890",
            status: "Closing Soon",
            features: ["Personal Styling", "Alterations"]
        },
        {
            id: 4,
            name: "Urban Home & Decor",
            image: "bg-gradient-to-br from-orange-500 to-red-800",
            rating: 4.7,
            reviews: 432,
            distance: "3.1 miles",
            address: "202 Design District, West End",
            hours: "10:00 AM - 9:00 PM",
            phone: "+1 (555) 222-3333",
            status: "Open Now",
            features: ["Design Consult", "Delivery"]
        }
    ];

    return (
        <div ref={containerRef} className="max-w-5xl mx-auto pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Our Locations</h1>
                    <p className="text-muted">Find a QuickKart store near you</p>
                </div>

                <div className="relative w-full md:w-96">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search by city or zip code..."
                        className="w-full bg-secondary border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-accent focus:outline-none"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {stores.map(store => (
                    <TiltCard key={store.id} className="store-card card-glass p-0 overflow-hidden flex flex-col md:flex-row group" containerClassName="w-full">
                        {/* Image Section */}
                        <div className={`h-48 md:h-auto md:w-64 ${store.image} relative flex items-center justify-center`}>
                            <MapPin className="w-12 h-12 text-white/80" />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                        </div>

                        {/* Content Section */}
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-2xl font-bold">{store.name}</h3>
                                    <AnimatedBadge variant={store.status === 'Open Now' ? 'green' : 'gold'}>
                                        {store.status}
                                    </AnimatedBadge>
                                </div>

                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex items-center text-yellow-500">
                                        <Star className="w-4 h-4 fill-current" />
                                        <span className="ml-1 font-bold">{store.rating}</span>
                                    </div>
                                    <span className="text-muted text-sm">({store.reviews} reviews)</span>
                                    <span className="text-muted text-sm">•</span>
                                    <span className="text-muted text-sm">{store.distance} away</span>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-sm text-muted mb-4">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-accent" /> {store.address}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-accent" /> {store.hours}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone className="w-4 h-4 text-accent" /> {store.phone}
                                    </div>
                                </div>

                                {/* Features Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {store.features.map(feat => (
                                        <AnimatedBadge key={feat} variant="white" className="text-[10px] scale-90">
                                            {feat}
                                        </AnimatedBadge>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <MagneticButton strength={20} className="flex-1">
                                    <button className="w-full btn-primary py-2 text-sm flex items-center justify-center gap-2">
                                        <Navigation className="w-4 h-4" /> Get Directions
                                    </button>
                                </MagneticButton>
                                <MagneticButton strength={20} className="flex-1">
                                    <button className="w-full px-4 py-2 rounded-xl border border-white/10 hover:bg-white/5 transition-colors font-medium text-sm h-full">
                                        View Details
                                    </button>
                                </MagneticButton>
                            </div>
                        </div>
                    </TiltCard>
                ))}
            </div>
        </div>
    );
};
export default Stores;
