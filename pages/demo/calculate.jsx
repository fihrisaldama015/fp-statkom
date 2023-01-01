import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";

const CalculateTD = ({ children, colSpan = 1 }) => {
  return (
    <td className="text-center" colSpan={colSpan}>
      <pre className="py-1 px-2 bg-slate-100 rounded-md ring-1 ring-slate-300">
        {children}
      </pre>
    </td>
  );
};

const Calculate = () => {
  const [calculateData, setCalculateData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      router.query && setCalculateData(router.query);
      setIsLoading(false);
    };
    getData();
  }, [router]);
  return (
    <div className="my-24 md:p-16 p-6 h-auto w-full gap-6 flex flex-col items-center justify-center">
      <h1 className="mb-6 text-4xl font-bold">
        <span className="underline underline-offset-3 decoration-4 decoration-blue-400 dark:decoration-blue-600 ">
          Hasil Prediksi
        </span>
      </h1>
      <div className="w-full flex flex-col sm:p-12 p-6 gap-6 bg-white shadow-md rounded-xl ring-1 ring-slate-200 justify-center xs:items-center overflow-x-auto">
        {!isLoading ? (
          <h1 className="w-full text-center">
            <span
              className={`text-4xl font-bold py-1 px-3 shadow-md ring-2 rounded-xl ${
                calculateData.prediction == "Rekomendasi"
                  ? "bg-green-100  text-green-600 shadow-green-100 ring-green-200"
                  : "bg-red-100  text-red-600 shadow-red-100 ring-red-200"
              }`}
            >
              {calculateData.prediction}
            </span>
          </h1>
        ) : null}
        {!isLoading ? (
          <table cellPadding={10}>
            <thead>
              <tr>
                <th>Kurang</th>
                <th></th>
                <th>Rekomendasi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  className={`${
                    calculateData.prediction == "Kurang"
                      ? "sm:text-4xl text-2xl font-medium text-red-600"
                      : "sm:text-2xl text-xl text-slate-800"
                  }`}
                >
                  {parseFloat(calculateData.hitungK).toFixed(6)}
                </td>
                <td className="text-4xl font-normal">
                  {calculateData.prediction == "Rekomendasi" ? "<" : ">"}
                </td>
                <td
                  className={`${
                    calculateData.prediction == "Rekomendasi"
                      ? "sm:text-4xl text-2xl font-medium text-green-600"
                      : "sm:text-2xl text-xl text-slate-800"
                  }`}
                >
                  {parseFloat(calculateData.hitungR).toFixed(6)}
                </td>
              </tr>
            </tbody>
          </table>
        ) : null}
        {!isLoading ? (
          <div className="flex flex-wrap items-center gap-2">
            <p>Dapat disimpulkan </p>
            <p className="px-2 text-md font-medium bg-slate-100 rounded-md shadow-md ring-1 ring-slate-300">
              {calculateData.nama}
            </p>
            <p>memperoleh hasil</p>
            <p className="px-2 text-md font-medium bg-slate-100 rounded-md shadow-md ring-1 ring-slate-300">
              {calculateData.prediction}
            </p>{" "}
            <p>Untuk Penerimaan Mahasiswa.</p>
          </div>
        ) : null}
        <Link href="/demo">
          <button
            type="button"
            className="text-white bg-gradient-to-r to-sky-500 from-blue-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-lg px-4 py-2 text-center hover:translate-x-1 transition-all w-full"
          >
            Hitung Data Lain
          </button>
        </Link>
      </div>
      <h1 className="text-4xl font-bold">
        <span className="underline underline-offset-3 decoration-4 decoration-blue-400 dark:decoration-blue-600 ">
          Analisis
        </span>
      </h1>
      <div className="flex flex-col md:p-12 p-6 gap-6 w-full text-xs sm:text-sm md:text-md lg:text-lg bg-white shadow-md rounded-xl ring-1 ring-slate-200 justify-center overflow-x-auto">
        {!isLoading ? (
          <table cellPadding={8} className="relative w-full px-12">
            <thead>
              <tr>
                <th className="text-left">
                  <span>Atribut</span>
                </th>
                <th>Kelas</th>
                <th>Kurang</th>
                <th>Rekomendasi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>P. Pancasila</td>
                <CalculateTD>{calculateData.ppkn_input}</CalculateTD>
                <CalculateTD>
                  {parseFloat(calculateData.ppkn).toFixed(6)}
                </CalculateTD>
                <CalculateTD>
                  {parseFloat(calculateData.ppkn_R).toFixed(6)}
                </CalculateTD>
              </tr>
              <tr>
                <td>B. Indo</td>
                <CalculateTD>{calculateData.bindo_input}</CalculateTD>
                <CalculateTD>
                  {parseFloat(calculateData.bindo).toFixed(6)}
                </CalculateTD>
                <CalculateTD>
                  {parseFloat(calculateData.bindo_R).toFixed(6)}
                </CalculateTD>
              </tr>
              <tr>
                <td>B. Inggris</td>
                <CalculateTD>{calculateData.bing_input}</CalculateTD>
                <CalculateTD>
                  {parseFloat(calculateData.bing).toFixed(6)}
                </CalculateTD>
                <CalculateTD>
                  {parseFloat(calculateData.bing_R).toFixed(6)}
                </CalculateTD>
              </tr>
              <tr>
                <td>Matematika</td>
                <CalculateTD>{calculateData.mat_input}</CalculateTD>
                <CalculateTD>
                  {parseFloat(calculateData.mat).toFixed(6)}
                </CalculateTD>
                <CalculateTD>
                  {parseFloat(calculateData.mat_R).toFixed(6)}
                </CalculateTD>
              </tr>
              <tr>
                <td>Bekerja</td>
                <CalculateTD>{calculateData.bekerja_input}</CalculateTD>
                <CalculateTD>
                  {parseFloat(calculateData.bekerja).toFixed(6)}
                </CalculateTD>
                <CalculateTD>
                  {parseFloat(calculateData.bekerja_R).toFixed(6)}
                </CalculateTD>
              </tr>
              <tr>
                <td>Organisasi</td>
                <CalculateTD>{calculateData.organisasi_input}</CalculateTD>
                <CalculateTD>
                  {parseFloat(calculateData.organisasi).toFixed(6)}
                </CalculateTD>
                <CalculateTD>
                  {parseFloat(calculateData.organisasi_R).toFixed(6)}
                </CalculateTD>
              </tr>
              <tr>
                <td>Jarak</td>
                <CalculateTD>{calculateData.jarak_input}</CalculateTD>
                <CalculateTD>
                  {parseFloat(calculateData.jarak).toFixed(6)}
                </CalculateTD>
                <CalculateTD>
                  {parseFloat(calculateData.jarak_R).toFixed(6)}
                </CalculateTD>
              </tr>
              <tr>
                <td>P (Kurang)</td>
                <CalculateTD colSpan={3}>
                  7/24 = {parseFloat(calculateData.PKurang).toFixed(6)}
                </CalculateTD>
              </tr>
              <tr>
                <td>P (Rekomendasi)</td>
                <CalculateTD colSpan={3}>
                  17/24 = {parseFloat(calculateData.PRekomendasi).toFixed(6)}
                </CalculateTD>
              </tr>
              <tr>
                <td>
                  P (X | hasil = Kurang)*
                  <br />P (Kurang)
                </td>
                <CalculateTD colSpan={3}>
                  {parseFloat(calculateData.ppkn).toFixed(6)}*
                  {parseFloat(calculateData.bindo).toFixed(6)}*
                  {parseFloat(calculateData.bing).toFixed(6)}*
                  {parseFloat(calculateData.mat).toFixed(6)}*
                  <br />
                  {parseFloat(calculateData.bekerja).toFixed(6)}*
                  {parseFloat(calculateData.organisasi).toFixed(6)}*
                  {parseFloat(calculateData.jarak).toFixed(6)}*(
                  {parseFloat(calculateData.PKurang).toFixed(6)})
                  <br />= {parseFloat(calculateData.hitungK).toFixed(6)}
                </CalculateTD>
              </tr>
              <tr>
                <td>
                  P (X | hasil = Rekomendasi)*
                  <br />P (Rekomendasi)
                </td>
                <CalculateTD colSpan={3}>
                  {parseFloat(calculateData.ppkn_R).toFixed(6)}*
                  {parseFloat(calculateData.bindo_R).toFixed(6)}*
                  {parseFloat(calculateData.bing_R).toFixed(6)}*
                  {parseFloat(calculateData.mat_R).toFixed(6)}*
                  <br />
                  {parseFloat(calculateData.bekerja_R).toFixed(6)}*
                  {parseFloat(calculateData.organisasi_R).toFixed(6)}*
                  {parseFloat(calculateData.jarak_R).toFixed(6)}*(
                  {parseFloat(calculateData.PRekomendasi).toFixed(6)}) <br />=
                  {parseFloat(calculateData.hitungR).toFixed(6)}
                </CalculateTD>
              </tr>
              <tr>
                <td>Kesimpulan</td>
                <td colSpan={3}>
                  P(X|Kurang){" "}
                  {calculateData.prediction == "Rekomendasi" ? "<" : ">"}{" "}
                  P(X|Rekomendasi)
                </td>
              </tr>
            </tbody>
          </table>
        ) : null}
        <div className="text-left w-full">
          <p className="font-bold">NB:</p>
          <p>K (Kurang): 0-69</p>
          <p>S (Sedang):70-79</p>
          <p>C (Cukup): 80-89</p>
          <p>B (Baik):90-100</p>
          <p>Y (Ya)</p>
          <p>T (Tidak)</p>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
