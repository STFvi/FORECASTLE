import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import './styles/design-tokens.css';
import './App.css';

// Context
import { CartProvider } from './context/CartContext';

// Components
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Navbar from './components/Navbar/Navbar';
import CartDrawer from './components/CartDrawer/CartDrawer';
import HeroSection from './components/HeroSection/HeroSection';
import CategoryShowcase from './components/CategoryShowcase/CategoryShowcase';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import CoffeeSection from './components/CoffeeSection/CoffeeSection';
import AboutSection from './components/AboutSection/AboutSection';
import Footer from './components/Footer/Footer';

// Pages
import CafePage from './pages/CafePage/CafePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import AboutPage from './pages/AboutPage/AboutPage';

// Home Page Component
const HomePage = () => (
  <>
    <section id="home">
      <HeroSection />
    </section>
    <CategoryShowcase />
    <ProductShowcase />
    <CoffeeSection />
    <AboutSection />
  </>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading screen for 1.2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter basename="/FORECASTLE">
          <div className="app">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cafe" element={<CafePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </main>
            <Footer />
            <CartDrawer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
