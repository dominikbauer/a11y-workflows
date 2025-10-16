export const LoginPage = () => {
  return (
    <>
      <section id="register-login-page" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/2 bg-white rounded-lg shadow-md p-4 md:p-10 md:m-10">
              <h2 className="text-2xl font-semibold mb-4">Login</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="login-email" className="block ">
                    Email
                  </label>
                  <input
                    type="email"
                    id="login-email"
                    className="w-full px-3 py-1 border  rounded-full focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="login-password" className="block ">
                    Password
                  </label>
                  <input
                    type="password"
                    id="login-password"
                    className="w-full px-3 py-1 border  rounded-full focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div className="flex items-center mb-3">
                  <input type="checkbox" id="remember-me" className="mr-2" />
                  <label htmlFor="remember-me" className="">
                    Remember Me
                  </label>
                </div>
                <div className="mb-3">
                  <a href="/" className="text-primary hover:underline">
                    Forgot Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white border border-primary hover:bg-transparent hover:text-primary py-2 px-3 rounded-full w-full"
                >
                  Login
                </button>
              </form>
            </div>
            <div className="md:w-1/2 bg-white rounded-lg shadow-md p-4 md:p-10 md:m-10">
              <h2 className="text-2xl font-semibold mb-4">Register</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="register-email" className="block ">
                    Email
                  </label>
                  <input
                    type="email"
                    id="register-email"
                    className="w-full px-3 py-1 border focus:border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="register-password" className="block ">
                    Password
                  </label>
                  <input
                    type="password"
                    id="register-password"
                    className="w-full px-3 py-1 border focus:border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="register-confirm-password" className="block ">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="register-confirm-password"
                    className="w-full px-3 py-1 border focus:border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white border border-primary hover:bg-transparent hover:text-primary py-2 px-3 rounded-full w-full"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
