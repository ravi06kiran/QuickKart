import { ArrowRight, Zap, Sidebar, CreditCard, Sparkles } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import AnimatedBadge from '../components/AnimatedBadge';
import TiltCard from '../components/TiltCard';

const Home = () => {
    return (
        <div className="relative overflow-x-hidden">
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">

                {/* Main Hero Content */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <div>
                        <div className="mb-8 flex justify-center">
                            <AnimatedBadge variant="accent" className="text-sm py-2 px-6">
                                <Sparkles className="w-4 h-4 inline mr-2" /> Experience Retail 2.0
                            </AnimatedBadge>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
                            Your World, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-pink-400">
                                Organized.
                            </span>
                        </h1>

                        <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                            QuickKart isn&apos;t just a shop. It&apos;s your personal digital ecosystem.
                            Manage your <span className="text-white font-semibold">Wallet</span>,
                            organize with <span className="text-white font-semibold">Notes</span>,
                            and shop with <span className="text-white font-semibold">AI Assistance</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <MagneticButton strength={30}>
                                <Link to="/signup" className="btn-primary px-8 py-4 text-lg rounded-2xl w-full sm:w-80 shadow-xl shadow-accent/20 hover:shadow-accent/40 active:scale-95 transition-all flex items-center justify-center">
                                    Get Started Now <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </MagneticButton>
                            <MagneticButton strength={30}>
                                <Link to="/login" className="px-8 py-4 text-lg rounded-2xl bg-secondary border border-white/10 hover:border-white/20 hover:bg-white/5 w-full sm:w-80 transition-all font-semibold flex items-center justify-center">
                                    Member Login
                                </Link>
                            </MagneticButton>
                        </div>
                    </div>
                </div>

                {/* CSS-Only Dashboard Glimpse (Static) */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Glass Container */}
                    <div className="bg-secondary/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
                        {/* Mock Header */}
                        <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                            <div className="flex items-center gap-4">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="h-2 w-32 bg-white/10 rounded-full" />
                        </div>

                        {/* Mock Dashboard Layout */}
                        <div className="flex gap-6 h-[400px]">
                            {/* Sidebar Mock */}
                            <div className="w-16 md:w-64 bg-primary/50 rounded-xl border border-white/5 p-4 flex flex-col gap-3">
                                <div className="h-8 w-full bg-accent/20 rounded-lg mb-4" />
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className="h-6 w-3/4 bg-white/5 rounded-lg" />
                                ))}
                                <div className="mt-auto h-20 w-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl p-3 border border-white/5">
                                    <div className="h-2 w-12 bg-white/20 rounded mb-2" />
                                    <div className="h-4 w-20 bg-white/10 rounded" />
                                </div>
                            </div>

                            {/* Main Area Mock */}
                            <div className="flex-1 grid grid-cols-2 gap-4">
                                <TiltCard className="col-span-2 h-32 bg-gradient-to-r from-accent/10 to-purple-600/10 rounded-xl border border-white/5 p-6 relative overflow-hidden group hover:border-accent/30 transition-colors" containerClassName="col-span-2">
                                    <h3 className="text-2xl font-bold mb-2">Welcome Back, User</h3>
                                    <div className="h-2 w-40 bg-white/10 rounded" />
                                    <div className="absolute right-4 top-4 opacity-50">
                                        <Sparkles className="w-12 h-12 text-accent" />
                                    </div>
                                </TiltCard>

                                <TiltCard className="bg-white/5 rounded-xl p-4 border border-white/5 hover:bg-white/10 transition-colors h-full">
                                    <CreditCard className="w-8 h-8 text-purple-400 mb-4" />
                                    <div className="h-4 w-16 bg-white/10 rounded mb-2" />
                                    <div className="h-6 w-24 bg-white/20 rounded" />
                                </TiltCard>

                                <TiltCard className="bg-white/5 rounded-xl p-4 border border-white/5 hover:bg-white/10 transition-colors h-full">
                                    <Sidebar className="w-8 h-8 text-blue-400 mb-4" />
                                    <div className="h-4 w-16 bg-white/10 rounded mb-2" />
                                    <div className="h-6 w-24 bg-white/20 rounded" />
                                </TiltCard>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Glows */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-accent to-purple-600 opacity-20 blur-2xl -z-10 rounded-[30px]" />
                </div>
            </div>
        </div>
    );
};

export default Home;
