import Image from "next/image";
import registerImage from "../../../public/Animation/register.svg";
import Link from "next/link";

const RegistrationPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-White">
      <div className="flex flex-col md:flex-row justify-center items-center bg-white rounded-lg w-full max-w-4xl p-6">
        {/* Left Section - Image */}
        <div className="md:w-1/2 text-center mb-6 md:mb-0">
          <Image
            src={registerImage}
            alt="Register Illustration"
            className="mx-auto w-3/4 md:w-full max-w-md"
          />
          <h2 className="text-3xl font-bold text-gray-800 mt-6">
            Create an Account!
          </h2>
          <p className="text-gray-600 mt-2">
            Join us to access amazing features.
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/2 px-4">
          <form>
            <div className="mb-4">
              <label
                htmlFor="fullname"
                className="block text-gray-700 font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 shadow-lg"
            >
              Register
            </button>
          </form>
          <p className="text-gray-600 text-center mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-500 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
