'use client'
import { useCookie } from "@/hooks/useCookie";
import { Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";

interface User {
  id: string; // or number
  name: string;
  username: string;
  email: string;
  created_at?: Date;
}

interface TableProps {
  users: User[];
}

export default function Table({ users }: TableProps) {
const getCookie = useCookie<string>({
  key: "authToken",
  defaultValue: "",
});


console.log(getCookie)
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Started</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user?.id}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.username}</td>
                <td>{user?.email}</td>
                <td>{user?.created_at?.toLocaleString()}</td>
                <td>
                  <button>
                    <Trash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
