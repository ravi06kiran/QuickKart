import { User, Mail, Lock, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import MagneticButton from '../components/MagneticButton';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { login, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const containerRef = useRef(null);

    // GSAP Animation
    useGSAP(() => {
        gsap.from(".signup-content", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    }, { scope: containerRef });

    // Redirect if authenticated
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard', { replace: true });
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password || !name) return;

        setLoading(true);

        // Simulate API delay and auto-login
        setTimeout(() => {
            login(email, name);
            // Navigation is now handled by the useEffect above
        }, 1500);
    };

    return (
        <div ref={containerRef} className="flex items-center justify-center min-h-[80vh] relative z-20">
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none" />

            <div
                className="signup-content glass-panel w-full max-w-md mx-4 relative z-10 p-8 rounded-3xl !backdrop-blur-[25px]"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold font-heading mb-2">Create Account</h2>
                    <p className="text-muted">Join the QuickKart community today</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="John Doe"
                                className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary border border-white/10 focus:border-accent focus:outline-none transition-colors"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary border border-white/10 focus:border-accent focus:outline-none transition-colors"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary border border-white/10 focus:border-accent focus:outline-none transition-colors"
                                required
                            />
                        </div>
                    </div>

                    <MagneticButton strength={20} className="w-full">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full btn-primary flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Creating Account...' : 'Create Account'}
                            {!loading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                        </button>
                    </MagneticButton>
                </form>

                <div className="mt-8 text-center text-sm text-gray-400">
                    Already have an account? <Link to="/login" className="text-white font-semibold hover:text-accent transition-colors">Log In</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
