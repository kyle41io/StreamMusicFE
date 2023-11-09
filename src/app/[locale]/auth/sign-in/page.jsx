'use client'

import SignIn from "@/components/auth/sign-in/SignIn";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const router = useRouter();

  if (localStorage.getItem('token')) {
    router.push('/home')
  }

  return <SignIn />;
};

export default SignInPage;
