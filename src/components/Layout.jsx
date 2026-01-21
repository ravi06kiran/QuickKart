import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CartSidebar from './CartSidebar';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const Layout = () => {
    const { toast } = useCart();

    return (
        <div className="flex flex-col min-h-screen relative">
            <Navbar />
            <CartSidebar />
            <main className="flex-grow pt-[73px]">{/* Padding top for fixed navbar */}
                <Outlet />
            </main>
            <Footer />

            {/* Toast Notification */}
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-6 right-6 bg-white text-black px-6 py-4 rounded-xl shadow-2xl z-[100] flex items-center gap-3 font-medium border border-gray-100"
                    >
                        <div className="bg-green-500 rounded-full p-1 text-white">
                            <Check className="w-4 h-4" />
                        </div>
                        {toast}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
export default Layout;
