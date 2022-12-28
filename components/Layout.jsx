import Image from "next/image";
import Link from "next/link";
import SidebarMenu from "./sidebarMenu";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BreadcrumbMenu from "./breadcrumbMenu";
const Layout = ({ children }) => {
  const router = useRouter();
  const [breadcrumb, setBreadcrumb] = useState();
  useEffect(() => {
    const bread = router.pathname.split("/");
    bread.shift();
    setBreadcrumb(bread);
  }, [router.pathname]);
  return (
    <div className="flex h-screen w-screen items-center bg-gray-50">
      <aside className="w-72" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-white rounded-r-2xl ring-1 ring-slate-200 shadow-lg dark:bg-gray-800">
          <div className="flex items-center ml-2 mb-2 gap-2">
            <Image
              src="/upn.png"
              width={40}
              height={40}
              className="w-auto h-auto"
              alt="logo-upn"
            />
            <span className="text-xl font-semibold dark:text-white">
              Statkom C081
            </span>
          </div>
          <div className="items-center ml-2 mb-5 gap-2">
            <p className="text-sm font-semibold dark:text-white">
              Muhamad Fihris Aldama
            </p>
            <p className="text-xs font-normal dark:text-white">21081010110</p>
          </div>
          <ul className="space-y-2">
            <li>
              <SidebarMenu href="/">
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span className="ml-3 text-sm">Home</span>
              </SidebarMenu>
            </li>
            <li>
              <SidebarMenu href="/dashboard">
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
                <span className="ml-3 text-sm">Dashboard</span>
              </SidebarMenu>
            </li>
            <li>
              <SidebarMenu href="/dashboard/latih">
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                  />
                </svg>
                <span className="flex-1 ml-3 text-sm">Data Latih</span>
                <span className="inline-flex justify-center items-center px-2 py-1 ml-3 text-xs font-bold text-blue-800 bg-blue-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  24
                </span>
              </SidebarMenu>
            </li>
            <li>
              <SidebarMenu href="/dashboard/testing">
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                <span className="flex-1 ml-3 text-sm">Data Testing</span>
                <span className="inline-flex justify-center items-center px-2 py-1 ml-3  text-xs font-bold text-green-600 bg-green-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                  6
                </span>
              </SidebarMenu>
            </li>

            <li>
              <SidebarMenu href="/auth/login">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 text-sm">Sign In</span>
              </SidebarMenu>
            </li>
            <li>
              <SidebarMenu href="/auth/signup">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 text-sm">Sign Up</span>
              </SidebarMenu>
            </li>
          </ul>
        </div>
      </aside>

      <main className="flex flex-col items-center w-full h-full overflow-x-scroll">
        <nav
          className="absolute flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </Link>
            </li>
            {breadcrumb &&
              breadcrumb.map((menu, id, arr) => (
                <BreadcrumbMenu
                  key={id}
                  text={menu}
                  last={arr.length - 1 == id ? true : false}
                />
              ))}
          </ol>
        </nav>
        {children}
      </main>
    </div>
  );
};

export default Layout;
