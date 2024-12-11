import prisma from "@/lib/db";

export async function POST(req: any) {
  const { name, username, email, password } = await req.json();

  try {
    const newUser = await prisma.signupuser.create({
      data: {
        name,
        username,
        email,
        password,
      },
    });
  } catch (err) {}
}
