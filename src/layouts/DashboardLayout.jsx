import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
    ShoppingBag, Home, User, Wallet, FileText, Settings,
    Bot, LogOut, Menu, X, ShoppingCart, History, MapPin
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import MagneticButton from '../components/MagneticButton';

const SidebarItem = ({ icon: Icon, label, path, active, onClick, collapsed }) => (
    <Link to={path} onClick={onClick}>
        <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3 px-4'} py-3 rounded-xl transition-all duration-300 ${active ? 'bg-accent text-white shadow-lg shadow-accent/25' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
            <MagneticButton strength={20}>
                <Icon className="w-5 h-5 flex-shrink-0" />
            </MagneticButton>
            {!collapsed && <span className="font-medium whitespace-nowrap overflow-hidden">{label}</span>}
        </div>
    </Link>
);

const DashboardLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const { logout, user } = useAuth();
    const location = useLocation();

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const navItems = [
        { icon: Home, label: 'Dashboard', path: '/dashboard' },
        { icon: ShoppingBag, label: 'Shop', path: '/dashboard/shop' },
        { icon: MapPin, label: 'Stores', path: '/dashboard/stores' },
        { icon: ShoppingCart, label: 'My Cart', path: '/dashboard/cart' },
        { icon: FileText, label: 'Shopping List', path: '/dashboard/list' },
        { icon: Wallet, label: 'Wallet', path: '/dashboard/wallet' },
        { icon: History, label: 'History', path: '/dashboard/history' },
        { icon: Bot, label: 'AI Assistant', path: '/dashboard/ai' },
        { icon: User, label: 'Profile', path: '/dashboard/profile' },
        { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
    ];

    return (
        <div className="flex min-h-screen bg-transparent text-white overflow-hidden">
            {/* Sidebar */}
            <motion.aside
                initial={{ width: 280 }}
                animate={{ width: isSidebarOpen ? 280 : 80 }}
                className="glass-panel fixed left-0 top-0 h-full border-r-0 z-30 hidden md:flex flex-col !backdrop-blur-[25px]"
            >
                <div className={`p-6 flex items-center ${!isSidebarOpen && 'justify-center'}`}>
                    <MagneticButton strength={30}>
                        <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-accent/20 flex-shrink-0">QK</div>
                    </MagneticButton>
                    {isSidebarOpen && <span className="font-bold text-xl tracking-tight ml-3">Quick<span className="text-accent">Kart</span></span>}
                </div>

                <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar">
                    {navItems.map((item) => (
                        <SidebarItem
                            key={item.path}
                            icon={item.icon}
                            label={item.label}
                            path={item.path}
                            active={location.pathname === item.path}
                            collapsed={!isSidebarOpen}
                        />
                    ))}
                </div>

                <div className="p-4 border-t border-white/10">
                    <button
                        onClick={logout}
                        className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors ${!isSidebarOpen && 'justify-center'}`}
                    >
                        <LogOut className="w-5 h-5 flex-shrink-0" />
                        {isSidebarOpen && <span className="font-medium">Sign Out</span>}
                    </button>
                </div>
            </motion.aside>

            {/* Main Content Area */}
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'md:ml-[280px]' : 'md:ml-[80px]'}`}>

                {/* Top Header */}
                <header className="h-20 border-b border-white/10 bg-primary/80 backdrop-blur-[25px] flex items-center justify-between px-6 sticky top-0 z-20">
                    <MagneticButton strength={30}>
                        <button onClick={toggleSidebar} className="p-2 hover:bg-white/5 rounded-lg hidden md:block">
                            <Menu className="w-6 h-6 text-gray-400" />
                        </button>
                    </MagneticButton>

                    <div className="md:hidden flex items-center gap-2">
                        {/* Mobile Logo */}
                        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold">QK</div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-bold text-white max-w-[150px] truncate">{user?.name}</p>
                            <p className="text-xs text-accent">Premium Member</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-purple-500 p-0.5">
                            <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center">
                                <User className="w-5 h-5 text-gray-300" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content with Transition */}
                <main className="flex-1 p-6 overflow-x-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="h-full"
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
