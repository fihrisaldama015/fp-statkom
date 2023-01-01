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
          <button className="text-white font-bold bg-gradient-to-r to-sky-500 from-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Login
          </button>
        </Link>
      </div>
    );
  return (
    <div className="flex flex-col gap-3 h-full items-center justify-center">
      <h1 className="mb-12 text-4xl font-bold">Dashboard</h1>
      <div className="grid md:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-4">
        <div className="p-3 h-32 flex flex-col justify-between bg-sky-300 rounded-xl text-sky-900">
          <span className="text-4xl font-black">24</span>
          <p className="font-medium">Data Latih</p>
        </div>
        <div className="p-3 h-32 flex flex-col justify-between bg-amber-300 rounded-xl text-amber-900">
          <span className="text-4xl font-black">6</span>
          <p className="font-medium">Data Uji</p>
        </div>
        <div className="p-3 h-32 flex flex-col justify-between bg-emerald-300 rounded-xl text-emerald-900">
          <span className="text-4xl font-black">83.33%</span>
          <p className="font-medium">Akurasi</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
