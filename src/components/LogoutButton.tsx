"use client";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="bg-gray-300 py-2 px-4 ml-2 rounded-md inline-flex gap-2 items-center cursor-pointer"
    >
      Logout
    </button>
  );
}
