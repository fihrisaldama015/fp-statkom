import axios from "axios";
import cookieCutter from "cookie-cutter";
import Link from "next/link";
import { useEffect, useState } from "react";

const Testing = () => {
  const [dataTesting, setDataTesting] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [login, setLogin] = useState(false);
  useEffect(() => {
    const token = cookieCutter.get("token") || null;
    if (token) setLogin(true);
    (async () => {
      try {
        const { data } = await axios.get("/api/uji");
        setDataTesting(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  if (!login)
    return (
      <div className="flex flex-col gap-3 h-full items-center justify-center">
        <h1>Login required to Open Data Uji</h1>
        <Link href="/auth/login">
          <button className="text-white font-bold bg-gradient-to-r to-sky-500 from-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Login
          </button>
        </Link>
      </div>
    );

  return (
    <div className="my-16 px-6 flex flex-col w-full h-full justify-center gap-6">
      <h1 className="text-2xl font-bold">Data Uji</h1>
      <div className="relative shadow-md rounded-lg overflow-auto">
        <table className="text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
            <tr>
              <th scope="col" className="py-3 px-6">
                Id Uji
              </th>
              <th scope="col" className="py-3 px-6">
                Nama Calon
              </th>
              <th scope="col" className="py-3 px-6">
                Pancasila
              </th>
              <th scope="col" className="py-3 px-6">
                B. Indo
              </th>
              <th scope="col" className="py-3 px-6">
                B. Ing
              </th>
              <th scope="col" className="py-3 px-6">
                Matematika
              </th>
              <th scope="col" className="py-3 px-6">
                Bekerja
              </th>
              <th scope="col" className="py-3 px-6">
                Organisasi
              </th>
              <th scope="col" className="py-3 px-6">
                Jarak
              </th>
              <th scope="col" className="py-3 px-6">
                Hasil
              </th>
            </tr>
          </thead>
          <tbody>
            {!isLoading
              ? dataTesting.map((data, id) => (
                  <tr
                    key={id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="py-4 px-6">{data.id}</td>
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {data.nama}
                    </td>
                    <td className="py-4 px-6">{data.ppkn}</td>
                    <td className="py-4 px-6">{data.bindo}</td>
                    <td className="py-4 px-6">{data.bing}</td>
                    <td className="py-4 px-6">{data.mat}</td>
                    <td className="py-4 px-6">{data.bekerja}</td>
                    <td className="py-4 px-6">{data.organisasi}</td>
                    <td className="py-4 px-6">{data.jarak}</td>
                    <td className="py-4 px-6">{data.prediction}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Testing;
