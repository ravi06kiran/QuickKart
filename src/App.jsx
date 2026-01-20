import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import ProtectedRoute from './components/ProtectedRoute';

// Public Pages
import Layout from './components/Layout';
import Home from './pages/Home'; // Intro Page
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';

// Dashboard Pages
import DashboardHome from './pages/dashboard/DashboardHome';
import ProductList from './pages/ProductList';
import Stores from './pages/dashboard/Stores';
import Cart from './pages/Cart';
import ShoppingList from './pages/dashboard/ShoppingList';
import Wallet from './pages/dashboard/Wallet';
import History from './pages/dashboard/History';
import AIHelper from './pages/dashboard/AIHelper';
import Profile from './pages/dashboard/Profile';
import Settings from './pages/dashboard/Settings';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <AnimatedBackground />
          <Routes>
            {/* Public Routes - Wrapped in Standard Layout */}
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/contact" element={<Contact />} />
            </Route>

            {/* Protected Dashboard Routes - Wrapped in DashboardLayout */}
            <Route path="/dashboard" element={<ProtectedRoute><DashboardHome /></ProtectedRoute>} />
            <Route path="/dashboard/shop" element={<ProtectedRoute><ProductList /></ProtectedRoute>} />
            <Route path="/dashboard/stores" element={<ProtectedRoute><Stores /></ProtectedRoute>} />
            <Route path="/dashboard/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            <Route path="/dashboard/list" element={<ProtectedRoute><ShoppingList /></ProtectedRoute>} />
            <Route path="/dashboard/wallet" element={<ProtectedRoute><Wallet /></ProtectedRoute>} />
            <Route path="/dashboard/history" element={<ProtectedRoute><History /></ProtectedRoute>} />
            <Route path="/dashboard/ai" element={<ProtectedRoute><AIHelper /></ProtectedRoute>} />
            <Route path="/dashboard/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/dashboard/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />


            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
