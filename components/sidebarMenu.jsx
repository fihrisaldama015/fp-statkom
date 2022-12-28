import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const SidebarMenu = ({ children, href }) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`flex items-center p-2 text-base text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${
        router.pathname == href
          ? "bg-gray-100 font-semibold"
          : "bg-transparent font-normal"
      }`}
    >
      {children}
    </Link>
  );
};

export default SidebarMenu;
