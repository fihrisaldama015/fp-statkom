import NextCors from "nextjs-cors";

const DATA = [
  {
    id: 1,
    nama: "FAJAR KURNIA",
    ppkn: "K",
    bindo: "S",
    bing: "K",
    mat: "K",
    bekerja: "Y",
    organisasi: "Y",
    jarak: "JAUH",
    prediction: "K",
  },
  {
    id: 2,
    nama: "AHMAD FAUZI HIKAMI",
    ppkn: "S",
    bindo: "C",
    bing: "K",
    mat: "K",
    bekerja: "T",
    organisasi: "T",
    jarak: "JAUH",
    prediction: "K",
  },
  {
    id: 3,
    nama: "RINA NURAE NI",
    ppkn: "S",
    bindo: "C",
    bing: "K",
    mat: "K",
    bekerja: "T",
    organisasi: "T",
    jarak: "JAUH",
    prediction: "R",
  },
  {
    id: 4,
    nama: "DEDEN HERMANSYAH",
    ppkn: "S",
    bindo: "S",
    bing: "K",
    mat: "K",
    bekerja: "Y",
    organisasi: "Y",
    jarak: "DEKAT",
    prediction: "R",
  },
  {
    id: 5,
    nama: "ANNISA",
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
    id: 6,
    nama: "CITRA RETNO",
    ppkn: "S",
    bindo: "C",
    bing: "K",
    mat: "K",
    bekerja: "T",
    organisasi: "T",
    jarak: "DEKAT",
    prediction: "R",
  },
];

const getAllDataUji = async () => {
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
      const prediction = await getAllDataUji();
      res.status(200).json(prediction);
    } catch (error) {
      res.status(401).json(error);
    }
  } else {
    res.status(200).json({ method: req.method });
  }
}
