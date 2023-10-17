import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SignupItem from "./SignupItem";

export const metadata = {
  title: "signup",
};

export default async function Signup() {
  let session = await getServerSession(authOptions);
  let email = session?.user?.email ?? "";
  let name = session?.user?.name ?? "";
  let tel = session?.user?.tel ?? "";
  if (session != null) {
    redirect("/");
  }
  return (
    <>
      <SignupItem email={email} nameValue={name} />
    </>
  );
}
