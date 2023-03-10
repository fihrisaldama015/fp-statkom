import NextCors from "nextjs-cors";

const DATA = [
  {
    id: 1,
    nama: "DADANG MUHAIMIN",
    ppkn: "S",
    bindo: "B",
    bing: "K",
    mat: "S",
    bekerja: "Y",
    organisasi: "Y",
    jarak: "JAUH",
    prediction: "K",
  },
  {
    id: 2,
    nama: "FAJAR RENDI M.",
    ppkn: "S",
    bindo: "C",
    bing: "S",
    mat: "S",
    bekerja: "Y",
    organisasi: "Y",
    jarak: "JAUH",
    prediction: "K",
  },
  {
    id: 3,
    nama: "EDWIN DWITA MAS",
    ppkn: "S",
    bindo: "C",
    bing: "S",
    mat: "S",
    bekerja: "Y",
    organisasi: "T",
    jarak: "DEKAT",
    prediction: "R",
  },
  {
    id: 4,
    nama: "NOVA MENTARI",
    ppkn: "S",
    bindo: "S",
    bing: "K",
    mat: "S",
    bekerja: "T",
    organisasi: "T",
    jarak: "DEKAT",
    prediction: "R",
  },
  {
    id: 5,
    nama: "AYU LESTARI",
    ppkn: "S",
    bindo: "C",
    bing: "K",
    mat: "K",
    bekerja: "Y",
    organisasi: "Y",
    jarak: "DEKAT",
    prediction: "R",
  },
  {
    id: 6,
    nama: "SURYA GUSTIAWAN",
    ppkn: "S",
    bindo: "B",
    bing: "K",
    mat: "S",
    bekerja: "Y",
    organisasi: "Y",
    jarak: "SEDANG",
    prediction: "R",
  },
  {
    id: 7,
    nama: "INDRI INDRIANSYAH",
    ppkn: "S",
    bindo: "B",
    bing: "S",
    mat: "S",
    bekerja: "T",
    organisasi: "T",
    jarak: "SEDANG",
    prediction: "R",
  },
  {
    id: 8,
    nama: "MIA MARDIAH",
    ppkn: "C",
    bindo: "C",
    bing: "K",
    mat: "S",
    bekerja: "T",
    organisasi: "T",
    jarak: "JAUH",
    prediction: "R",
  },
  {
    id: 9,
    nama: "KUSNIA RTI",
    ppkn: "S",
    bindo: "C",
    bing: "K",
    mat: "S",
    bekerja: "T",
    organisasi: "T",
    jarak: "SEDANG",
    prediction: "R",
  },
  {
    id: 10,
    nama: "SONI MUHAMAD SIDIK",
    ppkn: "S",
    bindo: "C",
    bing: "S",
    mat: "S",
    bekerja: "Y",
    organisasi: "Y",
    jarak: "SEDANG",
    prediction: "R",
  },
  {
    id: 11,
    nama: "MUNAWAR SIDIK",
    ppkn: "C",
    bindo: "B",
    bing: "K",
    mat: "K",
    bekerja: "T",
    organisasi: "T",
    jarak: "JAUH",
    prediction: "K",
  },
  {
    id: 12,
    nama: "DEDE ALAMSYAH",
    ppkn: "S",
    bindo: "C",
    bing: "K",
    mat: "S",
    bekerja: "Y",
    organisasi: "Y",
    jarak: "JAUH",
    prediction: "R",
  },
  {
    id: 13,
    nama: "MUHAMMAD SHIDDIQ",
    ppkn: "C",
    bindo: "C",
    bing: "K",
    mat: "K",
    bekerja: "Y",
    organisasi: "T",
    jarak: "JAUH",
    prediction: "R",
  },
  {
    id: 14,
    nama: "TANTRI SUCI RACHMAWATI",
    ppkn: "S",
    bindo: "C",
    bing: "K",
    mat: "K",
    bekerja: "T",
    organisasi: "T",
    jarak: "SEDANG",
    prediction: "R",
  },
  {
    id: 15,
    nama: "MUMAN ABDUROHMAN",
    ppkn: "S",
    bindo: "S",
    bing: "S",
    mat: "S",
    bekerja: "T",
    organisasi: "T",
    jarak: "DEKAT",
    prediction: "K",
  },
  {
    id: 16,
    nama: "ELIT RAHMMA WATI",
    ppkn: "C",
    bindo: "C",
    bing: "K",
    mat: "K",
    bekerja: "T",
    organisasi: "Y",
    jarak: "DEKAT",
    prediction: "R",
  },
  {
    id: 17,
    nama: "DIAN SITI FADILA",
    ppkn: "S",
    bindo: "C",
    bing: "S",
    mat: "K",
    bekerja: "T",
    organisasi: "T",
    jarak: "SEDANG",
    prediction: "R",
  },
  {
    id: 18,
    nama: "DANI HANDIKA",
    ppkn: "C",
    bindo: "C",
    bing: "K",
    mat: "K",
    bekerja: "Y",
    organisasi: "T",
    jarak: "SEDANG",
    prediction: "K",
  },
  {
    id: 19,
    nama: "ASEP ISKANDAR",
    ppkn: "S",
    bindo: "C",
    bing: "K",
    mat: "K",
    bekerja: "T",
    organisasi: "T",
    jarak: "SEDANG",
    prediction: "R",
  },
  {
    id: 20,
    nama: "RAHAYU UTAMI",
    ppkn: "S",
    bindo: "C",
    bing: "S",
    mat: "S",
    bekerja: "T",
    organisasi: "Y",
    jarak: "DEKAT",
    prediction: "R",
  },
  {
    id: 21,
    nama: "POLA REKA NUR AISYAH",
    ppkn: "S",
    bindo: "C",
    bing: "K",
    mat: "K",
    bekerja: "T",
    organisasi: "Y",
    jarak: "DEKAT",
    prediction: "R",
  },
  {
    id: 22,
    nama: "PAUZEN",
    ppkn: "C",
    bindo: "C",
    bing: "K",
    mat: "K",
    bekerja: "Y",
    organisasi: "Y",
    jarak: "SEDANG",
    prediction: "R",
  },
  {
    id: 23,
    nama: "ADE ZAENAL MUTAQIN",
    ppkn: "S",
    bindo: "C",
    bing: "S",
    mat: "K",
    bekerja: "Y",
    organisasi: "T",
    jarak: "DEKAT",
    prediction: "K",
  },
  {
    id: 24,
    nama: "GINA MASRUROH",
    ppkn: "C",
    bindo: "C",
    bing: "K",
    mat: "K",
    bekerja: "T",
    organisasi: "T",
    jarak: "SEDANG",
    prediction: "K",
  },
];

const getAllDataLatih = async () => {
  const data = await DATA;
  return data;
};

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  if (req.method === "GET") {
    try {
      const prediction = await getAllDataLatih();
      res.status(200).json(prediction);
    } catch (error) {
      res.status(401).json(error);
    }
  } else {
    res.status(200).json({ method: req.method });
  }
}
