import { Package, Clock } from 'lucide-react';
import AnimatedBadge from '../../components/AnimatedBadge';
import MagneticButton from '../../components/MagneticButton';

const History = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Order History</h1>
            <div className="space-y-4">
                {[1, 2, 3].map((order) => (
                    <div key={order} className="card-glass p-6">
                        <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-accent/10 rounded-lg text-accent">
                                    <Package className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Order #QK-{202400 + order}</h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <Clock className="w-4 h-4" /> Delivered on Jan {10 - order}, 2026
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-xl">$129.00</p>
                                <AnimatedBadge variant="green">
                                    Completed
                                </AnimatedBadge>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pl-16">
                            {[1, 2, 3].map(img => (
                                <div key={img} className="w-16 h-16 bg-white/5 rounded-lg border border-white/5"></div>
                            ))}
                            <div className="w-16 h-16 bg-white/5 rounded-lg border border-white/5 flex items-center justify-center text-gray-400 text-sm font-bold">
                                +2
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default History;
