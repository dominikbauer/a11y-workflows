import { Route, HashRouter as Router, Routes, useLocation } from 'react-router';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { CartPage } from './components/pages/cart-page';
import { CheckoutPage } from './components/pages/checkout-page';
import { HomePage } from './components/pages/home-page';
import { LoginPage } from './components/pages/login-page';
import { ProductPage } from './components/pages/product-page';
import { ProductsListPage } from './components/pages/products-list-page';

import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header></Header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsListPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>

      <Footer></Footer>
    </Router>
  );
}

export default App;
