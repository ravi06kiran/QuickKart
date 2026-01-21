import { Link } from 'react-router-dom';
import { Menu, LogIn, User, Phone } from 'lucide-react';
import { useState } from 'react';
import MagneticButton from './MagneticButton';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-primary/80 backdrop-blur-[25px]">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <MagneticButton strength={30}>
                    <Link to="/" className="text-2xl font-bold tracking-tight flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-gradient-to-tr from-accent to-purple-600 rounded-lg flex items-center justify-center text-white text-xl shadow-lg shadow-accent/20 group-hover:rotate-12 transition-transform duration-300">
                            Q
                        </div>
                        <span className="text-xl font-heading">Quick<span className="text-accent">Kart</span></span>
                    </Link>
                </MagneticButton>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-6">
                    {/* Contact Button (Icon Style) */}
                    <Link to="/contact" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium">
                        <Phone className="w-4 h-4" />
                        Contact
                    </Link>

                    <div className="h-6 w-px bg-white/10"></div>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-3">
                        <MagneticButton strength={20}>
                            <Link to="/login" className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors text-gray-300 hover:text-white flex items-center gap-2">
                                Log In
                            </Link>
                        </MagneticButton>
                        <MagneticButton strength={20}>
                            <Link to="/signup" className="px-5 py-2.5 rounded-xl text-sm font-bold bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all shadow-lg shadow-white/10 flex items-center gap-2">
                                Sign Up <User className="w-4 h-4" />
                            </Link>
                        </MagneticButton>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden p-2 hover:bg-white/5 rounded-full transition-colors" onClick={() => setIsOpen(!isOpen)}>
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-secondary border-t border-white/10 p-4 absolute w-full shadow-2xl">
                    <div className="flex flex-col gap-4 text-sm font-medium text-gray-300">
                        <Link to="/contact" className="flex items-center gap-2 hover:text-white p-2 rounded-lg hover:bg-white/5" onClick={() => setIsOpen(false)}>
                            <Phone className="w-4 h-4" /> Contact Support
                        </Link>
                        <div className="h-px bg-white/10 my-2"></div>
                        <Link to="/login" className="flex items-center gap-2 hover:text-white p-2 rounded-lg hover:bg-white/5" onClick={() => setIsOpen(false)}>
                            <LogIn className="w-4 h-4" /> Log In
                        </Link>
                        <Link to="/signup" className="flex items-center gap-2 text-white bg-accent/20 p-3 rounded-lg justify-center" onClick={() => setIsOpen(false)}>
                            <User className="w-4 h-4" /> Create Account
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};
export default Navbar;
