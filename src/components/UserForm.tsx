'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const UserForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter()

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    // Prepare the data to send in the POST request
    const userData = { email, name, username, description };

    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (res.ok) {
        alert('User created successfully!');
        router.push('/')
      } else {
        alert('Error creating user');
      }
    } catch (error) {
      alert('Error submitting the form');
      console.error(error);
    }
  };

  return (
   <div className='w-9/12 mx-auto my-5'>
    <h2 className='text-center text-3xl font-semibold my-4'>Add users</h2>
     <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-lg">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="name" className="block text-lg">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
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
        <label htmlFor="description" className="block text-lg">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="border p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4">Submit</button>
    </form>
   </div>
  );
};

export default UserForm;
