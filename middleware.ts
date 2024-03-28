import { NextRequest, NextResponse } from "next/server";
import middleware from "next-auth/middleware";

export const config = {
  // Only match requests to the /users path
  // ['/users/:id*'] zero or more
  // ['/users/:id+'] one or more
  // ['/users/:id?'] zero or one
  matcher: [],
};

export default middleware;

// export function middleware(request: NextRequest) {
//   console.log("Samantha");
// }
