import { motion } from 'framer-motion';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Search } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import AnimatedBadge from '../components/AnimatedBadge';

const ProductList = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row justify-between items-center mb-12"
            >
                <h2 className="text-3xl font-bold font-heading mb-6 md:mb-0">
                    Curated <AnimatedBadge variant="accent" className="text-2xl py-2 px-6 ml-2">Collection</AnimatedBadge>
                </h2>

                <div className="relative w-full md:w-96">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary border border-white/10 focus:border-accent focus:outline-none transition-colors"
                    />
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    <p className="text-xl">No products found matching your search.</p>
                </div>
            )}
        </div>
    );
};

export default ProductList;
