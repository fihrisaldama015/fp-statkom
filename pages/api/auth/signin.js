import {
  db,
  signInAuthUserWithEmailAndPassword,
} from "../../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import NextCors from "nextjs-cors";
import jwt from "jsonwebtoken";

const signIn = async ({ email, password, ...additionalInformation }) => {
  if (!email) throw { err_msg: "email field must have a value" };

  const emailDomain = email.split("@")[1];
  const npm = email.split("@")[0];
  if (emailDomain !== "student.upnjatim.ac.id")
    throw { message: "Harus Email UPN" };
  else if (!password) throw { err_msg: "password Harus Diisi" };

  const userRef = doc(db, "users", `${npm}`);
  const userSnapshot = await getDoc(userRef);
  if (userSnapshot.exists()) {
    return { token: jwt.sign(userSnapshot.data(), "test") };
  }

  await signInAuthUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("user logged in !");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      throw error;
    });

  const data = {
    email,
    ...additionalInformation,
  };

  const token = jwt.sign(data, "test");
  return { token };
};

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  if (req.method === "POST") {
    if (req?.body) {
      try {
        const newUser = await signIn(req.body);
        res.status(200).json(newUser);
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
