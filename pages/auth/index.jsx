import { useRouter } from "next/router";
import { useEffect } from "react";

const Auth = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/auth/login");
  }, []);
};

export default Auth;
