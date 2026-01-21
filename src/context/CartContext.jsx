import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        try {
            const savedCart = localStorage.getItem('quickcart-cart');
            return savedCart ? JSON.parse(savedCart) : [];
        } catch {
            return [];
        }
    });

    // Save cart to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('quickcart-cart', JSON.stringify(cart));
    }, [cart]);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [toast, setToast] = useState(null);

    const openSidebar = () => setIsSidebarOpen(true);
    const closeSidebar = () => setIsSidebarOpen(false);

    const showToast = (message) => {
        setToast(message);
        setTimeout(() => setToast(null), 3000);
    };

    const addToCart = (product) => {
        const productWithImage = {
            ...product,
            image: product.image || (product.images && product.images.length > 0 ? product.images[0] : '')
        };

        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            showToast(`Increased quantity of ${product.name}`);
            setCart((prev) => prev.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            showToast(`Added ${product.name} to cart`);
            setCart((prev) => [...prev, { ...productWithImage, quantity: 1 }]);
        }

        setIsSidebarOpen(true); // Auto-open sidebar on add
    };

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id, delta) => {
        setCart((prev) => {
            return prev.map(item => {
                if (item.id === id) {
                    const newQuantity = Math.max(1, item.quantity + delta);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });
        });
    };

    const totalPrice = cart.reduce((total, item) => {
        // Handle both string "$99" and number 99
        let price = item.price;
        if (typeof price === 'string') {
            price = parseFloat(price.replace('$', ''));
        }
        return total + (Number(price) || 0) * item.quantity;
    }, 0);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            totalPrice,
            isSidebarOpen,
            openSidebar,
            closeSidebar,
            toast
        }}>
            {children}
        </CartContext.Provider>
    );
};
