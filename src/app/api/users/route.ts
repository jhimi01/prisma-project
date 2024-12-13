// app/api/users/route.js
import prisma from "@/lib/db";  // Assuming you have your Prisma setup in `lib/db.js`


  export async function GET(req: any) {
    // Fetch users (or a specific user)
    const users = await prisma.signupuser.findMany();
    return new Response(JSON.stringify(users), { status: 200 });
  }
  
