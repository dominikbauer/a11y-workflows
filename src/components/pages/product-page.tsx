import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ProductsTeaserList } from '../snippets/products-teaser-list';

export const ProductPage = () => {
  const [mainImage, setMainImage] = useState('/assets/images/products/1.jpg');

  const changeImage = (imgUrl: string) => {
    setMainImage(imgUrl);
  };

  /* single product tabs */
  useEffect(() => {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    if (tabs.length > 0 && contents.length > 0) {
      tabs.forEach((tab) => {
        tab.addEventListener('click', function (event) {
          tabs.forEach((t) => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
          });
          contents.forEach((c) => c.classList.add('hidden'));

          const clickedTab = event.currentTarget as HTMLButtonElement;
          clickedTab.classList.add('active');
          clickedTab.setAttribute('aria-selected', 'true');
          const content = document.querySelector(`#${clickedTab.id.replace('-tab', '-content')}`);
          if (content) {
            content.classList.remove('hidden');
          }
        });
      });

      (tabs[0] as HTMLElement).click();
    }

    // Cleanup event listeners on unmount
    return () => {
      tabs.forEach((tab) => {
        tab.replaceWith(tab.cloneNode(true));
      });
    };
  }, []);

  return (
    <>
      {/* Breadcrumbs */}
      <section id="breadcrumbs" className="pt-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <ol className="list-reset flex">
            <li>
              <Link to="/" className="font-semibold hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2">&gt;</span>
            </li>
            <li>
              <Link to="/products" className="font-semibold hover:text-primary">
                Shop
              </Link>
            </li>
            <li>
              <span className="mx-2">&gt;</span>
            </li>
            <li>
              <Link to="/products" className="font-semibold hover:text-primary">
                T-shirts
              </Link>
            </li>
            <li>
              <span className="mx-2">&gt;</span>
            </li>
            <li>Preppy T-shirt</li>
          </ol>
        </div>
      </section>

      {/* Product info */}
      <section id="product-info">
        <div className="container mx-auto">
          <div className="py-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* <!-- Image Section --> */}
              <div className="w-full lg:w-1/2">
                <div className="grid gap-4">
                  {/* <!-- Big Image --> */}
                  <div id="main-image-container">
                    <img
                      id="main-image"
                      className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                      src={mainImage}
                      alt="Main Product Image"
                    />
                  </div>

                  <div className="grid grid-cols-5 gap-4">
                    {/* Small Images */}
                    <div>
                      <img
                        onClick={() => changeImage('/assets/images/single-product/1.jpg')}
                        data-full="/assets/images/single-product/1.jpg"
                        src="/assets/images/single-product/1.jpg"
                        className="object-cover object-center max-h-30 max-w-full rounded-lg cursor-pointer"
                        alt="Gallery Image 1"
                      />
                    </div>
                    <div>
                      <img
                        onClick={() => changeImage('/assets/images/single-product/2.jpg')}
                        data-full="/assets/images/single-product/2.jpg"
                        src="/assets/images/single-product/2.jpg"
                        className="object-cover object-center max-h-30 max-w-full rounded-lg cursor-pointer"
                        alt="Gallery Image 2"
                      />
                    </div>
                    <div>
                      <img
                        onClick={() => changeImage('/assets/images/single-product/3.jpg')}
                        data-full="/assets/images/single-product/3.jpg"
                        src="/assets/images/single-product/3.jpg"
                        className="object-cover object-center max-h-30 max-w-full rounded-lg cursor-pointer"
                        alt="Gallery Image 3"
                      />
                    </div>
                    <div>
                      <img
                        onClick={() => changeImage('/assets/images/single-product/4.jpg')}
                        data-full="/assets/images/single-product/4.jpg"
                        src="/assets/images/single-product/4.jpg"
                        className="object-cover object-center max-h-30 max-w-full rounded-lg cursor-pointer"
                        alt="Gallery Image 4"
                      />
                    </div>
                    <div>
                      <img
                        onClick={() => changeImage('/assets/images/single-product/5.jpg')}
                        data-full="/assets/images/single-product/5.jpg"
                        src="/assets/images/single-product/5.jpg"
                        className="object-cover object-center max-h-30 max-w-full rounded-lg cursor-pointer"
                        alt="Gallery Image 5"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Product Details Section */}
              <div className="w-full lg:w-1/2 flex flex-col justify-between">
                <div className="pb-8 border-b border-gray-line">
                  <h1 className="text-3xl font-bold mb-4">Preppy T-shirt</h1>
                  <div className="flex items-center mb-8">
                    <span>★★★★★</span>
                    <span className="ml-2">(0 Reviews)</span>
                    <a href="#" className="ml-4 text-primary font-semibold">
                      Write a review
                    </a>
                  </div>
                  <div className="mb-4 pb-4 border-b border-gray-line">
                    <p className="mb-2">
                      Brand:
                      <strong>
                        <a href="#" className="hover:text-primary">
                          {' '}
                          Nike
                        </a>
                      </strong>
                    </p>
                    <p className="mb-2">
                      Product code:<strong> 00123</strong>
                    </p>
                    <p className="mb-2">
                      Availability:<strong> In Stock</strong>
                    </p>
                  </div>
                  <div className="text-2xl font-semibold mb-8">$40.00</div>
                  <div className="flex items-center mb-8">
                    <button
                      id="decrease"
                      className="bg-primary hover:bg-transparent border border-transparent hover:border-primary text-white hover:text-primary font-semibold w-10 h-10 rounded-full flex items-center justify-center focus:outline-none"
                      disabled
                    >
                      -
                    </button>
                    <input
                      id="quantity"
                      type="number"
                      value="1"
                      className="w-16 py-2 text-center focus:outline-none"
                      readOnly
                    />
                    <button
                      id="increase"
                      className="bg-primary hover:bg-transparent border border-transparent hover:border-primary text-white hover:text-primary font-semibold  w-10 h-10 rounded-full focus:outline-none"
                    >
                      +
                    </button>
                  </div>
                  <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full">
                    Add to Cart
                  </button>
                </div>
                {/* Social sharing */}
                <div className="flex space-x-4 my-6">
                  <a href="#" className="w-4 h-4 flex items-center justify-center">
                    <img
                      src="assets/images/social_icons/facebook.svg"
                      alt="Facebook"
                      className="w-4 h-4 transition-transform transform hover:scale-110"
                    />
                  </a>
                  <a href="#" className="w-4 h-4 flex items-center justify-center">
                    <img
                      src="assets/images/social_icons/instagram.svg"
                      alt="Instagram"
                      className="w-4 h-4 transition-transform transform hover:scale-110"
                    />
                  </a>
                  <a href="#" className="w-4 h-4 flex items-center justify-center">
                    <img
                      src="assets/images/social_icons/pinterest.svg"
                      alt="Pinterest"
                      className="w-4 h-4 transition-transform transform hover:scale-110"
                    />
                  </a>
                  <a href="#" className="w-4 h-4 flex items-center justify-center">
                    <img
                      src="assets/images/social_icons/twitter.svg"
                      alt="Twitter"
                      className="w-4 h-4 transition-transform transform hover:scale-110"
                    />
                  </a>
                  <a href="#" className="w-4 h-4 flex items-center justify-center">
                    <img
                      src="assets/images/social_icons/viber.svg"
                      alt="Viber"
                      className="w-4 h-4 transition-transform transform hover:scale-110"
                    />
                  </a>
                </div>
                {/* Additional Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Product Description</h3>
                  <p>
                    This is a premium quality t-shirt perfect for casual wear. Made with high-quality fabric to ensure
                    comfort and durability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product tabs description */}
      <section>
        <div className="container mx-auto">
          <div className="py-12">
            <div className="mt-10">
              <div className="flex space-x-4" role="tablist">
                <button
                  id="description-tab"
                  role="tab"
                  aria-controls="description-content"
                  aria-selected="true"
                  className="tab active"
                >
                  Description
                </button>
                <button
                  id="additional-info-tab"
                  role="tab"
                  aria-controls="additional-info-content"
                  aria-selected="false"
                  className="tab"
                >
                  Additional information
                </button>
                <button
                  id="size-shape-tab"
                  role="tab"
                  aria-controls="size-shape-content"
                  aria-selected="false"
                  className="tab"
                >
                  Size & Shape
                </button>
                <button
                  id="reviews-tab"
                  role="tab"
                  aria-controls="reviews-content"
                  aria-selected="false"
                  className="tab"
                >
                  Reviews (3)
                </button>
              </div>
              <div className="mt-8">
                <div id="description-content" role="tabpanel" aria-labelledby="description-tab" className="tab-content">
                  <div className="flex flex-col lg:flex-row lg:space-x-8">
                    <div className="w-full lg:w-1/2">
                      <h3 className="text-xl font-semibold mb-2">
                        With the new fashion trends and all the available shopping options, you can order your clothes
                        online and make money without even leaving your house.
                      </h3>
                      <p className="mb-4">
                        These days, you can take your own inspiration and create something new for yourself. All you
                        need to do is read books and magazines about fashion, watch videos on YouTube, keep yourself
                        updated on social media, and, of course, shop online!
                      </p>
                    </div>
                    <div className="w-full lg:w-1/4">
                      <h3 className="text-xl font-semibold mb-5">Material & Washing</h3>
                      <p className="mb-2 pb-2 border-b border-gray-line">
                        Material: <span className="font-semibold">100% cotton</span>
                      </p>
                      <p className="mb-2 pb-2 border-b border-gray-line">
                        Fabric: <span className="font-semibold">Soft jersey</span>
                      </p>
                      <p className="mb-2">
                        Care instructions:{' '}
                        <span className="font-semibold">
                          Machine wash at 30°C, do not tumble dry, iron on low heat, do not bleach
                        </span>
                      </p>
                    </div>
                    <div className="w-full lg:w-1/4">
                      <h3 className="text-xl font-semibold mb-5">Size & Shape</h3>
                      <p className="mb-2 pb-2 border-b border-gray-line">
                        Model height:{' '}
                        <span className="font-semibold">Our model is 180 cm tall and is wearing size M</span>
                      </p>
                      <p className="mb-2 pb-2 border-b border-gray-line">
                        Fit: <span className="font-semibold">Regular</span>
                      </p>
                      <p className="mb-2 pb-2 border-b border-gray-line">
                        Length: <span className="font-semibold">Standard</span>
                      </p>
                      <p className="mb-2">
                        Sleeve length: <span className="font-semibold">Short sleeves</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  id="additional-info-content"
                  role="tabpanel"
                  aria-labelledby="additional-info-tab"
                  className="tab-content hidden"
                >
                  <p>Additional information about the product.</p>
                  <div className="flex flex-col space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Colors</h3>
                      <p className="text-base text-gray-700">
                        Available colors:
                        <a href="#" className="text-primary hover:underline">
                          Red
                        </a>
                        ,
                        <a href="#" className="text-primary hover:underline">
                          Blue
                        </a>
                        ,
                        <a href="#" className="text-primary hover:underline">
                          Green
                        </a>
                        ,
                        <a href="#" className="text-primary hover:underline">
                          Black
                        </a>
                        ,
                        <a href="#" className="text-primary hover:underline">
                          White
                        </a>
                        .
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Brand</h3>
                      <p className="text-base text-gray-700">
                        This t-shirt is made by
                        <a href="#" className="text-primary hover:underline">
                          Nike
                        </a>
                        .
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Material & Care</h3>
                      <p className="text-base text-gray-700">
                        Material: 100% Cotton
                        <br />
                        Care instructions: Machine wash at 40 °C, do not tumble dry, iron at medium temperature, do not
                        bleach.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  id="size-shape-content"
                  role="tabpanel"
                  aria-labelledby="size-shape-tab"
                  className="tab-content hidden"
                >
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr>
                          <th className="px-6 py-3 border-b border-gray-line bg-gray-100 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                            Size
                          </th>
                          <th className="px-6 py-3 border-b border-gray-line bg-gray-100 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                            Chest (inches)
                          </th>
                          <th className="px-6 py-3 border-b border-gray-line bg-gray-100 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                            Waist (inches)
                          </th>
                          <th className="px-6 py-3 border-b border-gray-line bg-gray-100 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                            Sleeve Length (inches)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                            Small
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                            34-36
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                            28-30
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                            32-33
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                            Medium
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                            38-40
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                            32-34
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                            33-34
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                            Large
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                            42-44
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                            36-38
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                            34-35
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                            X-Large
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                            46-48
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                            40-42
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                            35-36
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div id="reviews-content" role="tabpanel" aria-labelledby="reviews-tab" className="tab-content hidden">
                  {/* Reviews List */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
                    <div id="reviews-list">
                      {/* Review 1 */}
                      <div className="py-4">
                        <div className="flex items-center mb-2">
                          <span className="text-lg font-semibold text-gray-700">John Doe</span>
                          <span className="ml-2 text-primary">★★★★★</span>
                        </div>
                        <p>
                          Great quality! Fits perfectly and the material feels premium. Highly recommend this t-shirt.
                        </p>
                      </div>
                      {/* Review 2 */}
                      <div className="border-t border-gray-line py-4">
                        <div className="flex items-center mb-2">
                          <span className="text-lg font-semibold text-gray-700">Jane Smith</span>
                          <span className="ml-2 text-primary">★★★★☆</span>
                        </div>
                        <p>
                          I love the design and the fabric is very comfortable. However, I wish it came in more colors.
                        </p>
                      </div>
                      {/* Review 3 */}
                      <div className="border-t border-gray-line py-4">
                        <div className="flex items-center mb-2">
                          <span className="text-lg font-semibold text-gray-700">Alice Johnson</span>
                          <span className="ml-2 text-primary">★★★★★</span>
                        </div>
                        <p>Excellent t-shirt! The size is perfect and it looks great. Will definitely buy again.</p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Review Form */}
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
                    <form id="review-form" className="space-y-4">
                      <div className="space-y-4 md:flex md:space-x-4 md:space-y-0">
                        <div className="md:flex-1">
                          <label htmlFor="review-name" className="block text-sm font-medium text-gray-700">
                            Name
                          </label>
                          <input
                            type="text"
                            id="review-name"
                            name="review-name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                          />
                        </div>
                        <div className="md:flex-1">
                          <label htmlFor="review-email" className="block text-sm font-medium text-gray-700">
                            Email
                          </label>
                          <input
                            type="email"
                            id="review-email"
                            name="review-email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                          />
                        </div>
                        <div className="md:flex-1">
                          <label htmlFor="review-rating" className="block text-sm font-medium text-gray-700">
                            Rating
                          </label>
                          <select
                            id="review-rating"
                            name="review-rating"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                          >
                            <option value="5">★★★★★</option>
                            <option value="4">★★★★☆</option>
                            <option value="3">★★★☆☆</option>
                            <option value="2">★★☆☆☆</option>
                            <option value="1">★☆☆☆☆</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="review-text" className="block text-sm font-medium text-gray-700">
                          Review
                        </label>
                        <textarea
                          id="review-text"
                          name="review-text"
                          rows={4}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        ></textarea>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="bg-primary hover:bg-transparent border border-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full focus:outline-none"
                        >
                          Submit Review
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductsTeaserList headline="Latest products"></ProductsTeaserList>
    </>
  );
};
