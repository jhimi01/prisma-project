import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // Retrieve the token from the cookies
  const token = req.cookies.get("authToken")?.value;

  // If no token is found, redirect to the login page
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Perform token validation if necessary
  // Example: JWT verification (optional)
  try {
    // Replace `verifyToken` with your token validation logic
    // Example: jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token is valid:", token);
  } catch (error) {
    console.error("Invalid token:", error);
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Allow the request to continue
  return NextResponse.next();
}

// Specify which paths should use this middleware
export const config = {
  matcher: ["/", "/addusers"],
};
