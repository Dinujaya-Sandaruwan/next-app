"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-lg font-semibold">
          BrandName
        </a>
        <div>
          <Link
            href="/users"
            className="px-3 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            Users
          </Link>
          <Link
            href=""
            className="px-3 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            Services
          </Link>

          <button onClick={() => signIn("google")}>Sign in with Google</button>
          {status === "loading" && <span>Loading...</span>}
          {status === "unauthenticated" && (
            <Link
              href="/api/auth/signin"
              className="px-3 py-2 rounded hover:bg-gray-700 transition-colors"
            >
              Sign In
            </Link>
          )}
          {status === "authenticated" && (
            <span>
              {session?.user!.name}{" "}
              <Link href="/api/auth/signout?callbackUrl=/goodbye">
                Sign Out
              </Link>
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
