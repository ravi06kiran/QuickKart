const CART_STORAGE_KEY = 'quickcart-cart';

/**
 * Saves the cart state to LocalStorage
 * @param {Array} cart - The cart array to save
 */
export const saveCart = (cart) => {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
        console.error('Error saving cart to LocalStorage:', error);
    }
};

/**
 * Loads the cart state from LocalStorage
 * @returns {Array} - The saved cart or an empty array
 */
export const loadCart = () => {
    try {
        const savedCart = localStorage.getItem(CART_STORAGE_KEY);
        return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
        console.error('Error loading cart from LocalStorage:', error);
        return [];
    }
};
