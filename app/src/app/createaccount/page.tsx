"use client";
import React, { useState } from "react";
import Modal from "./modal";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required");
      setIsErrorModalOpen(true);
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsErrorModalOpen(true);
      return;
    }
    // Perform your create account logic here
  };

  return (
    <div className="bg-gradient-to-r from-rose-200 to-rose-400 min-h-screen flex items-center justify-center">
      <div className="w-[500px] mx-auto bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Create Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block mb-1 text-lg font-medium"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-lg font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-lg font-medium"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-1 text-lg font-medium"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
              placeholder="Confirm your password"
            />
          </div>
          {/* {error && <p className="text-red-500">{error}</p>} */}
          <button
            type="submit"
            className="w-full bg-rose-500 text-white py-2 rounded-md hover:hover:bg-rose-600  transition-colors duration-300"
          >
            Create Account
          </button>
        </form>
      </div>
      <Modal
        isOpen={isErrorModalOpen}
        onClose={() => setIsErrorModalOpen(false)}
      >
        <p className="text-red-500">{error}</p>
      </Modal>
    </div>
  );
};

export default CreateAccount;
