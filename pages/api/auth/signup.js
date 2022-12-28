import { createAuthUserWithEmailAndPassword } from "../../../utils/firebase";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import NextCors from "nextjs-cors";
import jwt from "jsonwebtoken";

const signUp = async ({ email, password, ...additionalInformation }) => {
  if (!email) throw { err_msg: "email field must have a value" };

  const emailDomain = email.split("@")[1];
  const npm = email.split("@")[0];
  if (emailDomain !== "student.upnjatim.ac.id")
    throw { err_msg: "Harus Email UPN" };
  else if (!password) throw { err_msg: "password Harus Diisi" };

  await createAuthUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("user signed up !");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      throw error;
    });

  const data = {
    email,
    ...additionalInformation,
  };
  const userRef = doc(db, "users", `${npm}`);
  await setDoc(userRef, data);
  const token = jwt.sign(email, "test");
  return { token };
};

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
  if (req.method === "POST") {
    if (req?.body) {
      try {
        const newUser = await signUp(req.body);
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
