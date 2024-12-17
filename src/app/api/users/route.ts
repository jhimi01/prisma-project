// app/api/users/route.js
import prisma from "@/lib/db";  // Assuming you have your Prisma setup in `lib/db.js`
import { objectEnumNames } from "@prisma/client/runtime/react-native.js";


  export async function GET(req: any) {
  
    try{
      const users = await prisma.signupuser.findMany();
      return new Response(JSON.stringify(users));
    } catch (err) {
      console.error("error fetching users:", err)
      return new Response(JSON.stringify({ error: "Failed to fetch users" }), { status: 500 });

    }
  }
  
