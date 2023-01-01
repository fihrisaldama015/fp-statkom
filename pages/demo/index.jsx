import DataDropdown from "../../components/dataDropdown";
import DataLabel from "../../components/dataLabel";
import DataInput from "../../components/dataInput";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const Demo = () => {
  const [nama, setNama] = useState();
  const [ppkn, setPpkn] = useState();
  const [bindo, setBindo] = useState();
  const [bing, setBing] = useState();
  const [mat, setMat] = useState();
  const [bekerja, setBekerja] = useState();
  const [organisasi, setOrganisasi] = useState();
  const [jarak, setJarak] = useState();
  const router = useRouter();

  const convertNilai = (nilai) => {
    if (nilai < 70 && nilai >= 0) return "K";
    else if (nilai < 80) return "S";
    else if (nilai < 90) return "C";
    else if (nilai <= 100) return "B";
    else return 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      ppkn,
      bindo,
      bing,
      mat,
      bekerja,
      organisasi,
      jarak,
    };
    try {
      const { data } = await axios.post("/api/calculate", body);
      console.log("data => ", data);
      const { hitungK, hitungR, prediction, PRekomendasi, PKurang } = data;
      const { ppkn, bindo, bing, mat, bekerja, organisasi, jarak } = data.K;
      const {
        ppkn: ppkn_R,
        bindo: bindo_R,
        bing: bing_R,
        mat: mat_R,
        bekerja: bekerja_R,
        organisasi: organisasi_R,
        jarak: jarak_R,
      } = data.R;
      const {
        ppkn: ppkn_input,
        bindo: bindo_input,
        bing: bing_input,
        mat: mat_input,
        bekerja: bekerja_input,
        organisasi: organisasi_input,
        jarak: jarak_input,
      } = data.input;
      // alert(data.prediction);
      router.push({
        pathname: "/demo/calculate",
        query: {
          nama,
          hitungK,
          hitungR,
          prediction,
          PRekomendasi,
          PKurang,
          ppkn,
          bindo,
          bing,
          mat,
          bekerja,
          organisasi,
          jarak,
          ppkn_R,
          bindo_R,
          bing_R,
          mat_R,
          bekerja_R,
          organisasi_R,
          jarak_R,
          ppkn_input,
          bindo_input,
          bing_input,
          mat_input,
          bekerja_input,
          organisasi_input,
          jarak_input,
        },
      });
    } catch (error) {
      console.log(error?.message || error);
    }
  };

  return (
    <div className="gap-3 flex sm:flex-row flex-col h-full w-full items-center justify-evenly overflow-scroll">
      <h1 className="mt-24 h-auto text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
        IPK Prediction
      </h1>
      <div className="p-6 sm:p-0 flex flex-col gap-3 h-full sm:w-1/2 w-full pb-6 justify-center">
        <div className="flex w-full justify-between">
          <DataLabel>Nama</DataLabel>
          <DataInput text="Masukkan Nama" change={(value) => setNama(value)} />
        </div>
        <div className="flex w-full justify-between">
          <DataLabel>Pancasila</DataLabel>
          <DataInput
            text="0-100"
            change={(value) => setPpkn(convertNilai(value))}
          />
        </div>
        <div className="flex w-full justify-between">
          <DataLabel>B. Indonesia</DataLabel>
          <DataInput
            text="0-100"
            change={(value) => setBindo(convertNilai(value))}
          />
        </div>
        <div className="flex w-full justify-between">
          <DataLabel>B. Inggris</DataLabel>
          <DataInput
            text="0-100"
            change={(value) => setBing(convertNilai(value))}
          />
        </div>
        <div className="flex w-full justify-between">
          <DataLabel>Matematika</DataLabel>
          <DataInput
            text="0-100"
            change={(value) => setMat(convertNilai(value))}
          />
        </div>
        <div className="flex w-full justify-between">
          <DataLabel>Status Bekerja</DataLabel>
          <DataDropdown change={(value) => setBekerja(value)}>
            <option defaultValue="-">Pilih</option>
            <option value="Y">Ya</option>
            <option value="T">Tidak</option>
          </DataDropdown>
        </div>
        <div className="flex w-full">
          <DataLabel>Keaktifan Organisasi</DataLabel>
          <DataDropdown change={(value) => setOrganisasi(value)}>
            <option defaultValue="">Pilih</option>
            <option value="Y">Ya</option>
            <option value="T">Tidak</option>
          </DataDropdown>
        </div>
        <div className="flex w-full">
          <DataLabel>Jarak</DataLabel>
          <DataDropdown change={(value) => setJarak(value)}>
            <option defaultValue="-">Pilih</option>
            <option value="DEKAT">DEKAT</option>
            <option value="SEDANG">SEDANG</option>
            <option value="JAUH">JAUH</option>
          </DataDropdown>
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="text-white bg-gradient-to-r to-sky-500 from-blue-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-lg px-4 py-2 text-center hover:translate-x-1 transition-all"
        >
          Hitung
        </button>
      </div>
    </div>
  );
};

export default Demo;
