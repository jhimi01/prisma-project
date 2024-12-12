import Table from "@/components/Table";
import { useAuth } from "@/hooks/useAuth";
import prisma from "@/lib/db";

export default async function Home() {
  const users = await prisma.signupuser.findMany();

  console.log(users);
  useAuth();

  return (
    <main className="text-center w-10/12 mx-auto font-semibold text-2xl">
      <div>
        <h3 className="my-5"> users {users.length}</h3>
        <Table users={users} />
      </div>
    </main>
  );
}
