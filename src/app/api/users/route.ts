// app/api/users/route.js
import prisma from "@/lib/db";  // Assuming you have your Prisma setup in `lib/db.js`

export async function POST(req:any) {
  // Extract data from the request body
  const { email, name, username, description } = await req.json();

  try {
    // Use Prisma to create a new user
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        username,
        description,
      },
    });

    // Return the created user as a response
    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response('Error creating user', { status: 500 });
  }
}