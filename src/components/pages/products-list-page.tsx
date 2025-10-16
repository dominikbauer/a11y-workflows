import { Link } from 'react-router';
import { ProductTile } from '../snippets/product-tile';

export const ProductsListPage = () => {
  return (
    <section id="shop">
      <div className="container mx-auto">
        {/* <!-- Top Filter --> */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <button className="bg-primary text-white hover:bg-transparent hover:text-primary border hover:border-primary py-2 px-4 rounded-full focus:outline-none">
              Show On Sale
            </button>
            <button className="bg-primary text-white hover:bg-transparent hover:text-primary border hover:border-primary py-2 px-4 rounded-full focus:outline-none">
              List View
            </button>
            <button className="bg-primary text-white hover:bg-transparent hover:text-primary border hover:border-primary py-2 px-4 rounded-full focus:outline-none">
              Grid View
            </button>
          </div>
          <div className="flex mt-5 md:mt-0 space-x-4">
            <div className="relative">
              <select className="block appearance-none w-full bg-white border  hover:border-primary px-4 py-2 pr-8 rounded-full shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Sort by Latest</option>
                <option>Sort by Popularity</option>
                <option>Sort by A-Z</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center px-2">
                <img id="arrow-down" className="h-4 w-4" src="assets/images/filter-down-arrow.svg" alt="filter arrow" />
                <img
                  id="arrow-up"
                  className="h-4 w-4 hidden"
                  src="assets/images/filter-up-arrow.svg"
                  alt="filter arrow"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Filter Toggle Button for Mobile --> */}
        <div className="block md:hidden text-center mb-4">
          <button
            id="products-toggle-filters"
            className="bg-primary text-white py-2 px-4 rounded-full focus:outline-none"
          >
            Show Filters
          </button>
        </div>
        <div className="flex flex-col md:flex-row">
          <div id="filters" className="w-full md:w-1/4 p-4 hidden md:block">
            {/* <!-- Category Filter --> */}
            <div className="mb-6 pb-8 border-b border-gray-line">
              <h3 className="text-lg font-semibold mb-6">Category</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox custom-checkbox" />
                  <span className="ml-2">T-Shirts</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox custom-checkbox" />
                  <span className="ml-2">Hoodies</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox custom-checkbox" />
                  <span className="ml-2">Accessories</span>
                </label>
              </div>
            </div>
            {/* <!-- Size Filter --> */}
            <div className="mb-6 pb-8 border-b border-gray-line">
              <h3 className="text-lg font-semibold mb-6">Size</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox custom-checkbox" />
                  <span className="ml-2">S (30)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox custom-checkbox" />
                  <span className="ml-2">M (44)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox custom-checkbox" />
                  <span className="ml-2">L (22)</span>
                </label>
              </div>
            </div>
            {/* <!-- Color Filter --> */}
            <div className="mb-6 pb-8 border-b border-gray-line">
              <h3 className="text-lg font-semibold mb-6">Color</h3>
              <div className="space-y-2">
                <label className="flex items-center custom-color-checkbox" data-color="#ff0000">
                  <input type="checkbox" className="form-checkbox custom-checkbox" />
                  <span className="ml-2">Red</span>
                </label>
                <label className="flex items-center custom-color-checkbox" data-color="#0000ff">
                  <input type="checkbox" className="form-checkbox custom-checkbox" />
                  <span className="ml-2">Blue</span>
                </label>
                <label className="flex items-center custom-color-checkbox" data-color="#00ff00">
                  <input type="checkbox" className="form-checkbox custom-checkbox" />
                  <span className="ml-2">Green</span>
                </label>
              </div>
            </div>
            {/* <!-- Brand Filter --> */}
            <div className="mb-6 pb-8 border-b border-gray-line">
              <h3 className="text-lg font-semibold mb-6">Brand</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox custom-checkbox" />
                  <span className="ml-2">Nike</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox custom-checkbox" />
                  <span className="ml-2">Adidas</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox custom-checkbox" />
                  <span className="ml-2">Puma</span>
                </label>
              </div>
            </div>
            {/* <!-- Rating Filter --> */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-6">Rating</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox custom-checkbox" />
                  <span className="ml-2">★★★★★</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox custom-checkbox" />
                  <span className="ml-2">★★★★☆</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox custom-checkbox" />
                  <span className="ml-2">★★★☆☆</span>
                </label>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/4 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <ProductTile
                id={5}
                name="Blue women's suit"
                img="assets/images/products/5.jpg"
                imgAlt="Alt text"
                category="Women"
                price="$19.99"
                priceOld="$24.99"
              ></ProductTile>
              <ProductTile
                id={6}
                name="White shirt with long sleeves"
                img="assets/images/products/6.jpg"
                imgAlt="Alt text"
                category="Women"
                price="$29.99"
              ></ProductTile>
              <ProductTile
                id={7}
                name="Yellow men's suit"
                img="assets/images/products/7.jpg"
                imgAlt="Alt text"
                category="Men"
                price="$15.99"
                priceOld="$19.99"
              ></ProductTile>
              <ProductTile
                id={8}
                name="Red dress"
                img="assets/images/products/8.jpg"
                imgAlt="Alt text"
                category="Women"
                price="$39.99"
                priceOld="$49.99"
              ></ProductTile>
              <ProductTile
                id={4}
                name="Black leather jacket"
                img="assets/images/products/4.jpg"
                imgAlt="Alt text"
                category="Women"
                price="$39.99"
                priceOld="$49.99"
              ></ProductTile>
              <ProductTile
                id={3}
                name="Black long dress"
                img="assets/images/products/3.jpg"
                imgAlt="Alt text"
                category="Women, Accessories"
                price="$15.99"
                priceOld="$19.99"
              ></ProductTile>
            </div>
            {/* <!-- Pagination --> */}
            <div className="flex justify-center mt-8">
              <nav aria-label="Page navigation">
                <ul className="inline-flex space-x-2">
                  <li>
                    <Link
                      to="/products"
                      className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full"
                    >
                      1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products"
                      className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary hover:text-white"
                    >
                      2
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products"
                      className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary hover:text-white"
                    >
                      3
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="w-10 h-10 flex items-center justify-center rounded-full">
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
