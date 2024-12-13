"use client";
import useUsers from "@/hooks/getUsers";
import { useCookie } from "@/hooks/useCookie";
import { Trash2 } from "lucide-react";
import React from "react";

export default function Table() {
  const { users } = useUsers();
  const removeCookie = useCookie<string>({
    key: "authToken",
    defaultValue: "",
  });

  const handleDelete = async (id: any) => {
    try {
      const res = await fetch("api/deleteuser", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        alert("User deleted successfully");
        removeCookie.setCookie(""); // Clear cookie
      } else {
        const errorData = await res.json();
        alert(`Delete error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <h3 className="my-5"> users {users.length}</h3>
        <table className="table">
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
            {users.map((user, index) => (
              <tr key={user?.id}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.username}</td>
                <td>{user?.email}</td>
                {/* <td>{user?.created_at?.toLocaleString()}</td> */}
                <td>{user?.created_at ? new Date(user.created_at).toLocaleString() : "N/A"}</td>

                <td onClick={() => handleDelete(user?.id)}>
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
