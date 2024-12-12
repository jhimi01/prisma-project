// 'use client'
import prisma from "@/lib/db";
import { Trash2 } from "lucide-react";

export default async function Home() {
  const users = await prisma.signupuser.findMany();

  console.log(users);

  // const handleDelete = (id: any) => {
  //   console.log(id);
  // };

  return (
    <main className="text-center w-10/12 mx-auto my-10 font-semibold text-2xl">
      Hello World
      <div>
        <h3> users {users.length}</h3>
        {/* <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name} - {user.email} / username-{user?.username}</li>
          ))}
        </ul> */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>User Name</th>
                <th>Favorite Color</th>
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
                  <td 
                  // onClick={() => handleDelete(user?.id)}
                  >
                   
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
    </main>
  );
}
