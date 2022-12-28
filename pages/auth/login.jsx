import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import cookieCutter from "cookie-cutter";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        email,
        password,
      };
      const { data } = await axios.post(
        "http://localhost:3000/api/auth/signin",
        body
      );
      cookieCutter.set("token", data.token);
      router.push("/dashboard");
    } catch (error) {
      console.log(error.response?.data.code || error);
    }
  };

  return (
    <div className="min-h-screen w-[100%] flex justify-center items-center bg-bl">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-xl shadow-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
            Login
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              autoComplete="true"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="example@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-gradient-to-r to-sky-500 from-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Belum Punya Akun?{" "}
            <Link
              href="/auth/signup"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Buat Akun
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
