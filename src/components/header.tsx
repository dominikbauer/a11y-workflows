import { useState } from 'react';
import { Link } from 'react-router';

export const Header = () => {
  const [menOpen, setMenOpen] = useState(false);
  const [womenOpen, setWomenOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-gray-dark sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Left section: Logo */}
        <Link to="/" className="flex items-center">
          <div>
            <img src="assets/images/template-white-logo.png" className="h-14 w-auto mr-4" />
          </div>
        </Link>

        {/* Hamburger menu (for mobile) */}
        <div className="flex lg:hidden">
          <button id="hamburger" className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Center section: Menu */}
        <nav className="hidden lg:flex md:flex-grow justify-center">
          <ul className="flex justify-center space-x-4 text-white">
            <li>
              <Link to="/" className="hover:text-secondary font-semibold">
                Home
              </Link>
            </li>

            {/* Men Dropdown */}
            <li className="relative group" onMouseEnter={() => setMenOpen(true)} onMouseLeave={() => setMenOpen(false)}>
              <Link to="/products" className="hover:text-secondary font-semibold flex items-center">
                Men
                <i className={menOpen ? 'fas fa-chevron-up text-xs' : 'fas fa-chevron-down ml-1 text-xs'}></i>
              </Link>
              {menOpen && (
                <ul className="absolute left-0 bg-white text-black space-y-2 mt-1 p-2 rounded shadow-lg">
                  <li>
                    <Link to="/products" className="min-w-40 block px-4 py-2 hover:bg-primary hover:text-white rounded">
                      Men Item 1
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="min-w-40 block px-4 py-2 hover:bg-primary hover:text-white rounded">
                      Men Item 2
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="min-w-40 block px-4 py-2 hover:bg-primary hover:text-white rounded">
                      Men Item 3
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            {/* Women Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => setWomenOpen(true)}
              onMouseLeave={() => setWomenOpen(false)}
            >
              <Link to="/products" className="hover:text-secondary font-semibold flex items-center">
                Women
                <i className={womenOpen ? 'fas fa-chevron-up ml-1 text-xs' : 'fas fa-chevron-down ml-1 text-xs'}></i>
              </Link>
              {womenOpen && (
                <ul className="absolute left-0 bg-white text-black space-y-2 mt-1 p-2 rounded shadow-lg">
                  <li>
                    <Link to="/products" className="min-w-40 block px-4 py-2 hover:bg-primary hover:text-white rounded">
                      Women Item 1
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="min-w-40 block px-4 py-2 hover:bg-primary hover:text-white rounded">
                      Women Item 2
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="min-w-40 block px-4 py-2 hover:bg-primary hover:text-white rounded">
                      Women Item 3
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/products" className="hover:text-secondary font-semibold">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/checkout" className="hover:text-secondary font-semibold">
                Checkout
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right section: Buttons (for desktop) */}
        <div className="hidden lg:flex items-center space-x-4 relative">
          <Link
            to="/login"
            aria-colcount={2}
            aria-label="Register and Login"
            className="bg-primary border border-primary hover:bg-transparent text-white hover:text-primary font-semibold px-4 py-2 rounded-full inline-block"
          >
            Register
          </Link>
          <Link
            to="/login"
            aria-label="Register and Login"
            className="bg-primary border border-primary hover:bg-transparent text-white hover:text-primary font-semibold px-4 py-2 rounded-full inline-block"
          >
            Login
          </Link>

          <div className="relative group cart-wrapper">
            <Link to="/cart" data-testid="show-cart-dropdown">
              <img src="assets/images/cart-shopping.svg" className="h-6 w-6 group-hover:scale-120" />
            </Link>
            {/* Cart dropdown */}
            <div className="absolute right-0 mt-1 w-80 bg-white shadow-lg p-4 rounded hidden group-hover:block">
              <div className="space-y-4">
                {/* product item */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-line">
                  <div className="flex items-center">
                    <img
                      src="/assets/images/single-product/1.jpg"
                      alt="Product"
                      className="h-12 w-12 object-cover rounded mr-2"
                    />
                    <div>
                      <p className="font-semibold">Summer black dress</p>
                      <p className="text-sm">Quantity: 1</p>
                    </div>
                  </div>
                  <p className="font-semibold">$25.00</p>
                </div>
                {/* product item */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="/assets/images/single-product/2.jpg"
                      alt="Product"
                      className="h-12 w-12 object-cover rounded mr-2"
                    />
                    <div>
                      <p className="font-semibold">Black suit</p>
                      <p className="text-sm">Quantity: 1</p>
                    </div>
                  </div>
                  <p className="font-semibold">$125.00</p>
                </div>
              </div>
              <Link
                to="/cart"
                data-testid="go-to-cart"
                className="block text-center mt-4 border border-primary bg-primary hover:bg-transparent text-white hover:text-primary py-2 rounded-full font-semibold"
              >
                Go to Cart
              </Link>
            </div>
          </div>
          <button
            id="search-icon"
            className="text-white hover:text-secondary group"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <img
              src="assets/images/search-icon.svg"
              alt="Search"
              className="h-6 w-6 transition-transform transform group-hover:scale-120"
            />
          </button>
          {/* Search field */}
          <div
            id="search-field"
            className={
              searchOpen
                ? 'search-slide-down absolute top-full right-0 mt-2 w-full bg-white shadow-lg p-2 rounded'
                : 'hidden absolute top-full right-0 mt-2 w-full bg-white shadow-lg p-2 rounded'
            }
          >
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Search for products..."
            />
          </div>
        </div>
      </div>
    </header>
  );
};
