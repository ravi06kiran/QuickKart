import { Bell, Shield, Moon, Globe, Wifi, Lock, HelpCircle, CreditCard, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';
import MagneticButton from '../../components/MagneticButton';
import AnimatedBadge from '../../components/AnimatedBadge';

const ToggleSwitch = ({ enabled, onToggle }) => (
    <div
        onClick={onToggle}
        className={`w-12 h-6 rounded-full p-1 relative cursor-pointer transition-colors duration-300 ${enabled ? 'bg-accent' : 'bg-gray-400'}`}
    >
        <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all duration-300 ${enabled ? 'right-1' : 'left-1'}`}></div>
    </div>
);

const Settings = () => {
    // Initialize from localStorage or default to true (Dark Mode)
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('quickkart-theme');
        return saved ? saved === 'dark' : true;
    });

    const [notifications, setNotifications] = useState(true);
    const [publicProfile, setPublicProfile] = useState(false);
    const [twoFactor, setTwoFactor] = useState(true);

    // Effect to handle actual theme toggling
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('quickkart-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('quickkart-theme', 'light');
        }
    }, [darkMode]);

    return (
        <div className="max-w-3xl mx-auto pb-10">
            <h1 className="text-3xl font-bold mb-8">Settings</h1>

            <div className="space-y-6">

                {/* Appearance Section */}
                <div className="card-glass p-0 overflow-hidden">
                    <div className="p-4 border-b border-white/10 bg-white/5">
                        <h3 className="font-bold text-lg flex items-center gap-2"><Moon className="w-5 h-5 text-accent" /> Appearance</h3>
                    </div>
                    <div className="p-6 space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="block font-medium">Dark Mode</span>
                                <span className="text-sm text-gray-400">Toggle between Light and Dark themes.</span>
                            </div>
                            <ToggleSwitch enabled={darkMode} onToggle={() => setDarkMode(!darkMode)} />
                        </div>
                        <div className="flex items-center justify-between cursor-pointer hover:opacity-80">
                            <div>
                                <span className="block font-medium">App Language</span>
                                <span className="text-sm text-gray-400">English (US)</span>
                            </div>
                            <Globe className="w-5 h-5 text-gray-400" />
                        </div>
                    </div>
                </div>

                {/* Payment & Billing (New) */}
                <div className="card-glass p-0 overflow-hidden">
                    <div className="p-4 border-b border-white/10 bg-white/5">
                        <h3 className="font-bold text-lg flex items-center gap-2"><CreditCard className="w-5 h-5 text-accent" /> Payment & Billing</h3>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between cursor-pointer p-2 hover:bg-white/5 rounded-lg transition-colors">
                            <span>Manage Payment Methods</span>
                            <span className="text-sm text-gray-400">Visa ending in 4242</span>
                        </div>
                        <div className="flex items-center justify-between cursor-pointer p-2 hover:bg-white/5 rounded-lg transition-colors">
                            <span>Billing Address</span>
                            <span className="text-sm text-gray-400">123 Tech St...</span>
                        </div>
                    </div>
                </div>

                {/* Notifications Section */}
                <div className="card-glass p-0 overflow-hidden">
                    <div className="p-4 border-b border-white/10 bg-white/5">
                        <h3 className="font-bold text-lg flex items-center gap-2"><Bell className="w-5 h-5 text-accent" /> Notifications</h3>
                    </div>
                    <div className="p-6 space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="block font-medium">Push Notifications</span>
                                <span className="text-sm text-gray-400">Receive alerts for new deals and order updates.</span>
                            </div>
                            <ToggleSwitch enabled={notifications} onToggle={() => setNotifications(!notifications)} />
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="block font-medium">Email Digest</span>
                                <span className="text-sm text-gray-400">Weekly summary of your shopping activity.</span>
                            </div>
                            <ToggleSwitch enabled={false} onToggle={() => { }} />
                        </div>
                    </div>
                </div>

                {/* Privacy & Security */}
                <div className="card-glass p-0 overflow-hidden">
                    <div className="p-4 border-b border-white/10 bg-white/5">
                        <h3 className="font-bold text-lg flex items-center gap-2"><Shield className="w-5 h-5 text-accent" /> Privacy & Security</h3>
                    </div>
                    <div className="p-6 space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="block font-medium">Public Profile</span>
                                <span className="text-sm text-gray-400">Allow others to see your wishlists.</span>
                            </div>
                            <ToggleSwitch enabled={publicProfile} onToggle={() => setPublicProfile(!publicProfile)} />
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="block font-medium">Two-Factor Authentication</span>
                                <span className="text-sm text-gray-400">Add an extra layer of security to your account.</span>
                            </div>
                            <ToggleSwitch enabled={twoFactor} onToggle={() => setTwoFactor(!twoFactor)} />
                        </div>
                    </div>
                </div>

                {/* Help & Support (New) */}
                <div className="card-glass p-0 overflow-hidden">
                    <div className="p-4 border-b border-white/10 bg-white/5">
                        <h3 className="font-bold text-lg flex items-center gap-2"><HelpCircle className="w-5 h-5 text-accent" /> Support</h3>
                    </div>
                    <div className="p-6">
                        <MagneticButton strength={15} className="w-full">
                            <div className="flex items-center justify-between cursor-pointer p-2 hover:bg-white/5 rounded-lg transition-colors">
                                <span className="block font-medium">Help Center</span>
                            </div>
                        </MagneticButton>
                        <MagneticButton strength={15} className="w-full mt-2">
                            <div className="flex items-center justify-between cursor-pointer p-2 hover:bg-white/5 rounded-lg transition-colors">
                                <span className="block font-medium text-red-500 font-bold">Delete Account</span>
                            </div>
                        </MagneticButton>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default Settings;
