import Link from "next/link";
import React from "react";
import { options } from "../../../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
const menus = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: "i",
  },
  {
    name: "Users",
    url: "/users",
    icon: "u",
  },
];
const sidebar = async () => {
  const session = await getServerSession(options);

  return (
    <div className="p-2">
      {session ? (
        <div className="flex gap-2 items-center">
          <img
            src="https://leanbase.de/autoimg/uploads/w3200-h3200-c/grktmuu5gmdhwvnt4df7rsbs5uba4qqbwaven9g5.jpg"
            className="rounded-lg w-10"
            alt=""
          />
          <h1 className="text-bold">Hello Admin</h1>
        </div>
      ) : (
        <Link href="/api/auth/signin">Login</Link>
      )}

      <ul className="space-y-2 mt-10">
        {menus.map((e) => (
          <li key={e.url}>
            <Link
              href={e.url}
              className="block px-4 py-2 rounded hover:bg-gray-700 hover:text-white transition">
              {e.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default sidebar;
