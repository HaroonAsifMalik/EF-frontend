
export function RegisterForm() {
    return (
  
      <div className="container mx-auto p-6 h-screen flex justify-center items-center ">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Create an Account</h2>
          <form className="flex flex-col gap-4">
            <input
              placeholder="Name"
              type="text"
              className="border  rounded-lg px-4 py-3 focus:outline-none focus:outline-orange-500   transition duration-200"
              required
            />
            <input
              placeholder="Email"
              type="email"
              className="border border-tertiary rounded-lg px-4 py-3 focus:outline-none focus:outline-orange-500   transition duration-200"
              required
            />
            <input
              placeholder="Password"
              type="password"
              className="border border-tertiary rounded-lg px-4 py-3 focus:outline-none focus:outline-orange-500  transition duration-200"
              required
            />
            <input
              placeholder="Confirm Password"
              type="password"
              className="border border-tertiary rounded-lg px-4 py-3 focus:outline-none focus:outline-orange-500   transition duration-200"
              required
            />
            <button className="mt-4 bg-tertiary hover:bg-secondary bg-orange-300 hover:bg-orange-500  font-bold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105">
              Register
            </button>
            <p className="text-sm text-gray-600 text-center mt-4">
              Already have an account?{' '}
              <a href="/Login" className="text-tertiary hover:text-secondary transition duration-200 underline">
                <strong>Login</strong>
              </a>
            </p>
          </form>
        </div>
      </div>
    );
  }
  
  export default RegisterForm;