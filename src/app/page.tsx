import prisma from "@/lib/db";

export default async function Home() {
  const users = await prisma.user.findMany()

  console.log(users);

  return (
    <main className="text-center my-10 font-semibold text-2xl">
      Hello World
      <div>
       <h3> users {users.length}</h3>
       <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
