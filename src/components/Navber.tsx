"use client";
import { useCookie } from "@/hooks/useCookie";
import Link from "next/link";
import React from "react";

export default function Navber() {
  const getCookie = useCookie<string>({
    key: "authToken",
    defaultValue: "",
  });
  const getToken = getCookie.cookieValue;

  // console.log("getCookiefgfd", getToken);
  const removeCookie = useCookie<string>({
    key: "authToken",
    defaultValue: "",
  });
  const handleLogOut = () => {
    if (getCookie || getToken !== "") {
      removeCookie.setCookie("");
      alert("Logged out successfully");
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
          <Link href="/login">Login</Link>
          <button onClick={() => handleLogOut()}>Logout</button>
        </ul>
      </div>
    </div>
  );
}
