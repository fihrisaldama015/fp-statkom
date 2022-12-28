import cookieCutter from "cookie-cutter";
import Link from "next/link";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    const token = cookieCutter.get("token") || null;
    if (token) setLogin(true);
  }, []);
  if (!login)
    return (
      <div className="flex flex-col gap-3 h-full items-center justify-center">
        <h1>Login required to Open Dashboard</h1>
        <Link href="/auth/login">
          <button className="text-white bg-gradient-to-r to-sky-500 from-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Login
          </button>
        </Link>
      </div>
    );
  return (
    <div className="flex flex-col gap-3 h-full items-center justify-center">
      Dashboard
    </div>
  );
};

export default Dashboard;
