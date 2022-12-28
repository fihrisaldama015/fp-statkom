import NextCors from "nextjs-cors";

const calculateIPK = async ({
  ppkn,
  bindo,
  bing,
  mat,
  bekerja,
  organisasi,
  jarak,
}) => {
  if (!ppkn) throw { err_msg: "ppkn field must have a value" };
  if (!bindo) throw { err_msg: "bindo field must have a value" };
  if (!bing) throw { err_msg: "bing field must have a value" };
  if (!mat) throw { err_msg: "mat field must have a value" };
  if (!bekerja) throw { err_msg: "bekerja field must have a value" };
  if (!organisasi) throw { err_msg: "organisasi field must have a value" };
  if (!jarak) throw { err_msg: "jarak field must have a value" };

  const KPerTotal = 7 / 24;
  const RPerTotal = 17 / 24;
  let K = {};
  let R = {};
  //Calculate PPKN
  if (ppkn == "S") {
    K.ppkn = 5 / 11;
    R.ppkn = 14 / 21;
  } else if (ppkn == "C") {
    K.ppkn = 4 / 11;
    R.ppkn = 5 / 21;
  } else if (ppkn == "B") {
    K.ppkn = 1 / 11;
    R.ppkn = 1 / 21;
  } else if (ppkn == "K") {
    K.ppkn = 1 / 11;
    R.ppkn = 1 / 21;
  }
  //Calculate BINDO
  if (bindo == "S") {
    K.bindo = 2 / 11;
    R.bindo = 2 / 21;
  } else if (bindo == "C") {
    K.bindo = 5 / 11;
    R.bindo = 15 / 21;
  } else if (bindo == "B") {
    K.bindo = 3 / 11;
    R.bindo = 3 / 21;
  } else if (bindo == "K") {
    K.bindo = 1 / 11;
    R.bindo = 1 / 21;
  }
  //Calculate BING
  if (bing == "K") {
    K.bing = 5 / 11;
    R.bing = 12 / 21;
  } else if (bing == "S") {
    K.bing = 4 / 11;
    R.bing = 7 / 21;
  } else if (bing == "B") {
    K.bing = 1 / 11;
    R.bing = 1 / 21;
  } else if (bing == "C") {
    K.bing = 1 / 11;
    R.bing = 1 / 21;
  }
  //Calculate MATH
  if (mat == "K") {
    K.mat = 5 / 11;
    R.mat = 10 / 21;
  } else if (mat == "S") {
    K.mat = 4 / 11;
    R.mat = 9 / 21;
  } else if (mat == "B") {
    K.mat = 1 / 11;
    R.mat = 1 / 21;
  } else if (mat == "C") {
    K.mat = 1 / 11;
    R.mat = 1 / 21;
  }
  //Calculate BEKERJA
  if (bekerja == "Y") {
    K.bekerja = 4 / 7;
    R.bekerja = 7 / 17;
  } else if (bekerja == "T") {
    K.bekerja = 3 / 7;
    R.bekerja = 10 / 17;
  }
  //Calculate ORGANISASI
  if (organisasi == "Y") {
    K.organisasi = 1 / 7;
    R.organisasi = 8 / 17;
  } else if (organisasi == "T") {
    K.organisasi = 6 / 7;
    R.organisasi = 9 / 17;
  }
  //Calculate JARAK
  if (jarak == "DEKAT") {
    K.jarak = 2 / 7;
    R.jarak = 6 / 17;
  } else if (jarak == "SEDANG") {
    K.jarak = 2 / 7;
    R.jarak = 8 / 17;
  } else if (jarak == "JAUH") {
    K.jarak = 3 / 7;
    R.jarak = 3 / 17;
  }

  const hitungK =
    K.ppkn *
    K.bindo *
    K.bing *
    K.mat *
    K.bekerja *
    K.organisasi *
    K.jarak *
    KPerTotal;
  const hitungR =
    R.ppkn *
    R.bindo *
    R.bing *
    R.mat *
    R.bekerja *
    R.organisasi *
    R.jarak *
    RPerTotal;

  const prediction = hitungK > hitungR ? "Kurang" : "Rekomendasi";

  return {
    prediction,
    K,
    R,
    hitungK,
    hitungR,
    input: { ppkn, bindo, bing, mat },
  };
};

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  //   const cookies = new Cookies(req, res);
  //   const tokenFromCookies = cookies.get("token");
  if (req.method === "POST") {
    if (req?.body) {
      try {
        const prediction = await calculateIPK(req.body);
        res.status(200).json(prediction);
      } catch (error) {
        res.status(401).json(error);
      }
    } else {
      res.status(400).json({ message: "Request Body is Required" });
    }
  } else {
    res.status(200).json({ method: req.method });
  }
}
