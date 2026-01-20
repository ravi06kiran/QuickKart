import { User, Mail, Phone, MapPin } from 'lucide-react';
import MagneticButton from '../../components/MagneticButton';
import AnimatedBadge from '../../components/AnimatedBadge';

const Profile = () => {
    return (
        <div>
            <div className="mb-8 relative">
                <div className="h-48 bg-gradient-to-r from-accent to-purple-600 rounded-2xl"></div>
                <div className="absolute -bottom-12 left-8 flex items-end gap-6">
                    <div className="w-32 h-32 bg-secondary rounded-full p-1 border-4 border-secondary">
                        <div className="w-full h-full bg-gray-700 rounded-full flex items-center justify-center">
                            <User className="w-12 h-12 text-gray-400" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <h1 className="text-3xl font-bold">John Doe</h1>
                        <AnimatedBadge variant="accent">Premium Member</AnimatedBadge>
                    </div>
                </div>
                <MagneticButton strength={30} className="absolute bottom-4 right-8">
                    <button className="btn-secondary px-6 py-2 rounded-xl border border-white/20 hover:bg-white/10 text-white font-medium">
                        Edit Profile
                    </button>
                </MagneticButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                <div className="card-glass p-6 space-y-6">
                    <h3 className="font-bold text-xl border-b border-white/10 pb-4">Personal Information</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="text-sm text-gray-500">Full Name</label>
                            <div className="flex items-center gap-3 text-lg">
                                <User className="w-5 h-5 text-accent" /> John Doe
                            </div>
                        </div>
                        <div>
                            <label className="text-sm text-gray-500">Email</label>
                            <div className="flex items-center gap-3 text-lg">
                                <Mail className="w-5 h-5 text-accent" /> user@quickkart.com
                            </div>
                        </div>
                        <div>
                            <label className="text-sm text-gray-500">Phone</label>
                            <div className="flex items-center gap-3 text-lg">
                                <Phone className="w-5 h-5 text-accent" /> +1 (555) 000-0000
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-glass p-6 space-y-6">
                    <h3 className="font-bold text-xl border-b border-white/10 pb-4">Shipping Address</h3>
                    <div className="flex items-start gap-3">
                        <MapPin className="w-6 h-6 text-accent mt-1" />
                        <div>
                            <p className="font-bold">Home</p>
                            <p className="text-gray-400">123 Tech Street, Suite 400</p>
                            <p className="text-gray-400">Innovation City, ST 12345</p>
                            <p className="text-gray-400">United States</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Profile;
