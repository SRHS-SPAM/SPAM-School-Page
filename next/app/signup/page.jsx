import Seo from "@/components/Seo";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import SignupItem from "./SignupItem";

export default async function Signup() {
  let session = await getServerSession(authOptions);
  let email = session?.user?.email ?? "";
  let name = session?.user?.name ?? "";
  return (
    <>
      <Seo title="Signup" />
      <SignupItem email={email} nameValue={name} />
    </>
  );
}
