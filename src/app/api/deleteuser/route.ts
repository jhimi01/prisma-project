import prisma from "@/lib/db";

export async function DELETE(req: any) {
  try {
    const { id } = await req.json();

    // check if the user exists
    const existingUser = await prisma.signupuser.findUnique({
      where: { id: id },
    });

    if (!existingUser) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    // delete the user
    await prisma.signupuser.delete({
      where: { id: id },
    });

    return new Response(
      JSON.stringify({ message: "User deleted successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Delete error:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
