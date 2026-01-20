import { Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import MagneticButton from '../components/MagneticButton';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { login, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const containerRef = useRef(null);

    // GSAP Animation
    useGSAP(() => {
        gsap.from(".login-content", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    }, { scope: containerRef });

    // Clear session on mount to prevent "bypass" feeling
    // ensuring the user actually sees this page
    useEffect(() => {
        if (isAuthenticated) {
            // Optional: You could force logout here if you want strict "must login every time"
            // logout(); 
        }
    }, [isAuthenticated]);

    // Redirect ONLY after successful auth
    useEffect(() => {
        if (isAuthenticated) {
            const from = location.state?.from?.pathname || '/dashboard';
            navigate(from, { replace: true });
        }
    }, [isAuthenticated, navigate, location]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) return;

        setLoading(true);

        // Simulate API delay
        const name = email.split('@')[0];
        setTimeout(() => {
            login(email, name);
            // Navigation is handled by the useEffect above
        }, 1500);
    };

    return (
        <div ref={containerRef} className="flex items-center justify-center min-h-[80vh] relative z-20">
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-accent/10 to-transparent pointer-events-none" />

            <div
                className="login-content glass-panel w-full max-w-md mx-4 relative z-10 p-8 rounded-3xl !backdrop-blur-[25px]"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold font-heading mb-2">Welcome Back</h2>
                    <p className="text-muted">Sign in to access your dashboard</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                            {loading ? 'Verifying...' : 'Sign In'}
                            {!loading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                        </button>
                    </MagneticButton>
                </form>

                <div className="mt-8 text-center text-sm text-gray-400">
                    Don&apos;t have an account? <Link to="/signup" className="text-white font-semibold hover:text-accent transition-colors">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
