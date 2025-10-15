export const Newsletter = () => {
  return (
    <section id="newsletter" data-testid="newsletter" className="py-6 lg:py-24 bg-white border-t border-gray-line">
      <div className="container mx-auto">
        <div className="flex flex-col items-center rounded-lg p-4 sm:p-0 ">
          <div className="mb-8">
            <h2 className="text-center text-xl font-bold sm:text-2xl lg:text-left lg:text-3xl">
              Join our newsletter and <span className="text-primary">get $50 discount</span> for your first order
            </h2>
          </div>
          <div className="flex flex-col items-center w-96 ">
            <form className="flex w-full gap-2">
              <input
                placeholder="Enter your email address"
                className="w-full flex-1 rounded-full px-3 py-2 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary border border-primary hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
