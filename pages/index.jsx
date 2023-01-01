import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex my-12 h-full w-full flex-col items-center justify-center">
      <Head>
        <title>FP STATKOM 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-full w-full sm:px-20 px-6 flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
          <span className="bg-blue-100 text-blue-600 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded-lg dark:bg-blue-200 ml-2">
            Final Project
          </span>{" "}
          Sistem Rekomendasi Penerimaan Mahasiswa Baru Menggunakan{" "}
          <span className="underline underline-offset-3 decoration-4 decoration-blue-400 dark:decoration-blue-600 ">
            Naïve Bayes{" "}
          </span>
          Classifier Di Institut Pendidikan Indonesia
        </h1>
        <p className="mb-3 md:px-24 sm:px-12 text-md font-normal text-gray-500 lg:text-lg dark:text-gray-400">
          Website ini dibuat untuk memenuhi final project dari mata kuliah
          Statistika Komputasi yang diampu oleh ibu Yisti Vita Via, S.ST.,
          M.Kom. Saya Muhamad FIhris Aldama NPM 21081010110
        </p>
        <p className="mb-12 md:px-24 sm:px-12 text-md font-normal text-gray-500 lg:text-lg dark:text-gray-400">
          Kualitas suatu perguruan tinggi dalam mencetak lulusan yang
          berkualitas ditentukan oleh calon mahasiswa yang masuk ke perguruan
          tinggi tersebut. Maka dibuatlah Sistem Rekomendasi yang akan membantu
          dalam proses seleksi perguruan tinggi untuk seleksi calon mahasiswa
          baru.
        </p>
        <Link href="/demo">
          <button
            type="button"
            className="text-white bg-gradient-to-r to-sky-500 from-blue-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-lg px-4 py-2 text-center mr-2 mb-2 hover:translate-x-1 transition-all"
          >
            Demo Project
          </button>
        </Link>
      </main>
    </div>
  );
};

export default Home;
