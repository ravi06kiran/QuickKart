import { CreditCard, DollarSign, TrendingUp, ArrowUpRight, ArrowDownLeft, Gift, Zap } from 'lucide-react';
import TiltCard from '../../components/TiltCard';
import MagneticButton from '../../components/MagneticButton';
import AnimatedBadge from '../../components/AnimatedBadge';

const Wallet = () => {
    return (
        <div className="max-w-4xl mx-auto pb-10">
            <h1 className="text-3xl font-bold mb-6">My Wallet</h1>

            {/* Main Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Main Card */}
                <TiltCard className="md:col-span-2 group" containerClassName="md:col-span-2">
                    <div className="card-glass p-8 bg-gradient-to-br from-accent to-purple-600 relative overflow-hidden h-full">
                        <div className="absolute top-0 right-0 p-8 opacity-20 transform group-hover:scale-110 transition-transform duration-500">
                            <CreditCard className="w-32 h-32 text-white" />
                        </div>
                        <div className="relative z-10">
                            <p className="text-white/80 mb-2">Total Balance</p>
                            <h2 className="text-5xl font-bold text-white mb-8">$2,450.00</h2>
                            <div className="flex items-center justify-between">
                                <div className="text-white/90">
                                    <p className="text-sm">Card Holder</p>
                                    <p className="font-bold">John Doe</p>
                                </div>
                                <div className="text-white/90 text-right">
                                    <p className="text-sm">Expires</p>
                                    <p className="font-bold">12/28</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </TiltCard>

                {/* Actions */}
                <div className="card-glass p-6 flex flex-col justify-center gap-4">
                    <MagneticButton strength={20}>
                        <button className="w-full py-4 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center gap-2 font-bold transition-colors px-6">
                            <ArrowUpRight className="w-5 h-5 text-green-400" /> Top Up
                        </button>
                    </MagneticButton>
                    <MagneticButton strength={20}>
                        <button className="w-full py-4 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center gap-2 font-bold transition-colors px-6">
                            <ArrowDownLeft className="w-5 h-5 text-red-400" /> Withdraw
                        </button>
                    </MagneticButton>
                </div>
            </div>

            {/* New: Cashback Section */}
            <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Gift className="w-5 h-5 text-accent" /> Cashback & Rewards
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="card-glass p-6 relative overflow-hidden group">
                        <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                            <Zap className="w-24 h-24" />
                        </div>
                        <h4 className="text-gray-400 mb-1">Available to Redeem</h4>
                        <div className="flex items-end gap-2 mb-4">
                            <span className="text-4xl font-bold text-green-400">$84.50</span>
                            <span className="text-sm text-gray-400 mb-2">earned this month</span>
                        </div>
                        <MagneticButton strength={30} className="w-full">
                            <button className="btn-primary w-full py-2 text-sm">Redeem to Balance</button>
                        </MagneticButton>
                    </div>

                    <div className="card-glass p-6">
                        <h4 className="text-gray-400 mb-4">Reward History</h4>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
                                        <Gift className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="font-bold">Holiday Promo</p>
                                        <p className="text-xs text-gray-500">Dec 24, 2025</p>
                                    </div>
                                </div>
                                <span className="font-bold text-green-400">+$25.00</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                                        <TrendingUp className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="font-bold">1% Cash Back</p>
                                        <p className="text-xs text-gray-500">Dec 20, 2025</p>
                                    </div>
                                </div>
                                <span className="font-bold text-green-400">+$3.20</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Transactions */}
            <h3 className="text-xl font-bold mb-4">Recent Transactions</h3>
            <div className="space-y-3">
                {[1, 2, 3].map(i => (
                    <div key={i} className="card-glass p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                <DollarSign className="w-5 h-5 text-gray-400" />
                            </div>
                            <div>
                                <h4 className="font-bold">Grocery Purchase</h4>
                                <p className="text-sm text-gray-400">Today, 2:30 PM</p>
                            </div>
                        </div>
                        <span className="text-red-400 font-bold">-$120.50</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Wallet;
