import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import MagneticButton from './MagneticButton';

const CartSidebar = () => {
    const {
        cart,
        isSidebarOpen,
        closeSidebar,
        updateQuantity,
        removeFromCart,
        totalPrice
    } = useCart();

    return (
        <AnimatePresence>
            {isSidebarOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeSidebar}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-primary/90 backdrop-blur-[30px] border-l border-white/10 z-[70] flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-accent/20 rounded-lg text-accent">
                                    <ShoppingBag className="w-6 h-6" />
                                </div>
                                <h2 className="text-xl font-bold">Your Cart</h2>
                            </div>
                            <button
                                onClick={closeSidebar}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-grow overflow-y-auto p-6 space-y-6">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                                    <ShoppingBag className="w-16 h-16 mb-4" />
                                    <p className="text-lg">Your cart is empty</p>
                                    <p className="text-sm">Add some items to get started!</p>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className="flex gap-4 group">
                                        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="font-bold text-sm sm:text-base line-clamp-1">{item.name}</h3>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="p-1 text-gray-500 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <p className="text-accent font-bold text-sm mb-2">${item.price}</p>
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center bg-white/5 rounded-lg border border-white/10 p-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="p-1 hover:bg-white/10 rounded-md transition-colors"
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </button>
                                                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="p-1 hover:bg-white/10 rounded-md transition-colors"
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {cart.length > 0 && (
                            <div className="p-6 border-t border-white/10 bg-white/5">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-gray-400">Total Price</span>
                                    <span className="text-2xl font-bold text-white">${totalPrice.toFixed(2)}</span>
                                </div>
                                <MagneticButton strength={20}>
                                    <button className="w-full btn-primary py-4 rounded-xl font-bold text-lg shadow-xl shadow-accent/20">
                                        Checkout Now
                                    </button>
                                </MagneticButton>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartSidebar;
