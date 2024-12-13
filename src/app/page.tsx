
import Table from "@/components/Table";
import getUsers from "@/hooks/getUsers";
import { useAuth } from "@/hooks/useAuth";
import prisma from "@/lib/db";

export default async function Home() {
  // const users = await prisma.signupuser.findMany();



  return (
    <main className="text-center w-10/12 mx-auto font-semibold text-2xl">
      <div>
        <Table />
      </div>
    </main>
  );
}
