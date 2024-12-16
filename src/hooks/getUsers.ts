
import { useState, useEffect } from "react";

type User = {
  id: string | number;
  name: string;
  username: string;
  email: string;
  created_at?: string; // Optional if it might be undefined
};

export default function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/users");
        const data = await response.json();
        setUsers(data);
        setUpdate(true);
      } catch (error) {
        console.error("Error fetching users:", error);
        setUpdate(false);
      }
    };
    fetchUsers();
  }, [update]); // Empty array to run only on component mount

  return { users, setUsers };
}
