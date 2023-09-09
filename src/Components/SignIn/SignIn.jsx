import React from "react";

const SignIn = ({ onSignInClick }) => {
  return (
    <div className="max-w-md mx-auto mt-16 p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        <form action="">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            onClick={() => onSignInClick("home")}
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-700"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-center">
          Don't have an account?{" "}
          <p
            onClick={() => onSignInClick("signUp")}
            className="text-indigo-500 hover:underline cursor-pointer"
          >
            Sign Up
          </p>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
