export const ProductSlider = () => {
  return (
    <section id="product-slider" data-testid="product-slider">
      <div className="main-slider swiper-container">
        <div className="swiper-wrapper flex w-full h-full">
          {/* <!-- Slide 1 --> */}
          <div className="swiper-slide flex-shrink-0 w-full h-full">
            <img src="assets/images/main-slider/5.jpg" alt="Product 1" />
            <div className="swiper-slide-content">
              <h2 className="text-3xl md:text-7xl font-bold text-white mb-2 md:mb-4">Women</h2>
              <p className="mb-4 text-white md:text-2xl">
                Experience the best in sportswear with <br />
                our latest collection.
              </p>
              <a
                href="/"
                className="bg-primary hover:bg-transparent text-white hover:text-white border border-transparent hover:border-white font-semibold px-4 py-2 rounded-full inline-block"
              >
                Shop now
              </a>
            </div>
          </div>
          {/* <!-- Slide 2 --> */}
          <div className="swiper-slide flex-shrink-0 w-full h-full">
            <img src="assets/images/main-slider/2.png" alt="Product 2" />
            <div className="swiper-slide-content">
              <h2 className="text-3xl md:text-7xl font-bold text-white mb-2 md:mb-4">Men</h2>
              <p className="mb-4 text-white md:text-2xl">
                Discover the latest trends in Men`s <br />
                sportswear and casual fashion.
              </p>
              <a
                href="/"
                className="bg-white hover:bg-transparent text-black hover:text-white font-semibold px-4 py-2 rounded-full inline-block border border-transparent hover:border-white"
              >
                Shop now
              </a>
            </div>
          </div>
          {/* <!-- Slide 3 --> */}
          <div className="swiper-slide flex-shrink-0 w-full h-full">
            <img src="assets/images/main-slider/4.jpg" alt="Product 3" />
            <div className="swiper-slide-content">
              <h2 className="text-3xl md:text-7xl font-bold text-white mb-2 md:mb-4">Accessories</h2>
              <p className="mb-4 text-white md:text-2xl">
                Elevate your style with our latest <br />
                sportswear collection.
              </p>
              <a
                href="/"
                className="bg-primary hover:bg-transparent text-white hover:text-white border border-transparent hover:border-white font-semibold px-4 py-2 rounded-full inline-block"
              >
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </section>
  );
};
