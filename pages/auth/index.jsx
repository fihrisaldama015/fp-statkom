import { useRouter } from "next/router";

const Auth = () => {
  const router = useRouter();
  router.push("/auth/login");
};

export default Auth;
