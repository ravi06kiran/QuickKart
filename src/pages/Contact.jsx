import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-gray-400">We&apos;d love to hear from you. Send us a message!</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="card-glass p-6 flex items-start gap-4">
                            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center text-accent">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1">Email Us</h3>
                                <p className="text-gray-400">support@quickkart.com</p>
                                <p className="text-gray-400">business@quickkart.com</p>
                            </div>
                        </div>

                        <div className="card-glass p-6 flex items-start gap-4">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1">Call Us</h3>
                                <p className="text-gray-400">+1 (555) 123-4567</p>
                                <p className="text-gray-400">Mon - Fri, 9am - 6pm EST</p>
                            </div>
                        </div>

                        <div className="card-glass p-6 flex items-start gap-4">
                            <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center text-pink-400">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1">Visit Us</h3>
                                <p className="text-gray-400">123 Innovation Dr.</p>
                                <p className="text-gray-400">Tech City, TC 90210</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="card-glass p-8"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                                <input type="text" className="w-full bg-primary border border-white/10 rounded-xl px-4 py-3 focus:border-accent focus:outline-none" placeholder="John Doe" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                <input type="email" className="w-full bg-primary border border-white/10 rounded-xl px-4 py-3 focus:border-accent focus:outline-none" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea rows={4} className="w-full bg-primary border border-white/10 rounded-xl px-4 py-3 focus:border-accent focus:outline-none" placeholder="How can we help?"></textarea>
                            </div>

                            <button className="w-full btn-primary flex items-center justify-center gap-2">
                                Send Message <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
export default Contact;
