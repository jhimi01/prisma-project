"use client"
import React, { useState } from 'react'

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e:any) => {
      e.preventDefault();
  
      const userData = { username, password  };
  
      try {
        const res = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        if (res.ok) {
          alert('User signed up successfully!');
        } else {
          alert('Error signing up');
        }
      } catch (error) {
        console.error('Error during sign up:', error);
        alert('Error during sign up');
      }
    };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-semibold mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

      <div>
        <label htmlFor="username" className="block text-lg">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-lg">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4">Sign Up</button>
    </form>
    </div>
  )
}
