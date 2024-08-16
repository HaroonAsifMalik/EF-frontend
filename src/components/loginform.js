
export function LoginForm() {
    return (
      <div className="container mx-auto p-6 h-screen flex justify-center items-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Login To Your Account</h2>
          <form className="flex flex-col gap-4">
            <input
              placeholder="E-mail"
              type="email"
              className="border focus:outline-orange-500  t rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition duration-200"
            />
            <input
              placeholder="Password"
              type="password"
              className="border focus:outline-orange-500  t rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition duration-200"
            />
            <button className="mt-4 bg-tertiary bg-orange-300 hover:bg-orange-500 text-primary-dark font-bold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105">
              Login
            </button>
            <p className="text-sm text-gray-600 text-center mt-4">
              Don't have an account?{' '}
              <a href="/register" className="text-tertiary hover:text-secondary transition duration-200 underline">
                <strong>Register</strong>
              </a>
            </p>
          </form>
        </div>
      </div>
    );
  }
  