import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import MagneticButton from '../components/MagneticButton';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

    if (cart.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
                <p className="text-gray-400 mb-8">Looks like you haven&apos;t added anything yet.</p>
                <MagneticButton strength={40}>
                    <Link to="/dashboard/shop" className="btn-primary inline-flex items-center gap-2">
                        Start Shopping <ArrowRight className="w-5 h-5" />
                    </Link>
                </MagneticButton>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold font-heading mb-8">Shopping <span className="text-accent">Cart</span></h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-6">
                    {cart.map((item) => (
                        <motion.div
                            layout
                            key={item.id}
                            className="card-glass flex flex-col sm:flex-row items-center gap-6"
                        >
                            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />

                            <div className="flex-grow text-center sm:text-left">
                                <h3 className="text-lg font-bold">{item.name}</h3>
                                <p className="text-gray-400 text-sm">{item.category}</p>
                                <p className="text-gold font-bold mt-1">${item.price}</p>
                            </div>

                            <div className="flex items-center gap-4 bg-primary/50 rounded-lg p-2">
                                <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-white text-gray-400 disabled:opacity-50">
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="font-medium w-8 text-center">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-white text-gray-400">
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>

                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="p-2 text-red-500 hover:bg-red-500/10 rounded-full transition-colors"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="h-fit">
                    <div className="card-glass sticky top-24">
                        <h3 className="text-xl font-bold mb-6">Order Summary</h3>
                        <div className="space-y-4 mb-6 text-gray-300">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${totalPrice}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span className="text-green-400">Free</span>
                            </div>
                            <div className="border-t border-white/10 pt-4 flex justify-between text-white font-bold text-lg">
                                <span>Total</span>
                                <span>${totalPrice}</span>
                            </div>
                        </div>
                        <MagneticButton strength={20} className="w-full">
                            <button className="w-full btn-primary py-4 text-lg">
                                Checkout Now
                            </button>
                        </MagneticButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
