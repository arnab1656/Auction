"use client";

import React, { useState } from "react";
import { Button, Input } from "ui";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Your login logic here
    if (username && password) {
      // Redirect to dashboard if login successful

      console.log("{username, password,}");
      console.log({
        username,
        password,
      });

      await signIn("credentials", {
        email: username,
        password,
      });

      // router.push("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="bg-gradient-to-r from-rose-200 to-rose-400 min-h-screen flex items-center justify-center">
      <div className="w-[400px] bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-center mb-6">Login Page</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block mb-2 text-lg font-medium"
            >
              Email
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:border-rose-500 transition duration-300 ease-in-out focus:outline-none border-gray-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-lg font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:border-rose-500 transition duration-300 ease-in-out focus:outline-none border-gray-300"
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-rose-500 text-white py-3 rounded-md hover:bg-rose-600 transition duration-300 ease-in-out"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
