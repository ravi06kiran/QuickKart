import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        try {
            const storedUser = localStorage.getItem('quickkart-user');
            return storedUser ? JSON.parse(storedUser) : null;
        } catch {
            return null;
        }
    });

    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return !!localStorage.getItem('quickkart-user');
    });

    const login = (email, name) => {
        // Mock login logic
        const mockUser = {
            name: name || email?.split('@')[0] || "QuickKart User",
            email: email || "user@quickkart.com"
        };
        setUser(mockUser);
        setIsAuthenticated(true);
        localStorage.setItem('quickkart-user', JSON.stringify(mockUser));
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('quickkart-user');
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
