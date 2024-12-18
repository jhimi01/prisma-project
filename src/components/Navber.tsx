"use client";
import { useCookie } from "@/hooks/useCookie";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function Navber() {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  const getCookie = useCookie<string>({
    key: "authToken",
    defaultValue: "",
  });
  const getToken = getCookie.cookieValue;
  // console.log(getToken === "");

  // console.log("getCookiefgfd", getToken);
  const removeCookie = useCookie<string>({
    key: "authToken",
    defaultValue: "",
  });

  const handleLogOut = () => {
    if (getCookie || getToken !== "") {
      removeCookie.setCookie("");
      router.push("/login");
      if (pathname == "/login") {
        alert("Logged out successfully");
      }
    } else {
      console.log("No cookie found");
      alert("No cookie found");
    }
  };
  return (
    <div className="navbar bg-base-100 mx-auto w-10/12">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal space-x-3 font-semibold underline px-1">
          <Link href="/">Home</Link>
          {getToken &&
            getToken ==
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJkNDdmMjBhLTdjMDMtNDAwMS1hNmIyLWY2ZDFlYjEyNGZlZiIsInVzZXJuYW1lIjoiamhpbWkiLCJlbWFpbCI6ImpoaW1pQGdtYWlsLmNvbSIsImlhdCI6MTczNDQ1MDU0OSwiZXhwIjoxNzM0NDU0MTQ5fQ.JUlSjrozeq-OSPEqrSx4kibckoo83EDvqHqVObo3134" && (
              <Link href="/login">Login</Link>
            )}

          <button onClick={() => handleLogOut()}>Logout</button>
        </ul>
      </div>
    </div>
  );
}
