import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/config";
import { LoginForm } from "./LoginPage";
import { redirect } from "next/navigation";

const SignIn = async () => {
  const session = await getServerSession(authOptions);

  console.log("session");
  console.log(session);

  if (session) {
    console.log("I am into the Singin page");

    return redirect("/");
  }

  return <LoginForm />;
};

export default SignIn;
