import React, { useState } from 'react';

const AccountCreation = ({ onCreateAccount }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


  const handleFormSubmit = (e) => {
    e.preventDefault();

    onCreateAccount({ username, password, email, phone });

    alert("Your account has been successfully created..")
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Account Creation</h2>
      <form onSubmit={handleFormSubmit} className="max-w-md mx-auto mt-4">
        <label className="block mb-2 text-lg font-bold text-gray-700" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border-b-2 border-red-200 outline-0 rounded-md"
          required
        />

        <label className="block mt-4 mb-2 text-lg font-bold text-gray-700" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border-b-2 border-red-200 outline-0 rounded-md"
          required
        />
        <label className="block mt-4 mb-2 text-lg font-bold text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border-b-2 rounded-md outline-0 border-red-200"
          required
        />
        <label className="block mt-4 mb-2 text-lg font-bold text-gray-700 outline-0" htmlFor="phone">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-2 border-b-2 border-red-200 outline-0 rounded-md"
          required
        />

        <button type="submit" className="mt-4 bg-red-500 font-medium text-white px-4 py-2 rounded ml-40">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default AccountCreation;
